var Party = require('./party');

class ONU extends Party {
	constructor(start) {
		super('ONU', 'ONU', start);
	}
}

module.exports = ONU;