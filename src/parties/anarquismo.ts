import {Country} from "../country";
import {Party} from "./party";

class Anarquismo extends Party {
	constructor(start: Array<Country>) {
		super('ANQ', 'Anarquismo', start);
	}
}

export {Anarquismo};