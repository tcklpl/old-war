import {Country} from "../country";
import {Party} from "./party";

class Igreja extends Party {
	constructor(start: Array<Country>) {
		super('CAT', 'Igreja Católica', start);
	}
}

export {Igreja};