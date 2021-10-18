import {Country} from "../country";
import {Party} from "./party";

class Piratas extends Party {
	
	private karens: number = 0;

	constructor(start: Array<Country>) {
		super('PRT', 'Piratas', start);
	}

	checkForWin(): boolean {
		return this.karens >= 100;
	}

	roundStartActions(): void {
		throw new Error("Method not implemented.");
	}

	turnStartActions(): void {
		throw new Error("Method not implemented.");
	}
	
}

export {Piratas};