import { GameConnection } from "./game_connection";
import { GameRoom } from "./game_room";
import { GamePartyManager } from "./game_parties";
import { PageLoader } from "./page_loading";
import { GameMouse } from "./mouse";
import { GameCountryManager } from "./game_countries";

enum GameState {
    NONE, LOBBY, INGAME
}

class Game {

    pageLoader: PageLoader = new PageLoader();

    connection: GameConnection = new GameConnection();
    gameRoom: GameRoom = new GameRoom(this, this.connection);
    gameMap: GameMap = new GameMap();
    partyManager: GamePartyManager = new GamePartyManager();
    countryManager: GameCountryManager = new GameCountryManager();
    state: GameState = GameState.NONE;

    playerName!: string;
    mouse: GameMouse = new GameMouse();

    inputCountry(code: string) {
        console.log("CLICOU: " + code);
    }
}

export { Game, GameState }

// public game object to be used everywhere
export const game: Game = new Game();