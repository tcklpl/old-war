mouse_x = 0;
mouse_y = 0;

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
    BO: {name: "Bornea"         , info: {party: null, ground_units: 0}, canvas: []},
    OR: {name: "Oceano Ártico"  , info: {party: null, ground_units: 0}, canvas: []},
    OP: {name: "Oceano Pacífico", info: {party: null, ground_units: 0}, canvas: []},
    OA: {name: "Oceano Atlântico", info: {party: null, ground_units: 0}, canvas: []},
    OI: {name: "Oceano Índico"   , info: {party: null, ground_units: 0}, canvas: []}
}

players = [];
parties = [];

parties_style = {
    ANQ: {back_color: "#000000", front_color: "#ffffff", icon: "img/icons/anq.svg"},
    ISI: {back_color: "#aaaaaa", front_color: "#000000", icon: "img/icons/isis.svg"},
    FDL: {back_color: "#4cc963", front_color: "#000000", icon: "img/icons/feudalismo.svg"},
    VKG: {back_color: "#4cc993", front_color: "#000000", icon: "img/icons/vikings.svg"},
    ZMB: {back_color: "#4e9335", front_color: "#000000", icon: "img/icons/zombie.svg"},
    ONU: {back_color: "#23cec3", front_color: "#000000", icon: "img/icons/onu.svg"},
    PRT: {back_color: "#7c3bdd", front_color: "#000000", icon: "img/icons/pirate.svg"},
    CAT: {back_color: "#d6d6d6", front_color: "#000000", icon: "img/icons/igreja.svg"},
    NZI: {back_color: "#ffffff", front_color: "#000000", icon: "img/icons/nazi.svg"},
    FSC: {back_color: "#d85136", front_color: "#000000", icon: "img/icons/fascism.svg"},
    JEY: {back_color: "#d8366c", front_color: "#000000", icon: "img/icons/joeyismo.svg"},
    SQR: {back_color: "#d6262f", front_color: "#000000", icon: "img/icons/spqr.svg"},
    RST: {back_color: "#a50e16", front_color: "#ffffff", icon: "img/icons/resistencia.svg"},
    SCL: {back_color: "#f40c17", front_color: "#000000", icon: "img/icons/socialismo.svg"},
    CTL: {back_color: "#efcc2f", front_color: "#000000", icon: "img/icons/capitalism.svg"},
    PTN: {back_color: "#4043f7", front_color: "#000000", icon: "img/icons/puritanism.svg"}
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

function convert_to_final_html(input) {
    if (!input)
        return "N/A";
    if (typeof input == "string")
        return input;
    var output = input.name;
    for (var i = 0; i < input.hover.length; i++) {
        output = output.replace(input.hover[i].word, `<a onmouseover="${input.hover[i].action}" onmouseleave="hide_info();" class="party-info-a">${input.hover[i].word}</a>`);
    }
    return output;
}

function get_party_info_by_id(p) {
    var party = parties_info[p];
    var response = "";

    response += "<h1>" + party.name + "</h1>";
    response += "<h3>Objetivo: " + convert_to_final_html(party.goal) + "</h3>";

    response += "<h3>Regras:</h3>";
    if (party.rules) {
        for (var i = 0; i < party.rules.length; i++) {
            response += convert_to_final_html(party.rules[i]) + "<br>";
        }
    } else {
        response += "N/A";
    }

    response += "<h3>Passivas:</h3>";
    if (party.passive) {
        for (var i = 0; i < party.passive.length; i++) {
            response += convert_to_final_html(party.passive[i]) + "<br>";
        }
    } else {
        response += "N/A";
    }
    
    response += "<h3>Bônus:</h3>";
    if (party.bonus) {
        for (var i = 0; i < party.bonus.length; i++) {
            response += convert_to_final_html(party.bonus[i]) + "<br>";
        }
    } else {
        response += "N/A";
    }
    
    response += "<h3>Movimentos Especiais:</h3>";
    if (party.special_moves) {
        for (var i = 0; i < party.special_moves.length; i++) {
            response += convert_to_final_html(party.special_moves[i]) + "<br>";
        }
    } else {
        response += "N/A";
    }
    
    response += "<h3>Tropas Especiais:</h3>";
    if (party.special_units) {
        for (var i = 0; i < party.special_units.length; i++) {
            response += convert_to_final_html(party.special_units[i]) + "<br>";
        }
    } else {
        response += "N/A";
    }
    
    response += "<h3>Líder: " + convert_to_final_html(party.leader) + "</h3>";
    response += "<h3>Local de Início: " + convert_to_final_html(party.start) + "</h3>";

    return response;
}

function update_lobby_party_info(party) {
    $('#class-info-place').html('');
    $('#class-info-place').html(get_party_info_by_id(party));
    $('.btn-class-selector').removeClass("btn-info");
    $(`#btn-class-${party}`).addClass("btn-info");
    $('#class-info-holder').height($(window).height() - $('#class-info-buttons').height() - $('#class-info-control').height() - 10);
}

function show_alert(type, message) {
    $('#alert-placeholder').html(`<div class="alert alert-${type} alert-dismissible error" id="error">
                                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                                    ${message}
                                  </div>`);
}

function show_info(key) {
    var info = parties_dict[key];
    if (!info) return;
    $('#info-msg').html(info);
    $('#info-msg').css('top', mouse_y);
    $('#info-msg').css('left', mouse_x);
    $('#info-msg').show();
}

function hide_info() {
    $('#info-msg').hide();
}

function write_line_to_lobby_log(line) {
    $('#lobby-log').html($('#lobby-log').html() + line + "<br>");
}