var Party = require('./party');

class Vikings extends Party {
	constructor(start) {
		super('VKG', 'Vikings', start);
	}
}

module.exports = Vikings;