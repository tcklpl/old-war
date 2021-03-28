import { Country, CountryType } from "./country";

function default_countries(): Array<Country> {
    var brasil = new Country('BR', 'Brasil', CountryType.LAND);
    var venezuela = new Country('VN', 'Venezuela', CountryType.LAND);
    var peru = new Country('PR', 'Peru', CountryType.LAND);
    var argentina = new Country('AR', 'Argentina', CountryType.LAND);
    var méxico = new Country('MX', 'México', CountryType.LAND);
    var cuba = new Country('CB', 'Cuba', CountryType.LAND);
    var newYork = new Country('NY', 'New York', CountryType.LAND);
    var califórnia = new Country('CA', 'Califórnia', CountryType.LAND);
    var labrador = new Country('LB', 'Labrador', CountryType.LAND);
    var ottawa = new Country('OT', 'Ottawa', CountryType.LAND);
    var vancouver = new Country('VC', 'Vancouver', CountryType.LAND);
    var mackenzie = new Country('MC', 'Mackenzie', CountryType.LAND);
    var alaska = new Country('AL', 'Alaska', CountryType.LAND);
    var groenlândia = new Country('GL', 'Groenlândia', CountryType.LAND);
    var islândia = new Country('IS', 'Islândia', CountryType.LAND);
    var inglaterra = new Country('IN', 'Inglaterra', CountryType.LAND);
    var frança = new Country('FR', 'França', CountryType.LAND);
    var alemanha = new Country('GE', 'Alemanha', CountryType.LAND);
    var polônia = new Country('PL', 'Polônia', CountryType.LAND);
    var moscow = new Country('MW', 'Moscow', CountryType.LAND);
    var suécia = new Country('SC', 'Suécia', CountryType.LAND);
    var argélia = new Country('AG', 'Argélia', CountryType.LAND);
    var egito = new Country('EG', 'Egito', CountryType.LAND);
    var sudão = new Country('SD', 'Sudão', CountryType.LAND);
    var congo = new Country('CG', 'Congo', CountryType.LAND);
    var áfricaDoSul = new Country('AS', 'África do sul', CountryType.LAND);
    var madagascar = new Country('MG', 'Madagascar', CountryType.LAND);
    var orienteMédio = new Country('OM', 'Oriente médio', CountryType.LAND);
    var índia = new Country('ID', 'Índia', CountryType.LAND);
    var vietnam = new Country('VT', 'Vietnam', CountryType.LAND);
    var china = new Country('CN', 'China', CountryType.LAND);
    var mongólia = new Country('MO', 'Mongólia', CountryType.LAND);
    var aral = new Country('RL', 'Aral', CountryType.LAND);
    var ornsk = new Country('OK', 'Ornsk', CountryType.LAND);
    var dudinka = new Country('DU', 'Dudinka', CountryType.LAND);
    var tchita = new Country('TH', 'Tchita', CountryType.LAND);
    var vladvostok = new Country('VD', 'Vladvostok', CountryType.LAND);
    var sibéria = new Country('SB', 'Sibéria', CountryType.LAND);
    var japão = new Country('JP', 'Japão', CountryType.LAND);
    var sumatra = new Country('SM', 'Sumatra', CountryType.LAND);
    var novaGuinea = new Country('NG', 'Nova Guinea', CountryType.LAND);
    var austrália = new Country('AU', 'Austrália', CountryType.LAND);
    var bornea = new Country('BO', 'Bornea', CountryType.LAND);
    var oceanoPacífico = new Country('OP', 'Oceano Pacífico', CountryType.SEA);
    var oceanoAtlântico = new Country('OA', 'Oceano Atlântico', CountryType.SEA);
    var oceanoÍndico = new Country('OI', 'Oceano Índico', CountryType.SEA);
    var oceanoÁrtico = new Country('OR', 'Oceano Ártico', CountryType.SEA);

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

export {default_countries};