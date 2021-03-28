import {Country} from "../country";
import {Party} from "./party";

class Fascismo extends Party {
	constructor(start: Array<Country>) {
		super('FSC', 'Fascismo', start);
	}
}

export {Fascismo};