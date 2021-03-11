const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

//#region Game Class
class Game {
    constructor(name, pass, owner) {
        this.name = name;
        this.pass = pass;
		this.owner = owner;
        this.ingame = false; 
        this.players = []; 
		this.map = { 
			BR: {name: "Brasil"          , type: "ground", info: {party: null, ground_units: 0}},
			VN: {name: "Venezuela"       , type: "ground", info: {party: null, ground_units: 0}},
			PR: {name: "Peru"            , type: "ground", info: {party: null, ground_units: 0}},
			AR: {name: "Argentina"       , type: "ground", info: {party: null, ground_units: 0}},
			MX: {name: "México"          , type: "ground", info: {party: null, ground_units: 0}},
			CB: {name: "Cuba"            , type: "ground", info: {party: null, ground_units: 0}},
			NY: {name: "New York"        , type: "ground", info: {party: null, ground_units: 0}},
			CA: {name: "Califórnia"      , type: "ground", info: {party: null, ground_units: 0}},
			LB: {name: "Labrador"        , type: "ground", info: {party: null, ground_units: 0}},
			OT: {name: "Ottawa"          , type: "ground", info: {party: null, ground_units: 0}},
			VC: {name: "Vancouver"       , type: "ground", info: {party: null, ground_units: 0}},
			MC: {name: "Mackenzie"       , type: "ground", info: {party: null, ground_units: 0}},
			AL: {name: "Alaska"          , type: "ground", info: {party: null, ground_units: 0}},
			GL: {name: "Groenlândia"     , type: "ground", info: {party: null, ground_units: 0}},
			IS: {name: "Islândia"        , type: "ground", info: {party: null, ground_units: 0}},
			IN: {name: "Inglaterra"      , type: "ground", info: {party: null, ground_units: 0}},
			FR: {name: "França"          , type: "ground", info: {party: null, ground_units: 0}},
			GE: {name: "Alemanha"        , type: "ground", info: {party: null, ground_units: 0}},
			PL: {name: "Polônia"         , type: "ground", info: {party: null, ground_units: 0}},
			MW: {name: "Moscow"          , type: "ground", info: {party: null, ground_units: 0}},
			SC: {name: "Suécia"          , type: "ground", info: {party: null, ground_units: 0}},
			AG: {name: "Argélia"         , type: "ground", info: {party: null, ground_units: 0}},
			EG: {name: "Egito"           , type: "ground", info: {party: null, ground_units: 0}},
			SD: {name: "Sudão"           , type: "ground", info: {party: null, ground_units: 0}},
			CG: {name: "Congo"           , type: "ground", info: {party: null, ground_units: 0}},
			AS: {name: "África do sul"   , type: "ground", info: {party: null, ground_units: 0}},
			MG: {name: "Madagascar"      , type: "ground", info: {party: null, ground_units: 0}},
			OM: {name: "Oriente médio"   , type: "ground", info: {party: null, ground_units: 0}},
			ID: {name: "Índia"           , type: "ground", info: {party: null, ground_units: 0}},
			VT: {name: "Vietnam"         , type: "ground", info: {party: null, ground_units: 0}},
			CN: {name: "China"           , type: "ground", info: {party: null, ground_units: 0}},
			MO: {name: "Mongólia"        , type: "ground", info: {party: null, ground_units: 0}},
			RL: {name: "Aral"            , type: "ground", info: {party: null, ground_units: 0}},
			OK: {name: "Ornsk"           , type: "ground", info: {party: null, ground_units: 0}},
			DU: {name: "Dudinka"         , type: "ground", info: {party: null, ground_units: 0}},
			TH: {name: "Tchita"          , type: "ground", info: {party: null, ground_units: 0}},
			VD: {name: "Vladvostok"      , type: "ground", info: {party: null, ground_units: 0}},
			SB: {name: "Sibéria"         , type: "ground", info: {party: null, ground_units: 0}},
			JP: {name: "Japão"           , type: "ground", info: {party: null, ground_units: 0}},
			SM: {name: "Sumatra"         , type: "ground", info: {party: null, ground_units: 0}},
			NG: {name: "Nova Guinea"     , type: "ground", info: {party: null, ground_units: 0}},
			AU: {name: "Austrália"       , type: "ground", info: {party: null, ground_units: 0}},
			BO: {name: "Bornea"          , type: "ground", info: {party: null, ground_units: 0}},
			OP: {name: "Oceano Pacífico" , type: "ocean",  info: {party: null, ground_units: 0}},
			OA: {name: "Oceano Atlântico", type: "ocean",  info: {party: null, ground_units: 0}},
			OI: {name: "Oceano Índico"   , type: "ocean",  info: {party: null, ground_units: 0}},
			OR: {name: "Oceano Ártico"   , type: "ocean",  info: {party: null, ground_units: 0}},
			ON: {name: "Oceano Antártico", type: "ocean",  info: {party: null, ground_units: 0}}
		};
		this.parties = [
			new Anarquismo(null),
			new ISIS([this.map['OM']]),
			new Feudalismo([this.map['FR']]),
			new Vikings([this.map['SC'], this.map['GL']]),
			new Zumbis(null),
			new ONU([this.map['NY']]),
			new Piratas([this.map['OP'], this.map['OA'], this.map['OI'], this.map['OR'], this.map['ON']]),
			new Igreja([this.map['FR']]),
			new Nazismo([this.map['GE']]),
			new Fascismo(null),
			new Joeyismo([this.map['BR']]),
			new SPQR([this.map['FR']]),
			new Resistência(null),
			new Socialismo([this.map['MW']]),
			new Capitalismo([this.map['CA']]),
			new Puritanismo([this.map['IN']])
		];
    }

