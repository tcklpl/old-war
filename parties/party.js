class Party {
	constructor(abbreviation, name, start) {
		this.abbreviation = abbreviation;
		this.name = name;
		this.start = start;
		this.disp = true;
		this.available_starts = start == null ? 1 : start.length;
	}
}

module.exports = Party;