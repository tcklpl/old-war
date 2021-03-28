import {Country} from "../country";
import {Party} from "./party";

class Capitalismo extends Party {
	constructor(start: Array<Country>) {
		super('CTL', 'Capitalismo', start);
	}
}

export {Capitalismo};