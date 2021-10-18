import { game } from "./game";
import { GameParty } from "./game_parties";

class GameCountry {

    code: string;
    name: string;

    occupyingParty: GameParty | null = null;
    mapAreas: JQuery<HTMLElement>[] = [];
    canvas: JQuery<HTMLCanvasElement>;

    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
        this.canvas = $(`<canvas width='${game.gameMap.width}' height='${game.gameMap.height}' style='position: absolute; z-index: 2; pointer-events: none;'></canvas>`);
    }

    private generateAreaTagFromCoords(coords: number[]): string {
        return `<area shape="poly" alt="" coords="${coords.join()}" href="#" onClick="game.inputCountry('${this.code}');" data-country="${this.code}">`;
    }

    private getCanvasContext(): CanvasRenderingContext2D | null {
        return this.canvas.get(0).getContext("2d");
    }

    private drawCanvasPath(path: number[]): void {
        if (!this.canvas) {
            console.error('Canvas not found while trying to draw for ' + this.code);
            return;
        }
        if (path.length % 2 == 1) {
            console.error('Failed to draw odd-numbered canvas path for ' + this.code);
            return;
        }

        let canvasContext = this.getCanvasContext();
        canvasContext?.beginPath();

        for (let i = 0; i < path.length; i += 2) {
            i === 0 ? canvasContext?.moveTo(path[0], path[1]) : canvasContext?.lineTo(path[i], path[i + 1]);
        }

        canvasContext?.closePath();
    }

    generateCanvas(): void {
        let gameMapCoords = game.gameMap.coords.get(this.code);
        if (!gameMapCoords) {
            console.error("No game map coords for '"  + this.code + "'");
            return;
        }

        if (typeof gameMapCoords[0] === "number") {
            this.mapAreas.push($(this.generateAreaTagFromCoords(gameMapCoords as number[])));
            this.drawCanvasPath(gameMapCoords as number[]);
        } else {
            if (typeof gameMapCoords[0][0] === "number") {
                gameMapCoords.forEach(gmc => {
                    this.mapAreas.push($(this.generateAreaTagFromCoords(gmc as number[])));
                    this.drawCanvasPath(gmc as number[]);
                });
            } else {
                console.error(`Failed to get innerlist of ${this.code}, found '${typeof gameMapCoords[0][0]}'`);
                return;
            }
        }
    }

    paint(color: string): void {
        let ctx = this.getCanvasContext();
        if (!ctx) return;
        ctx.clearRect(0, 0, game.gameMap.width, game.gameMap.height);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.5;
        ctx.fill();
    }
}

class GameCountryManager {

    countries: Map<string, GameCountry> = new Map([
        ['BR', new GameCountry('BR', 'Brasil')],
        ['VN', new GameCountry('VN', 'Venezuela')],
        ['PR', new GameCountry('PR', 'Peru')],
        ['AR', new GameCountry('AR', 'Argentina')],
        ['MX', new GameCountry('MX', 'México')],
        ['CB', new GameCountry('CB', 'Cuba')],
        ['NY', new GameCountry('NY', 'New York')],
        ['CA', new GameCountry('CA', 'Califórnia')],
        ['LB', new GameCountry('LB', 'Labrador')],
        ['OT', new GameCountry('OT', 'Ottawa')],
        ['VC', new GameCountry('VC', 'Vancouver')],
        ['MC', new GameCountry('MC', 'Mackenzie')],
        ['AL', new GameCountry('AL', 'Alaska')],
        ['GL', new GameCountry('GL', 'Groenlândia')],
        ['IS', new GameCountry('IS', 'Islândia')],
        ['IN', new GameCountry('IN', 'Inglaterra')],
        ['FR', new GameCountry('FR', 'França')],
        ['GE', new GameCountry('GE', 'Alemanha')],
        ['PL', new GameCountry('PL', 'Polônia')],
        ['MW', new GameCountry('MW', 'Moscow')],
        ['SC', new GameCountry('SC', 'Suécia')],
        ['AG', new GameCountry('AG', 'Argélia')],
        ['EG', new GameCountry('EG', 'Egito')],
        ['SD', new GameCountry('SD', 'Sudão')],
        ['CG', new GameCountry('CG', 'Congo')],
        ['AS', new GameCountry('AS', 'África do sul')],
        ['MG', new GameCountry('MG', 'Madagascar')],
        ['OM', new GameCountry('OM', 'Oriente médio')],
        ['ID', new GameCountry('ID', 'Índia')],
        ['VT', new GameCountry('VT', 'Vietnam')],
        ['CN', new GameCountry('CN', 'China')],
        ['MO', new GameCountry('MO', 'Mongólia')],
        ['RL', new GameCountry('RL', 'Aral')],
        ['OK', new GameCountry('OK', 'Ornsk')],
        ['DU', new GameCountry('DU', 'Dudinka')],
        ['TH', new GameCountry('TH', 'Tchita')],
        ['VD', new GameCountry('VD', 'Vladvostok')],
        ['SB', new GameCountry('SB', 'Sibéria')],
        ['JP', new GameCountry('JP', 'Japão')],
        ['SM', new GameCountry('SM', 'Sumatra')],
        ['NG', new GameCountry('NG', 'Nova Guinea')],
        ['AU', new GameCountry('AU', 'Austrália')],
        ['BO', new GameCountry('BO', 'Bornea')],
        ['OR', new GameCountry('OR', 'Oceano Ártico')],
        ['OP', new GameCountry('OP', 'Oceano Pacífico')],
        ['OA', new GameCountry('OA', 'Oceano Atlântico')],
        ['OI', new GameCountry('OI', 'Oceano Índico')]
    ]);

    constructor() {
        this.generateMapAreasAndAppendToDOM();
    }

    private generateMapAreasAndAppendToDOM(): void {

        let mapDom = $('#global_map');
        let canvasDom = $('#all_color_canvas');

        this.countries.forEach(c => {
            c.generateCanvas();
            c.mapAreas.forEach(ce => ce.appendTo(mapDom));
            c.canvas.appendTo(canvasDom);
        });

    }

}

export { GameCountry, GameCountryManager }