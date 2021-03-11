var socket = io();

function request_room_join(room, pass, name) {
    socket.emit('join room', room, pass, name);
}

function request_room_creation(room, pass, name) {
    socket.emit('create room', room, pass, name);
}

function update_player_list_from_json(playerlist) {
    var allplayers = JSON.parse(playerlist);
    players = allplayers;
    $('#lobby-player-list').empty();
    for (var i in allplayers) {
        if (allplayers[i].party != "null") {
            var party_style = parties_style[allplayers[i].party];
            $('#lobby-player-list').append(`<li class="list-group-item" style="background-color: ${party_style.back_color}; color: ${party_style.front_color};">
                                            ${allplayers[i].name}
                                            <div style="
                                                        width: 30px; 
                                                        height: 30px; 
                                                        float: right; 
                                                        background-color: ${party_style.front_color};
                                                        -webkit-mask-size: contain;
                                                        mask-size: contain;
                                                        -webkit-mask-position: center;
                                                        mask-position: center;
                                                        -webkit-mask-repeat: no-repeat;
                                                        mask-repeat: no-repeat;
                                                        mask-image: url('${party_style.icon}');
                                                        -webkit-mask-image: url('${party_style.icon}');
                                            "></div>
                                            </li>`);
        } else {
            $('#lobby-player-list').append('<li class="list-group-item">' + allplayers[i].name + "</li>");
        }
    }
    $('#lobby-player-count').html('Jogadores no lobby: ' + allplayers.length);
}

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

//#region Socket events
socket.on('join error', (msg) => {
    show_alert("danger", "Erro ao entrar: " + msg);
});

socket.on('join success', (name, room) => {
    pname = name;
    $('#game-select-join').hide();
    $('#game-select-lobby').show();
    $('#lobby-name').html('Lobby: ' + room);
});

socket.on('create error', (msg) => {
    show_alert("danger", "Erro ao criar sala: " + msg);
});

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
//#endregion