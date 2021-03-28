import {Country} from "../country";
import {Party} from "./party";

class ISIS extends Party {
	constructor(start: Array<Country>) {
		super('ISI', 'ISIS', start);
	}
}

export {ISIS};