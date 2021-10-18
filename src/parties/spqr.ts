import {Country} from "../country";
import {Party} from "./party";

class SPQR extends Party {
	constructor(start: Array<Country>) {
		super('SQR', 'SPQR', start);
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

export {SPQR};