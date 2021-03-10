countries = {
    BR: {name: "Brasil"         , info: {party: null, ground_units: 0}, canvas: []},
    VN: {name: "Venezuela"      , info: {party: null, ground_units: 0}, canvas: []},
    PR: {name: "Peru"           , info: {party: null, ground_units: 0}, canvas: []},
    AR: {name: "Argentina"      , info: {party: null, ground_units: 0}, canvas: []},
    MX: {name: "México"         , info: {party: null, ground_units: 0}, canvas: []},
    CB: {name: "Cuba"           , info: {party: null, ground_units: 0}, canvas: []},
    NY: {name: "New York"       , info: {party: null, ground_units: 0}, canvas: []},
    CA: {name: "Califórnia"     , info: {party: null, ground_units: 0}, canvas: []},
    LB: {name: "Labrador"       , info: {party: null, ground_units: 0}, canvas: []},
    OT: {name: "Ottawa"         , info: {party: null, ground_units: 0}, canvas: []},
    VC: {name: "Vancouver"      , info: {party: null, ground_units: 0}, canvas: []},
    MC: {name: "Mackenzie"      , info: {party: null, ground_units: 0}, canvas: []},
    AL: {name: "Alaska"         , info: {party: null, ground_units: 0}, canvas: []},
    GL: {name: "Groenlândia"    , info: {party: null, ground_units: 0}, canvas: []},
    IS: {name: "Islândia"       , info: {party: null, ground_units: 0}, canvas: []},
    IN: {name: "Inglaterra"     , info: {party: null, ground_units: 0}, canvas: []},
    FR: {name: "França"         , info: {party: null, ground_units: 0}, canvas: []},
    GE: {name: "Alemanha"       , info: {party: null, ground_units: 0}, canvas: []},
    PL: {name: "Polônia"        , info: {party: null, ground_units: 0}, canvas: []},
    MW: {name: "Moscow"         , info: {party: null, ground_units: 0}, canvas: []},
    SC: {name: "Suécia"         , info: {party: null, ground_units: 0}, canvas: []},
    AG: {name: "Argélia"        , info: {party: null, ground_units: 0}, canvas: []},
    EG: {name: "Egito"          , info: {party: null, ground_units: 0}, canvas: []},
    SD: {name: "Sudão"          , info: {party: null, ground_units: 0}, canvas: []},
    CG: {name: "Congo"          , info: {party: null, ground_units: 0}, canvas: []},
    AS: {name: "África do sul"  , info: {party: null, ground_units: 0}, canvas: []},
    MG: {name: "Madagascar"     , info: {party: null, ground_units: 0}, canvas: []},
    OM: {name: "Oriente médio"  , info: {party: null, ground_units: 0}, canvas: []},
    ID: {name: "Índia"          , info: {party: null, ground_units: 0}, canvas: []},
    VT: {name: "Vietnam"        , info: {party: null, ground_units: 0}, canvas: []},
    CN: {name: "China"          , info: {party: null, ground_units: 0}, canvas: []},
    MO: {name: "Mongólia"       , info: {party: null, ground_units: 0}, canvas: []},
    RL: {name: "Aral"           , info: {party: null, ground_units: 0}, canvas: []},
    OK: {name: "Ornsk"          , info: {party: null, ground_units: 0}, canvas: []},
    DU: {name: "Dudinka"        , info: {party: null, ground_units: 0}, canvas: []},
    TH: {name: "Tchita"         , info: {party: null, ground_units: 0}, canvas: []},
    VD: {name: "Vladvostok"     , info: {party: null, ground_units: 0}, canvas: []},
    SB: {name: "Sibéria"        , info: {party: null, ground_units: 0}, canvas: []},
    JP: {name: "Japão"          , info: {party: null, ground_units: 0}, canvas: []},
    SM: {name: "Sumatra"        , info: {party: null, ground_units: 0}, canvas: []},
    NG: {name: "Nova Guinea"    , info: {party: null, ground_units: 0}, canvas: []},
    AU: {name: "Austrália"      , info: {party: null, ground_units: 0}, canvas: []},
    BO: {name: "Bornea"         , info: {party: null, ground_units: 0}, canvas: []}
}

