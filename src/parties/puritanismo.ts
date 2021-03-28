import {Country} from "../country";
import {Party} from "./party";

class Puritanismo extends Party {
	constructor(start: Array<Country>) {
		super('PTN', 'Puritanismo', start);
	}
}

export {Puritanismo};