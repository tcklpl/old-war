var Country = require('./country');

function countries() {
    var brasil = new Country('BR', 'Brasil', 'ground');
    var venezuela = new Country('VN', 'Venezuela', 'ground');
    var peru = new Country('PR', 'Peru', 'ground');
    var argentina = new Country('AR', 'Argentina', 'ground');
    var méxico = new Country('MX', 'México', 'ground');
    var cuba = new Country('CB', 'Cuba', 'ground');
    var newYork = new Country('NY', 'New York', 'ground');
    var califórnia = new Country('CA', 'Califórnia', 'ground');
    var labrador = new Country('LB', 'Labrador', 'ground');
    var ottawa = new Country('OT', 'Ottawa', 'ground');
    var vancouver = new Country('VC', 'Vancouver', 'ground');
    var mackenzie = new Country('MC', 'Mackenzie', 'ground');
    var alaska = new Country('AL', 'Alaska', 'ground');
    var groenlândia = new Country('GL', 'Groenlândia', 'ground');
    var islândia = new Country('IS', 'Islândia', 'ground');
    var inglaterra = new Country('IN', 'Inglaterra', 'ground');
    var frança = new Country('FR', 'França', 'ground');
    var alemanha = new Country('GE', 'Alemanha', 'ground');
    var polônia = new Country('PL', 'Polônia', 'ground');
    var moscow = new Country('MW', 'Moscow', 'ground');
    var suécia = new Country('SC', 'Suécia', 'ground');
    var argélia = new Country('AG', 'Argélia', 'ground');
    var egito = new Country('EG', 'Egito', 'ground');
    var sudão = new Country('SD', 'Sudão', 'ground');
    var congo = new Country('CG', 'Congo', 'ground');
    var áfricaDoSul = new Country('AS', 'África do sul', 'ground');
    var madagascar = new Country('MG', 'Madagascar', 'ground');
    var orienteMédio = new Country('OM', 'Oriente médio', 'ground');
    var índia = new Country('ID', 'Índia', 'ground');
    var vietnam = new Country('VT', 'Vietnam', 'ground');
    var china = new Country('CN', 'China', 'ground');
    var mongólia = new Country('MO', 'Mongólia', 'ground');
    var aral = new Country('RL', 'Aral', 'ground');
    var ornsk = new Country('OK', 'Ornsk', 'ground');
    var dudinka = new Country('DU', 'Dudinka', 'ground');
    var tchita = new Country('TH', 'Tchita', 'ground');
    var vladvostok = new Country('VD', 'Vladvostok', 'ground');
    var sibéria = new Country('SB', 'Sibéria', 'ground');
    var japão = new Country('JP', 'Japão', 'ground');
    var sumatra = new Country('SM', 'Sumatra', 'ground');
    var novaGuinea = new Country('NG', 'Nova Guinea', 'ground');
    var austrália = new Country('AU', 'Austrália', 'ground');
    var bornea = new Country('BO', 'Bornea', 'ground');
    var oceanoPacífico = new Country('OP', 'Oceano Pacífico', 'ocean');
    var oceanoAtlântico = new Country('OA', 'Oceano Atlântico', 'ocean');
    var oceanoÍndico = new Country('OI', 'Oceano Índico', 'ocean');
    var oceanoÁrtico = new Country('OR', 'Oceano Ártico', 'ocean');

    brasil.register_ground_border(venezuela, peru, argentina);
    brasil.register_ocean_border(oceanoAtlântico);

    venezuela.register_ground_border(brasil, peru, méxico);
    venezuela.register_ocean_border(oceanoAtlântico, oceanoPacífico);

    peru.register_ground_border(brasil, argentina, venezuela);
    peru.register_ocean_border(oceanoAtlântico, oceanoPacífico);

    argentina.register_ground_border(brasil, peru);
    argentina.register_ocean_border(oceanoAtlântico);

    méxico.register_ground_border(venezuela, newYork, califórnia);
    méxico.register_ocean_border(oceanoPacífico, oceanoAtlântico);
    
    cuba.register_ocean_border(oceanoAtlântico);

    newYork.register_ground_border(méxico, califórnia, ottawa, labrador);
    newYork.register_ocean_border(oceanoAtlântico);

    califórnia.register_ground_border(méxico, newYork, ottawa, vancouver);
    califórnia.register_ocean_border(oceanoPacífico);

    labrador.register_ground_border(ottawa, newYork);
    labrador.register_ocean_border(oceanoAtlântico, oceanoÁrtico);

    ottawa.register_ground_border(labrador, newYork, califórnia, vancouver, mackenzie);
    ottawa.register_ocean_border(oceanoÁrtico);

    vancouver.register_ground_border(califórnia, ottawa, mackenzie, alaska);
    vancouver.register_ocean_border(oceanoPacífico);

    mackenzie.register_ground_border(ottawa, vancouver, alaska);
    mackenzie.register_ocean_border(oceanoÁrtico);

    alaska.register_ground_border(vancouver, mackenzie);
    alaska.register_ocean_border(oceanoÁrtico, oceanoPacífico);

    groenlândia.register_ocean_border(oceanoÁrtico, oceanoAtlântico);

    islândia.register_ocean_border(oceanoAtlântico);

    inglaterra.register_ocean_border(oceanoAtlântico);

    frança.register_ground_border(alemanha, polônia);
    frança.register_ocean_border(oceanoAtlântico);

    alemanha.register_ground_border(frança, polônia);
    alemanha.register_ocean_border(oceanoAtlântico);

    polônia.register_ground_border(alemanha, frança, moscow, orienteMédio);
    polônia.register_ocean_border(oceanoAtlântico);

    moscow.register_ground_border(suécia, polônia, orienteMédio, aral, ornsk);
    moscow.register_ocean_border(oceanoAtlântico, oceanoÁrtico);

    suécia.register_ground_border(moscow);
    suécia.register_ocean_border(oceanoAtlântico, oceanoÁrtico);

    argélia.register_ground_border(egito, sudão, congo);
    argélia.register_ocean_border(oceanoAtlântico);

    egito.register_ground_border(argélia, sudão, orienteMédio);
    egito.register_ocean_border(oceanoAtlântico, oceanoÍndico);

    sudão.register_ground_border(áfricaDoSul, congo, argélia, egito);
    sudão.register_ocean_border(oceanoÍndico);

    congo.register_ground_border(áfricaDoSul, sudão, argélia);
    congo.register_ocean_border(oceanoAtlântico);

    áfricaDoSul.register_ground_border(congo, sudão);
    áfricaDoSul.register_ocean_border(oceanoAtlântico, oceanoÍndico);

    madagascar.register_ocean_border(oceanoÍndico);

    orienteMédio.register_ground_border(egito, polônia, moscow, aral, índia);
    orienteMédio.register_ocean_border(oceanoAtlântico, oceanoÍndico);

    índia.register_ground_border(orienteMédio, aral, china, vietnam);
    índia.register_ocean_border(oceanoÍndico);

    vietnam.register_ground_border(índia, china);
    vietnam.register_ocean_border(oceanoÍndico, oceanoPacífico);

    china.register_ground_border(vietnam, índia, aral, ornsk, mongólia, tchita, vladvostok);
    china.register_ocean_border(oceanoPacífico);

    mongólia.register_ground_border(china, ornsk, dudinka, tchita);

    aral.register_ground_border(ornsk, moscow, orienteMédio, índia, china);

    ornsk.register_ground_border(moscow, aral, china, mongólia, dudinka);
    ornsk.register_ocean_border(oceanoÁrtico);

    dudinka.register_ground_border(ornsk, mongólia, tchita, sibéria);
    dudinka.register_ocean_border(oceanoÁrtico);

    tchita.register_ground_border(dudinka, mongólia, china, vladvostok, sibéria);

    vladvostok.register_ground_border(sibéria, tchita, china);
    vladvostok.register_ocean_border(oceanoÁrtico, oceanoPacífico);

    sibéria.register_ground_border(dudinka, tchita, vladvostok);
    sibéria.register_ocean_border(oceanoÁrtico);

    japão.register_ocean_border(oceanoPacífico);

    sumatra.register_ocean_border(oceanoÍndico, oceanoPacífico);

    novaGuinea.register_ocean_border(oceanoPacífico);

    austrália.register_ocean_border(oceanoÍndico, oceanoPacífico);

    bornea.register_ocean_border(oceanoPacífico);

    return [brasil, venezuela, peru, argentina, méxico, cuba, newYork, califórnia, labrador, ottawa, vancouver, mackenzie, alaska, groenlândia, islândia, inglaterra,
        frança, alemanha, polônia, moscow, suécia, argélia, egito, sudão, congo, áfricaDoSul, madagascar, orienteMédio, índia, vietnam, china, mongólia, aral, ornsk,
        dudinka, tchita, vladvostok, sibéria, japão, sumatra, novaGuinea, austrália, bornea, oceanoPacífico, oceanoAtlântico, oceanoÍndico, oceanoÁrtico];
}

module.exports = {countries};