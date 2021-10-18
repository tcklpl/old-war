import { Socket } from "socket.io";
import { GameRequest } from "./request";

interface GameRequestResponse {
    request_uuid: string;
    response: string;
}

class GameRequestHandler {
    private requests: Map<string, GameRequest> = new Map();

    constructor() {

    }

    sendGameRequest(request: GameRequest, socket: Socket): void {
        this.requests.set(request.uuid, request);
        socket.emit("game request", request.getAsJson());
    }

    acceptRequestResponse(response: string): void {
        let res: GameRequestResponse = JSON.parse(response);
        if (res == undefined) {
            throw "Bad Response";
        }
        if (!this.requests.has(res.request_uuid)) {
            throw "Invalid Request";
        }
        this.requests.get(res.request_uuid)?.accept(res.response);
    }

}

export { GameRequestHandler }