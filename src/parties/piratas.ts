import {Country} from "../country";
import {Party} from "./party";

class Piratas extends Party {
	constructor(start: Array<Country>) {
		super('PRT', 'Piratas', start);
	}
}

export {Piratas};