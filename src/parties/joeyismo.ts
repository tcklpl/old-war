import {Country} from "../country";
import {Party} from "./party";

class Joeyismo extends Party {
	constructor(start: Array<Country>) {
		super('JEY', 'Joeyismo', start);
	}
}

export {Joeyismo};