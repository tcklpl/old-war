import {Country} from "../country";
import {Party} from "./party";

class ONU extends Party {
	constructor(start: Array<Country>) {
		super('ONU', 'ONU', start);
	}
}

export {ONU};