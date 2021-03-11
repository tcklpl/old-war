var parties_info = {
    ANQ: {
        name: "Anarquismo",
        color: "#000000",
        goal: "O Anarquismo tem como único objetivo ser o inimigo de qualquer civilização que tenha adotado um sistema político. Ele é capaz de ganhar se de alguma forma, todas as formas de governo que possuem um estado forem destruídas ou se renderem",
        rules: ["Não pode fazer alianças", "Deve atacar todo turno"],
        passive: ["Se não houver nenhuma tropa no país, automaticamente esse país pertence ao Anarquismo"],
        bonus: ["A cada fim de turno, o Anarquismo ganha 2 tropas que podem ser livremente distribuídas", "Ganhar um combate lhe beneficia com +1 no dado (acumulativo por 1 turno)", {name: "Caso o Anarquismo ganhe os quatro ataques seguidos, as civilizações que sofreram os ataques serão Pressionadas por 1 Turno", hover: [{word: "Pressionadas", action: "show_info('pressionar');"}]}],
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
        special_moves: [
            {name: "Muralhas", hover: [{word: "Muralhas", action: "show_info('muralhas');"}]},
            {name: "Vassalos", hover: [{word: "Vassalos", action: "show_info('vassalo');"}]}
        ],
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
        special_moves: [
            {name: "Sanção: Paz Armada", hover: [{word: "Paz Armada", action: "show_info('sancao paz armada');"}]},
            {name: "Sanção: Convocação Militar", hover: [{word: "Convocação Militar", action: "show_info('sancao convocacao mil');"}]},
            {name: "Sanção: Bloqueio Continental", hover: [{word: "Bloqueio Continental", action: "show_info('sancao bloqueio cont');"}]},
            {name: "Sanção: Ajuda Comunitária", hover: [{word: "Ajuda Comunitária", action: "show_info('sancao ajuda com');"}]},
            {name: "Sanção: Holodomor", hover: [{word: "Holodomor", action: "show_info('sancao holodomor');"}]},
            {name: "Sanção: Estado Conservador", hover: [{word: "Estado Conservador", action: "show_info('sancao estado cons');"}]},
            {name: "Sanção: Indulgências", hover: [{word: "Indulgências", action: "show_info('sancao indulgencias');"}]},
            {name: "Sanção: Financiamento Legal", hover: [{word: "Financiamento Legal", action: "show_info('sancao financ legal');"}]},
            {name: "Sanção: Os Ambientalistas estão certos ", hover: [{word: "Os Ambientalistas estão certos", action: "show_info('sancao ambientalistas');"}]},
            {name: "Sanção: Igreja de Santo Hitler", hover: [{word: "Igreja de Santo Hitler", action: "show_info('sancao santo hitler');"}]},
            {name: "Sanção: Tratado de Versalhes", hover: [{word: "Tratado de Versalhes", action: "show_info('sancao versalhes');"}]},
            {name: "Sanção: Suserania e Vassalagem", hover: [{word: "Suserania e Vassalagem", action: "show_info('sancao suserania');"}]},
            {name: "Sanção: Renascimento", hover: [{word: "Renascimento", action: "show_info('sancao renascimento');"}]},
            {name: "Sanção: Doação", hover: [{word: "Doação", action: "show_info('sancao doacao');"}]},
            {name: "Sanção: Penalidade", hover: [{word: "Penalidade", action: "show_info('sancao penalidade');"}]},
            {name: "Bomba Nuclear", hover: [{word: "Bomba Nuclear", action: "show_info('bomba nuclear');"}]}
        ],
        special_units: null,
        leader: "Barry",
        start: "New York"
    },
    PRT: {
        name: "Piratas",
        color: "#0022cc",
        goal: {name: "Acumular 100 Karens", hover: [{word: "Karens", action: "show_info('karens');"}]},
        rules: ["Pode mover todas as tropas pelo mar", "Só pode atacar pelo oceano", "Só podem dominar países litorâneos", "Pode se mover 1 oceano por turno", "Se os galeões e navios ficarem 3 turnos no mar, elas morrem de escorbuto", "Deve se aliar e saquear alguém para conseguir usar sua Habilidade Especial e Bônus, mas pode trabalhar para múltiplas pessoas", "Inicia com um Karen", "Não posiciona peças"],
        passive: [],
        bonus: [{name: "Quando atacam países, realizam um saque nele, podendo ganhar de 1 a 6 Karens para cada peça sobrevivente", hover: [{word: "Karens", action: "show_info('karens');"}]}],
        special_moves: [
            {name: "Tiro(s) de Canhão", hover: [{word: "Tiro(s) de Canhão", action: "show_info('tiros de canhao');"}]}, 
            {name: "Estupro", hover: [{word: "Estupro", action: "show_info('estupro');"}]}, 
            {name: "Recrutamento", hover: [{word: "Recrutamento", action: "show_info('recrutamento pirata');"}]}, 
            {name: "Gigante Adamastor", hover: [{word: "Gigante Adamastor", action: "show_info('gigante adamastor');"}]}, 
            {name: "Bloqueio Continental", hover: [{word: "Bloqueio Continental", action: "show_info('pirata bloq cont');"}]}, 
            {name: "Troca de Karens por peças", hover: [{word: "Troca de Karens por peças", action: "show_info('troca de karens por pecas');"}]}
        ],
        special_units: [
            {name: "Galeão", hover: [{word: "Galeão", action: "show_info('galeao');"}]}, 
            {name: "Kraken", hover: [{word: "Kraken", action: "show_info('kraken');"}]}
        ],
        leader: "SPARROW, Capitão Jack",
        start: "Qualquer Oceano"
    },
    CAT: {
        name: "Igreja Católica",
        color: "#aaaaaa",
        goal: "Matar hereges em nome de Deus e possuir a Terra Sancta",
        rules: ["Não pode gerar exército, mas pode se mover e atacar", "Só pode ganhar territórios que forem doados por seu aliado"],
        passive: [{name: "Pode escolher um aliado como seu, podendo utilizar de seus exércitos para atacar. (A Habilidade Especial não é aplicada nesse caso)", hover: [{word: "Habilidade Especial", action: "show_info('igreja hab especial');"}]}],
        bonus: ["Os padres da Igreja podem abençoar um aliado com +1 em sua próxima ação"],
        special_moves: ["Ao vencer um ataque, irá converter todas as peças para suas", {name: "Tribunal do Santo Ofício", hover: [{word: "Tribunal do Santo Ofício", action: "show_info('tribunal santo oficio');"}]}],
        special_units: [{name: "Jesus", hover: [{word: "Jesus", action: "show_info('jesus');"}]}],
        leader: "Papa",
        start: "Itália (França)"
    },
    NZI: {
        name: "Nazismo",
        color: "#ffffff",
        goal: "Aliar-se ou destruir seus opositores, enquanto mantém toda a Europa sob seu controle",
        rules: ["Ao atacar Moscou, terá -3 no dado"],
        passive: ["Blitzkrieg – Se o Nazismo, em seu turno, realizar seu primeiro movimento como um ataque, ele ganha um bônus de +1 no dado"],
        bonus: ["Se o Nazismo, após iniciar uma Blitzkrieg, ganhar os três ataques, ele ganha automaticamente um outro ataque"],
        special_moves: [{name: "Campos de Concentração", hover: [{word: "Campos de Concentração", action: "show_info('campos de concentracao');"}]}],
        special_units: [{name: "Waffen SS", hover: [{word: "Waffen SS", action: "show_info('waffen ss');"}]}],
        leader: "Adolf Hitler",
        start: "Alemanha"
    },
    FSC: {
        name: "Fascismo",
        color: "#ff8080",
        goal: "Acabar com a Resistência e seus aliados. Caso a Resistência não esteja em jogo, deverá conquistar o mundo inteiro",
        rules: ["Enquanto a ONU, Anarquismo ou a Resistência estiverem no jogo, derrotas demonstraram fraqueza do governo autoritário, e 1 tropa irá desertar sempre que o Fascismo perder duas batalhas seguidas"],
        passive: ["O Fascismo é imune a Pressionamentos", "O Fascismo pode interferir em ataques, mas apenas pode ajudar para atacar"],
        bonus: [{name: "Se o Fascismo derrotar algum inimigo seu definitivamente, ele entra em estado de Supremacia", hover: [{word: "Supremacia", action: "show_info('fascismo supremacia');"}]}],
        special_moves: [
            {name: "AI-1", hover: [{word: "AI-1", action: "show_info('ai 1');"}]},
            {name: "AI-2", hover: [{word: "AI-2", action: "show_info('ai 2');"}]},
            {name: "AI-3", hover: [{word: "AI-3", action: "show_info('ai 3');"}]},
            {name: "AI-4", hover: [{word: "AI-4", action: "show_info('ai 4');"}]},
            {name: "AI-5", hover: [{word: "AI-5", action: "show_info('ai 5');"}]}
        ],
        special_units: [
            {name: "Benito Mussolini", hover: [{word: "Benito Mussolini", action: "show_info('benito mussolini');"}]},
            {name: "Artur da Costa e Silva", hover: [{word: "Artur da Costa e Silva", action: "show_info('artur costa silva');"}]},
            {name: "Jair Messias Bolsonaro", hover: [{word: "Jair Messias Bolsonaro", action: "show_info('bolsonaro');"}]}
        ],
        leader: "Benito Mussolini",
        start: null
    },
    JEY: {
        name: "Joeyismo",
        color: "#800000",
        goal: "Perder",
        rules: null,
        passive: null,
        bonus: null,
        special_moves: null,
        special_units: [{name: "Joey", hover: [{word: "Joey", action: "show_info('joey');"}]}],
        leader: "Joey",
        start: "Brasil"
    },
    SQR: {
        name: "SPQR",
        color: "#661100",
        goal: "Destruir todas as nações não-civilizadas e dominar a Europa e a África",
        rules: [{name: "Qualquer coisa considerada como não-civilizada causa +1 de dano em Ataques contra Cidades Romanas", hover: [{word: "não-civilizada", action: "show_info('nao civilizadas');"}]}],
        passive: [
            {name: "As tropas podem alternar entre Legionários e Pretorianos", hover: [
                {word: "Legionários", action: "show_info('legionarios');"}, 
                {word: "Pretorianos", action: "show_info('pretorianos');"}
            ]}
        ],
        bonus: [{name: "Todo ataque bem-sucedido Pressiona nações", hover: [{word: "Pressiona", action: "show_info('pressionar');"}]}],
        special_moves: [{name: "Civilizações Pressionadas combatem com -1 no dado se sofrerem um ataque do Império", hover: [{word: "Pressionadas", action: "show_info('pressionar');"}]}],
        special_units: [
            {name: "Legionários", hover: [{word: "Legionários", action: "show_info('legionarios');"}]}, 
            {name: "Pretorianos", hover: [{word: "Pretorianos", action: "show_info('pretorianos');"}]}, 
            {name: "Senadores", hover: [{word: "Senadores", action: "show_info('senadores');"}]}],
        leader: "Caius Augustus",
        start: "Itália (França)"
    },
    RST: {
        name: "Resistência",
        color: "#ff3333",
        goal: "Destruir o Fascismo. Se o Fascismo não estiver no jogo, destruir o Exército Branco ou transformar eles em seus aliados permanentemente",
        rules: [
            "A Resistência começa com 1 tropa a mais após a colocação inicial, mas só poderá posicionar peças quando ganha ao menos um ataque", 
            {name: "Ela não participa da Assembleia Geral", hover: [{word: "Assembleia Geral", action: "show_info('assembleia geral');"}]}, 
            "A Resistência só pode ser atacada por aliados do Fascismo, Nazismo e da Igreja ou os próprios", 
            "A Resistência pode interferir em ataques, mas apenas para defender"
        ],
        passive: null,
        bonus: ["Se a Resistência perder 3 batalhas seguidas, ela automaticamente irá ganhar +1 no dado em sua próxima batalha"],
        special_moves: [{name: "Contra-Autoritarismos", hover: [{word: "Contra-Autoritarismos", action: "show_info('contra-autoritarismos');"}]}],
        special_units: [
            {name: "Guilherme Boulos", hover: [{word: "Guilherme Boulos", action: "show_info('guilherme boulos');"}]},
            {name: "Lenin Skin Pré-Revolução", hover: [{word: "Lenin Skin Pré-Revolução", action: "show_info('lenin pre revolucao');"}]},
            {name: "Robespierre", hover: [{word: "Robespierre", action: "show_info('robespierre');"}]}
        ],
        leader: null,
        start: null
    },
    SCL: {
        name: "Socialismo",
        color: "#ff0000",
        goal: "Socializar o Mundo",
        rules: ["Desde que se movam com mais de 2 tropas, o Exército Vermelho pode se movimentar para qualquer lugar do mapa sem restrição desde que estejam andando por área aliada, tal como defender aliados", "Para poder invocar suas tropas especiais URSS (Unidades Revolucionárias Sádicas Socialistas) Moscou precisa passar por uma revolução, ou seja, é necessário perder Moscou e reconquistá-la"],
        passive: ["A fome mata 1 tropa a cada 10, por turno, não morrendo se o número de tropas for menor que 10. Tropas socialistas também sofrem a Penalidade em batalhas com mais de dois turnos"],
        bonus: ["Se os Socialistas estiverem em menor número em um território aliado, eles combatem com +1 no dado"],
        special_moves: [
            {name: "Tsar Bomb", hover: [{word: "Tsar Bomb", action: "show_info('tsar bomb');"}]}, 
            {name: "Ilha da Utopia", hover: [{word: "Ilha da Utopia", action: "show_info('ilha da utopia');"}]}
        ],
        special_units: [
            {name: "Lula", hover: [{word: "Lula", action: "show_info('lula');"}]}, 
            {name: "Vladimir Lenin", hover: [{word: "Vladimir Lenin", action: "show_info('vladimir lenin');"}]}, 
            {name: "Josef Stalin", hover: [{word: "Josef Stalin", action: "show_info('josef stalin');"}]}, 
            {name: "Thomas Morus", hover: [{word: "Thomas Morus", action: "show_info('thomas morus');"}]}, 
            {name: "Wilsinho", hover: [{word: "Wilsinho", action: "show_info('wilsinho');"}]}
        ],
        leader: "Karl Marx",
        start: "Moscou"
    },
    CTL: {
        name: "Capitalismo",
        color: "#ffff33",
        goal: "Comprar o Mundo",
        rules: [
            {name: "Crises", hover: [{word: "Crises", action: "show_info('crises');"}]},
            {name: "Para invocar uma tropa especial, o capitalismo precisa se recuperar de uma crise", hover: [{word: "crise", action: "show_info('crises');"}]}
        ],
        passive: ["É o único capaz de realizar trocas de países. Ganha 1 peça a cada troca realizada"],
        bonus: [{name: "O Bônus continental é dobrado", hover: [{word: "Bônus continental", action: "show_info('bonus continental');"}]}],
        special_moves: null,
        special_units: [
            {name: "John Keynes", hover: [{word: "John Keynes", action: "show_info('john keynes');"}]},
            {name: "Ray Croc", hover: [{word: "Ray Croc", action: "show_info('ray croc');"}]},
            {name: "Mark Zuckenberg", hover: [{word: "Mark Zuckenberg", action: "show_info('mark zuckenberg');"}]},
            {name: "Steve Jobs", hover: [{word: "Steve Jobs", action: "show_info('steve jobs');"}]},
            {name: "Donald Trump", hover: [{word: "Donald Trump", action: "show_info('donald trump');"}]}
        ],
        leader: "Henry Ford",
        start: "Califórnia"
    },
    PTN: {
        name: "Puritanismo",
        color: "#e69900",
        goal: "Os Puritanos devem colonizar toda a América do Norte e criar uma manufatura em cada país",
        rules: ["Se os puritanos não realizarem nenhum negócio em um turno, eles ficam com -1 no dado"],
        passive: ["A cada Grande Mercador vivo, os Puritanos recebem +1 peça para uma reposição"],
        bonus: [{name: "Sempre que realizar um Golpe de Estado bem-sucedido, os Puritanos ganham +3 Tropas", hover: [{word: "Golpe de Estado", action: "show_info('golpe de estado');"}]}],
        special_moves: [
            {name: "Golpe de Estado", hover: [{word: "Golpe de Estado", action: "show_info('golpe de estado');"}]},
            {name: "Ato de Navegação", hover: [{word: "Ato de Navegação", action: "show_info('ato de navegacao');"}]}
        ],
        special_units: [
            {name: "Grandes Mercadores", hover: [{word: "Grandes Mercadores", action: "show_info('grandes mercadores');"}]},
            {name: "Manufaturas", hover: [{word: "Manufaturas", action: "show_info('manufaturas');"}]}
        ],
        leader: "Oliver Cromwell",
        start: "Inglaterra"
    }
}

