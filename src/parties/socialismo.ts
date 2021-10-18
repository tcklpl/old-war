import {Country} from "../country";
import {Party} from "./party";

class Socialismo extends Party {
	constructor(start: Array<Country>) {
		super('SCL', 'Socialismo', start);
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

export {Socialismo};