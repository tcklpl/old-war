import { game } from "../game";

interface LobbyPlayerInfo {
    name: string,
    party: string | null
}

class LobbyUI {

    private lobbyOwner: boolean = false;

    setRoomSelectionScreen(visible: boolean) {
        visible ? $('#game-select-join').fadeIn() : $('#game-select-join').fadeOut();
    }

    private setLobbyStartButton(enabled: boolean): void {
        const button = $('#btn-start-game');
        if (this.lobbyOwner) {
            if (enabled) {
                button.removeClass('btn-secondary');
                button.addClass('btn-success');
                button.attr('disabled', 1);
            } else {
                button.addClass('btn-secondary');
                button.removeClass('btn-success');
                button.attr('disabled', 0);
            }
        } else {
            $('#btn-start-game').hide();
        }
    }

    setLobby(visible: boolean, lobbyName: string, isOwner: boolean): void {
        if (visible) {
            $('#lobby-name').html('Lobby: ' + lobbyName);
            $('#game-select-lobby').fadeIn();
        } else {
            $('#game-select-lobby').fadeOut();
        }

        this.lobbyOwner = isOwner;
        this.setLobbyStartButton(false);
    }

    clearLobbyLog(): void {
        $('#lobby-log').html('');
    }

    writeToLobbyLog(msg: string): void {
        $('#lobby-log').html($('#lobby-log').html() + "<b>></b> " + msg + "<br>");
    }

    updateLobbyPlayerlist(jsonString: string) {
        const playerInfo: LobbyPlayerInfo[] = JSON.parse(jsonString);
        const domPlayerList = $('#lobby-player-list');
        let allPlayersSelected = true;

        playerInfo.forEach(player => {
            if (player.party) {
                let playerPartyInfo = game.partyManager.parties.get(player.party);
                domPlayerList.append(
                    `<li class="list-group-item" style="background-color: ${playerPartyInfo?.info.style.back_color}; color: ${playerPartyInfo?.info.style.front_color};">
                    ${player.name}
                    <div class="lobby-class-icon" style="
                                background-color: ${playerPartyInfo?.info.style.front_color};
                                mask-image: url('${playerPartyInfo?.info.style.icon}');
                                -webkit-mask-image: url('${playerPartyInfo?.info.style.icon}');
                    "></div>
                    </li>`);
            } else {
                domPlayerList.append('<li class="list-group-item">' + player.name + "</li>");
                allPlayersSelected = false;
            }
        });

        $('#lobby-player-count').html('Jogadores no lobby: ' + playerInfo.length);
        if (allPlayersSelected) {
            this.setLobbyStartButton(true);
        }
    }

}

export { LobbyUI }