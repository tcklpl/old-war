var Party = require('./party');

class Piratas extends Party {
	constructor(start) {
		super('PRT', 'Piratas', start);
	}
}

module.exports = Piratas;