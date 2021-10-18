import { MutuallyExclusiveCallback } from "./callbacks/mut_exclusive_callback";
import { game, Game } from "./game";
import { GameConnection } from "./game_connection"
import { lobbyUI } from "./ui/ui";

class GameRoom {

    private game: Game;
    private connection: GameConnection;
    private currentlyInRoom: boolean = false;

    constructor(game: Game, connection: GameConnection) {
        this.game = game;
        this.connection = connection;
    }

    get inRoom(): boolean {
        return this.currentlyInRoom;
    }

    join(room: string, pass: string, playerName: string): void {

        const callback: MutuallyExclusiveCallback = new MutuallyExclusiveCallback(
            'join success', (name, joinedRoom) => {
                game.playerName = name;
                lobbyUI.clearLobbyLog();
                lobbyUI.setRoomSelectionScreen(false);
                lobbyUI.setLobby(true, joinedRoom, false);
            }, 'join error', (errorMsg) => {
                // TODO: show error
                console.log('failed to join room');
            },
        1);
        
        this.connection.registerMutuallyExclusiveCallback(callback, 'join success', 'join error');
        this.connection.emit('join room', room, pass, playerName);

    }

    create(room: string, pass: string, playerName: string): void {

        const callback: MutuallyExclusiveCallback = new MutuallyExclusiveCallback(
            'join success', (name, joinedRoom) => {
                game.playerName = name;
                lobbyUI.clearLobbyLog();
                lobbyUI.setRoomSelectionScreen(false);
                lobbyUI.setLobby(true, joinedRoom, true);
            }, 'create error', (errorMsg) => {
                // TODO: show error
                console.log('failed to create room: ' + errorMsg);
            },
        1);
        
        this.connection.registerMutuallyExclusiveCallback(callback, 'join success', 'create error');
        this.connection.emit('create room', room, pass, playerName);
    }

    leave(): void {
        this.connection.emit('lobby leave');
        lobbyUI.setLobby(false, "", false);
        lobbyUI.clearLobbyLog();
        lobbyUI.setRoomSelectionScreen(true);
    }


}

export { GameRoom }