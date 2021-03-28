import {Country} from "../country";
import {Party} from "./party";

class Feudalismo extends Party {
	constructor(start: Array<Country>) {
		super('FDL', 'Feudalismo', start);
	}
}

export {Feudalismo};