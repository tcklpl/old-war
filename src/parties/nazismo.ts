import {Country} from "../country";
import {Party} from "./party";

class Nazismo extends Party {
	constructor(start: Array<Country>) {
		super('NZI', 'Nazismo', start);
	}
}

export {Nazismo};