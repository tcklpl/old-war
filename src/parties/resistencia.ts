import {Country} from "../country";
import {Party} from "./party";

class ResistĂȘncia extends Party {
	constructor(start: Array<Country>) {
		super('RST', 'ResistĂȘncia', start);
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

export {ResistĂȘncia};