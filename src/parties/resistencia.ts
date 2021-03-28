import {Country} from "../country";
import {Party} from "./party";

class Resistência extends Party {
	constructor(start: Array<Country>) {
		super('RST', 'Resistência', start);
	}
}

export {Resistência};