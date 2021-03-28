import {Country} from "../country";

abstract class Party {
	abbreviation: string;
	name: string;
	start: Array<Country>;
	disp: boolean;
	available_starts: number;
	constructor(abbreviation: string, name: string, start: Array<Country>) {
		this.abbreviation = abbreviation;
		this.name = name;
		this.start = start;
		this.disp = true;
		this.available_starts = start == null ? 1 : start.length;
	}
}

export {Party};