var parties = {
    ANQ: {
        name: "Anarquismo",
        color: "#000000",
        goal: "O Anarquismo tem como único objetivo ser o inimigo de qualquer civilização que tenha adotado um sistema político. Ele é capaz de ganhar se de alguma forma, todas as formas de governo que possuem um estado forem destruídas ou se renderem",
        rules: ["Não pode fazer alianças", "Deve atacar toddo turno"],
        passive: "Se não houver nenhuma tropa no país, automaticamente esse país pertence ao Anarquismo",
        bonus: ["A cada fim de turno, o Anarquismo ganha 2 tropas que podem ser livremente distribuídas", "Ganhar um combate lhe beneficia com +1 no dado (acumulativo por 1 turno)", "Caso o Anarquismo ganhe os quatro ataques seguidos, as civilizações que sofreram os ataques serão Pressionadas por 1 Turno"],
        special_moves: [{name: "Anarquia de Regras", hover: [{word: "Anarquia de Regras", action: "show_info('anarquia de regras');"}]}],
        special_units: [{name: "Black Block", hover: [{word: "Black Block", action: "show_info('black block');"}]}],
        leader: null,
        start: null
    },
    ISI: {
        name: "ISIS",
        color: "#555555",
        goal: "Destruir tudo (inclusive eles mesmos)",
        rules: [{name: "ISIS só pode posicionar peças por método de recrutamento", hover: [{word: "recrutamento", action: "show_info('recrutamento');"}]}],
        passive: [{name: "Se o ISIS tiver uma quantidade igual ou inferior a 6 peças, quando elas forem destruídas, elas ativam Allahu Ahkbar", hover: [{word: "Allahu Ahkbar", action: "show_info('allahu akbar');"}]}],
        bonus: [{name: "Cada vez que Allahu Ahkbar é utilizado com sucesso e consegue matar mais da metade das tropas do país, ele vai Pressionar as nações atacadas", hover: [{word: "Allahu Ahkbar", action: "show_info('allahu akbar');"}]}],
        special_moves: [{name: "Allahu Akbar", hover: [{word: "Allahu Ahkbar", action: "show_info('allahu akbar');"}]}],
        special_units: [{name: "Veículo Bomba", hover: [{word: "Veículo Bomba", action: "show_info('veiculo bomba');"}]}],
        leader: "Osama Bin Laden",
        start: "Oriente Médio"
    },
    FDL: {
        name: "Feudalismo",
        color: "#40ff19",
        goal: "Exterminar os hereges e conquistar a Terra Sancta",
        rules: ["O Feudalismo, como um exército centralizado, só pode ter dois movimentos por turno, sendo que um pode ser de ataque e o outro obrigatoriamente será de movimentação"],
        passive: ["Os exércitos de defesa podem ser enviados para as Muralhas sem restrição de movimentação"],
        bonus: ["Ao conquistar um território, o Senhor Feudal recebe um pagamento como imposto, ganhando +1 tropa no território recém anexado"],
        special_moves: [{name: "Muralhas", hover: [{word: "Muralhas", action: "show_info('muralhas');"}]}],
        special_units: [{name: "Dragão", hover: [{word: "Dragão", action: "show_info('dragao');"}]}],
        leader: "Carlos Magno",
        start: "França"
    },
    VKG: {
        name: "Vikings",
        color: "#ffcc66",
        goal: "Os Vikings precisam escolher uma civilização arqui-inimiga e destruí-la. Se outra civilização derrotar seu inimigo, os Vikings perdem",
        rules: ["Sempre que os Vikings perderem ou ganhar três batalhas em sequência, eles entrarão em luto com festividades pelos mortos e muita cerveja, impedindo-os de atacar no próximo turno"],
        passive: ["Tropas Vikings não são desmoralizadas por HABILIDADES que causam debuffs em dados (Todavia, Unidades Especiais ainda são válidas)"],
        bonus: ["Se tropas Viking estiverem em desvantagem que tenha no mínimo 3 tropas em diferença, eles atacarão com +1 no dado"],
        special_moves: ["Vikings podem roubar navios de Puritanos e Piratas ao vencerem um ataque contra estes"],
        special_units: [{name: "Thor", hover: [{word: "Thor", action: "show_info('thor');"}]}, {name: "Soluço", hover: [{word: "Soluço", action: "show_info('soluco');"}]}],
        leader: "Ragnar",
        start: "Suécia ou Groenlândia"
    },
    ZMB: {
        name: "Zumbis",
        color: "#116600",
        goal: "Dominar o Mundo",
        rules: ["Todos os jogadores estão contra você", "Só inicia com uma peça e não gera mais exército", "Se estiver sem peças por 3 turnos, perde"],
        passive: ["Matar tropas instantaneamente as transforma em Zumbis"],
        bonus: ["A cada 10 zumbis, eles formam uma horda, ganhando +1 no dado"],
        special_moves: ["Cada turno pode rodar um dado sobre uma batalha que ocorreu no Mundo. Se o número for superior ou igual a 4, todas as unidades mortas se transformam em zumbis"],
        special_units: null,
        leader: "Dr. Zumbão",
        start: null
    },
    ONU: {
        name: "ONU",
        color: "#80bfff",
        goal: "Garantir a Paz Mundial",
        rules: ["Não pode atacar nem gerar exército. Começa apenas com 1 peça"],
        passive: ["É capaz de enviar tropas para defesa de qualquer país desde que estejam em seu limite físico (Até 3 movimentos)"],
        bonus: ["Pode continuar no jogo mesmo sem territórios, desde que possua sua sede em Nova Iorque e o país dominante mantenha a ONU"],
        special_moves: [{name: "Sanções", hover: [{word: "Sanções", action: "show_info('sancoes');"}]}, {name: "Bomba Nuclear", hover: [{word: "Bomba Nuclear", action: "show_info('bomba nuclear');"}]}],
        special_units: null,
        leader: "Barry",
        start: "New York"
    },
    PRT: {
        name: "Piratas",
        color: "#0022cc",
        goal: "",
        rules: [],
        passive: [],
        bonus: [],
        special_moves: [],
        special_units: [],
        leader: "",
        start: ""
    },
    CAT: {
        name: "Igreja Católica",
        color: "#aaaaaa",
        goal: "",
        rules: [],
        passive: [],
        bonus: [],
        special_moves: [],
        special_units: [],
        leader: "",
        start: ""
    },
    NZI: {
        name: "Nazismo",
        color: "#ffffff",
        goal: "",
        rules: [],
        passive: [],
        bonus: [],
        special_moves: [],
        special_units: [],
        leader: "",
        start: ""
    },
    FSC: {
        name: "Fascismo",
        color: "#ff8080",
        goal: "",
        rules: [],
        passive: [],
        bonus: [],
        special_moves: [],
        special_units: [],
        leader: "",
        start: ""
    },
    JEY: {
        name: "Joeyismo",
        color: "#800000",
        goal: "",
        rules: [],
        passive: [],
        bonus: [],
        special_moves: [],
        special_units: [],
        leader: "",
        start: ""
    },
    SQR: {
        name: "SPQR",
        color: "#661100",
        goal: "",
        rules: [],
        passive: [],
        bonus: [],
        special_moves: [],
        special_units: [],
        leader: "",
        start: ""
    },
    RST: {
        name: "Resistência",
        color: "#ff3333",
        goal: "",
        rules: [],
        passive: [],
        bonus: [],
        special_moves: [],
        special_units: [],
        leader: "",
        start: ""
    },
    SCL: {
        name: "Socialismo",
        color: "#ff0000",
        goal: "",
        rules: [],
        passive: [],
        bonus: [],
        special_moves: [],
        special_units: [],
        leader: "",
        start: ""
    },
    CTL: {
        name: "Capitalismo",
        color: "#ffff33",
        goal: "",
        rules: [],
        passive: [],
        bonus: [],
        special_moves: [],
        special_units: [],
        leader: "",
        start: ""
    },
    PTN: {
        name: "Puritanismo",
        color: "#e69900",
        goal: "",
        rules: [],
        passive: [],
        bonus: [],
        special_moves: [],
        special_units: [],
        leader: "",
        start: ""
    }
}

