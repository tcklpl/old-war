var Party = require('./party');

class Zumbis extends Party {
	constructor(start) {
		super('ZMB', 'Zumbis', start);
	}
}

module.exports = Zumbis;