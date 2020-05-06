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

LOGGER = logging.getLogger(__name__)

K8S_NAMESPACE = "default"
NUM_BYTES_FOR_TOKEN_GENERATOR = 16
TOKEN_MAX_LENGTH = 24


class _GameManagerData(object):
    """This class is thread safe"""

    def __init__(self):
        self._games = set()
        self._lock = Semaphore()

    def _add_game(self, game_id):
        assert self._lock.locked
        self._games.add(game_id)

    def _remove_game(self, game_id):
        assert self._lock.locked
        self._games.remove(game_id)

    def add_new_games(self, all_games):
        with self._lock:
            new_games = frozenset(all_games) - self._games
            for n in new_games:
                self._add_game(n)
            return new_games

    def remove_unknown_games(self, known_games):
        with self._lock:
            unknown_games = self._games - frozenset(known_games)
            for u in unknown_games:
                self._remove_game(u)
            return unknown_games

    def remove_stopped_games(self, stopped_games):
        with self._lock:
            for s in stopped_games:
                self._remove_game(s)
            return stopped_games

    def get_games(self):
        with self._lock:
            for g in self._games:
                yield g


class GameStatus(Enum):
    RUNNING = "r"
    PAUSED = "p"
    STOPPED = "s"


class GameManager(object):
    """Methods of this class must be thread safe unless explicitly stated"""

    __metaclass__ = ABCMeta
    daemon = True

    def __init__(self, games_url):
        self._data = _GameManagerData()
        self.games_url = games_url
        super(GameManager, self).__init__()

    def _generate_game_token(self):
        token = secrets.token_urlsafe(nbytes=NUM_BYTES_FOR_TOKEN_GENERATOR)
        # Max length of the auth_token field in the models
        token = token[:TOKEN_MAX_LENGTH] if len(token) > TOKEN_MAX_LENGTH else token
        return token

    @abstractmethod
    def create_game(self, game_id, game_data):
        """Creates a new game"""

        raise NotImplementedError

    @abstractmethod
    def delete_game(self, game_id):
        """Deletes the given game"""

        raise NotImplementedError

    def recreate_game(self, game_to_add):
        """Deletes and recreates the given game"""
        game_id, game_data = game_to_add
        LOGGER.info("Deleting game {}".format(game_data["name"]))
        try:
            self.delete_game(game_id)
        except Exception as ex:
            LOGGER.error("Failed to delete game {}".format(game_data["name"]))
            LOGGER.exception(ex)

        LOGGER.info("Recreating game {}".format(game_data["name"]))
        try:
            game_data["GAME_API_URL"] = "{}{}/".format(self.games_url, game_id)
            self.create_game(game_id, game_data)
        except Exception as ex:
            LOGGER.error("Failed to create game {}".format(game_data["name"]))
            LOGGER.exception(ex)

    def update(self):
        try:
            LOGGER.info("Waking up")
            games = requests.get(self.games_url).json()
            LOGGER.debug(f"Received Games: {games}")
        except (requests.RequestException, ValueError) as ex:
            LOGGER.error("Failed to obtain game data")
            LOGGER.exception(ex)
        else:
            games_to_add = {
                id: games[id]
                for id in self._data.add_new_games(games)
                if games[id]["status"] != GameStatus.STOPPED.value
            }

            # Add missing games
            self._parallel_map(self.recreate_game, games_to_add.items())
            # Delete extra games
            known_games = set(games.keys())
            stopped_games = set(
                id
                for id in games.keys()
                if games[id]["status"] == GameStatus.STOPPED.value
            )
            removed_game_ids = self._data.remove_unknown_games(known_games).union(
                self._data.remove_stopped_games(stopped_games)
            )
            self._parallel_map(self.delete_game, removed_game_ids)

    def get_persistent_state(self, player_id):
        """Get the persistent state of a game"""

        return None

    def run(self):
        while True:
            self.update()
            LOGGER.info("Sleeping")
            time.sleep(10)

    def _parallel_map(self, func, iterable_args):
        with futures.ThreadPoolExecutor() as executor:
            _ = executor.map(func, iterable_args)
