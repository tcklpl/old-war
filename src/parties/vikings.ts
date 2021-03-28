import {Country} from "../country";
import {Party} from "./party";

class Vikings extends Party {
	constructor(start: Array<Country>) {
		super('VKG', 'Vikings', start);
	}
}

export {Vikings};