import {Country} from "../country";
import {Party} from "./party";

class Vikings extends Party {
	constructor(start: Array<Country>) {
		super('VKG', 'Vikings', start);
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

export {Vikings};