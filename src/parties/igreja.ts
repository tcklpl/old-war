import {Country} from "../country";
import {Party} from "./party";

class Igreja extends Party {
	constructor(start: Array<Country>) {
		super('CAT', 'Igreja Católica', start);
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

export {Igreja};