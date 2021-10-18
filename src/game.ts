import { Anarquismo } from "./parties/anarquismo";
import { ISIS } from './parties/isis';
import { Feudalismo } from './parties/feudalismo';
import { Vikings } from './parties/vikings';
import { Zumbis } from './parties/zumbis';
import { ONU } from './parties/onu';
import { Piratas } from './parties/piratas';
import { Igreja } from './parties/igreja';
import { Nazismo } from './parties/nazismo';
import { Fascismo } from './parties/fascismo';
import { Joeyismo } from './parties/joeyismo';
import { SPQR } from './parties/spqr';
import { Resistência } from './parties/resistencia';
import { Socialismo } from './parties/socialismo';
import { Capitalismo } from './parties/capitalismo';
import { Puritanismo } from './parties/puritanismo';
import { default_countries } from './defaults';
import { Player } from "./player";
import { Country } from "./country";
import { Party } from "./parties/party";
import { Socket } from "socket.io";
import { OptionRequest } from "./requests/option_request";
import { GameRequestHandler } from "./requests/request_handler";
import { GameRequestCallback } from "./requests/request_callback";

class Game {
	name: string;
	pass: string;
	owner: Player;
	ingame: boolean;
	players: Array<Player>;
	map: Array<Country>;
	parties: Array<Party>;
	round: number;
	requestHandler: GameRequestHandler = new GameRequestHandler();

    constructor(name: string, pass: string, owner: Player) {
        this.name = name;
        this.pass = pass;
		this.owner = owner;
        this.ingame = false;
        this.players = [];
		this.map = default_countries();
		this.parties = [
            new Anarquismo([]),
            new ISIS(this.get_countries_by_code('OM')),
            new Feudalismo(this.get_countries_by_code('FR')),
            new Vikings(this.get_countries_by_code('SC', 'GL')),
            new Zumbis([]),
            new ONU(this.get_countries_by_code('NY')),
            new Piratas(this.get_countries_by_code('OP', 'OA', 'OI', 'OR', 'ON')),
            new Igreja(this.get_countries_by_code('FR')),
            new Nazismo(this.get_countries_by_code('GE')),
            new Fascismo([]),
            new Joeyismo(this.get_countries_by_code('BR')),
            new SPQR(this.get_countries_by_code('FR')),
            new Resistência([]),
            new Socialismo(this.get_countries_by_code('MW')),
            new Capitalismo(this.get_countries_by_code('CA')),
            new Puritanismo(this.get_countries_by_code('IN'))
        ];
		this.round = -1;
    }

    get_countries_by_code(...code: string[]): Array<Country> {
		return this.map.filter(c => code.includes(c.code));
    }

	get_party_by_abbr(abbr: string): Party {
		return this.parties.filter(p => p.abbreviation == abbr)[0];
	}

	is_empty(): boolean {
		return this.players.length == 0;
	}

	can_start(): boolean {
		return this.players.every(p => p.party != null);
	}

	start(): void {
		// randomize player list
		this.players = this.players
			.map((a) => ({sort: Math.random(), value: a}))
			.sort((a, b) => a.sort - b.sort)
			.map((a) => a.value);
		this.broadcast('game play order', this.get_all_players_as_json());

		this.request_start_locations();
	}

	request_start_locations(): void {
		this.players.forEach(p => {
			// var res = "[";
			// for (var i = 0; i < this.map.length; i++) {
			// 	var country = this.map[i];
			// 	var selectable = p.party?.start ? p.party?.start.includes(country) : true;
			// 	res += `{"country": "${country.code}", "selectable": ${selectable}}`;
			// 	if (i != (this.map.length - 1))
			// 		res += ",";
			// }
			// p.socket.emit('game select start', res + "]");
			let selectableList: Array<string> = [];
			this.map.forEach(c => {
				let selectable = p.party?.start ? p.party?.start.includes(c) : true;
				if (selectable)
					selectableList.push(c.code);
			});
			this.requestHandler.sendGameRequest(
				new OptionRequest( "starting_country",
					selectableList, new GameRequestCallback( 
						(res: string) => {console.log("response: " + res)}, 
						(error: string) => {console.log("error: " + error)}
						)
					),
				 p.socket);
		});
		
	}

	broadcast(packet: string, ...info: string[]): void {
		this.players.forEach(p => p.socket.emit(packet, info));
	}

    add_player(player: Player): void {
        this.players.push(player);
		for (var p in this.players) {
			this.players[p].socket.emit('player joined', this.get_all_players_as_json(), player.name);
		}
    }

	remove_player(player: Player): void {
		this.players.splice(this.players.indexOf(player), 1);
		if (this.owner === player && !this.is_empty()) {
			this.owner = this.players[0];
			this.owner.socket.emit('lobby owner');
			this.broadcast('lobby write log', this.owner.name + ' é o novo dono do lobby');
		}
		this.players.forEach(p => p.socket.emit('player left', this.get_all_players_as_json(), player.name));
    }

	contains_player_name(name: string): boolean {
		return this.players.some(p => p.name == name);
	} 

	get_player_per_socket(socket: Socket): Player | null {
		for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].socket === socket) return this.players[i];
        }
		return null;
	}

	get_all_players_as_json(): string {
		var response = "[";
		for (var i = 0; i < this.players.length; i++) {
			var party_response = this.players[i].party?.abbreviation;
			response += `{"name": "${this.players[i].name}", "party": "${party_response}"}`;
			if (i != (this.players.length - 1))
				response += ',';
		}
		return response + "]";
	}

	get_all_parties_as_json(): string {
		var response = "[";
		for (var i = 0; i < this.parties.length; i++) {
			var party = this.parties[i];
			response += `{"abbreviation": "${party.abbreviation}", "name": "${party.name}", "disp": ${party.disp}}`;
			if (i != (this.parties.length - 1))
				response += ",";
		}
		return response + "]";
	}

	is_player_in_game(player: Player): boolean {
		return this.players.some(p => p === player);
	}

	is_party_name_available(party: string): boolean {
		var p = this.get_party_by_abbr(party);
		if (!p)
			throw "Civilização inválida";
		return p.disp;
	}

	update_parties_disponibility(): void {
		this.parties.forEach(p => {
			p.disp = true;
			p.available_starts = p.start == null ? 1 : p.start.length;
		});
		this.players.forEach(player => {
			if (player.party != null) {
				player.party.disp = false;
				if (player.party.start.length > 0) {
					this.parties.forEach(party => {
						if (party.start.length > 0) {
							party.start.filter(ps => player.party?.start.includes(ps)).forEach(() => party.available_starts -= 1);
							if (party.available_starts <= 0)
								party.disp = false;
						}
					});
				}
			}
		});
	}

	set_player_party(player: Player, party: string): void {
		if (!this.is_player_in_game(player))
			throw "Jogador não está no game requisitado";
		if (!this.is_party_name_available(party))
			throw "A civilização requisitada não está disponível";
		var p = this.get_party_by_abbr(party);
		player.party = p;
		this.update_parties_disponibility();
	}

	remove_player_from_current_party(player: Player): void {
		if (!this.is_player_in_game(player))
			throw "Jogador não está no game requisitado";
		if (player.party == null) return;
		player.party = null;
		this.update_parties_disponibility();
	}

	kick_player(player: Player): void {
		if (!this.is_player_in_game(player)) return;
		if (player.party != null) {
			this.remove_player_from_current_party(player);
			this.broadcast('lobby parties update', this.get_all_parties_as_json());
		}
		this.remove_player(player);
	}
}

export {Game};