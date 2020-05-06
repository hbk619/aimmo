import json
import logging
import os
import secrets
import subprocess
import time
from abc import ABCMeta, abstractmethod
from base64 import b64encode
from concurrent import futures
from concurrent.futures import ALL_COMPLETED
from enum import Enum

import docker
import kubernetes
import requests
from eventlet.semaphore import Semaphore
from kube_components import TokenSecretCreator
from kubernetes.client.rest import ApiException

from _game_manager import GameManager

K8S_NAMESPACE = "default"
LOGGER = logging.getLogger(__name__)


class KubernetesGameManager(GameManager):
    """Manages games running on Kubernetes cluster"""

    def __init__(self, *args, **kwargs):
        kubernetes.config.load_incluster_config()
        self.extension_api = kubernetes.client.ExtensionsV1beta1Api()
        self.api = kubernetes.client.CoreV1Api()
        self.secret_creator = TokenSecretCreator()

        super(KubernetesGameManager, self).__init__(*args, **kwargs)
        self._create_ingress_paths_for_existing_games()

    def _create_ingress_paths_for_existing_games(self):
        games = self._data.get_games()
        for game_id in games:
            self._add_path_to_ingress(game_id)

    @staticmethod
    def _create_game_name(game_id):
        """
        Creates a name that will be used as the pod name as well as in other places.
        :param game_id: Integer indicating the GAME_ID of the game.
        :return: A string with the game appended with the id.
        """
        return "game-{}".format(game_id)

    def _make_rc(self, environment_variables, game_id, is_minikube):
        container = kubernetes.client.V1Container(
            env=[
                kubernetes.client.V1EnvVar(name=env_name, value=env_value)
                for env_name, env_value in environment_variables.items()
            ]
            + [
                kubernetes.client.V1EnvVar(
                    name="POD_NAME",
                    value_from=kubernetes.client.V1EnvVarSource(
                        field_ref=kubernetes.client.V1ObjectFieldSelector(
                            field_path="metadata.name"
                        )
                    ),
                )
            ],
            image="ocadotechnology/aimmo-game:{}".format(
                os.environ.get("IMAGE_SUFFIX", "latest")
            ),
            image_pull_policy="Never" if is_minikube else "Always",
            ports=[kubernetes.client.V1ContainerPort(container_port=5000)],
            name="aimmo-game",
            resources=kubernetes.client.V1ResourceRequirements(
                limits={"cpu": "95m", "memory": "128Mi"},
                requests={"cpu": "24m", "memory": "64Mi"},
            ),
            security_context=kubernetes.client.V1SecurityContext(
                capabilities=kubernetes.client.V1Capabilities(
                    drop=["all"], add=["NET_BIND_SERVICE"]
                )
            ),
        )

        pod_manifest = kubernetes.client.V1PodSpec(
            containers=[container], service_account_name="worker-manager"
        )
        pod_metadata = kubernetes.client.V1ObjectMeta(
            labels={"app": "aimmo-game", "game_id": game_id},
            annotations={
                "prometheus.io/scrape": "true",
                "prometheus.io/port": "8080",
                "prometheus.io/path": "/metrics",
            },
        )
        pod_template_manifest = kubernetes.client.V1PodTemplateSpec(
            spec=pod_manifest, metadata=pod_metadata
        )

        rc_manifest = kubernetes.client.V1ReplicationControllerSpec(
            template=pod_template_manifest,
            selector={"app": "aimmo-game", "game_id": game_id},
            replicas=1,
        )

        rc_metadata = kubernetes.client.V1ObjectMeta(
            name=KubernetesGameManager._create_game_name(game_id),
            namespace=K8S_NAMESPACE,
            labels={"app": "aimmo-game", "game_id": game_id},
        )

        return kubernetes.client.V1ReplicationController(
            spec=rc_manifest, metadata=rc_metadata
        )

    def _create_game_rc(self, game_id, environment_variables, is_minikube):
        environment_variables[
            "SOCKETIO_RESOURCE"
        ] = KubernetesGameManager._create_game_name(game_id)
        environment_variables["GAME_ID"] = game_id
        environment_variables["GAME_URL"] = "http://game-{}".format(game_id)
        environment_variables["IMAGE_SUFFIX"] = os.environ.get("IMAGE_SUFFIX", "latest")
        environment_variables["K8S_NAMESPACE"] = K8S_NAMESPACE
        environment_variables["WORKER"] = "kubernetes"
        environment_variables["EXTERNAL_PORT"] = "5000"

        rc = self._make_rc(environment_variables, game_id, is_minikube)
        self.api.create_namespaced_replication_controller(K8S_NAMESPACE, rc)

    def _make_service(self, game_id):
        service_manifest = kubernetes.client.V1ServiceSpec(
            selector={"app": "aimmo-game", "game_id": game_id},
            ports=[
                kubernetes.client.V1ServicePort(
                    name="tcp", protocol="TCP", port=80, target_port=5000
                )
            ],
            type="NodePort",
        )

        service_metadata = kubernetes.client.V1ObjectMeta(
            name=KubernetesGameManager._create_game_name(game_id),
            labels={"app": "aimmo-game", "game_id": game_id},
        )

        return kubernetes.client.V1Service(
            metadata=service_metadata, spec=service_manifest
        )

    def _create_game_service(self, game_id):
        service = self._make_service(game_id)
        self.api.create_namespaced_service(K8S_NAMESPACE, service)

    def _create_game_secret(self, game_id):
        name = KubernetesGameManager._create_game_name(game_id) + "-token"
        try:
            secret = self.api.read_namespaced_secret(name, K8S_NAMESPACE)
        except ApiException:
            data = {"token": self._generate_game_token()}
            self.secret_creator.create_secret(name, K8S_NAMESPACE, data)

    def _add_path_to_ingress(self, game_id):
        backend = kubernetes.client.V1beta1IngressBackend(
            KubernetesGameManager._create_game_name(game_id), 80
        )
        path = kubernetes.client.V1beta1HTTPIngressPath(
            backend, "/{}".format(KubernetesGameManager._create_game_name(game_id))
        )

        patch = [{"op": "add", "path": "/spec/rules/0/http/paths/-", "value": path}]

        self.extension_api.patch_namespaced_ingress("aimmo-ingress", "default", patch)

    def _remove_path_from_ingress(self, game_id):
        backend = kubernetes.client.V1beta1IngressBackend(
            KubernetesGameManager._create_game_name(game_id), 80
        )
        path = kubernetes.client.V1beta1HTTPIngressPath(
            backend, "/{}".format(KubernetesGameManager._create_game_name(game_id))
        )
        ingress = self.extension_api.list_namespaced_ingress("default").items[0]
        paths = ingress.spec.rules[0].http.paths
        try:
            index_to_delete = paths.index(path)
        except ValueError:
            return

        patch = [
            {
                "op": "remove",
                "path": "/spec/rules/0/http/paths/{}".format(index_to_delete),
            }
        ]

        self.extension_api.patch_namespaced_ingress("aimmo-ingress", "default", patch)

    def _remove_resources(self, game_id, resource_type):
        resource_functions = {
            "Pod": (self.api.list_namespaced_pod, self.api.delete_namespaced_pod),
            "ReplicationController": (
                self.api.list_namespaced_replication_controller,
                self.api.delete_namespaced_replication_controller,
            ),
            "Service": (
                self.api.list_namespaced_service,
                self.api.delete_namespaced_service,
            ),
            "Secret": (
                self.api.list_namespaced_secret,
                self.api.delete_namespaced_secret,
            ),
        }

        list_resource_function, delete_resource_function = resource_functions[
            resource_type
        ]

        app_label = "app=aimmo-game"
        game_label = "game_id={}".format(game_id)

        resources = list_resource_function(
            namespace=K8S_NAMESPACE, label_selector=",".join([app_label, game_label])
        )

        for resource in resources.items:
            LOGGER.info("Removing: {}".format(resource.metadata.name))
            delete_resource_function(resource.metadata.name, K8S_NAMESPACE)

    def create_game(self, game_id, game_data):
        is_minikube = "USING_MINIKUBE" in os.environ

        self._create_game_secret(game_id)
        self._create_game_service(game_id)
        self._create_game_rc(game_id, game_data, is_minikube)
        self._add_path_to_ingress(game_id)
        LOGGER.info("Game started - {}".format(game_id))

    def delete_game(self, game_id):
        self._remove_path_from_ingress(game_id)
        self._remove_resources(game_id, "ReplicationController")
        self._remove_resources(game_id, "Pod")
        self._remove_resources(game_id, "Service")
        self._remove_resources(game_id, "Secret")
