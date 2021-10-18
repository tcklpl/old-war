
function get_content_div_per_country(country) {
    c = countries[country];
    return `<div id="gui-country-info">País: <b>${c.name}</b></div>`;
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