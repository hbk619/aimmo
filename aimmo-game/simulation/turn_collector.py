import logging
from typing import TYPE_CHECKING, Dict
from dataclasses import dataclass, field
from aiohttp.web import RouteTableDef

LOGGER = logging.getLogger(__name__)

if TYPE_CHECKING:
    from socketio import AsyncServer
    from aiohttp.web import Application

@dataclass
class CollectedTurnActions:
    turn_number: int
    player_id_to_actions: Dict[int, object] = field(default_factory=dict)

class TurnCollector:

    def __init__(self, socketio_server: "AsyncServer", application: "Application"):
        # LOGGER.info("this got worked on here")
        self.socketio_server: "AsyncServer" = socketio_server
        self.application = application
        self.register_action_received_event()
    
    def new_turn(self, turn_number):
        LOGGER.info("a new turn has started in the turn_collector")
        self.collected_turn = CollectedTurnActions(turn_number)

    def register_action_received_event(self):
        @self.socketio_server.on("action")
        async def action_received(sid, data):
            session_data = await self.socketio_server.get_session(sid)
            player_id = session_data["id"]
            # LOGGER.info(f"action_received and it was: {data} of type {type(data)}")
            self.collected_turn.player_id_to_actions[player_id] = data

        return action_received
    
