const PlayerState = {
    IDLE: 'PlayerState$Idle',
    SELECTING: 'PlayerState$Selecting'
}

class Player {
    constructor(name, socket) {
        this.name = name;
        this.socket = socket;
		this.party = null;
        this.state = PlayerState.IDLE;
    }
}

module.exports = {Player, PlayerState};