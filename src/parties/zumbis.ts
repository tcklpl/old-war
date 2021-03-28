import {Country} from "../country";
import {Party} from "./party";

class Zumbis extends Party {
	constructor(start: Array<Country>) {
		super('ZMB', 'Zumbis', start);
	}
}

export {Zumbis};