class Player {
    constructor(name, uuid, socket) {
        this.name = name;
        this.uuid = uuid;
        this.socket = socket;
		this.party = null;
    }
}

module.exports = Player;