import { Socket } from "socket.io";
import { Party } from "./parties/party";

enum PlayerState {
    IDLE,
    SELECTING
}

class Player {
    name: string;
    socket: Socket;
    state: PlayerState;
    party: Party | null;

    constructor(name: string, socket: Socket) {
        this.name = name;
        this.socket = socket;
		this.party = null;
        this.state = PlayerState.IDLE;
    }
}

export {Player, PlayerState};