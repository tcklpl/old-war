var Party = require('./party');

class Igreja extends Party {
	constructor(start) {
		super('CAT', 'Igreja Católica', start);
	}
}

module.exports = Igreja;