function show_party_info() {

}

function canvas_populate() {
    $('#global_map > area').each(function() {
        var CanvasElement = $("<canvas width='1920' height='1080' style='position: absolute; z-index: 2; pointer-events: none;'></canvas>");
        var canvas = CanvasElement.get(0).getContext("2d");

        var current_piece = $(this);
        var area_coords = current_piece.attr('coords').split(',');

        i = 0, len = area_coords.length;
        canvas.beginPath();

        for (; i < len; i += 2) {
            i === 0 ? canvas.moveTo(area_coords[i], area_coords[i + 1]) : canvas.lineTo(area_coords[i], area_coords[i + 1]);
        }

        canvas.closePath();
        CanvasElement.appendTo('#all_color_canvas');

        countries[current_piece.attr('data-country')].canvas.push(canvas);

        CanvasElement.hover(function() {
            console.log('a');
        });
    });
}

function canvas_paint_country(country, color) {
    countries[country].canvas.forEach(element => {
        element.clearRect(0, 0, 1920, 1080);
        element.fillStyle = color;
        element.globalAlpha = 0.5;
        element.fill();
    });
}

function set_country_party(country, party) {
    countries[country].info.party = parties[party];
}

function canvas_paint_all_by_party() {
    for (var key in countries) {
        color = (countries[key].info.party == null ? 'rgba(0, 0, 0, 0)' : countries[key].info.party.color);
        canvas_paint_country(key, color);
    }
}

function input_country(country) {
    console.log("CLICOU: " + country);
};

function set_game_screen_color(color) {
    $('#game_frame').css('border', color)
}

function get_content_div_per_country(country) {
    c = countries[country];
    return `<div id="gui-country-info">País: <b>${c.name}</b></div>`;
}