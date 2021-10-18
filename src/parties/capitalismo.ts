import {Country} from "../country";
import {Party} from "./party";

class Capitalismo extends Party {
	constructor(start: Array<Country>) {
		super('CTL', 'Capitalismo', start);
	}

	checkForWin(): boolean {
		throw new Error("Method not implemented.");
	}

	roundStartActions(): void {
		throw new Error("Method not implemented.");
	}
	
	turnStartActions(): void {
		throw new Error("Method not implemented.");
	}
}

export {Capitalismo};