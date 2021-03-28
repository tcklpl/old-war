import {Country} from "../country";
import {Party} from "./party";

class Socialismo extends Party {
	constructor(start: Array<Country>) {
		super('SCL', 'Socialismo', start);
	}
}

export {Socialismo};