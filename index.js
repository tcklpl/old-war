const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

class Game {
    constructor(name, pass, owner) {
        this.name = name;
        this.pass = pass;
		this.owner = owner;
        this.ingame = false;
        this.players = [];
		this.map = {
			BR: {name: "Brasil"         , info: {party: null, ground_units: 0}},
			VN: {name: "Venezuela"      , info: {party: null, ground_units: 0}},
			PR: {name: "Peru"           , info: {party: null, ground_units: 0}},
			AR: {name: "Argentina"      , info: {party: null, ground_units: 0}},
			MX: {name: "México"         , info: {party: null, ground_units: 0}},
			CB: {name: "Cuba"           , info: {party: null, ground_units: 0}},
			NY: {name: "New York"       , info: {party: null, ground_units: 0}},
			CA: {name: "Califórnia"     , info: {party: null, ground_units: 0}},
			LB: {name: "Labrador"       , info: {party: null, ground_units: 0}},
			OT: {name: "Ottawa"         , info: {party: null, ground_units: 0}},
			VC: {name: "Vancouver"      , info: {party: null, ground_units: 0}},
			MC: {name: "Mackenzie"      , info: {party: null, ground_units: 0}},
			AL: {name: "Alaska"         , info: {party: null, ground_units: 0}},
			GL: {name: "Groenlândia"    , info: {party: null, ground_units: 0}},
			IS: {name: "Islândia"       , info: {party: null, ground_units: 0}},
			IN: {name: "Inglaterra"     , info: {party: null, ground_units: 0}},
			FR: {name: "França"         , info: {party: null, ground_units: 0}},
			GE: {name: "Alemanha"       , info: {party: null, ground_units: 0}},
			PL: {name: "Polônia"        , info: {party: null, ground_units: 0}},
			MW: {name: "Moscow"         , info: {party: null, ground_units: 0}},
			SC: {name: "Suécia"         , info: {party: null, ground_units: 0}},
			AG: {name: "Argélia"        , info: {party: null, ground_units: 0}},
			EG: {name: "Egito"          , info: {party: null, ground_units: 0}},
			SD: {name: "Sudão"          , info: {party: null, ground_units: 0}},
			CG: {name: "Congo"          , info: {party: null, ground_units: 0}},
			AS: {name: "África do sul"  , info: {party: null, ground_units: 0}},
			MG: {name: "Madagascar"     , info: {party: null, ground_units: 0}},
			OM: {name: "Oriente médio"  , info: {party: null, ground_units: 0}},
			ID: {name: "Índia"          , info: {party: null, ground_units: 0}},
			VT: {name: "Vietnam"        , info: {party: null, ground_units: 0}},
			CN: {name: "China"          , info: {party: null, ground_units: 0}},
			MO: {name: "Mongólia"       , info: {party: null, ground_units: 0}},
			RL: {name: "Aral"           , info: {party: null, ground_units: 0}},
			OK: {name: "Ornsk"          , info: {party: null, ground_units: 0}},
			DU: {name: "Dudinka"        , info: {party: null, ground_units: 0}},
			TH: {name: "Tchita"         , info: {party: null, ground_units: 0}},
			VD: {name: "Vladvostok"     , info: {party: null, ground_units: 0}},
			SB: {name: "Sibéria"        , info: {party: null, ground_units: 0}},
			JP: {name: "Japão"          , info: {party: null, ground_units: 0}},
			SM: {name: "Sumatra"        , info: {party: null, ground_units: 0}},
			NG: {name: "Nova Guinea"    , info: {party: null, ground_units: 0}},
			AU: {name: "Austrália"      , info: {party: null, ground_units: 0}},
			BO: {name: "Bornea"         , info: {party: null, ground_units: 0}}
		};
		this.parties = {
			ANQ: {
				name: "Anarquismo"
			},
			ISI: {
				name: "ISIS"
			},
			FDL: {
				name: "Feudalismo"
			},
			VKG: {
				name: "Vikings"
			},
			ZMB: {
				name: "Zumbis"
			},
			ONU: {
				name: "ONU"
			},
			PRT: {
				name: "Piratas"
			},
			CAT: {
				name: "Igreja Católica"
			},
			NZI: {
				name: "Nazismo"
			},
			FSC: {
				name: "Fascismo"
			},
			JEY: {
				name: "Joeyismo"
			},
			SQR: {
				name: "SPQR"
			},
			RST: {
				name: "Resistência"
			},
			SCL: {
				name: "Socialismo"
			},
			CTL: {
				name: "Capitalismo"
			},
			PTN: {
				name: "Puritanismo"
			}
		};
    }

	is_empty() {
		return this.players.length == 0;
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
			response += `{"name": "${this.players[i].name}", "party": "${this.players[i].party}"}`;
			if (i != (this.players.length - 1))
				response += ',';
		}
		return response + "]";
	}
}

class Player {
    constructor(name, uuid, socket) {
        this.name = name;
        this.uuid = uuid;
        this.socket = socket;
		this.party = null;
    }
}

class Party {
	constructor(abbreviation, name) {
		this.name = name;
	}
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

current_games = [];
socket_to_game = [];

function get_info_by_socket(socket) {
	for (var i in socket_to_game) {
		if (socket_to_game[i].socket === socket)
			return socket_to_game[i];
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
						socket_to_game.push({socket : socket, player: player, game: game_room});

						log(name + " successfully joined room '" + room + "'");
						socket.emit('join success', player_uuid, room);
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

				socket_to_game.push({socket : socket, player: player, game: game});

				log(name + " successfully created room '" + room + "'");
				socket.emit('join success', player_uuid, room);
			} else {
				socket.emit('create error', 'Já existem muitas salas criadas no momento.');
				log(name + " couldn't create room '" + room + "': too many rooms");
			}
		} else {
			socket.emit('create error', 'Já existe uma sala com esse nome.');
			log(name + " couldn't create room '" + room + "': name already in use");
		}
	});

	socket.on('disconnect', () => {
		var info = get_info_by_socket(socket);
		if (info != null) {
			info.game.remove_player(info.player);
			socket_to_game.splice(socket_to_game.indexOf(info), 1);
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