	//#region Game functions
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
	//#endregion
}

//#endregion

class Player {
    constructor(name, uuid, socket) {
        this.name = name;
        this.uuid = uuid;
        this.socket = socket;
		this.party = null;
    }
}

//#region Parties
class Party {
	constructor(abbreviation, name, start) {
		this.abbreviation = abbreviation;
		this.name = name;
		this.start = start;
		this.disp = true;
		this.available_starts = start == null ? 1 : start.length;
	}
}

class Anarquismo extends Party {
	constructor(start) {
		super('ANQ', 'Anarquismo', start);
	}
}

class ISIS extends Party {
	constructor(start) {
		super('ISI', 'ISIS', start);
	}
}

class Feudalismo extends Party {
	constructor(start) {
		super('FDL', 'Feudalismo', start);
	}
}

class Vikings extends Party {
	constructor(start) {
		super('VKG', 'Vikings', start);
	}
}

class Zumbis extends Party {
	constructor(start) {
		super('ZMB', 'Zumbis', start);
	}
}

class ONU extends Party {
	constructor(start) {
		super('ONU', 'ONU', start);
	}
}

class Piratas extends Party {
	constructor(start) {
		super('PRT', 'Piratas', start);
	}
}

class Igreja extends Party {
	constructor(start) {
		super('CAT', 'Igreja Católica', start);
	}
}

class Nazismo extends Party {
	constructor(start) {
		super('NZI', 'Nazismo', start);
	}
}

class Fascismo extends Party {
	constructor(start) {
		super('FSC', 'Fascismo', start);
	}
}

class Joeyismo extends Party {
	constructor(start) {
		super('JEY', 'Joeyismo', start);
	}
}

class SPQR extends Party {
	constructor(start) {
		super('SQR', 'SPQR', start);
	}
}

class Resistência extends Party {
	constructor(start) {
		super('RST', 'Resistência', start);
	}
}

class Socialismo extends Party {
	constructor(start) {
		super('SCL', 'Socialismo', start);
	}
}

class Capitalismo extends Party {
	constructor(start) {
		super('CTL', 'Capitalismo', start);
	}
}

class Puritanismo extends Party {
	constructor(start) {
		super('PTN', 'Puritanismo', start);
	}
}
//#endregion

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

current_games = [];
socket_player_game = [];

function get_info_by_socket(socket) {
	for (var i in socket_player_game) {
		if (socket_player_game[i].socket === socket)
			return socket_player_game[i];
	}
	return null;
}

function get_game_by_name(name) {
    for (var i = 0; i < current_games.length; i++) {
		var g = current_games[i];
		if (g.name == name)
            return g;
	}
    return null;
}

