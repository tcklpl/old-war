import express from 'express';
import { Socket } from 'socket.io';
import { Game } from './game';
import { Player } from './player';
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

class SocketConnectionInfo {
	socket: Socket;
	player: Player;
	game: Game;

	constructor(socket: Socket, player: Player, game: Game) {
		this.socket = socket;
		this.player = player;
		this.game = game;
	}
}

const max_games = 1;
var current_games = new Array<Game>();
var socket_player_game = new Array<SocketConnectionInfo>();

function get_info_by_socket(socket: Socket): SocketConnectionInfo | null {
	return socket_player_game.filter(s => s.socket === socket)[0];
}

function get_game_by_name(name: string): Game | null {
	return current_games.filter(g => g.name == name)[0];
}

// Serve /frontend as the site root for the client
app.use(express.static(__dirname + '/frontend'));

function log(info: string) {
	var d = new Date();
	console.log('[' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2) + "] " + info);
}

io.on('connection', (socket: Socket) => {

    socket.on('join room', (room, pass, name) => {
		log(name + " trying to join '" + room + "' with pass '" + pass + "'");
		var game_room = get_game_by_name(room);
		if (game_room != null) {
			if (game_room.pass == pass) {
				if (!game_room.contains_player_name(name)) {
					if (!game_room.ingame) {
						var player = new Player(name, socket);
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
			if (current_games.length < max_games) {
				var player = new Player(name, socket);
				var game = new Game(room, pass, player);

				game.add_player(player);
				current_games.push(game);

				socket_player_game.push({socket : socket, player: player, game: game});

				log(name + " successfully created room '" + room + "'");
				socket.emit('join success', name, room);
				socket.emit('lobby parties update', game.get_all_parties_as_json());
				socket.emit('lobby owner');
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

	socket.on('lobby leave', () => {
		var info = get_info_by_socket(socket);
		if (info != null) {
			info.game.kick_player(info.player);
			socket.emit("lobby left");
			socket_player_game.splice(socket_player_game.indexOf(info), 1);
			log(info.player.name + " left room '" + info.game.name + "'");
			if (info.game.is_empty()) {
				current_games.splice(current_games.indexOf(info.game), 1);
				log("room '" + info.game.name + "' closed: empty");
			}
		}
	});

	socket.on('disconnect', () => {
		var info = get_info_by_socket(socket);
		if (info != null) {
			info.game.kick_player(info.player);
			socket_player_game.splice(socket_player_game.indexOf(info), 1);
			log(info.player.name + " left room '" + info.game.name + "'");
			if (info.game.is_empty()) {
				current_games.splice(current_games.indexOf(info.game), 1);
				log("room '" + info.game.name + "' closed: empty");
			}
		}
	});

	socket.on('game start', () => {
		var info = get_info_by_socket(socket);
		if (info != null) {
			if (info.game.owner === info.player) {
				if (info.game.can_start()) {
					info.game.ingame = true;
					
					for (var i = 5; i > 0; i--) {
						let finalI = JSON.parse(JSON.stringify(i)); // javascript keeps just referencing i instead of copying it's value
						setTimeout(() => {
							info?.game.broadcast('lobby write log', 'Começando em ' + finalI + "...");
						}, (5 - i) * 1000);
					}

					setTimeout(() => {
						info?.game.start();
						info?.game.broadcast('game started');
					}, 5000);

				} else {
					socket.emit('generic error', 'Todos os jogadores precisam selecionar suas civilizações antes de iniciar o jogo');
				}
			} else {
				socket.emit('generic error', 'Somente o dono do lobby pode iniciar o jogo');
			}
		}
	});

	socket.on('game request response', (response: string) => {
		var info = get_info_by_socket(socket);
		if (info != null) {
			info.game.requestHandler.acceptRequestResponse(response);
		}
	});
});

http.listen(3000, () => {
console.log('listening on *:3000');
});