var parties_dict = {
    'anarquia de regras'    : `Por um turno, o Anarquismo pode realizar uma das seguintes opções (não necessariamente em seu turno): <br><ul>
                                    <li>Atacar qualquer país com qualquer quantidade de peças (inclui poder atacar 4 vezes)</li>
                                    <li>Defender qualquer país com qualquer quantidade de peças</li>
                                    <li>Invocar o Black Block onde quiser</li>
                                    <li>Fazer alianças de 1 turno</li>
                                    <li>Passar por uma Muralha</li>
                                    <li>Ignorar uma sanção da ONU</li>
                                    <li>Atacar inimigos voadores ou territórios marítimos</li>
                                    <li>Ignorar uma habilidade especial de alguma civilização</li>
                                    <li>Posicionar peças</li>
                               </ul>`,
    'black block'           : 'O Black Block é uma unidade de 5 peças que surge no round seguinte em que o Anarquismo perder três territórios em sequência. O Black Block irá surgir no último país tomado do Anarquismo, e então, atacará todo turno até as forças opositoras ou ele for destruído. Caso o Black Block vença, o Black Block reconstitui 1 peça, e ele irá avançar para o país vizinho que possui menos tropas inimigas e irá ataca-lo. Podem existir até três Black Blocks ao mesmo tempo.',
    'recrutamento'          : 'Para recrutar com sucesso, o dado deve ser maior do que do alvo, só podem fazer 3 recrutamentos por turno',
    'allahu akbar'          : 'Allahu Ahkbar permite que o ISIS sacrifique uma tropa infiltrada para causar dano massivo em determinado país (de 1 a 3 peças). Pode ser utilizado 3 vezes em um mesmo turno',
    'veiculo bomba'         : 'A cada turno, o ISIS pode construir um veículo bomba com o custo de quatro de suas peças. O Veículo bomba, uma vez acionado, irá se dirigir para um país alvo sem limite de movimentação, e então era explodir, causando um dano de 1 até 6 peças',
    'muralhas'              : 'As Muralhas são formadas a partir de linhas horizontais, verticais ou diagonais dos territórios Feudais, não podendo ser formados entre ilhas. Passar pelas muralhas não é permitido, somente entre unidades que voam ou aliados. Cada parte da Muralha pode possuir até 12 tropas no máximo e no mínimo 2. Para invadir a Muralha, deve-se jogar um dado antes e o número deve ser superior ao número de tropas na Muralha dividido por 2 (arredondado para baixo) e só então realizar o ataque. Se na verificação o número for inferior, o ataque é automaticamente contido. Se a Muralha cercar completamente um país, por todos os seus lados, ele é transformado em Vassalo',
    'vassalo'               : 'O país Vassalo deve dar 1 peça para o Senhor Feudal todo turno. Se o país ficar sem peças, ele automaticamente se torna propriedade do Senhor Feudal',
    'dragao'                : 'O Feudalismo inicia com um Dragão como uma peça de 1. A cada turno, ele ganha uma peça a mais, evoluindo até 10. O dragão pode voar e, portanto, possui movimentos ilimitados. Ele é capaz de atacar navios. O Dragão se regenera em 1 peça por turno quando está nas Muralhas',
    'thor'                  : 'Thor é uma peça de 10 que voa. A cada turno enquanto Thor estiver ativo, um país será sorteado, e um dado será jogado. O país alvo sofrerá um relâmpago em seu território, eliminando o número de peças Para invocar Thor, é necessário tomar toda Escandinávia',
    'soluco'                : 'Se Soluço atacar o Dragão, e ganhar em um duelo de dados, ele irá domar o Dragão. Enquanto montar o dragão, Soluço se torna em Montador de Berk, que vale 15 peças. Soluço pode ser livremente invocado como peça de 2',
    'sancao paz armada'     : 'Envia uma quantidade de suas tropas entre dois países fronteiriços, impedindo que seus aliados comecem um combate lá (Dura 2 turnos)',
    'sancao convocacao mil' : 'Todos os países filiados à ONU devem atender seu chamado, atribuindo um número “x” de peças para a causa estabelecida (No máximo 10 exércitos no total)',
    'sancao bloqueio cont'  : 'Estabelece um Bloqueio ou uma Quarentena em um Continente ou em uma Ilha, impedindo que ela receba novas tropas de qualquer maneira. Dragões, Thor e Jesus podem voar sobre',
    'sancao ajuda com'      : 'Anula a Penalidade do Socialismo por 1 Turno',
    'sancao holodomor'      : 'Duplica a Penalidade do Socialismo por 1 Turno',
    'sancao estado cons'    : 'As Nações que atacarem a Igreja por 2 turnos deverão pagar com 3 tropas',
    'sancao indulgencias'   : 'Penaliza a Igreja por vendas de Indulgências, obrigando-a a desfazer o Tribunal do Santo Ofício ou anula sua capacidade de conversão por 1 turno',
    'sancao financ legal'   : 'Pode intervir em negociações Puritanas ou do Capitalismo[Unipolarismo necessário] em favor destes, basicamente obrigando a outra civilização a aceitar o tratado. Ganha 1 peça ao fazer isso',
    'sancao ambientalistas' : 'A ONU pode penalizar o Capitalismo/Puritanismo o obrigando a ficar um turno sem jogar para remediar suas ações que prejudicam o meio-ambiente',
    'sancao santo hitler'   : 'Legaliza o Nazismo e o define como sistema global mundial. Enquanto este tratado estiver ativo, o Nazismo deve proteger a ONU obrigatoriamente, e ganha a peça Jesus Hitler (ver em alianças)',
    'sancao versalhes'      : 'A ONU pode obrigatoriamente retirar um território do Nazismo e dá-lo para alguém e impede sua geração de tropas por 1 turno',
    'sancao suserania'      : 'A ONU pode ceder um território em que ela possui intervenção para o Feudalismo, ambos ganham +1 peça',
    'sancao renascimento'   : 'O Feudalismo torna-se pressionado pela ONU enquanto o tratado durar',
    'sancao doacao'         : 'Pode doar tropas para um de seus afiliados',
    'sancao penalidade'     : 'O Secretário-Geral da ONU pode criar uma determinada Lei para qualquer jogador ou time de jogadores desde que seja aprovada pela Assembleia Geral (Todos os outros jogadores)',
    'bomba nuclear'         : 'Dizima um país inteiro, e pode ser utilizada imediatamente. Só pode ser utilizada com aprovação do Conselho de Segurança',
    'pressionar'            : 'Civilizações pressionadas perdem uma tropa por turno por se sentirem intimidadas contra a civilização oponente',
    'karens'                : 'Karens são as moedas especiais dos Piratas. Para que galeões realizem alguma Habilidade, os piratas usam Karens, que podem ser ganhos com saques ou como pagamentos, <b>3 tropas aliadas = 1 karen</b>',
    'tiros de canhao'       : 'O disparo de canhão é a forma de Piratas causarem dano, sendo que cada tiro tem o poder de 1 a 3. Cada tiro custa 1 Karen',
    'estupro'               : 'Junto com saques, os Piratas podem estuprar as pessoas do país. Tropas estupradas recebem -1 no dado, e os Piratas +1 em suas respectivas próximas ações. Custo de 2 Karens',
    'recrutamento pirata'   : 'Piratas chamam pessoas para sua tripulação afim. 1 Karen compra 2 peças',
    'gigante adamastor'     : 'Os Piratas invocam O Gigante Adamastor, que cria ventos que agilizam seus navios e os permitem ir para qualquer lugar do mapa. Custo de 5 Karens',
    'pirata bloq cont'      : 'Piratas também podem realizar bloqueios continentais, impedindo peças de entrarem ou sair de continentes, países ou mares. Custo de 10 Karens por turno',
    'galeao'                : 'O Galeão é uma peça que vale 2. É o meio dos Piratas utilizarem suas Habilidades Especiais. O Pirata inicia com 1 Galeão, podendo posicionar no máximo 6',
    'kraken'                : 'O Kraken é uma peça de 10. Ele é capaz de devorar instantaneamente navios',
    'igreja hab especial'   : 'Ao vencer um ataque, irá converter todas as peças para suas',
    'tribunal santo oficio' : `Sob efeito do Tribunal do Santo Ofício, a Igreja é capaz de gerar Soldados Cruzadistas como peças normais para realizar a Santa Inquisição ou as Cruzadas. Sob efeito do Tribunal, as tropas da Igreja entram nas seguintes condições:<ul>
                                    <li>O Bônus é desfeito</li>
                                    <li>Soldados Cruzadistas atacam com +1 no dado se possuírem posse da Terra Santa ou se Jesus estiver vivo</li>
                                    <li>O Tribunal não pode ser desfeito até a Cruzada acabar (tomar a Terra Santa) ou os hereges forem destruídos</li>
                               </ul>`,
    'jesus'                 : 'Jesus é capaz de voar livremente sem restrição de movimentos e concede +1 em defesa global para todas as tropas da Igreja ou aliados, protegendo-os de radiação também. Jesus surge espontaneamente no 3º Turno e sempre voltará a cada três turnos se for morto',
    'campos de concentracao': 'Todo país Nazista possui um Campo de Concentração. Em uma defesa bem sucedida, qualquer tropa inimiga é aprisionada sob ele. No final de cada turno, todas as peças presas em Campos de Concentração se transformam em tropas nazistas. Atacar um Campo de Concentração e ganhar automaticamente liberta as tropas',
    'waffen ss'             : 'Pode se infiltrar em qualquer país e é capaz de detectar outras tropas do tipo espiãs. A tropa Waffen infiltrada é capaz de manipular as peças do país sorrateiramente. Uma infiltração requer uma vitória no dado',
    'ai 1'                  : 'O Primeiro Ato Institucional pode ser utilizado livremente. Permite que o Fascismo consiga invocar um de seus líderes',
    'ai 2'                  : 'O Segundo Ato Institucional pode ser utilizado no turno após o primeiro, sendo considerado um ato político. Com o AI-2 ativo, o Fascismo justifica qualquer invasão sua como necessidade de espaço vital e não pode ser repreendido politicamente pela ONU',
    'ai 3'                  : 'O Terceiro Ato Institucional é um ato de guerra, e requer o AI-2 ativo. Com o AI-3 ativo, todo primeiro ataque do turno automaticamente definirá o país-alvo como pressionado. Ganhar o ataque irá manter o efeito continuamente na civilização',
    'ai 4'                  : 'O Quarto Ato Institucional é um ato econômico, e requer o AI-3 ativo. Toda vez que o Fascismo ganhar um ataque contra um país, ele irá sucumbir suas tropas juntos, aderindo seus prisioneiros ao modelo Totalitarista e convertendo-os',
    'ai 5'                  : 'O Quinto Ato Institucional é o último, e requer o AI-4 ativo. Quando ativado, ele permanentemente destrói as habilidades especiais de todas as outras civilizações e unidades especiais permanentemente (as peças se mantêm), mantendo somente as Habilidades Especiais do Fascismo e de suas peças. O AI-5 só será destituído quando o Fascismo for derrotado',
    'benito mussolini'      : 'Se o Fascismo estiver com menos de 5 territórios, ele entra em estado de neutralidade e automaticamente se alia com a civilização mais forte do jogo, ganhando invulnerabilidade a qualquer ataque. Entretanto, após isso, Benito é automaticamente morto e o Fascismo não pode posicionar peças por 2 turnos, e então o efeito se encerra',
    'artur costa silva'     : 'Se Artur da Costa e Silva permanecer vivo por 2 turnos, ele poderá invocar qualquer AI (Exceto o 5)',
    'bolsonaro'             : 'Bolsonaro possui o poder do não-governo. Enquanto for o líder do Fascismo, Bolsonaro poderá ignorar qualquer sanção da ONU sem sofrer nenhuma consequência, porém, não terá voz na Assembleia Geral',
    'fascismo supremacia'   : 'Supremacia garante ao Fascismo +1 em dados por 3 turnos, se tornando cumulativo',
    'joey'                  : `Joey é a única peça que o Joeyísmo possui. Seu objetivo é roubar todas as peças do jogo<br>
                               Joey é uma peça de 22. Ele rouba tropas de uma pessoa para dar a outras (3 tropas no máximo)<br>
                               A cada turno ganha um Airdrop de 1 tropa em qualquer lugar dele`,
    'nao civilizadas'       : 'Anarquistas, Vikings, Piratas e Zumbis',
    'assembleia geral'      : 'Assembleia de todos os jogadores',
    'legionarios'           : 'Legionários são todas as unidades que atacam no Império Romano. Quando 6 Legionários se juntam, eles formam uma Legião, cada um ganhando +1 no dado em um ataque. É cumulativo',
    'pretorianos'           : 'Pretorianas são unidades fixas que protegem cidades e o Senador. Quando 6 Pretorianos se juntam, eles formam a Guarda Pretoriana, cada um ganhando +1 no dado em uma defesa, cumulativo. Pretorianos podem se mover se forem junto com o Senador',
    'senadores'             : 'Unidade Diplomática que vale 5 peças, incapaz de atacar. O Senador é capaz de criar sanções para civilizações que possuem mais de 3 países pressionados ou conquistados pelo SPQR. Senadores podem interferir em decisões da ONU, podendo jogar um dado para impedir ou possibilitar uma Sanção, todavia não podem alterar decisões do Conselho de Segurança. Podem ser criados livremente, mas apenas na Capital',
    'contra-autoritarismos' : `A cada dois turnos, a Resistência pode invadir um país em até 3 movimentos de distância de qualquer país território controlado, realizando ali um combate. 
                               Se a Resistência perder, esse país entra em Anarquia`,
    'guilherme boulos'      : 'Boulos pode invadir qualquer país do mapa, conseguindo levar todas as tropas que ele quiser para lá, inclusive os protegidos com Muralhas. Apenas uma vez por turno. É possível invocar Boulos ao utilizar Contra-Autoritarismos no Brasil',
    'lenin pre revolucao'   : 'Esta versão de Lenin permite que o soviete, após 1 turno vivo, una a Resistência com o Socialismo, criando o Anarcocomunismo. Lenin pode ser invocado ao utilizar Contra-Autoritarismos em Moscou',
    'robespierre'           : 'Instaurando o Governo do Terror, todo inimigo que sofrer um ataque enquanto Robespierre estiver vivo, sofrerá uma tortura, sentindo-se Pressionado. Se Robespierre pessoalmente atacar ou sofrer um ataque de uma Unidade Especial, e vencer, essa Unidade é automaticamente destruída pela Guilhotina. Para invocar Robespierre, é necessário tomar utilizar Contra-Autoritarismos na França',
    'tsar bomb'             : `Mais poderosa do que a Bomba Nuclear convencional, a Tsar Bomb é capaz de destruir um continente inteiro, porém ela deve ser preparada em dois turnos de antecedência. Enquanto a Tsar Bomb for preparada, a Penalidade do Socialismo é dobrada`,
    'lula'                  : 'Lula possui o poder de eliminar a fome do Socialismo enquanto estiver ativo. Embora não possa atacar, Lula pode se defender e se movimentar',
    'vladimir lenin'        : 'Ao ser morto, pode ser utilizado para invocar Stalin',
    'josef stalin'          : 'Stalin transforma Vladivostok em Gulags. Toda tropa morta pelo Exército Vermelho em ataques ou defesas bem-sucedidas é enviada para os Gulags. No fim de todo turno, as unidades dos Gulags se tornam parte do Exército Vermelho',
    'thomas morus'          : 'Thomas pode ser sacrificado para invocar a Ilha da Utopia. Após isso, o Socialismo perde o direito da Tsar Bomb e de invocar outros URSS',
    'ilha da utopia'        : 'A Ilha da Utopia (Cuba) só pode ser invocada levando Morus até a ilha de Cuba. Morus deve ficar lá por 2 turnos vivo, e então poderá ser utilizado para invocar a Ilha. A Ilha acaba com a Penalidade, concede +2 tropas para o Socialismo todo turno e é intocável por soldados normais que não podem voar ou nadar, no entanto, ela pode ser conquistada. A Ilha da Utopia possui uma defesa de +1, mesmo se estiver sem defesa',
    'wilsinho'              : 'Wilson é um ditador maligno sem habilidade especial. No entanto, ao tirar em sequência 1, 2 e 3 nos dados com Wilson ativo, ele se transforma no Deus Vermelho, instantaneamente comunizando o mundo e garantindo a vitória Socialista',
    'bonus continental'     : 'Pode colocar +1 tropa por turno multiplicada pelo número de países do continente (com máximo de 5). Tem +1 no dado para defender tal continente ou para ataques que se originem dele',
    'crises'                : 'Sempre que um de seus aliados é derrotado, ou o Capitalismo perde 3 batalhas seguidas, ele entra em Crise por 1 turno. Durante a Crise, o Capitalismo só pode colocar a metade de suas tropas e é incapaz de realizar trocas de países',
    'john keynes'           : 'John Keynes inflaciona a bolsa de valores, conseguindo duplicar o número de peças de um país por turno',
    'ray croc'              : 'Ray Croc filhadaputamente obriga um país a se vender para o Capitalismo ao preço de uma única tropa. Deve-se jogar um dado. Somente Croc pode comprar as Muralhas',
    'mark zuckenberg'       : 'Cria redes pelo Facebook em qualquer país, conseguindo destruir a influência do país aliado para ele. Funciona como Pressionar, porém as tropas perdidas unem-se ao Capitalismo',
    'steve jobs'            : 'Vende produtos Apple para um país, fazendo-o perder 1 tropa por turno para comprá-los. <b>Manter Steve Jobs vivo por 4 turnos define a vitória do Capitalismo</b>',
    'donald trump'          : 'O país em que Trump estiver estacionado recebe um muro, ganhando +1 em defesas',
    'golpe de estado'       : 'O Parlamento é capaz de aplicar um Golpe de Estado em um país. É necessário sacrificar um Grande Mercador para realizar um golpe de estado. O Golpe de Estado só funcionará se o dado for maior que o país defensor. Se ele falhar, o país entra em Anarquia',
    'grandes mercadores'    : 'Um Grande Mercador é capaz de realizar arrendamentos, podendo ceder territórios ou tropas para outros países, negociando-os em um acordo. Os Grandes Mercadores podem ser invocados livremente, um por turno. Com 3 Grandes Mercadores, o Puritanismo é capaz de instaurar seu Ato de Navegação',
    'manufaturas'           : 'Unidade fixa que não é capaz de se defender. Gera 1 tropa por turno (cada uma). Devem ser sacrificados 5 soldados para criar uma',
    'ato de navegacao'      : 'Se o Ato de Navegação estiver ativo, as tropas puritanas controlam os mares, permitindo que suas unidades possam se movimentar por ele também. Puritanos passam a conseguir realizar Trocas de Países'
}