import {Country} from "../country";
import {Party} from "./party";

class SPQR extends Party {
	constructor(start: Array<Country>) {
		super('SQR', 'SPQR', start);
	}
}

export {SPQR};