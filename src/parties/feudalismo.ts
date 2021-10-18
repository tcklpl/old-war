import {Country} from "../country";
import {Party} from "./party";

class Feudalismo extends Party {
	constructor(start: Array<Country>) {
		super('FDL', 'Feudalismo', start);
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

export {Feudalismo};