import { io } from "socket.io-client"
import { Callback } from "./callbacks/callback";
import { MutuallyExclusiveCallback } from "./callbacks/mut_exclusive_callback";

class GameConnection {

    private socket = io();
    private callbacks: Map<string, Array<Callback>> = new Map();

    constructor() {
        this.socket.onAny((msg, ...args: any[]) => this.triggerCallbacks(msg, args));
    }

    private ensureCallbackListExists(msg: string) {
        this.callbacks.set(msg, this.callbacks.get(msg) || []);
    }

    private triggerCallbacks(msg: string, ...args: any[]) {
        this.callbacks.get(msg)?.forEach(cb => cb.call(msg, args));
        this.callbacks.set(msg, this.callbacks.get(msg)?.filter(cb => cb.shouldRemove()) || []);
    }

    registerCallback(msg: string, toCall: (...args: any[]) => void, uses?: number) {
        this.ensureCallbackListExists(msg);
        this.callbacks.get(msg)?.push(new Callback(toCall, uses));
    }

    registerMutuallyExclusiveCallback(callback: MutuallyExclusiveCallback, ...messages: string[]) {
        messages.forEach(msg => {
            this.ensureCallbackListExists(msg);
            this.callbacks.get(msg)?.push(callback);
        });
    }

    emit(msg: string, ...args: any[]) {
        this.socket.emit(msg, args);
    }

}

export { GameConnection }

function get_player_by_name(name) {
    if (!players) return null;
    if (players.length == 0) return null;
    for (var i in players) {
        if (players[i].name === name)
            return players[i];
    }
    return null;
}

function get_party_by_abbreviation(name) {
    if (!parties) return null;
    if (parties.length == 0) return null;
    for (var i in parties) {
        if (parties[i].abbreviation === name)
            return parties[i];
    }
    return null;
}

function update_buttons_from_json(partieslist) {
    var allparties = JSON.parse(partieslist);
    parties = allparties;
    for (var i in allparties) {
        $(`#btn-class-${allparties[i].abbreviation}`).removeClass('btn-secondary');
        $(`#btn-class-${allparties[i].abbreviation}`).removeClass('btn-success');
        if (!allparties[i].disp) {
            $(`#btn-class-${allparties[i].abbreviation}`).addClass('btn-secondary');
        }
    }
    var player = get_player_by_name(pname);
    if (player) {
        $(`#btn-class-${player.party}`).addClass('btn-success');
    }
}

function set_player_party(party_name) {
    var party = get_party_by_abbreviation(party_name);
    if (!party) return;
    if (!party.disp) return;
    socket.emit('lobby set party', party_name);
}

function leave_current_party() {
    socket.emit('lobby leave party');
}

function leave_lobby() {
    socket.emit('lobby leave');
}

function start_game() {
    socket.emit('game start');
}

function display_play_order(playerjson) {
    var playorder = JSON.parse(playerjson);
    $('#title-box').append('<h1>Ordem para jogar:</h1>');
    for (var i in playorder) {
        var party_style = parties_style[playorder[i].party];
        $('#title-box').append(`<div style="display: inline-block"><img src="${party_style.icon}" width="100px" height="100px"></div>`);
    }
    $('#title-box').show();
    setTimeout(() => {
        $('#title-box').hide();
    }, 2000);
}

//#region Socket events
socket.on('generic error', (msg) => {
    show_alert("danger", "Erro: " + msg);
});

socket.on('player joined', (players, name) => {
    update_player_list_from_json(players);
    write_line_to_lobby_log(name + " entrou no lobby.");
});

socket.on('player left', (players, name) => {
    update_player_list_from_json(players);
    write_line_to_lobby_log(name + " saiu do lobby.");
});

socket.on('lobby playerlist update', (players) => {
    update_player_list_from_json(players);
});

socket.on('lobby parties update', (parties) => {
    update_buttons_from_json(parties);
});

socket.on('lobby owner', () => {
    $('#btn-start-game').show();
});

socket.on('lobby write log', (info) => {
    write_line_to_lobby_log("<b>></b> " + info);
});

socket.on('game started', () => {
    $('#game_select').hide();
    $('#gui').show();
    $('#game_frame').css('height', '90vh');
});

socket.on('game play order', (playerlist) => {
    display_play_order(playerlist);
});


socket.on('game select start', (info) => {
    var infoj = JSON.parse(info);
    for (var i in infoj) {
        canvas_paint_country(infoj[i].country, infoj[i].selectable ? '#00ff00' : '#ff0000');
    }
    current_mode = 'SELECTING';
});

socket.on('game request', (info) => {
    console.log(info);
    requestManager.acceptRequest(info);
});
//#endregion