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
from kubernetes_game_manager import KubernetesGameManager

LOGGER = logging.getLogger(__name__)


class LocalGameManager(GameManager):
    """Manages games running on local host"""

    host = os.environ.get("LOCALHOST_IP", "127.0.0.1")
    game_directory = os.path.join(os.path.dirname(__file__), "../aimmo-game/")
    game_service_path = os.path.join(game_directory, "service.py")

    def __init__(self, *args, **kwargs):
        self.games = {}
        with open("/tokens/local_tokens.json", "r") as file:
            self.tokens = json.loads(file.read())

        super(LocalGameManager, self).__init__(*args, **kwargs)

    def create_game(self, game_id, game_data):
        def setup_container_environment_variables(template, game_data):
            template["environment"].update(game_data)
            template["environment"]["GAME_ID"] = game_id
            template["environment"]["PYTHONUNBUFFERED"] = 0
            template["environment"]["WORKER"] = "local"
            template["environment"]["EXTERNAL_PORT"] = port
            template["environment"]["CONTAINER_TEMPLATE"] = os.environ[
                "CONTAINER_TEMPLATE"
            ]

        assert game_id not in self.games
        port = str(6001 + int(game_id) * 1000)
        client = docker.from_env()

        self.check_token(game_id)
        template = json.loads(os.environ.get("CONTAINER_TEMPLATE", "{}"))
        template["environment"]["TOKEN"] = self.tokens[game_id]
        setup_container_environment_variables(template, game_data)
        template["ports"] = {"{}/tcp".format(port): ("0.0.0.0", port)}

        self.games[game_id] = client.containers.run(
            name="aimmo-game-{}".format(game_id),
            image="ocadotechnology/aimmo-game:test",
            **template,
        )
        game_url = "http://{}:{}".format(self.host, port)
        LOGGER.info("Game started - {}, listening at {}".format(game_id, game_url))

    def delete_game(self, game_id):
        if game_id in self.games:
            client = docker.from_env()
            workers = client.containers.list(filters={"name": f"aimmo-{game_id}-"})
            for worker in workers:
                worker.remove(force=True)
            self.games[game_id].remove(force=True)
            del self.games[game_id]

    def check_token(self, game_id):
        try:
            if not self.tokens[game_id]:
                self.tokens[game_id] = self._generate_game_token()
        except KeyError:
            self.tokens[game_id] = ""

        with open("/tokens/local_tokens.json", "w+") as file:
            file.write(json.dumps(self.tokens))


GAME_MANAGERS = {"local": LocalGameManager, "kubernetes": KubernetesGameManager}