// Serve /frontend as the site root for the client
app.use(express.static(__dirname + '/frontend'));

function log(info) {
	var d = new Date();
	console.log('[' + d.getHours() + ':' + d.getMinutes() + ":" + d.getSeconds() + "] " + info);
}

io.on('connection', (socket) => {

    socket.on('join room', (room, pass, name) => {
		log(name + " trying to join '" + room + "' with pass '" + pass + "'");
		var game_room = get_game_by_name(room);
		if (game_room != null) {
			if (game_room.pass == pass) {
				if (!game_room.contains_player(name)) {
					if (!game_room.ingame) {
						var player_uuid = uuidv4();
						var player = new Player(name, player_uuid, socket);
						game_room.add_player(player);
						socket_player_game.push({socket : socket, player: player, game: game_room});

						log(name + " successfully joined room '" + room + "'");
						socket.emit('join success', name, room);
						socket.emit('lobby parties update', game_room.get_all_parties_as_json());
					} else {
						log('room already ingame');
						socket.emit('join error', 'A sala já está em jogo.');
					}
				} else {
					log('name already in use');
					socket.emit('join error', 'O nome requisitado já está em uso na sala.');
				}
			} else {
				log('incorrect password');
				socket.emit('join error', 'Senha incorreta.');
			}
		} else {
			log('room not found');
			socket.emit('join error', 'Sala não encontrada.');
		}
    });

	socket.on('create room', (room, pass, name) => {
		log(name + " trying to create room '" + room + "' with pass '" + pass + "'");
		if (get_game_by_name(room) == null) {
			if (current_games.length < 1) {
				var player_uuid = uuidv4();
				var player = new Player(name, player_uuid, socket);
				var game = new Game(room, pass, player);

				game.add_player(player);
				current_games.push(game);

				socket_player_game.push({socket : socket, player: player, game: game});

				log(name + " successfully created room '" + room + "'");
				socket.emit('join success', name, room);
				socket.emit('lobby parties update', game.get_all_parties_as_json());
			} else {
				socket.emit('create error', 'Já existem muitas salas criadas no momento.');
				log(name + " couldn't create room '" + room + "': too many rooms");
			}
		} else {
			socket.emit('create error', 'Já existe uma sala com esse nome.');
			log(name + " couldn't create room '" + room + "': name already in use");
		}
	});

	socket.on('lobby set party', (party) => {
		try {
			var player_game = get_info_by_socket(socket);
			if (!player_game)
				throw "O jogador não está em nenhum lobby";
			var player = player_game.player;
			var game = player_game.game;
		
			game.set_player_party(player, party);
			game.broadcast('lobby playerlist update', game.get_all_players_as_json());
			game.broadcast('lobby parties update', game.get_all_parties_as_json());
		} catch (err) {
			socket.emit('generic error', err);
		}
	});

	socket.on('lobby leave party', () => {
		try {
			var player_game = get_info_by_socket(socket);
			if (!player_game)
				throw "O jogador não está em nenhum lobby";
			var player = player_game.player;
			var game = player_game.game;
			
			game.remove_player_from_current_party(player);
			game.broadcast('lobby playerlist update', game.get_all_players_as_json());
			game.broadcast('lobby parties update', game.get_all_parties_as_json());
		} catch (err) {
			socket.emit('generic error', err);
		}
	});

	socket.on('disconnect', () => {
		var info = get_info_by_socket(socket);
		if (info != null) {
			if (info.player.party != null) {
				info.game.remove_player_from_current_party(info.player);
				socket.emit('lobby parties update', info.game.get_all_parties_as_json());
			}
			info.game.remove_player(info.player);
			info.game.broadcast('lobby parties update', info.game.get_all_parties_as_json());
			socket_player_game.splice(socket_player_game.indexOf(info), 1);
			log(info.player.name + " left room '" + info.game.name + "'");
			if (info.game.is_empty()) {
				current_games.splice(current_games.indexOf(info.game), 1);
				log("room '" + info.game.name + "' closed: empty");
			}
		}
	});
});

http.listen(3000, () => {
console.log('listening on *:3000');
});