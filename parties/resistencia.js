var Party = require('./party');

class Resistência extends Party {
	constructor(start) {
		super('RST', 'Resistência', start);
	}
}

module.exports = Resistência;