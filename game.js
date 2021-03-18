var Anarquismo = require('./parties/anarquismo');
var ISIS = require('./parties/isis');
var Feudalismo = require('./parties/feudalismo');
var Vikings = require('./parties/vikings');
var Zumbis = require('./parties/zumbis');
var ONU = require('./parties/onu');
var Piratas = require('./parties/piratas');
var Igreja = require('./parties/igreja');
var Nazismo = require('./parties/nazismo');
var Fascismo = require('./parties/fascismo');
var Joeyismo = require('./parties/joeyismo');
var SPQR = require('./parties/spqr');
var Resistência = require('./parties/resistencia');
var Socialismo = require('./parties/socialismo');
var Capitalismo = require('./parties/capitalismo');
var Puritanismo = require('./parties/puritanismo');
var defaults = require('./defaults');
var _ = require('lodash');

class Game {
    constructor(name, pass, owner) {
        this.name = name;
        this.pass = pass;
		this.owner = owner;
        this.ingame = false;
        this.players = [];
		this.map = defaults.countries();
		this.parties = [
            new Anarquismo(null),
            new ISIS(this.get_countries_by_code('OM')),
            new Feudalismo(this.get_countries_by_code('FR')),
            new Vikings(this.get_countries_by_code('SC', 'GL')),
            new Zumbis(null),
            new ONU(this.get_countries_by_code('NY')),
            new Piratas(this.get_countries_by_code('OP', 'OA', 'OI', 'OR', 'ON')),
            new Igreja(this.get_countries_by_code('FR')),
            new Nazismo(this.get_countries_by_code('GE')),
            new Fascismo(null),
            new Joeyismo(this.get_countries_by_code('BR')),
            new SPQR(this.get_countries_by_code('FR')),
            new Resistência(null),
            new Socialismo(this.get_countries_by_code('MW')),
            new Capitalismo(this.get_countries_by_code('CA')),
            new Puritanismo(this.get_countries_by_code('IN'))
        ];
		this.round = -1;
    }

    get_countries_by_code(...code) {
        var response = [];
        for (var j in this.map) {
            for (var i = 0; i < code.length; i++) {
                if (this.map[j].code == code[i])
                    response.push(this.map[j]);
            }
        }
        return response;
    }

	get_party_by_abbr(abbr) {
		for (var i in this.parties) {
			if (this.parties[i].abbreviation === abbr)
				return this.parties[i];
		}
		return null;
	}

	is_empty() {
		return this.players.length == 0;
	}

	can_start() {
		for (var i in this.players) {
			if (this.players[i].party == null)
				return false;
		}
		return true;
	}

	start() {
		// randomize player list
		this.players = this.players
			.map((a) => ({sort: Math.random(), value: a}))
			.sort((a, b) => a.sort - b.sort)
			.map((a) => a.value);
		this.broadcast('game play order', this.get_all_players_as_json());

		this.request_start_locations();
	}

	request_start_locations() {
		for (var i in this.players) {
			var party = this.players[i].party;
			var res = "[";
			for (var j in this.map) {
				var country = this.map[j];
				_.forEach(party.start, (s) => {
					console.log('checking ' + s.code + ' against ' + country.code + `${s.code == country.code}`);
				});
				if (party.start != null) {
					var selectable = false;
					_.forEach(party.start, (s) => {
						if (s.code == country.code)
							selectable = true;
					});
				}
				else
					var selectable = true;
				res += `{"country": "${country.code}", "selectable": ${selectable}}`;
				if (j != (this.map.length - 1))
					res += ",";
			}
			this.players[i].socket.emit('game select start', res + "]");
		}
	}

	broadcast(packet, ...info) {
		for (var p in this.players) {
			this.players[p].socket.emit(packet, info);
		}
	}

    add_player(player) {
        this.players.push(player);
		for (var p in this.players) {
			this.players[p].socket.emit('player joined', this.get_all_players_as_json(), player.name);
		}
    }

	remove_player(player) {
		this.players.splice(this.players.indexOf(player), 1);
		if (this.owner === player && !this.is_empty()) {
			this.owner = this.players[0];
			this.owner.socket.emit('lobby owner');
			this.broadcast('lobby write log', this.owner.name + ' é o novo dono do lobby');
		}
		for (var p in this.players) {
			this.players[p].socket.emit('player left', this.get_all_players_as_json(), player.name);
		}
    }

	contains_player(player) {
		for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].name == player) return true;
        }
		return false;
	} 

	get_player_per_socket(socket) {
		for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].socket === socket) return this.players[i];
        }
		return null;
	}

	get_all_players_as_json() {
		var response = "[";
		for (var i = 0; i < this.players.length; i++) {
			var party_response = this.players[i].party == null ? null : this.players[i].party.abbreviation; 
			response += `{"name": "${this.players[i].name}", "party": "${party_response}"}`;
			if (i != (this.players.length - 1))
				response += ',';
		}
		return response + "]";
	}

	get_all_parties_as_json() {
		var response = "[";
		for (var i = 0; i < this.parties.length; i++) {
			var party = this.parties[i];
			response += `{"abbreviation": "${party.abbreviation}", "name": "${party.name}", "disp": ${party.disp}}`;
			if (i != (this.parties.length - 1))
				response += ",";
		}
		return response + "]";
	}

	is_player_in_game(player) {
		for (var i in this.players) {
			if (this.players[i] === player) {
				return true;
			}
		}
		return false;
	}

	is_party_available(party) {
		var p = this.get_party_by_abbr(party);
		if (!p)
			throw "Civilização inválida";
		return p.disp;
	}

	update_parties_disponibility() {
		for (var i in this.parties) {
			this.parties[i].disp = true;
			this.parties[i].available_starts = this.parties[i].start == null ? 1 : this.parties[i].start.length;
		}
		for (var i in this.players) {
			if (this.players[i].party) {
				var player_party = this.players[i].party;
				player_party.disp = false;
				if (player_party.start) {

					for (var j in this.parties) {
						var other_party = this.parties[j];

						if (other_party.start) {
							for (var k in player_party.start) {
								for (var l in other_party.start) {
									if (player_party.start[k].name === other_party.start[l].name)
										other_party.available_starts -= 1;
								}
							}
						}

						if (other_party.available_starts <= 0)
							other_party.disp = false;
					}
				}
			}
		}
	}

	set_player_party(player, party) {
		if (!this.is_player_in_game(player))
			throw "Jogador não está no game requisitado";
		if (!this.is_party_available(party))
			throw "A civilização requisitada não está disponível";
		var p = this.get_party_by_abbr(party);
		player.party = p;
		this.update_parties_disponibility();
	}

	remove_player_from_current_party(player) {
		if (!this.is_player_in_game(player))
			throw "Jogador não está no game requisitado";
		if (player.party == null) return;
		player.party = null;
		this.update_parties_disponibility();
	}

	kick_player(player) {
		if (!this.is_player_in_game(player)) return;
		if (player.party != null) {
			this.remove_player_from_current_party(player);
			this.broadcast('lobby parties update', this.get_all_parties_as_json());
		}
		this.remove_player(player);
	}
}

module.exports = Game;