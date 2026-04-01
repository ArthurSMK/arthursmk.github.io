// ================= Variáveis Globais =================
let smkoins = 0;
let sps = 0;
let spsTotal = 0;             // <--- ADICIONADA AQUI
let spsEstruturas = 0;        // <--- ADICIONADA AQUI
let cliquesTotais = 0;
let estruturasCompradasTotais = 0;
let smkoinsPorCliqueTotais = 0;

let multiplicadorSPSGlobal = 1;
let multiplicadorCompra = 1; // <--- Adicione esta linha

// ================= Formatador de Números =================
function formatarNumero(num) {
    if (num < 1000000) return num.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
    const sufixos = [
        { valor: 1e93, nome: 'Trigintilhões' }, { valor: 1e90, nome: 'Novemvigintilhões' }, { valor: 1e87, nome: 'Octovigintilhões' },
        { valor: 1e84, nome: 'Septenvigintilhões' }, { valor: 1e81, nome: 'Sexvigintilhões' }, { valor: 1e78, nome: 'Quinvigintilhões' },
        { valor: 1e75, nome: 'Quatuorvigintilhões' }, { valor: 1e72, nome: 'Trevigintilhões' }, { valor: 1e69, nome: 'Duovigintilhões' },
        { valor: 1e66, nome: 'Unvigintilhões' }, { valor: 1e63, nome: 'Vigintilhões' }, { valor: 1e60, nome: 'Novemdecilhões' },
        { valor: 1e57, nome: 'Octodecilhões' }, { valor: 1e54, nome: 'Septendecilhões' }, { valor: 1e51, nome: 'Sexdecilhões' },
        { valor: 1e48, nome: 'Quindecilhões' }, { valor: 1e45, nome: 'Quatuordecilhões' }, { valor: 1e42, nome: 'Tredecilhões' },
        { valor: 1e39, nome: 'Duodecilhões' }, { valor: 1e36, nome: 'Undecilhões' }, { valor: 1e33, nome: 'Decilhões' },
        { valor: 1e30, nome: 'Nonilhões' }, { valor: 1e27, nome: 'Octilhões' }, { valor: 1e24, nome: 'Septilhões' },
        { valor: 1e21, nome: 'Sextilhões' }, { valor: 1e18, nome: 'Quintilhões' }, { valor: 1e15, nome: 'Quatrilhões' },
        { valor: 1e12, nome: 'Trilhões' }, { valor: 1e9, nome: 'Bilhões' }, { valor: 1e6, nome: 'Milhões' }
    ];
    for (let i = 0; i < sufixos.length; i++) {
        if (num >= sufixos[i].valor) {
            let valorReduzido = num / sufixos[i].valor;
            let formatado = valorReduzido.toFixed(3).replace(/0+$/, '').replace(/\.$/, '').replace('.', ',');
            let sufixoNome = formatado === "1" ? sufixos[i].nome.replace('ões', 'ão') : sufixos[i].nome;
            return `${formatado} ${sufixoNome}`;
        }
    }
    return Math.floor(num).toLocaleString('pt-BR');
}

// ================= Banco de Dados do GDD =================
const estruturas = [
    { id: 'lurkers', nome: 'Lurkers', desc: 'A galera que deixa a aba mutada.', custoBase: 15, spsBase: 0.1, qtd: 0, mult: 1 },
    { id: 'mods', nome: 'Moderadores', desc: 'Pessoas para organizar o chat e chamar mais gente.', custoBase: 100, spsBase: 1, qtd: 0, mult: 1 },
    { id: 'fundadores', nome: 'Fundadores', desc: 'Pessoas que estão desde o começo e geram muitas views.', custoBase: 1100, spsBase: 8, qtd: 0, mult: 1 },
    { id: 'lojinho', nome: 'Lojinho da Nikk', desc: 'A Nikk Craft abre a lojinha, atraindo views pela curiosidade.', custoBase: 12000, spsBase: 47, qtd: 0, mult: 1 },
    { id: 'justchatting', nome: 'Just Chatting', desc: 'Aquele momento de trocar ideia, prendendo a atenção de todos.', custoBase: 130000, spsBase: 260, qtd: 0, mult: 1 },
    { id: 'minecraft', nome: 'Minecraft Clássico', desc: 'Transmitir versões antigas atrai os saudosistas em peso.', custoBase: 1400000, spsBase: 1400, qtd: 0, mult: 1 },
    { id: 'smkast', nome: 'SMKast', desc: 'O podcast da live para conversar sobre tudo. Atrai um público gigante.', custoBase: 20000000, spsBase: 7800, qtd: 0, mult: 1 },
    { id: 'creebinho', nome: 'Creebinho', desc: 'Urso de pelucia que está desde o começo com a gente.', custoBase: 330000000, spsBase: 44000, qtd: 0, mult: 1 },
];

// O "icone" aceita Emoji ou uma URL de imagem (ex: "url('img/mouse.png')")
let upgrades = [
    // Upgrades Globais
    { id: 'cafe_expresso', icone: "url('global/global-1.png')", nome: 'Garrafa de Café Expresso', desc: 'Duplica TODAS as estruturas (SPS x2). O streamer não dorme, a live não para.', custo: 100000, comprado: false, tipo: 'global', visivel: true },
    { id: 'cadeira_ergonomica', icone: "url('global/global-2.png')", nome: 'Cadeira Gamer Ergonômica', desc: 'Duplica TODAS as estruturas (SPS x2). Fim das dores nas costas, lives de 12 horas desbloqueadas.', custo: 5000000, comprado: false, tipo: 'global', reqUpg: 'cafe_expresso', visivel: false }, // 5 Milhões
    { id: 'fibra_optica', icone: "url('global/global-3.png')", nome: 'Internet Fibra Óptica 1 Giga', desc: 'Duplica TODAS as estruturas (SPS x2). Zero lag de upload, a transmissão flui na velocidade da luz.', custo: 250000000, comprado: false, tipo: 'global', reqUpg: 'cadeira_ergonomica', visivel: false }, // 250 Milhões
    { id: 'iluminacao_pro', icone: "url('global/global-4.png')", nome: 'Kit de Softbox e LEDs', desc: 'Duplica TODAS as estruturas (SPS x2). A iluminação profissional deixa a webcam com cara de cinema.', custo: 15000000000, comprado: false, tipo: 'global', reqUpg: 'fibra_optica', visivel: false }, // 15 Bilhões
    { id: 'mic_estudio', icone: "url('global/global-5.png')", nome: 'Microfone Condensador de Estúdio', desc: 'Duplica TODAS as estruturas (SPS x2). Voz de locutor de rádio, retenção máxima de público no Just Chatting.', custo: 1000000000000, comprado: false, tipo: 'global', reqUpg: 'iluminacao_pro', visivel: false }, // 1 Trilhão
    { id: 'camera_4k', icone: "url('global/global-6.png')", nome: 'Câmera Mirrorless 4K', desc: 'Duplica TODAS as estruturas (SPS x2). Cada poro do seu rosto é renderizado em altíssima definição.', custo: 75000000000000, comprado: false, tipo: 'global', reqUpg: 'mic_estudio', visivel: false }, // 75 Trilhões
    { id: 'dual_pc', icone: "url('global/global-7.png')", nome: 'Setup Dual PC da NASA', desc: 'Duplica TODAS as estruturas (SPS x2). Jogar EA FC, Cyberpunk e streamar ao mesmo tempo sem perder 1 frame.', custo: 5e15, comprado: false, tipo: 'global', reqUpg: 'camera_4k', visivel: false }, // 5 Quadrilhões
    { id: 'selo_parceiro', icone: "url('global/global-8.png')", nome: 'Parceria Oficial (Verificado)', desc: 'Duplica TODAS as estruturas (SPS x2). O algoritmo da Twitch finalmente te nota e recomenda pra todo mundo.', custo: 500e15, comprado: false, tipo: 'global', reqUpg: 'dual_pc', visivel: false }, // 500 Quadrilhões
    { id: 'patrocinio_marca', icone: "url('global/global-9.png')", nome: 'Patrocínio Master', desc: 'Duplica TODAS as estruturas (SPS x2). Orçamento milionário entra no canal para bancar os eventos mais insanos.', custo: 50e18, comprado: false, tipo: 'global', reqUpg: 'selo_parceiro', visivel: false }, // 50 Quintilhões
    { id: 'estudio_proprio', icone: "url('global/global-10.png')", nome: 'Estúdio Próprio Isolado', desc: 'Duplica TODAS as estruturas (SPS x2). Acústica perfeita, cenário impecável, hype incontrolável.', custo: 5e21, comprado: false, tipo: 'global', reqUpg: 'patrocinio_marca', visivel: false }, // 5 Sextilhões
    { id: 'transmissao_neural', icone: "url('global/global-11.png')", nome: 'Transmissão Neural Borboleta', desc: 'Duplica TODAS as estruturas (SPS x2). Você transmite a live diretamente para a mente da sua comunidade.', custo: 500e21, comprado: false, tipo: 'global', reqUpg: 'estudio_proprio', visivel: false }, // 500 Sextilhões

    // Upgrades de Clique
    { id: 'mouse_bolinha', icone: "url('clicker/clicker-1.png')", nome: 'Mouse de Bolinha', desc: 'Adiciona +1% do seu SPS atual ao valor do clique.', custo: 50000, comprado: false, tipo: 'clique', reqSmkoinsClique: 1000, visivel: false },
    { id: 'mouse_optico', icone: "url('clicker/clicker-2.png')", nome: 'Mouse Óptico Genérico', desc: 'Adiciona +1% do seu SPS atual ao valor do clique.', custo: 5000000, comprado: false, tipo: 'clique', reqSmkoinsClique: 100000, visivel: false },
    { id: 'mouse_escritorio', icone: "url('clicker/clicker-3.png')", nome: 'Mouse Sem Fio de Escritório', desc: 'Adiciona +1% do seu SPS atual ao valor do clique.', custo: 500000000, comprado: false, tipo: 'clique', reqSmkoinsClique: 10000000, visivel: false },
    { id: 'mouse_gamer', icone: "url('clicker/clicker-4.png')", nome: 'Mouse Gamer de Entrada (RGB)', desc: 'Adiciona +1% do seu SPS atual ao valor do clique.', custo: 50e9, comprado: false, tipo: 'clique', reqSmkoinsClique: 1e9, visivel: false },
    { id: 'mouse_paracord', icone: "url('clicker/clicker-5.png')", nome: 'Mouse com Cabo Paracord', desc: 'Adiciona +1% do seu SPS atual ao valor do clique.', custo: 5e12, comprado: false, tipo: 'clique', reqSmkoinsClique: 100e9, visivel: false },
    { id: 'mouse_ultraleve', icone: "url('clicker/clicker-6.png')", nome: 'Mouse Gamer Ultraleve (Colmeia)', desc: 'Adiciona +1% do seu SPS atual ao valor do clique.', custo: 500e12, comprado: false, tipo: 'clique', reqSmkoinsClique: 10e12, visivel: false },
    { id: 'mouse_superlight', icone: "url('clicker/clicker-7.png')", nome: 'Mouse Sem Fio Pro Superlight', desc: 'Adiciona +1% do seu SPS atual ao valor do clique.', custo: 50e15, comprado: false, tipo: 'clique', reqSmkoinsClique: 1e15, visivel: false },
    { id: 'mouse_8k', icone: "url('clicker/clicker-8.png')", nome: 'Mouse com Sensor 8000Hz', desc: 'Adiciona +1% do seu SPS atual ao valor do clique.', custo: 5e18, comprado: false, tipo: 'clique', reqSmkoinsClique: 100e15, visivel: false },
    { id: 'mouse_quantico', icone: "url('clicker/clicker-9.png')", nome: 'Mouse Óptico-Mecânico Quântico', desc: 'Adiciona +1% do seu SPS atual ao valor do clique.', custo: 500e18, comprado: false, tipo: 'clique', reqSmkoinsClique: 10e18, visivel: false },
    { id: 'mouse_neural', icone: "url('clicker/clicker-10.png')", nome: 'Mouse de Neuro-Conexão', desc: 'Adiciona +1% do seu SPS atual ao valor do clique.', custo: 50e21, comprado: false, tipo: 'clique', reqSmkoinsClique: 1e21, visivel: false },
    { id: 'mouse_borboleta', icone: "url('clicker/clicker-11.png')", nome: 'A Borboleta Digital (Mouse Supremo)', desc: 'Adiciona +1% do seu SPS atual ao valor do clique.', custo: 5e24, comprado: false, tipo: 'clique', reqSmkoinsClique: 100e21, visivel: false },
    
    // Upgrades Lurkers
    { id: 'abafixada', icone: "url('lurk/lurk-1.png')", nome: 'Aba Fixada', desc: 'Dobra o SPS dos Lurkers. Eles não fecham mais o navegador sem querer.', custo: 500, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 1, visivel: false },// ~100
    { id: 'abamutada', icone: "url('lurk/lurk-2.png')", nome: 'Aba Mutada', desc: 'Dobra o SPS dos Lurkers. Menos barulho, mais farm de views.', custo: 10000, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 10, visivel: false }, // ~10 Mil
    { id: 'qualidade160p', icone: "url('lurk/lurk-3.png')", nome: 'Qualidade 160p', desc: 'Dobra o SPS dos Lurkers. Economizando internet para focar em deixar a live aberta.', custo: 100000, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 25, visivel: false }, // ~100 Mil
    { id: 'escondidonotrabalho', icone: "url('lurk/lurk-4.png')", nome: 'Escondido no Trabalho', desc: 'Dobra o SPS dos Lurkers. O chefe achou que era uma planilha.', custo: 10000000, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 50, visivel: false }, // ~10 Milhões
    { id: 'pcligadodemadrugada', icone: "url('lurk/lurk-5.png')", nome: 'PC Ligado de Madrugada', desc: 'Dobra o SPS dos Lurkers. A live rolando solta enquanto eles dormem.', custo: 100000000, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 100, visivel: false }, // ~100 Milhões
    { id: 'segundomonitor', icone: "url('lurk/lurk-6.png')", nome: 'Segundo Monitor', desc: 'Dobra o SPS dos Lurkers. A stream agora é parte definitiva do setup deles.', custo: 1e9, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 150, visivel: false }, // ~1 Bilhão
    { id: 'celularnagaveta', icone: "url('lurk/lurk-7.png')", nome: 'Celular na Gaveta', desc: 'Dobra o SPS dos Lurkers. Bateria viciada, mas a view tá contando.', custo: 10e9, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 200, visivel: false }, // ~10 Bilhões
    { id: 'antiinatividade', icone: "url('lurk/lurk-8.png')", nome: 'Extensão Anti-Inatividade', desc: 'Dobra o SPS dos Lurkers. Um script impede a Twitch de pausar o vídeo.', custo: 10e12, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 250, visivel: false }, // ~10 Trilhões
    { id: 'lurkerprofissional', icone: "url('lurk/lurk-9.png')", nome: 'Lurker Profissional', desc: 'Dobra o SPS dos Lurkers. Eles não assistem mais à live, eles habitam a live.', custo: 10e15, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 300, visivel: false }, // ~10 Quadrilhões
    { id: 'entidadeonipresente', icone: "url('lurk/lurk-10.png')", nome: 'Entidade Onipresente', desc: 'Dobra o SPS dos Lurkers. Um espírito ancestral que contabiliza +1 viewer.', custo: 10e18, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 350, visivel: false }, // ~10 Quintilhões
    { id: 'sombraborboleta', icone: "url('lurk/lurk-11.png')", nome: 'A Sombra da Borboleta', desc: 'Dobra o SPS dos Lurkers. O silêncio absoluto se converte em hype infinito.', custo: 10e21, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 400, visivel: false }, // ~10 Sextilhões

    // Upgrades Mods
    { id: 'banhammer', icone: "url('mod/mod-1.png')", nome: 'Ban Hammer de Ouro', desc: 'Dobra o SPS dos Moderadores. O chat não ousa mais pisar fora da linha.', custo: 1000, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 1, visivel: false },
    { id: 'nightbot', icone: "url('mod/mod-2.png')", nome: 'Nightbot Configurado', desc: 'Dobra o SPS dos Moderadores. Comandos automáticos trabalhando por você.', custo: 5000, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 5, visivel: false }, // ~35 Mil
    { id: 'filtro_palavras', icone: "url('mod/mod-3.png')", nome: 'Filtro de Palavras Implacável', desc: 'Dobra o SPS dos Moderadores. Copypastas chatas são destruídas na velocidade da luz.', custo: 50000, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 25, visivel: false }, // ~1.2 Milhões
    { id: 'modo_seguidores', icone: "url('mod/mod-4.png')", nome: 'Modo Apenas Seguidores', desc: 'Dobra o SPS dos Moderadores. Espanta os trolls e foca na comunidade.', custo: 5000000, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 50, visivel: false }, // ~1.2 Bilhões
    { id: 'visao_raiox', icone: "url('mod/mod-5.png')", nome: 'Painel de Mod em Segundo Monitor', desc: 'Dobra o SPS dos Moderadores. Visão completa de logs e histórico dos baderneiros.', custo: 500000000, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 100, visivel: false }, // ~1.3 Trilhões
    { id: 'delay_chat', icone: "url('mod/mod-6.png')", nome: 'Modo Lento e Delay Tático', desc: 'Dobra o SPS dos Moderadores. Tempo exato para apagar a mensagem antes do streamer ler.', custo: 50e9, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 150, visivel: false }, // ~1.5 Quadrilhões
    { id: 'tropa_vips', icone: "url('mod/mod-7.png')", nome: 'Milícia de VIPs', desc: 'Dobra o SPS dos Moderadores. Subornando a galera ativa com a espadinha para ajudar a vigiar.', custo: 50e12, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 200, visivel: false }, // ~1.5 Quintilhões
    { id: 'skynet_mods', icone: "url('mod/mod-8.png')", nome: 'Exército de Bots Anti-Spam', desc: 'Dobra o SPS dos Moderadores. A inteligência artificial assumiu a ordem do chat.', custo: 50e15, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 250, visivel: false }, // ~1.8 Sextilhões
    { id: 'ban_interdimensional', icone: "url('mod/mod-9.png')", nome: 'Banimento Interdimensional', desc: 'Dobra o SPS dos Moderadores. O troll é banido de todas as realidades alternativas da Twitch.', custo: 50e18, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 300, visivel: false }, // ~2 Septilhões
    { id: 'juizo_final', icone: "url('mod/mod-10.png')", nome: 'O Juízo Final do Chat', desc: 'Dobra o SPS dos Moderadores. O botão de "Limpar Chat" agora purifica a alma dos viewers.', custo: 50e21, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 350, visivel: false }, // ~2 Octilhões
    { id: 'espada_nikk', icone: "url('mod/mod-11.png')", nome: 'A Espada Ancestral da Nikk', desc: 'Dobra o SPS dos Moderadores. A lenda da moderação abençoa a equipe com controle absoluto.', custo: 50e24, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 400, visivel: false }, // ~2.5 Nonilhões

    // Upgrades Fundadores
    { id: '1mes', icone: "url('fund/fund-1.png')", nome: '1 Mês de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 11000, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 1, visivel: false }, // ~15 Mil
    { id: '3meses', icone: "url('fund/fund-2.png')", nome: '3 Meses de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 55000, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 5, visivel: false }, // ~500 Mil
    { id: '6meses', icone: "url('fund/fund-3.png')", nome: '6 Meses de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 550000, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 25, visivel: false }, // ~18 Milhões
    { id: '9meses', icone: "url('fund/fund-4.png')", nome: '9 Meses de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 55000000, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 50, visivel: false }, // ~20 Bilhões
    { id: '1ano', icone: "url('fund/fund-5.png')", nome: '1 Ano de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 5.5e9, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 100, visivel: false }, // ~20 Trilhões
    { id: '1anoemeio', icone: "url('fund/fund-6.png')", nome: '1 Ano e Meio de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 550e9, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 150, visivel: false }, // ~25 Quadrilhões
    { id: '2anos', icone: "url('fund/fund-7.png')", nome: '2 Anos de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 550e12, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 200, visivel: false }, // ~25 Quintilhões
    { id: '3anos', icone: "url('fund/fund-8.png')", nome: '3 Anos de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 550e15, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 250, visivel: false }, // ~30 Sextilhões
    { id: '4anos', icone: "url('fund/fund-9.png')", nome: '4 Anos de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 550e18, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 300, visivel: false }, // ~30 Septilhões
    { id: '5anos', icone: "url('fund/fund-10.png')", nome: '5 Anos de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 550e21, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 350, visivel: false }, // ~35 Octilhões
    { id: '6anos', icone: "url('fund/fund-11.png')", nome: '6 Anos de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 5.5e27, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 400, visivel: false }, // ~35 Nonilhões

    //Upgrades Lojinho
    { id: 'estoque_renovado', icone: "url('lojinho/lojinho-1.png')", nome: 'Estoque Renovado', desc: 'Dobra o SPS da Lojinho. Itens básicos como figurinhas e badges simples chegam na prateleira.', custo: 120000, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 1, visivel: false }, // 120 Mil
    { id: 'resgate_pontos', icone: "url('lojinho/lojinho-2.png')", nome: 'Comandos de Resgate', desc: 'Dobra o SPS da Lojinho. Integração com os pontos do canal facilita as "vendas".', custo: 600000, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 5, visivel: false }, // 5 Milhões
    { id: 'caixa_misteriosa', icone: "url('lojinho/lojinho-3.png')", nome: 'Lootbox da Comunidade', desc: 'Dobra o SPS da Lojinho. Ninguém sabe o que tem dentro, mas todo mundo quer comprar.', custo: 6000000, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 25, visivel: false }, // 6 Milhões
    { id: 'mercado_livre_smk', icone: "url('lojinho/lojinho-4.png')", nome: 'SMK Livre', desc: 'Dobra o SPS da Lojinho. Entrega rápida de memes e engajamento em todo o chat.', custo: 600000000, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 50, visivel: false }, // 150 Bilhões
    { id: 'frete_gratis', icone: "url('lojinho/lojinho-5.png')", nome: 'Selo Frete Grátis', desc: 'Dobra o SPS da Lojinho. Removendo barreiras para o chat gastar todos os SMKoins.', custo: 60e9, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 100, visivel: false }, // 60 Bilhões
    { id: 'itens_exclusivos', icone: "url('lojinho/lojinho-6.png')", nome: 'Edição Limitada ArthurSMK', desc: 'Dobra o SPS da Lojinho. Itens raros que só os mais ricos do chat conseguem ostentar.', custo: 6e12, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 150, visivel: false }, // 150 Quadrilhões
    { id: 'franquia_global', icone: "url('lojinho/lojinho-7.png')", nome: 'Franquia da Nikk', desc: 'Dobra o SPS da Lojinho. A lojinha agora tem filiais em todas as streams da categoria.', custo: 6e15, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 200, visivel: false }, // 150 Quintilhões
    { id: 'monopolio_hype', icone: "url('lojinho/lojinho-8.png')", nome: 'Monopólio do Hype', desc: 'Dobra o SPS da Lojinho. Não existe mais concorrência, tudo passa pela mão da Nikk.', custo: 6e18, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 250, visivel: false }, // 150 Sextilhões
    { id: 'e_commerce_neural', icone: "url('lojinho/lojinho-9.png')", nome: 'E-commerce Telepático', desc: 'Dobra o SPS da Lojinho. O viewer pensa no item e a Lojinho já debita os SMKoins.', custo: 6e21, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 300, visivel: false }, // 200 Septilhões
    { id: 'lojinho_multiversal', icone: "url('lojinho/lojinho-10.png')", nome: 'Lojinho Multiversal', desc: 'Dobra o SPS da Lojinho. Vendendo produtos para versões alternativas da sua comunidade.', custo: 6e24, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 350, visivel: false }, // 200 Octilhões
    { id: 'artefato_supremo', icone: "url('lojinho/lojinho-11.png')", nome: 'O Artefato Divino da Nikk', desc: 'Dobra o SPS da Lojinho. Um item lendário que converte cada transação em energia pura de hype.', custo: 60e27, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 400, visivel: false }, // 60 Octilhões

    //Upgrades Just Chatting
    { id: 'mic_condensador', icone: "url('just/just-1.png')", nome: 'Microfone Condensador', desc: 'Dobra o SPS do Just Chatting. Áudio limpinho, o chat ouve até sua respiração.', custo: 1300000, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 1, visivel: false }, // 1.3 Milhão
    { id: 'react_videos', icone: "url('just/just-2.png')", nome: 'React de Vídeos em Alta', desc: 'Dobra o SPS do Just Chatting. Reagir a vídeos aleatórios segura a view que é uma beleza.', custo: 6500000, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 5, visivel: false }, // 50 Milhões
    { id: 'tier_lists', icone: "url('just/just-3.png')", nome: 'Tier Lists Polêmicas', desc: 'Dobra o SPS do Just Chatting. Fazer ranking de comida gera um caos maravilhoso no chat.', custo: 65000000, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 25, visivel: false }, // 1.5 Bilhão
    { id: 'historia_triste', icone: "url('just/just-4.png')", nome: 'Storytelling de Qualidade', desc: 'Dobra o SPS do Just Chatting. Contar histórias da sua vida prende a atenção de 100% da live.', custo: 6.5e9, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 50, visivel: false }, // 1.5 Trilhão
    { id: 'fofoca_edificante', icone: "url('just/just-5.png')", nome: 'Fofoca Edificante', desc: 'Dobra o SPS do Just Chatting. Comentar o drama alheio atrai curiosos de toda a Twitch.', custo: 650e9, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 100, visivel: false }, // 1.5 Quadrilhão
    { id: 'papo_cabeca', icone: "url('just/just-6.png')", nome: 'Filosofia de Boteco', desc: 'Dobra o SPS do Just Chatting. Discussões profundas sobre o universo às 3 da manhã.', custo: 65e12, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 150, visivel: false }, // 2 Quintilhões
    { id: 'hipnose_coletiva', icone: "url('just/just-7.png')", nome: 'Hipnose Coletiva', desc: 'Dobra o SPS do Just Chatting. Sua voz se torna tão suave que o chat entra em transe de hype.', custo: 65e15, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 200, visivel: false }, // 65 Quadrlhões
    { id: 'carisma_sobrenatural', icone: "url('just/just-8.png')", nome: 'Carisma Sobrenatural', desc: 'Dobra o SPS do Just Chatting. Você sorri e milhares de SMKoins são gerados instantaneamente.', custo: 65e18, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 250, visivel: false }, // 2.5 Septilhões
    { id: 'orador_supremo', icone: "url('just/just-9.png')", nome: 'Orador Supremo', desc: 'Dobra o SPS do Just Chatting. Cada palavra dita ecoa pela plataforma inteira.', custo: 65e21, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 300, visivel: false }, // 2.5 Octilhões
    { id: 'seita_borboleta', icone: "url('just/just-10.png')", nome: 'O Culto da Borboleta', desc: 'Dobra o SPS do Just Chatting. O Just Chatting transcende e vira um estilo de vida absoluto.', custo: 65e24, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 350, visivel: false }, // 3 Nonilhões
    { id: 'verbo_primordial', icone: "url('just/just-11.png')", nome: 'O Verbo Primordial', desc: 'Dobra o SPS do Just Chatting. Uma única palavra sua contém todo o engajamento do universo.', custo: 65e27, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 400, visivel: false }, // 3 Decilhões

    //Upgrades Minecraft
    { id: 'versao_1_0', icone: "url('mine/mine-1.png')", nome: 'Versão 1.0 Oficial', desc: 'Dobra o SPS do Minecraft Clássico. O saudosismo bate forte e a galera não sai mais da live.', custo: 14000000, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 1, visivel: false }, // 14 Milhões
    { id: 'primeira_noite', icone: "url('mine/mine-2.png')", nome: 'Sobrevivendo à Primeira Noite', desc: 'Dobra o SPS do Minecraft Clássico. Uma casa de terra, mas segura contra os Creepers.', custo: 70000000, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 5, visivel: false }, // 500 Milhões
    { id: 'diamantes', icone: "url('mine/mine-3.png')", nome: 'A Primeira Picareta de Diamante', desc: 'Dobra o SPS do Minecraft Clássico. O chat vai à loucura quando você acha o minério azul.', custo: 700000000, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 25, visivel: false }, // 15 Bilhões
    { id: 'portal_nether', icone: "url('mine/mine-4.png')", nome: 'Portal do Nether', desc: 'Dobra o SPS do Minecraft Clássico. Acessando uma nova dimensão de views flamejantes.', custo: 70e9, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 50, visivel: false }, // 15 Trilhões
    { id: 'ender_dragon', icone: "url('mine/mine-5.png')", nome: 'A Queda do Dragão', desc: 'Dobra o SPS do Minecraft Clássico. Zerando o jogo e subindo os créditos na tela.', custo: 7e12, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 100, visivel: false }, // 20 Quadrilhões
    { id: 'era_dos_mods', icone: "url('mine/mine-6.png')", nome: 'A Era dos Mods', desc: 'Dobra o SPS do Minecraft Clássico. Instalando modpacks caóticos que mudam a gameplay inteira.', custo: 700e12, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 150, visivel: false }, // 20 Quintilhões
    { id: 'servidor_comunidade', icone: "url('mine/mine-7.png')", nome: 'Servidor com a Comunidade', desc: 'Dobra o SPS do Minecraft Clássico. O chat inteiro entra no mapa para construir e destruir tudo.', custo: 700e15, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 200, visivel: false }, // 20 Sextilhões
    { id: 'automacao_redstone', icone: "url('mine/mine-8.png')", nome: 'Engenharia Redstone', desc: 'Dobra o SPS do Minecraft Clássico. Fazendas automáticas de engajamento rodando 24 horas.', custo: 700e18, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 250, visivel: false }, // 25 Septilhões
    { id: 'hardcore_mode', icone: "url('mine/mine-9.png')", nome: 'Modo Hardcore', desc: 'Dobra o SPS do Minecraft Clássico. A tensão de que o jogo pode acabar a qualquer segundo prende o público.', custo: 700e21, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 300, visivel: false }, // 25 Octilhões
    { id: 'metaverso_blocos', icone: "url('mine/mine-10.png')", nome: 'Metaverso de Blocos', desc: 'Dobra o SPS do Minecraft Clássico. O jogo agora é uma realidade virtual indistinguível da vida real.', custo: 700e24, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 350, visivel: false }, // 30 Nonilhões
    { id: 'codigo_fonte', icone: "url('mine/mine-11.png')", nome: 'Acesso ao Código Fonte', desc: 'Dobra o SPS do Minecraft Clássico. Você hackeia a Matrix dos blocos e controla as leis da física da stream.', custo: 7e30, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 400, visivel: false }, // 30 Decilhões

    // Upgrades SMKast
    { id: 'marketing_cortes', icone: "url('smkast/smkast-1.png')", nome: 'Estratégia de Cortes', desc: 'Dobra o SPS do SMKast. Seus clipes curtos viralizam no TikTok e no Shorts, dobrando a audiência da live.', custo: 200000000, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 1, visivel: false }, // 200 Milhões
    { id: 'convidado_polemico', icone: "url('smkast/smkast-2.png')", nome: 'Convidado Polêmico', desc: 'Dobra o SPS do SMKast. O chat entra em ebulição com as opiniões duvidosas de quem você chamou pra conversar.', custo: 1e9, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 5, visivel: false }, // 6.5 Bilhões
    { id: 'mesa_padrao', icone: "url('smkast/smkast-3.png')", nome: 'Mesa de Podcast Profissional', desc: 'Dobra o SPS do SMKast. Microfones caríssimos em braços articulados. Agora o visual impõe respeito.', custo: 10e9, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 25, visivel: false }, // 200 Bilhões
    { id: 'patrocinio_energetico', icone: "url('smkast/smkast-4.png')", nome: 'Patrocínio de Energético', desc: 'Dobra o SPS do SMKast. Geladeirinha no fundo do cenário e orçamento infinito para a produção.', custo: 1e12, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 50, visivel: false }, // 200 Trilhões
    { id: 'plateia_aovivo', icone: "url('smkast/smkast-5.png')", nome: 'SMKast com Plateia ao Vivo', desc: 'Dobra o SPS do SMKast. Você aluga um teatro e a comunidade inteira comparece para gritar no fundo.', custo: 100e12, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 100, visivel: false }, // 250 Quadrilhões
    { id: 'rede_televisao', icone: "url('smkast/smkast-6.png')", nome: 'Rede SMK de Televisão', desc: 'Dobra o SPS do SMKast. O podcast compra uma emissora de TV aberta e domina a mídia tradicional.', custo: 10e15, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 150, visivel: false }, // 300 Quintilhões
    { id: 'traducao_global', icone: "url('smkast/smkast-7.png')", nome: 'Tradução Simultânea Global', desc: 'Dobra o SPS do SMKast. O mundo inteiro assiste e entende as piadas internas da sua live em tempo real.', custo: 10e18, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 200, visivel: false }, // 300 Sextilhões
    { id: 'transmissao_espacial', icone: "url('smkast/smkast-8.png')", nome: 'Transmissão Espacial', desc: 'Dobra o SPS do SMKast. O estúdio é lançado na órbita da Terra. Aliens começam a se inscrever no canal.', custo: 10e21, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 250, visivel: false }, // 350 Septilhões
    { id: 'entrevista_historica', icone: "url('smkast/smkast-9.png')", nome: 'Máquina do Tempo', desc: 'Dobra o SPS do SMKast. Você volta no tempo para entrevistar figuras históricas e quebra a internet.', custo: 10e24, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 300, visivel: false }, // 350 Octilhões
    { id: 'monopolio_da_fala', icone: "url('smkast/smkast-10.png')", nome: 'O Monopólio da Comunicação', desc: 'Dobra o SPS do SMKast. Todas as conversas do planeta Terra agora são propriedades intelectuais do SMKast.', custo: 10e27, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 350, visivel: false }, // 400 Nonilhões
    { id: 'a_voz_do_universo', icone: "url('smkast/smkast-11.png')", nome: 'A Voz do Universo', desc: 'Dobra o SPS do SMKast. As palavras ditas no SMKast se tornam as leis da física que regem a realidade.', custo: 100e30, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 400, visivel: false }, // 10 Nonilhões

    //Upgrades CREEBINHO
    { 
        id: 'creebinho_estante', icone: "url('creebinho/creebinho-1.png')", nome: 'Creebinho na Estante', 
        desc: 'Dobra o SPS do Creebinho. Ele observa tudo do seu lugar de honra no cenário.', 
        custo: 3.3e9, comprado: false, tipo: 'estrutura', alvo: 'creebinho', reqEstruturaQtd: 1, visivel: false 
    }, // 15 Bilhões

    { 
        id: 'abraco_pelucia', icone: "url('creebinho/creebinho-2.png')", nome: 'Abraço de Pelúcia', 
        desc: 'Dobra o SPS do Creebinho. Um abraço rápido recupera as energias para mais 4 horas de live.', 
        custo: 16.5e9, comprado: false, tipo: 'estrutura', alvo: 'creebinho', reqEstruturaQtd: 55, visivel: false 
    }, // 500 Bilhões

    { 
        id: 'mascote_oficial', icone: "url('creebinho/creebinho-3.png')", nome: 'Mascote Oficial do Canal', 
        desc: 'Dobra o SPS do Creebinho. Agora ele tem seu próprio emote e comando no chat.', 
        custo: 165e9, comprado: false, tipo: 'estrutura', alvo: 'creebinho', reqEstruturaQtd: 25, visivel: false 
    }, // 16 Trilhões

    { 
        id: 'gravata_creebinho', icone: "url('creebinho/creebinho-4.png')", nome: 'Creebinho de Gravata', 
        desc: 'Dobra o SPS do Creebinho. O mascote agora é o CEO oficial da ArthurSMK Enterprises.', 
        custo: 16.5e12, comprado: false, tipo: 'estrutura', alvo: 'creebinho', reqEstruturaQtd: 50, visivel: false 
    }, // 17.5 Quadrilhões

    { 
        id: 'guardiao_lives', icone: "url('creebinho/creebinho-5.png')", nome: 'O Guardião das Lives', 
        desc: 'Dobra o SPS do Creebinho. Enquanto ele estiver na tela, nenhum frame será dropado.', 
        custo: 1.65e15, comprado: false, tipo: 'estrutura', alvo: 'creebinho', reqEstruturaQtd: 100, visivel: false 
    }, // 1.65 Quadrilhões

    { 
        id: 'algoritmo_pelucia', icone: "url('creebinho/creebinho-6.png')", nome: 'Algoritmo de Algodão', 
        desc: 'Dobra o SPS do Creebinho. Ele aprendeu a manipular o algoritmo da plataforma por conta própria.', 
        custo: 165e15, comprado: false, tipo: 'estrutura', alvo: 'creebinho', reqEstruturaQtd: 150, visivel: false 
    }, // 21 Sextilhões

    { 
        id: 'pelucia_indestrutivel', icone: "url('creebinho/creebinho-7.png')", nome: 'Pelúcia Indestrutível', 
        desc: 'Dobra o SPS do Creebinho. Ele sobreviveu a todas as mudanças de setup e casa, ele é eterno.', 
        custo: 165e18, comprado: false, tipo: 'estrutura', alvo: 'creebinho', reqEstruturaQtd: 200, visivel: false 
    }, // 23 Septilhões

    { 
        id: 'fabrica_creebinhos', icone: "url('creebinho/creebinho-8.png')", nome: 'Fábrica de Creebinhos', 
        desc: 'Dobra o SPS do Creebinho. Cada membro da comunidade agora tem o seu próprio protetor.', 
        custo: 165e21, comprado: false, tipo: 'estrutura', alvo: 'creebinho', reqEstruturaQtd: 250, visivel: false 
    }, // 25 Octilhões

    { 
        id: 'creebinho_gigante', icone: "url('creebinho/creebinho-9.png')", nome: 'Creebinho Gigante', 
        desc: 'Dobra o SPS do Creebinho. Uma estátua inflável de 10 metros de altura no jardim do estúdio.', 
        custo: 165e24, comprado: false, tipo: 'estrutura', alvo: 'creebinho', reqEstruturaQtd: 300, visivel: false 
    }, // 27 Nonilhões

    { 
        id: 'coracao_stream', icone: "url('creebinho/creebinho-10.png')", nome: 'O Coração da Stream', 
        desc: 'Dobra o SPS do Creebinho. A live não existiria sem a presença silenciosa e explosiva dele.', 
        custo: 165e27, comprado: false, tipo: 'estrutura', alvo: 'creebinho', reqEstruturaQtd: 350, visivel: false 
    }, // 29 Decilhões

    { 
        id: 'creebinho_transcedente', icone: "url('creebinho/creebinho-11.png')", nome: 'Creebinho Transcendente', 
        desc: 'Dobra o SPS do Creebinho. Ele não é mais uma pelúcia, ele é a pura manifestação do hype universal.', 
        custo: 1.65e33, comprado: false, tipo: 'estrutura', alvo: 'creebinho', reqEstruturaQtd: 400, visivel: false 
    }, // 31 Undecilhões

    // ==========================================
    // LIVES DE EURO TRUCK (O Chat no Caminhão)
    // ==========================================
    { 
        id: 'c4_luquinhas', icone: "url('upgrades/euro-1.png')", nome: 'A Carga de C4 do Luquinhas', 
        desc: 'O chat inteiro entra na boleia do caminhão de Euro Truck para proteger a carga. Multiplica o SPS dos LURKERS por 20x!', 
        custo: 50000000000, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 150, visivel: false, poder: 20 
    },
    { 
        id: 'escolta_armada', icone: "url('upgrades/euro-2.png')", nome: 'A Escolta Armada do Chat', 
        desc: 'Tentaram roubar a carga no Euro Truck, mas o chat defendeu com a vida. Multiplica o SPS dos Moderadores por 50x!', 
        custo: 10e15, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 250, visivel: false, poder: 50 
    },
    { 
        id: 'fome_virtual', icone: "url('upgrades/euro-3.png')", nome: 'Fome Virtual Coletiva', 
        desc: 'O chat finge que comeu toda a carga do caminhão. A resenha foi tanta que a live explodiu. Multiplica o SPS do Just Chatting por 40x!', 
        custo: 25e15, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 250, visivel: false, poder: 40 
    },

    // ==========================================
    // O TRÁGICO MIOJO DA NIKK
    // ==========================================
    { 
        id: 'miojo_nikk', icone: "url('upgrades/miojo-1.png')", nome: 'O Trágico Fim do Miojo', 
        desc: 'A Nikk derruba o miojo de novo. O chat entra em desespero e compra tudo para consolar a mod. Multiplica o SPS da LOJINHO por 25x!', 
        custo: 100e12, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 120, visivel: false, poder: 25 
    },
    { 
        id: 'luto_miojo', icone: "url('upgrades/miojo-2.png')", nome: 'Luto Nacional pelo Miojo', 
        desc: 'A Nikk derrubou o miojo DE NOVO. Os lurkers saem das sombras só para mandar um "F" no chat. Multiplica o SPS dos Lurkers por 100x!', 
        custo: 75e15, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 500, visivel: false, poder: 100 
    },

    // ==========================================
    // A NIKK E A LOJINHA / SPAM SONÂMBULO
    // ==========================================
    { 
        id: 'arthur_enlatado', icone: "url('upgrades/miojo-3.png')", nome: 'Arthur Enlatado', 
        desc: 'A iguaria mais esquisita da Lojinho vira um sucesso de vendas mundial. Multiplica o SPS da LOJINHO por 50x!', 
        custo: 50e15, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 200, visivel: false, poder: 50 
    },
    { 
        id: 'arthur_rebaixado', icone: "url('upgrades/miojo-4.png')", nome: 'O Spam Sonâmbulo', 
        desc: 'A Nikk acorda, manda o Arthur Rebaixado no chat e volta a dormir. O ciclo perfeito de farm. Multiplica o SPS dos LURKERS por 100x!', 
        custo: 100e24, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 400, visivel: false, poder: 100 
    },
    { 
        id: 'despertar_nikk', icone: "url('upgrades/miojo-5.png')", nome: 'O Despertar da Nikk', 
        desc: 'Ela acorda do nada, manda um "Arthur Rebaixado" e volta a dormir. O caos perfeito. Multiplica o SPS da Lojinho por 300x!', 
        custo: 2e21, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 450, visivel: false, poder: 300 
    },

    // ==========================================
    // O APOIO DO LITTLEBIGJOON E O GALÃO DE ÁGUA
    // ==========================================
    { 
        id: 'gank_joon', icone: "url('upgrades/joon-1.png.png')", nome: 'A Gank Histórica do Joon', 
        desc: 'O LittleBigJoon manda uma raid massiva e o canal explode de gente nova. Multiplica TODAS as estruturas (Global) por 10x!', 
        custo: 5e15, comprado: false, tipo: 'global', reqUpg: 'transmissao_neural', visivel: false, poder: 10 
    },
    { 
        id: 'apoio_primordios', icone: "url('upgrades/joon-2.png.png')", nome: 'Apoio dos Primórdios', 
        desc: 'O LittleBigJoon estava lá desde o início. Essa energia atrai a velha guarda em peso. Multiplica o SPS dos Fundadores por 150x!', 
        custo: 200e15, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 300, visivel: false, poder: 150 
    },
    { 
        id: 'galao_agua', icone: "url('upgrades/joon-3.png')", nome: 'Hidratação Nível Galão', 
        desc: 'O Joon spammou recompensa e você bebeu um galão inteiro em live. Multiplica TODAS as estruturas (Global) por 20x!', 
        custo: 100e18, comprado: false, tipo: 'global', reqUpg: 'gank_joon', visivel: false, poder: 20 
    },
    { 
        id: 'tsunami_agua', icone: "url('upgrades/joon-4.png')", nome: 'O Tsunami da Hidratação', 
        desc: 'O galão de água virou um símbolo de resistência. O chat não para de resgatar o item. Multiplica o SPS da Lojinho por 80x!', 
        custo: 20e18, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 350, visivel: false, poder: 80 
    },

    // ==========================================
    // THE LONG DARK (A Revolta do Hangar)
    // ==========================================
    { 
        id: 'revolta_hangar', icone: "url('upgrades/hangar-1.png')", nome: 'A Revolta do Hangar', 
        desc: 'Você explorou o hangar de The Long Dark à toa e a indignação gera pura energia de hype. Multiplica o SPS do MINECRAFT CLÁSSICO por 25x!', 
        custo: 200e15, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 150, visivel: false, poder: 25 
    },
    { 
        id: 'speedrun_hangar', icone: "url('upgrades/hangar-2.png')", nome: 'Speedrun de Hangar (Sem Querer)', 
        desc: 'Já que você explorou o mapa antes da missão, agora faz de olhos fechados. Multiplica TODAS as estruturas (Global) por 10x!', 
        custo: 1e18, comprado: false, tipo: 'global', reqUpg: 'galao_agua', visivel: false, poder: 10 
    },

    // ==========================================
    // CELESTE (O Morango)
    // ==========================================
    { 
        id: 'preciso_morango', icone: "url('upgrades/morango-1.png')", nome: '"Eu preciso desse morango muito!"', 
        desc: 'Foco absoluto e inabalável no objetivo. Multiplica a eficiência dos seus CLIQUES por 100x!', 
        custo: 500e15, comprado: false, tipo: 'clique', requisitoCliques: 75000, visivel: false, poder: 100 
    },
    { 
        id: 'obsessao_morango', icone: "url('upgrades/morango-2.png')", nome: 'A Obsessão Pelo Morango', 
        desc: 'Seu foco para pegar aquele morango transcendeu o jogo. Seus cliques manuais ficam 500x mais fortes!', 
        custo: 5e18, comprado: false, tipo: 'clique', requisitoCliques: 150000, visivel: false, poder: 500 
    },

    // ==========================================
    // RESIDENT EVIL ("Lion, the train")
    // ==========================================
    { 
        id: 'cade_o_trem', icone: "url('upgrades/train-1.png')", nome: '"Lion, The Train!"', 
        desc: 'Você perguntou cadê o trem e morreu um segundo depois. O susto acordou a live inteira. Multiplica TODAS as estruturas (Global) por 30x!', 
        custo: 20e21, comprado: false, tipo: 'global', reqUpg: 'speedrun_hangar', visivel: false, poder: 30 
    },
    { 
        id: 'atropelamento_surpresa', icone: "url('upgrades/train-2.png')", nome: 'Atropelamento Surpresa', 
        desc: '"Cadê o trem?". O susto gerou o clipe mais assistido do ano. Multiplica o SPS do Minecraft Clássico por 100x (pelo hype do susto)!', 
        custo: 150e18, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 300, visivel: false, poder: 100 
    },

    // ==========================================
    // OVERCOOKED (Cesta de 3 Pontos no Lixo)
    // ==========================================
    { 
        id: 'cesta_3_pontos', icone: "url('upgrades/bask-1.png')", nome: 'Cesta de 3 Pontos no Lixo', 
        desc: 'A jogada de mestre do Overcooked que jogou a panela no lixo. A moderação adorou a precisão. Multiplica o SPS dos MODERADORES por 40x!', 
        custo: 1e24, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 300, visivel: false, poder: 40 
    },
    { 
        id: 'passe_pro_lixo', icone: "url('upgrades/bask-2.png')", nome: 'Passe Direto pro Lixo', 
        desc: 'A cesta de 3 pontos no lixo atrai olheiros da NBA para a live. A moderação não aguenta tanto spam de risada. Multiplica TODAS as estruturas por 25x!', 
        custo: 500e18, comprado: false, tipo: 'global', reqUpg: 'cade_o_trem', visivel: false, poder: 25 
    },

    // ==========================================
    // MÚSICAS E ALERTAS (Loli DJ, Ching-Chong, Música Trocada)
    // ==========================================
    { 
        id: 'loli_dj', icone: "url('upgrades/loli-1.png')", nome: 'Festinha no Meu Barraco (DJ Loli)', 
        desc: 'A Loli DJ assume o som e a live vira um baile incontrolável. Multiplica o SPS do JUST CHATTING por 30x!', 
        custo: 800e15, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 200, visivel: false, poder: 30 
    },
    { 
        id: 'dj_loli_beat', icone: "url('upgrades/loli-1.png')", nome: 'O Beat da Loli DJ', 
        desc: 'A música não sai da cabeça da live. O engajamento vira um baile funk incontrolável. Multiplica o SPS do SMKast por 50x!', 
        custo: 50e18, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 250, visivel: false, poder: 50 
    },
    { 
        id: 'alerta_chingchong', icone: "url('upgrades/ching.png')", nome: 'O Alerta Proibido (Ching-Chong)', 
        desc: 'A música toca e a nostalgia dos seguidores antigos vai às alturas. Multiplica o SPS dos FUNDADORES por 15x!', 
        custo: 50e12, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 150, visivel: false, poder: 15 
    },
    { 
        id: 'musica_trocada', icone: "url('upgrades/golpe.png')", nome: 'O Golpe da Música Trocada', 
        desc: 'Zoaram a sua escolha musical, mas as risadas do chat compensaram a humilhação. Multiplica o SPS do SMKAST por 20x!', 
        custo: 5e21, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 150, visivel: false, poder: 20 
    },

    // ==========================================
    // MEMES VISUAIS (Filtro do Arthur Careca)
    // ==========================================
    { 
        id: 'arthur_careca', icone: "url('upgrades/careca.png')", nome: 'A Maldição do Arthur Careca', 
        desc: '"Ele não é real, ele não pode te atacar". Mentira, ele atacou e roubou todas as views. Multiplica TODAS as estruturas (Global) por 50x!', 
        custo: 500e21, comprado: false, tipo: 'global', reqUpg: 'passe_pro_lixo', visivel: false, poder: 50 
    }
];

// Conquistas separadas por 'tipo' para organizar no Menu
const conquistas = [
    // CONQUISTAS DE CLIQUES (Metas de Cliques Totais)
    { id: 'c_1', icone: "url('conquistas/conq-clicker-1.png')", tipo: 'clique', nome: 'O Início de Tudo', desc: 'Dê o seu primeiro clique na borboleta.', reqDesc: 'Dar 1 clique.', atingido: false, condicao: () => cliquesTotais >= 1 },
    { id: 'c_100', icone: "url('conquistas/conq-clicker-2.png')", tipo: 'clique', nome: 'Dedo de Manteiga', desc: 'Clique 100 vezes.', reqDesc: 'Dar 100 cliques.', atingido: false, condicao: () => cliquesTotais >= 100 },
    { id: 'c_500', icone: "url('conquistas/conq-clicker-3.png')", tipo: 'clique', nome: 'Clicker de Plantão', desc: 'Clique 500 vezes.', reqDesc: 'Dar 500 cliques.', atingido: false, condicao: () => cliquesTotais >= 500 },
    { id: 'c_1000', icone: "url('conquistas/conq-clicker-4.png')", tipo: 'clique', nome: 'Acostumando o Dedo', desc: 'Clique 1.000 vezes.', reqDesc: 'Dar 1.000 cliques.', atingido: false, condicao: () => cliquesTotais >= 1000 },
    { id: 'c_5000', icone: "url('conquistas/conq-clicker-5.png')", tipo: 'clique', nome: 'Treino para Celeste', desc: 'Clique 5.000 vezes. Seus reflexos estão melhorando.', reqDesc: 'Dar 5.000 cliques.', atingido: false, condicao: () => cliquesTotais >= 5000 },
    { id: 'c_10000', icone: "url('conquistas/conq-clicker-6.png')", tipo: 'clique', nome: 'Mouse de Elite', desc: 'Clique 10.000 vezes. O sensor já está esquentando.', reqDesc: 'Dar 10.000 cliques.', atingido: false, condicao: () => cliquesTotais >= 10000 },
    { id: 'c_25000', icone: "url('conquistas/conq-clicker-7.png')", tipo: 'clique', nome: 'Tendinite à Vista', desc: 'Clique 25.000 vezes. Alguém traz um gelo para esse streamer!', reqDesc: 'Dar 25.000 cliques.', atingido: false, condicao: () => cliquesTotais >= 25000 },
    { id: 'c_50000', icone: "url('conquistas/conq-clicker-8.png')", tipo: 'clique', nome: 'Foco no Morango', desc: 'Clique 50.000 vezes. "Eu preciso desse morango muito!"', reqDesc: 'Dar 50.000 cliques.', atingido: false, condicao: () => cliquesTotais >= 50000 },
    { id: 'c_100000', icone: "url('conquistas/conq-clicker-9.png')", tipo: 'clique', nome: 'Lenda do Botão Esquerdo', desc: 'Clique 100.000 vezes. O switch do mouse já está nas últimas.', reqDesc: 'Dar 100.000 cliques.', atingido: false, condicao: () => cliquesTotais >= 100000 },
    { id: 'c_250000', icone: "url('conquistas/conq-clicker-10.png')", tipo: 'clique', nome: 'Velocidade Superlight', desc: 'Clique 250.000 vezes. Seus dedos são apenas um vulto na tela.', reqDesc: 'Dar 250.000 cliques.', atingido: false, condicao: () => cliquesTotais >= 250000 },
    { id: 'c_500000', icone: "url('conquistas/conq-clicker-11.png')", tipo: 'clique', nome: 'Autoclicker Humano', desc: 'Clique 500.000 vezes. Você não é mais humano, é puro código.', reqDesc: 'Dar 500.000 cliques.', atingido: false, condicao: () => cliquesTotais >= 500000 },
    { id: 'c_1000000', icone: "url('conquistas/conq-clicker-12.png')", tipo: 'clique', nome: 'O Clique da Borboleta', desc: 'Clique 1.000.000 de vezes. Você transcendeu a barreira física do clique.', reqDesc: 'Dar 1.000.000 de cliques.', atingido: false, condicao: () => cliquesTotais >= 1000000 },

    // CONQUISTAS DE PRODUÇÃO (SPS)
    // ==========================================
    // HYPE TOTAL (SPS GERAL: Clique + Estruturas)
    // ==========================================
    { id: 's_total_1k', icone: "url('conquistas/conq-sps-1.png')", tipo: 'sps', nome: 'A Máquina Ligou', desc: 'Chegue a 1.000 de SPS Total.', reqDesc: '1.000 SPS Total.', atingido: false, condicao: () => spsTotal >= 1000 },
    { id: 's_total_1m', icone: "url('conquistas/conq-sps-2.png')", tipo: 'sps', nome: 'Viralizou!', desc: 'Chegue a 1 Milhão de SPS Total.', reqDesc: '1 Milhão SPS Total.', atingido: false, condicao: () => spsTotal >= 1e6 },
    { id: 's_total_1b', icone: "url('conquistas/conq-sps-3.png')", tipo: 'sps', nome: 'Estrela em Ascensão', desc: 'Chegue a 1 Bilhão de SPS Total.', reqDesc: '1 Bilhão SPS Total.', atingido: false, condicao: () => spsTotal >= 1e9 },
    { id: 's_total_1t', icone: "url('conquistas/conq-sps-4.png')", tipo: 'sps', nome: 'Império Digital', desc: 'Chegue a 1 Trilhão de SPS Total.', reqDesc: '1 Trilhão SPS Total.', atingido: false, condicao: () => spsTotal >= 1e12 },
    { id: 's_total_1qa', icone: "url('conquistas/conq-sps-5.png')", tipo: 'sps', nome: 'Quebrando a Internet', desc: 'Chegue a 1 Quadrilhão de SPS Total.', reqDesc: '1 Quadrilhão SPS Total.', atingido: false, condicao: () => spsTotal >= 1e15 },
    { id: 's_total_1qi', icone: "url('conquistas/conq-sps-6.png')", tipo: 'sps', nome: 'Hype Intercontinental', desc: 'Chegue a 1 Quintilhão de SPS Total.', reqDesc: '1 Quintilhão SPS Total.', atingido: false, condicao: () => spsTotal >= 1e18 },
    { id: 's_total_1sx', icone: "url('conquistas/conq-sps-7.png')", tipo: 'sps', nome: 'Fenômeno Galáctico', desc: 'Chegue a 1 Sextilhão de SPS Total.', reqDesc: '1 Sextilhão SPS Total.', atingido: false, condicao: () => spsTotal >= 1e21 },
    { id: 's_total_1sp', icone: "url('conquistas/conq-sps-8.png')", tipo: 'sps', nome: 'Realidade Alterada', desc: 'Chegue a 1 Septilhão de SPS Total.', reqDesc: '1 Septilhão SPS Total.', atingido: false, condicao: () => spsTotal >= 1e24 },
    { id: 's_total_1oc', icone: "url('conquistas/conq-sps-9.png')", tipo: 'sps', nome: 'Dimensão SMK', desc: 'Chegue a 1 Octilhão de SPS Total.', reqDesc: '1 Octilhão SPS Total.', atingido: false, condicao: () => spsTotal >= 1e27 },
    { id: 's_total_1no', icone: "url('conquistas/conq-sps-10.png')", tipo: 'sps', nome: 'Divindade da Stream', desc: 'Chegue a 1 Nonilhão de SPS Total.', reqDesc: '1 Nonilhão SPS Total.', atingido: false, condicao: () => spsTotal >= 1e30 },
    { id: 's_total_1dc', icone: "url('conquistas/conq-sps-11.png')", tipo: 'sps', nome: 'O Verbo Supremo', desc: 'Chegue a 1 Decilhão de SPS Total.', reqDesc: '1 Decilhão SPS Total.', atingido: false, condicao: () => spsTotal >= 1e33 },
    { id: 's_total_1un', icone: "url('conquistas/conq-sps-12.png')", tipo: 'sps', nome: 'Hype Infinito', desc: 'Chegue a 1 Undecilhão de SPS Total.', reqDesc: '1 Undecilhão SPS Total.', atingido: false, condicao: () => spsTotal >= 1e36 },

    // ==========================================
    // AUTOMAÇÃO DE ELITE (SPS APENAS ESTRUTURAS)
    // ==========================================
    { id: 's_est_1k', icone: "url('conquistas/conq-est-1.png')", tipo: 'sps', nome: 'Chat Ativo', desc: 'Suas estruturas geram 1.000 SMKoins/s.', reqDesc: '1.000 SPS de Estruturas.', atingido: false, condicao: () => spsEstruturas >= 1000 },
    { id: 's_est_1m', icone: "url('conquistas/conq-est-2.png')", tipo: 'sps', nome: 'Comunidade Engajada', desc: 'Suas estruturas geram 1 Milhão de SMKoins/s.', reqDesc: '1 Milhão SPS de Estruturas.', atingido: false, condicao: () => spsEstruturas >= 1e6 },
    { id: 's_est_1b', icone: "url('conquistas/conq-est-3.png')", tipo: 'sps', nome: 'Farm Automática', desc: 'Suas estruturas geram 1 Bilhão de SMKoins/s.', reqDesc: '1 Bilhão SPS de Estruturas.', atingido: false, condicao: () => spsEstruturas >= 1e9 },
    { id: 's_est_1t', icone: "url('conquistas/conq-est-4.png')", tipo: 'sps', nome: 'Automação Total', desc: 'Suas estruturas geram 1 Trilhão de SMKoins/s.', reqDesc: '1 Trilhão SPS de Estruturas.', atingido: false, condicao: () => spsEstruturas >= 1e12 },
    { id: 's_est_1qa', icone: "url('conquistas/conq-est-5.png')", tipo: 'sps', nome: 'Algoritmo Dominado', desc: 'Suas estruturas geram 1 Quadrilhão de SMKoins/s.', reqDesc: '1 Quadrilhão SPS de Estruturas.', atingido: false, condicao: () => spsEstruturas >= 1e15 },
    { id: 's_est_1qi', icone: "url('conquistas/conq-est-6.png')", tipo: 'sps', nome: 'A Rede Nunca Dorme', desc: 'Suas estruturas geram 1 Quintilhão de SMKoins/s.', reqDesc: '1 Quintilhão SPS de Estruturas.', atingido: false, condicao: () => spsEstruturas >= 1e18 },
    { id: 's_est_1sx', icone: "url('conquistas/conq-est-7.png')", tipo: 'sps', nome: 'Fábrica de Memes', desc: 'Suas estruturas geram 1 Sextilhão de SMKoins/s.', reqDesc: '1 Sextilhão SPS de Estruturas.', atingido: false, condicao: () => spsEstruturas >= 1e21 },
    { id: 's_est_1sp', icone: "url('conquistas/conq-est-8.png')", tipo: 'sps', nome: 'Hegemonia dos Bots', desc: 'Suas estruturas geram 1 Septilhão de SMKoins/s.', reqDesc: '1 Septilhão SPS de Estruturas.', atingido: false, condicao: () => spsEstruturas >= 1e24 },
    { id: 's_est_1oc', icone: "url('conquistas/conq-est-9.png')", tipo: 'sps', nome: 'Consciência Coletiva', desc: 'Suas estruturas geram 1 Octilhão de SMKoins/s.', reqDesc: '1 Octilhão SPS de Estruturas.', atingido: false, condicao: () => spsEstruturas >= 1e27 },
    { id: 's_est_1no', icone: "url('conquistas/conq-est-10.png')", tipo: 'sps', nome: 'Ouro Digital Puro', desc: 'Suas estruturas geram 1 Nonilhão de SMKoins/s.', reqDesc: '1 Nonilhão SPS de Estruturas.', atingido: false, condicao: () => spsEstruturas >= 1e30 },
    { id: 's_est_1dc', icone: "url('conquistas/conq-est-11.png')", tipo: 'sps', nome: 'Fonte de Energia Universal', desc: 'Suas estruturas geram 1 Decilhão de SMKoins/s.', reqDesc: '1 Decilhão SPS de Estruturas.', atingido: false, condicao: () => spsEstruturas >= 1e33 },

    // ESTRUTURAS
    // ==========================================
    // LURKERS (estruturas[0]) - Ícone: 👻
    // ==========================================
    { id: 'e_l1', icone: '👻', tipo: 'estrutura', nome: 'O Primeiro Fantasma', desc: 'Compre 1 Lurker.', reqDesc: 'Ter 1 Lurker.', atingido: false, condicao: () => estruturas[0].qtd >= 1 },
    { id: 'e_l10', icone: '👻', tipo: 'estrutura', nome: 'A Base Vem Forte', desc: 'Compre 5 Lurkers.', reqDesc: 'Ter 5 Lurkers.', atingido: false, condicao: () => estruturas[0].qtd >= 5 },
    { id: 'e_l25', icone: '👻', tipo: 'estrutura', nome: 'Multidão Silenciosa', desc: 'Compre 25 Lurkers.', reqDesc: 'Ter 25 Lurkers.', atingido: false, condicao: () => estruturas[0].qtd >= 25 },
    { id: 'e_l50', icone: '👻', tipo: 'estrutura', nome: 'Exército das Sombras', desc: 'Compre 50 Lurkers.', reqDesc: 'Ter 50 Lurkers.', atingido: false, condicao: () => estruturas[0].qtd >= 50 },
    { id: 'e_l100', icone: '👻', tipo: 'estrutura', nome: 'Centena Invisível', desc: 'Compre 100 Lurkers.', reqDesc: 'Ter 100 Lurkers.', atingido: false, condicao: () => estruturas[0].qtd >= 100 },
    { id: 'e_l150', icone: '👻', tipo: 'estrutura', nome: 'Observadores Ocultos', desc: 'Compre 150 Lurkers.', reqDesc: 'Ter 150 Lurkers.', atingido: false, condicao: () => estruturas[0].qtd >= 150 },
    { id: 'e_l200', icone: '👻', tipo: 'estrutura', nome: 'Legião Mutada', desc: 'Compre 200 Lurkers.', reqDesc: 'Ter 200 Lurkers.', atingido: false, condicao: () => estruturas[0].qtd >= 200 },
    { id: 'e_l250', icone: '👻', tipo: 'estrutura', nome: 'Mestres do Alt-Tab', desc: 'Compre 250 Lurkers.', reqDesc: 'Ter 250 Lurkers.', atingido: false, condicao: () => estruturas[0].qtd >= 250 },
    { id: 'e_l300', icone: '👻', tipo: 'estrutura', nome: 'O Vazio Te Encarando', desc: 'Compre 300 Lurkers.', reqDesc: 'Ter 300 Lurkers.', atingido: false, condicao: () => estruturas[0].qtd >= 300 },
    { id: 'e_l350', icone: '👻', tipo: 'estrutura', nome: 'Densidade Demográfica Zero', desc: 'Compre 350 Lurkers.', reqDesc: 'Ter 350 Lurkers.', atingido: false, condicao: () => estruturas[0].qtd >= 350 },
    { id: 'e_l400', icone: '👻', tipo: 'estrutura', nome: 'Onipresença Silenciosa', desc: 'Compre 400 Lurkers.', reqDesc: 'Ter 400 Lurkers.', atingido: false, condicao: () => estruturas[0].qtd >= 400 },

    // ==========================================
    // MODERADORES (estruturas[1]) - Ícone: 🔨
    // ==========================================
    { id: 'e_m1', icone: '🔨', tipo: 'estrutura', nome: 'O Primeiro Xerife', desc: 'Compre 1 Moderador.', reqDesc: 'Ter 1 Moderador.', atingido: false, condicao: () => estruturas[1].qtd >= 1 },
    { id: 'e_m10', icone: '🔨', tipo: 'estrutura', nome: 'Patrulha do Chat', desc: 'Compre 5 Moderadores.', reqDesc: 'Ter 5 Moderadores.', atingido: false, condicao: () => estruturas[1].qtd >= 5 },
    { id: 'e_m25', icone: '🔨', tipo: 'estrutura', nome: 'Esquadrão Tático', desc: 'Compre 25 Moderadores.', reqDesc: 'Ter 25 Moderadores.', atingido: false, condicao: () => estruturas[1].qtd >= 25 },
    { id: 'e_m50', icone: '🔨', tipo: 'estrutura', nome: 'Batalhão do Ban', desc: 'Compre 50 Moderadores.', reqDesc: 'Ter 50 Moderadores.', atingido: false, condicao: () => estruturas[1].qtd >= 50 },
    { id: 'e_m100', icone: '🔨', tipo: 'estrutura', nome: 'Tropa de Elite', desc: 'Compre 100 Moderadores.', reqDesc: 'Ter 100 Moderadores.', atingido: false, condicao: () => estruturas[1].qtd >= 100 },
    { id: 'e_m150', icone: '🔨', tipo: 'estrutura', nome: 'Justiça Cega', desc: 'Compre 150 Moderadores.', reqDesc: 'Ter 150 Moderadores.', atingido: false, condicao: () => estruturas[1].qtd >= 150 },
    { id: 'e_m200', icone: '🔨', tipo: 'estrutura', nome: 'Ditadura do Chat', desc: 'Compre 200 Moderadores.', reqDesc: 'Ter 200 Moderadores.', atingido: false, condicao: () => estruturas[1].qtd >= 200 },
    { id: 'e_m250', icone: '🔨', tipo: 'estrutura', nome: 'Skynet da Moderação', desc: 'Compre 250 Moderadores.', reqDesc: 'Ter 250 Moderadores.', atingido: false, condicao: () => estruturas[1].qtd >= 250 },
    { id: 'e_m300', icone: '🔨', tipo: 'estrutura', nome: 'Inquisição Twitchera', desc: 'Compre 300 Moderadores.', reqDesc: 'Ter 300 Moderadores.', atingido: false, condicao: () => estruturas[1].qtd >= 300 },
    { id: 'e_m350', icone: '🔨', tipo: 'estrutura', nome: 'Deuses da Espada Verde', desc: 'Compre 350 Moderadores.', reqDesc: 'Ter 350 Moderadores.', atingido: false, condicao: () => estruturas[1].qtd >= 350 },
    { id: 'e_m400', icone: '🔨', tipo: 'estrutura', nome: 'Ordem Absoluta', desc: 'Compre 400 Moderadores.', reqDesc: 'Ter 400 Moderadores.', atingido: false, condicao: () => estruturas[1].qtd >= 400 },

    // ==========================================
    // FUNDADORES (estruturas[2]) - Ícone: 👑
    // ==========================================
    { id: 'e_f1', icone: '👑', tipo: 'estrutura', nome: 'O Primeiro Assinante', desc: 'Compre 1 Fundador.', reqDesc: 'Ter 1 Fundador.', atingido: false, condicao: () => estruturas[2].qtd >= 1 },
    { id: 'e_f10', icone: '👑', tipo: 'estrutura', nome: 'Clube VIP', desc: 'Compre 5 Fundadores.', reqDesc: 'Ter 5 Fundadores.', atingido: false, condicao: () => estruturas[2].qtd >= 5 },
    { id: 'e_f25', icone: '👑', tipo: 'estrutura', nome: 'Burguesia do Chat', desc: 'Compre 25 Fundadores.', reqDesc: 'Ter 25 Fundadores.', atingido: false, condicao: () => estruturas[2].qtd >= 25 },
    { id: 'e_f50', icone: '👑', tipo: 'estrutura', nome: 'Elite da Live', desc: 'Compre 50 Fundadores.', reqDesc: 'Ter 50 Fundadores.', atingido: false, condicao: () => estruturas[2].qtd >= 50 },
    { id: 'e_f100', icone: '👑', tipo: 'estrutura', nome: 'Centuriões do Sub', desc: 'Compre 100 Fundadores.', reqDesc: 'Ter 100 Fundadores.', atingido: false, condicao: () => estruturas[2].qtd >= 100 },
    { id: 'e_f150', icone: '👑', tipo: 'estrutura', nome: 'Aristocracia SMK', desc: 'Compre 150 Fundadores.', reqDesc: 'Ter 150 Fundadores.', atingido: false, condicao: () => estruturas[2].qtd >= 150 },
    { id: 'e_f200', icone: '👑', tipo: 'estrutura', nome: 'Investidores Anjo', desc: 'Compre 200 Fundadores.', reqDesc: 'Ter 200 Fundadores.', atingido: false, condicao: () => estruturas[2].qtd >= 200 },
    { id: 'e_f250', icone: '👑', tipo: 'estrutura', nome: 'Magnatas do Hype', desc: 'Compre 250 Fundadores.', reqDesc: 'Ter 250 Fundadores.', atingido: false, condicao: () => estruturas[2].qtd >= 250 },
    { id: 'e_f300', icone: '👑', tipo: 'estrutura', nome: 'A Távola Redonda', desc: 'Compre 300 Fundadores.', reqDesc: 'Ter 300 Fundadores.', atingido: false, condicao: () => estruturas[2].qtd >= 300 },
    { id: 'e_f350', icone: '👑', tipo: 'estrutura', nome: 'Panteão dos Subs', desc: 'Compre 350 Fundadores.', reqDesc: 'Ter 350 Fundadores.', atingido: false, condicao: () => estruturas[2].qtd >= 350 },
    { id: 'e_f400', icone: '👑', tipo: 'estrutura', nome: 'Os Donos do Canal', desc: 'Compre 400 Fundadores.', reqDesc: 'Ter 400 Fundadores.', atingido: false, condicao: () => estruturas[2].qtd >= 400 },

    // ==========================================
    // LOJINHO DA NIKK (estruturas[3]) - Ícone: 🛍️
    // ==========================================
    { id: 'e_lj1', icone: '🛍️', tipo: 'estrutura', nome: 'Primeira Venda', desc: 'Compre 1 Lojinho.', reqDesc: 'Ter 1 Lojinho.', atingido: false, condicao: () => estruturas[3].qtd >= 1 },
    { id: 'e_lj10', icone: '🛍️', tipo: 'estrutura', nome: 'Camelô Digital', desc: 'Compre 5 Lojinhos.', reqDesc: 'Ter 5 Lojinhos.', atingido: false, condicao: () => estruturas[3].qtd >= 5 },
    { id: 'e_lj25', icone: '🛍️', tipo: 'estrutura', nome: 'Loja de Conveniência', desc: 'Compre 25 Lojinhos.', reqDesc: 'Ter 25 Lojinhos.', atingido: false, condicao: () => estruturas[3].qtd >= 25 },
    { id: 'e_lj50', icone: '🛍️', tipo: 'estrutura', nome: 'Supermercado do Hype', desc: 'Compre 50 Lojinhos.', reqDesc: 'Ter 50 Lojinhos.', atingido: false, condicao: () => estruturas[3].qtd >= 50 },
    { id: 'e_lj100', icone: '🛍️', tipo: 'estrutura', nome: 'Shopping Center', desc: 'Compre 100 Lojinhos.', reqDesc: 'Ter 100 Lojinhos.', atingido: false, condicao: () => estruturas[3].qtd >= 100 },
    { id: 'e_lj150', icone: '🛍️', tipo: 'estrutura', nome: 'Franquia de Sucesso', desc: 'Compre 150 Lojinhos.', reqDesc: 'Ter 150 Lojinhos.', atingido: false, condicao: () => estruturas[3].qtd >= 150 },
    { id: 'e_lj200', icone: '🛍️', tipo: 'estrutura', nome: 'Império Comercial', desc: 'Compre 200 Lojinhos.', reqDesc: 'Ter 200 Lojinhos.', atingido: false, condicao: () => estruturas[3].qtd >= 200 },
    { id: 'e_lj250', icone: '🛍️', tipo: 'estrutura', nome: 'Monopólio Capitalista', desc: 'Compre 250 Lojinhos.', reqDesc: 'Ter 250 Lojinhos.', atingido: false, condicao: () => estruturas[3].qtd >= 250 },
    { id: 'e_lj300', icone: '🛍️', tipo: 'estrutura', nome: 'Wall Street da Twitch', desc: 'Compre 300 Lojinhos.', reqDesc: 'Ter 300 Lojinhos.', atingido: false, condicao: () => estruturas[3].qtd >= 300 },
    { id: 'e_lj350', icone: '🛍️', tipo: 'estrutura', nome: 'Economia Intergaláctica', desc: 'Compre 350 Lojinhos.', reqDesc: 'Ter 350 Lojinhos.', atingido: false, condicao: () => estruturas[3].qtd >= 350 },
    { id: 'e_lj400', icone: '🛍️', tipo: 'estrutura', nome: 'Capitalismo Supremo', desc: 'Compre 400 Lojinhos.', reqDesc: 'Ter 400 Lojinhos.', atingido: false, condicao: () => estruturas[3].qtd >= 400 },

    // ==========================================
    // JUST CHATTING (estruturas[4]) - Ícone: 🎤
    // ==========================================
    { id: 'e_jc1', icone: '🎤', tipo: 'estrutura', nome: 'Testando o Som', desc: 'Compre 1 Just Chatting.', reqDesc: 'Ter 1 Just Chatting.', atingido: false, condicao: () => estruturas[4].qtd >= 1 },
    { id: 'e_jc10', icone: '🎤', tipo: 'estrutura', nome: 'Roda de Conversa', desc: 'Compre 5 Just Chatting.', reqDesc: 'Ter 5 Just Chatting.', atingido: false, condicao: () => estruturas[4].qtd >= 5 },
    { id: 'e_jc25', icone: '🎤', tipo: 'estrutura', nome: 'Papo Furado', desc: 'Compre 25 Just Chatting.', reqDesc: 'Ter 25 Just Chatting.', atingido: false, condicao: () => estruturas[4].qtd >= 25 },
    { id: 'e_jc50', icone: '🎤', tipo: 'estrutura', nome: 'Terapia em Grupo', desc: 'Compre 50 Just Chatting.', reqDesc: 'Ter 50 Just Chatting.', atingido: false, condicao: () => estruturas[4].qtd >= 50 },
    { id: 'e_jc100', icone: '🎤', tipo: 'estrutura', nome: 'Palestrante Motivacional', desc: 'Compre 100 Just Chatting.', reqDesc: 'Ter 100 Just Chatting.', atingido: false, condicao: () => estruturas[4].qtd >= 100 },
    { id: 'e_jc150', icone: '🎤', tipo: 'estrutura', nome: 'Mestre do Storytelling', desc: 'Compre 150 Just Chatting.', reqDesc: 'Ter 150 Just Chatting.', atingido: false, condicao: () => estruturas[4].qtd >= 150 },
    { id: 'e_jc200', icone: '🎤', tipo: 'estrutura', nome: 'Orador de Multidões', desc: 'Compre 200 Just Chatting.', reqDesc: 'Ter 200 Just Chatting.', atingido: false, condicao: () => estruturas[4].qtd >= 200 },
    { id: 'e_jc250', icone: '🎤', tipo: 'estrutura', nome: 'Lavagem Cerebral', desc: 'Compre 250 Just Chatting.', reqDesc: 'Ter 250 Just Chatting.', atingido: false, condicao: () => estruturas[4].qtd >= 250 },
    { id: 'e_jc300', icone: '🎤', tipo: 'estrutura', nome: 'Líder de Seita', desc: 'Compre 300 Just Chatting.', reqDesc: 'Ter 300 Just Chatting.', atingido: false, condicao: () => estruturas[4].qtd >= 300 },
    { id: 'e_jc350', icone: '🎤', tipo: 'estrutura', nome: 'A Voz do Povo', desc: 'Compre 350 Just Chatting.', reqDesc: 'Ter 350 Just Chatting.', atingido: false, condicao: () => estruturas[4].qtd >= 350 },
    { id: 'e_jc400', icone: '🎤', tipo: 'estrutura', nome: 'O Verbo Divino', desc: 'Compre 400 Just Chatting.', reqDesc: 'Ter 400 Just Chatting.', atingido: false, condicao: () => estruturas[4].qtd >= 400 },

    // ==========================================
    // MINECRAFT CLÁSSICO (estruturas[5]) - Ícone: 🌱
    // ==========================================
    { id: 'e_mc1', icone: '🌱', tipo: 'estrutura', nome: 'O Primeiro Bloco', desc: 'Compre 1 Minecraft.', reqDesc: 'Ter 1 Minecraft.', atingido: false, condicao: () => estruturas[5].qtd >= 1 },
    { id: 'e_mc10', icone: '🌱', tipo: 'estrutura', nome: 'Casinha de Terra', desc: 'Compre 5 Minecraft.', reqDesc: 'Ter 5 Minecraft.', atingido: false, condicao: () => estruturas[5].qtd >= 5 },
    { id: 'e_mc25', icone: '🌱', tipo: 'estrutura', nome: 'Full Ferro', desc: 'Compre 25 Minecraft.', reqDesc: 'Ter 25 Minecraft.', atingido: false, condicao: () => estruturas[5].qtd >= 25 },
    { id: 'e_mc50', icone: '🌱', tipo: 'estrutura', nome: 'Era dos Diamantes', desc: 'Compre 50 Minecraft.', reqDesc: 'Ter 50 Minecraft.', atingido: false, condicao: () => estruturas[5].qtd >= 50 },
    { id: 'e_mc100', icone: '🌱', tipo: 'estrutura', nome: 'Dominando o Nether', desc: 'Compre 100 Minecraft.', reqDesc: 'Ter 100 Minecraft.', atingido: false, condicao: () => estruturas[5].qtd >= 100 },
    { id: 'e_mc150', icone: '🌱', tipo: 'estrutura', nome: 'Matador de Dragão', desc: 'Compre 150 Minecraft.', reqDesc: 'Ter 150 Minecraft.', atingido: false, condicao: () => estruturas[5].qtd >= 150 },
    { id: 'e_mc200', icone: '🌱', tipo: 'estrutura', nome: 'Fazendeiro de XP', desc: 'Compre 200 Minecraft.', reqDesc: 'Ter 200 Minecraft.', atingido: false, condicao: () => estruturas[5].qtd >= 200 },
    { id: 'e_mc250', icone: '🌱', tipo: 'estrutura', nome: 'Engenheiro de Redstone', desc: 'Compre 250 Minecraft.', reqDesc: 'Ter 250 Minecraft.', atingido: false, condicao: () => estruturas[5].qtd >= 250 },
    { id: 'e_mc300', icone: '🌱', tipo: 'estrutura', nome: 'Mestre Construtor', desc: 'Compre 300 Minecraft.', reqDesc: 'Ter 300 Minecraft.', atingido: false, condicao: () => estruturas[5].qtd >= 300 },
    { id: 'e_mc350', icone: '🌱', tipo: 'estrutura', nome: 'Dono do Servidor', desc: 'Compre 350 Minecraft.', reqDesc: 'Ter 350 Minecraft.', atingido: false, condicao: () => estruturas[5].qtd >= 350 },
    { id: 'e_mc400', icone: '🌱', tipo: 'estrutura', nome: 'Criador de Mundos', desc: 'Compre 400 Minecraft.', reqDesc: 'Ter 400 Minecraft.', atingido: false, condicao: () => estruturas[5].qtd >= 400 },

    // ==========================================
    // SMKAST (estruturas[6]) - Ícone: 🎧
    // ==========================================
    { id: 'e_smk1', icone: '🎧', tipo: 'estrutura', nome: 'Piloto do Podcast', desc: 'Compre 1 SMKast.', reqDesc: 'Ter 1 SMKast.', atingido: false, condicao: () => estruturas[6].qtd >= 1 },
    { id: 'e_smk10', icone: '🎧', tipo: 'estrutura', nome: 'Microfone Aberto', desc: 'Compre 5 SMKast.', reqDesc: 'Ter 5 SMKast.', atingido: false, condicao: () => estruturas[6].qtd >= 5 },
    { id: 'e_smk25', icone: '🎧', tipo: 'estrutura', nome: 'Entrevista Polêmica', desc: 'Compre 25 SMKast.', reqDesc: 'Ter 25 SMKast.', atingido: false, condicao: () => estruturas[6].qtd >= 25 },
    { id: 'e_smk50', icone: '🎧', tipo: 'estrutura', nome: 'Top 10 no Spotify', desc: 'Compre 50 SMKast.', reqDesc: 'Ter 50 SMKast.', atingido: false, condicao: () => estruturas[6].qtd >= 50 },
    { id: 'e_smk100', icone: '🎧', tipo: 'estrutura', nome: 'Estúdio de Milhões', desc: 'Compre 100 SMKast.', reqDesc: 'Ter 100 SMKast.', atingido: false, condicao: () => estruturas[6].qtd >= 100 },
    { id: 'e_smk150', icone: '🎧', tipo: 'estrutura', nome: 'Mídia Tradicional Comprada', desc: 'Compre 150 SMKast.', reqDesc: 'Ter 150 SMKast.', atingido: false, condicao: () => estruturas[6].qtd >= 150 },
    { id: 'e_smk200', icone: '🎧', tipo: 'estrutura', nome: 'Rede de Televisão', desc: 'Compre 200 SMKast.', reqDesc: 'Ter 200 SMKast.', atingido: false, condicao: () => estruturas[6].qtd >= 200 },
    { id: 'e_smk250', icone: '🎧', tipo: 'estrutura', nome: 'Transmissão Continental', desc: 'Compre 250 SMKast.', reqDesc: 'Ter 250 SMKast.', atingido: false, condicao: () => estruturas[6].qtd >= 250 },
    { id: 'e_smk300', icone: '🎧', tipo: 'estrutura', nome: 'Controle da Mídia', desc: 'Compre 300 SMKast.', reqDesc: 'Ter 300 SMKast.', atingido: false, condicao: () => estruturas[6].qtd >= 300 },
    { id: 'e_smk350', icone: '🎧', tipo: 'estrutura', nome: 'Frequência Global', desc: 'Compre 350 SMKast.', reqDesc: 'Ter 350 SMKast.', atingido: false, condicao: () => estruturas[6].qtd >= 350 },
    { id: 'e_smk400', icone: '🎧', tipo: 'estrutura', nome: 'A Voz do Universo', desc: 'Compre 400 SMKast.', reqDesc: 'Ter 400 SMKast.', atingido: false, condicao: () => estruturas[6].qtd >= 400 },

    // ==========================================
    // CREEBINHO (estruturas[7]) - Ícone: 🧸
    // ==========================================
    { id: 'e_cr1', icone: '🧸', tipo: 'estrutura', nome: 'Um Novo Amigo', desc: 'Compre 1 Creebinho.', reqDesc: 'Ter 1 Creebinho.', atingido: false, condicao: () => estruturas[7].qtd >= 1 },
    { id: 'e_cr10', icone: '🧸', tipo: 'estrutura', nome: 'Coleção de Pelúcias', desc: 'Compre 5 Creebinhos.', reqDesc: 'Ter 5 Creebinhos.', atingido: false, condicao: () => estruturas[7].qtd >= 5 },
    { id: 'e_cr25', icone: '🧸', tipo: 'estrutura', nome: 'Altar do Creebinho', desc: 'Compre 25 Creebinhos.', reqDesc: 'Ter 25 Creebinhos.', atingido: false, condicao: () => estruturas[7].qtd >= 25 },
    { id: 'e_cr50', icone: '🧸', tipo: 'estrutura', nome: 'Exército de Algodão', desc: 'Compre 50 Creebinhos.', reqDesc: 'Ter 50 Creebinhos.', atingido: false, condicao: () => estruturas[7].qtd >= 50 },
    { id: 'e_cr100', icone: '🧸', tipo: 'estrutura', nome: 'Culto à Pelúcia', desc: 'Compre 100 Creebinhos.', reqDesc: 'Ter 100 Creebinhos.', atingido: false, condicao: () => estruturas[7].qtd >= 100 },
    { id: 'e_cr150', icone: '🧸', tipo: 'estrutura', nome: 'Guardiões Verdes', desc: 'Compre 150 Creebinhos.', reqDesc: 'Ter 150 Creebinhos.', atingido: false, condicao: () => estruturas[7].qtd >= 150 },
    { id: 'e_cr200', icone: '🧸', tipo: 'estrutura', nome: 'Explosão de Fofura', desc: 'Compre 200 Creebinhos.', reqDesc: 'Ter 200 Creebinhos.', atingido: false, condicao: () => estruturas[7].qtd >= 200 },
    { id: 'e_cr250', icone: '🧸', tipo: 'estrutura', nome: 'Mascotes Dominantes', desc: 'Compre 250 Creebinhos.', reqDesc: 'Ter 250 Creebinhos.', atingido: false, condicao: () => estruturas[7].qtd >= 250 },
    { id: 'e_cr300', icone: '🧸', tipo: 'estrutura', nome: 'A Era do Creeper', desc: 'Compre 300 Creebinhos.', reqDesc: 'Ter 300 Creebinhos.', atingido: false, condicao: () => estruturas[7].qtd >= 300 },
    { id: 'e_cr350', icone: '🧸', tipo: 'estrutura', nome: 'Entidade de Pelúcia', desc: 'Compre 350 Creebinhos.', reqDesc: 'Ter 350 Creebinhos.', atingido: false, condicao: () => estruturas[7].qtd >= 350 },
    { id: 'e_cr400', icone: '🧸', tipo: 'estrutura', nome: 'O Único e Verdadeiro Deus', desc: 'Compre 400 Creebinhos.', reqDesc: 'Ter 400 Creebinhos.', atingido: false, condicao: () => estruturas[7].qtd >= 400 }
];

// ================= Salvamento e Carregamento (Save/Load) =================
function salvarJogoManual() {
    salvarJogo();
    mostrarNotificacao('💾 Jogo Salvo com Sucesso!');
    fecharModal('modal-config');
}

function salvarJogo() {
    const saveData = {
        smkoins, sps, cliquesTotais, estruturasCompradasTotais, smkoinsPorCliqueTotais, // <-- Adicionada aqui!
        estruturas: estruturas.map(e => ({ id: e.id, qtd: e.qtd })),
        upgrades: upgrades.map(u => ({ id: u.id, comprado: u.comprado })),
        conquistas: conquistas.map(c => ({ id: c.id, atingido: c.atingido }))
    };
    localStorage.setItem('smklicker_save', JSON.stringify(saveData));
}

function carregarJogo() {
    const saveStr = localStorage.getItem('smklicker_save');
    if (saveStr) {
        const save = JSON.parse(saveStr);
        smkoins = save.smkoins || 0;
        cliquesTotais = save.cliquesTotais || 0;
        estruturasCompradasTotais = save.estruturasCompradasTotais || 0;
        smkoinsPorCliqueTotais = save.smkoinsPorCliqueTotais || 0; // <-- Adicionada aqui!

        // Carrega estruturas pelo ID
        if (save.estruturas && save.estruturas[0].id) {
            save.estruturas.forEach(s => {
                let est = estruturas.find(e => e.id === s.id);
                if (est) est.qtd = s.qtd;
            });
        }

        // Carrega upgrades pelo ID
        if (save.upgrades && save.upgrades[0].id) {
            save.upgrades.forEach(s => {
                let upg = upgrades.find(u => u.id === s.id);
                if (upg) upg.comprado = s.comprado;
            });
        }

        // Carrega conquistas pelo ID
        if (save.conquistas && save.conquistas[0].id) {
            save.conquistas.forEach(s => {
                let conq = conquistas.find(c => c.id === s.id);
                if (conq) conq.atingido = s.atingido;
            });
        }

        // Recalcula todos os multiplicadores do zero para evitar duplicação
        multiplicadorClique = 1;
        multiplicadorSPSGlobal = 1;
        estruturas.forEach(e => e.mult = 1);

        if (!save.estruturasCompradasTotais) {
            estruturasCompradasTotais = 0;
            estruturas.forEach(e => estruturasCompradasTotais += e.qtd);
        }

        upgrades.forEach(u => {
            if(u.comprado) {
                // Ao carregar o save, ele também precisa respeitar o poder do upgrade
                let forca = u.poder ? u.poder : 2;
                
                if (u.tipo === 'clique') multiplicadorClique *= forca;
                if (u.tipo === 'global') multiplicadorSPSGlobal *= forca;
                if (u.tipo === 'estrutura') {
                    const est = estruturas.find(e => e.id === u.alvo);
                    if (est) est.mult *= forca;
                }
            }
        });

        calcularSPS();
        verificarDesbloqueios();
        renderizarConquistas();
    }
}

// ================= Bloqueio de Atalhos de Teclado =================
// Impede que o jogador selecione tudo sem querer usando Ctrl+A
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
    }
});

function resetarJogo() {
    if (confirm('Tem certeza que deseja apagar todo o seu progresso? Isso não pode ser desfeito!')) {
        localStorage.removeItem('smklicker_save');
        location.reload(); // Recarrega a página do zero
    }
}

// Auto-Save a cada 5 minutos (300.000 ms)
setInterval(salvarJogo, 300000);

// ================= Funções de Interface Extras =================
function abrirModal(id) {
    document.getElementById(id).style.display = 'block';
    hideTooltip();
}
function fecharModal(id) {
    document.getElementById(id).style.display = 'none';
}
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

function mostrarNotificacao(texto) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = texto;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ================= Funções Principais =================
// ================= Sistema de Multiplicador de Compra =================
function mudarMultiplicador(valor) {
    multiplicadorCompra = valor;
    document.querySelectorAll('.buy-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-buy-${valor}`).classList.add('active');
    atualizarTela();
}

function getCustoAcumulado(est, qtdDesejada) {
    let custoTotal = 0;
    let qtdAtual = est.qtd;
    for (let i = 0; i < qtdDesejada; i++) {
        custoTotal += Math.floor(est.custoBase * Math.pow(1.15, qtdAtual + i));
    }
    return custoTotal;
}

function getMaxCompra(est, maxDesejado) {
    let custoTotal = 0;
    let qtdAtual = est.qtd;
    let comprados = 0;
    for (let i = 0; i < maxDesejado; i++) {
        let custoProximo = Math.floor(est.custoBase * Math.pow(1.15, qtdAtual + i));
        if (smkoins >= custoTotal + custoProximo) {
            custoTotal += custoProximo;
            comprados++;
        } else {
            break;
        }
    }
    return comprados;
}

// ================= Funções Principais =================

// Nova função: Calcula quanto vale o seu clique em tempo real
function getValorClique() {
    // Descobre quantos upgrades de clique você já comprou
    let qtdUpgradesClique = upgrades.filter(u => u.tipo === 'clique' && u.comprado).length;
    // O clique base é 1. Soma 1% (0.01) do SPS atual para CADA upgrade comprado.
    return 1 + (sps * 0.01 * qtdUpgradesClique);
}

function clicarBorboleta() {
    let ganhoClique = getValorClique();
    
    smkoins += ganhoClique;
    smkoinsPorCliqueTotais += ganhoClique; // Conta para liberar os próximos mouses!
    cliquesTotais++;
    
    verificarDesbloqueios(); 
    atualizarTela();
    checarConquistas();
}

function comprarEstrutura(index) {
    const est = estruturas[index];
    let qtdParaComprar = getMaxCompra(est, multiplicadorCompra);

    // Se o jogador não tiver dinheiro pra comprar nem 1 unidade, ignora o clique
    if (qtdParaComprar === 0) return;

    const custoTotal = getCustoAcumulado(est, qtdParaComprar);

    smkoins -= custoTotal;
    est.qtd += qtdParaComprar;
    estruturasCompradasTotais += qtdParaComprar;

    calcularSPS();
    verificarDesbloqueios();
    renderizarEstruturas();
    atualizarTela();
    checarConquistas();
    showStructureTooltip(index);
}

function comprarUpgrade(index) {
    const upg = upgrades[index];
    
    if (smkoins >= upg.custo && !upg.comprado) {
        smkoins -= upg.custo;
        upg.comprado = true;

        let forca = upg.poder ? upg.poder : 2;

        // Note que removemos a linha do "upg.tipo === 'clique'" daqui, pois o cálculo agora é automático!
        if (upg.tipo === 'global') multiplicadorSPSGlobal *= forca;
        if (upg.tipo === 'estrutura') {
            const est = estruturas.find(e => e.id === upg.alvo);
            if (est) est.mult *= forca;
        }

        hideTooltip(); 
        calcularSPS();
        verificarDesbloqueios(); 
        renderizarUpgrades(); 
        atualizarTela();
    }
}

function calcularSPS() {
    let novoSPS = 0;
    
    // Soma a produção base de todas as estruturas
    estruturas.forEach(est => {
        novoSPS += (est.qtd * est.spsBase * est.mult);
    });
    
    // Alimenta a variável exclusiva das conquistas de "Automação de Elite"
    spsEstruturas = novoSPS; 
    
    // Aplica o multiplicador global (Café Expresso, Raids, etc)
    sps = novoSPS * multiplicadorSPSGlobal; 
    
    // Alimenta a variável exclusiva das conquistas de "Hype Total"
    spsTotal = sps + cliquesTotais; 
}

function checarConquistas() {
    let teveNova = false;
    conquistas.forEach(conq => {
        if (!conq.atingido && conq.condicao()) {
            conq.atingido = true;
            mostrarNotificacao(`🏆 Nova conquista: <strong>${conq.nome}</strong>`);
            teveNova = true;
        }
    });
    if (teveNova) renderizarConquistas();
}

function verificarDesbloqueios() {
    let mudouAlgo = false;
    upgrades.forEach(upg => {
        if (!upg.comprado && !upg.visivel) {
            // REGRA ATUALIZADA: Desbloqueia baseado nos SMKoins gerados por clique
            if (upg.tipo === 'clique' && upg.reqSmkoinsClique && smkoinsPorCliqueTotais >= upg.reqSmkoinsClique) { 
                upg.visivel = true; mudouAlgo = true; 
            } 
            else if (upg.tipo === 'estrutura' && upg.reqEstruturaQtd) {
                const est = estruturas.find(e => e.id === upg.alvo);
                if (est && est.qtd >= upg.reqEstruturaQtd) { upg.visivel = true; mudouAlgo = true; }
            }
            else if (upg.tipo === 'global' && upg.reqUpg) {
                const req = upgrades.find(u => u.id === upg.reqUpg);
                if (req && req.comprado) { upg.visivel = true; mudouAlgo = true; }
            }
        }
    });
    if (mudouAlgo) renderizarUpgrades();
}

// ================= Tooltips =================
const tooltip = document.getElementById('tooltip');

document.addEventListener('mousemove', (e) => {
    if (tooltip.style.display === 'block') {
        let x = e.pageX + 15;
        let y = e.pageY + 15;
        const rect = tooltip.getBoundingClientRect();
        if (x + rect.width > window.innerWidth) x = e.pageX - rect.width - 15;
        if (y + rect.height > window.innerHeight) y = e.pageY - rect.height - 15;
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
    }
});

window.showStructureTooltip = function (index) {
    const est = estruturas[index];
    let producaoAtual = est.qtd * est.spsBase * est.mult * multiplicadorSPSGlobal;
    let porcentagem = sps > 0 ? ((producaoAtual / sps) * 100).toFixed(1) : 0;
    let html = `<h4>${est.nome}</h4><p>${est.desc}</p>`;
    if (est.qtd > 0) {
        html += `<div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #444;">
                    <p>Produção: <strong>${formatarNumero(producaoAtual)} SPS</strong></p>
                    <p>Responsável por: <strong style="color: var(--smk-pink);">${porcentagem}%</strong> do total</p>
                 </div>`;
    } else {
        html += `<div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #444;"><p style="color: var(--text-muted);">Compre 1 para ver os detalhes.</p></div>`;
    }
    tooltip.innerHTML = html;
    tooltip.style.display = 'block';
};

window.showUpgradeTooltip = function (index) {
    const upg = upgrades[index];
    tooltip.innerHTML = `<h4>${upg.nome}</h4><p>${upg.desc}</p><p style="margin-top: 10px; color: var(--smk-pink); font-weight: bold;">Custo: ${formatarNumero(upg.custo)} SMK</p>`;
    tooltip.style.display = 'block';
};

window.showAchievementTooltip = function (index) {
    const c = conquistas[index];
    if (c.atingido) {
        tooltip.innerHTML = `<h4>🏆 ${c.nome}</h4><p>${c.desc}</p>`;
    } else {
        tooltip.innerHTML = `<h4>???</h4><p style="color: var(--text-muted)">Requisito: ${c.reqDesc}</p>`;
    }
    tooltip.style.display = 'block';
};

window.hideTooltip = function () { tooltip.style.display = 'none'; };

// ================= Renderizações =================
function atualizarTela() {
    document.getElementById('smkoins').innerText = formatarNumero(smkoins);
    document.getElementById('sps').innerText = formatarNumero(sps);

    // --- SUBSTITUA DESTE PONTO ---
    estruturas.forEach((est, i) => {
        const div = document.getElementById(`est-${i}`);
        if (div) {
            let qtdPossivel = getMaxCompra(est, multiplicadorCompra);
            let podeComprar = qtdPossivel > 0;

            if (podeComprar) {
                div.classList.remove('disabled');
            } else {
                div.classList.add('disabled');
            }

            const spanHover = div.querySelector('.est-qtd-hover');
            const countVal = div.querySelector('.est-count-val');
            const pPreco = div.querySelector('.est-preco');

            // Atualiza a quantidade atual sempre
            if (countVal) countVal.innerText = est.qtd;

            if (spanHover && pPreco) {
                if (podeComprar) {
                    // Mostra quanto vai comprar e deixa branco pra destacar
                    spanHover.innerText = `(+${qtdPossivel})`;
                    spanHover.style.color = '#fff';
                    pPreco.innerText = `💰 ${formatarNumero(getCustoAcumulado(est, qtdPossivel))} SMK`;
                } else {
                    // Se não tiver dinheiro, mostra +1 na cor cinza e o valor do próximo
                    spanHover.innerText = `(+1)`;
                    spanHover.style.color = 'var(--text-muted)';
                    pPreco.innerText = `💰 ${formatarNumero(getCustoAcumulado(est, 1))} SMK`;
                }
            }
        }
    });
    // --- ATÉ ESTE PONTO ---

    // O código do upgrades.forEach() continua aqui embaixo normalmente...
    upgrades.forEach((upg, i) => {
        const btn = document.getElementById(`upg-${i}`);
        if (btn && !upg.comprado) {
            if (smkoins >= upg.custo) btn.classList.remove('disabled');
            else btn.classList.add('disabled');
        }
    });
}

function renderizarEstruturas() {
    const container = document.getElementById('estruturas-container');
    container.innerHTML = '';
    estruturas.forEach((est, i) => {
        const revelado = i === 0 || estruturas[i - 1].qtd > 0;
        if (revelado) {
            const html = `
                <div id="est-${i}" class="estrutura-item disabled" onclick="comprarEstrutura(${i})" onmouseenter="showStructureTooltip(${i})" onmouseleave="hideTooltip()">
                    <div class="est-info">
                        <h4 class="est-nome">${est.nome}</h4>
                        <p class="est-preco"></p>
                    </div>
                    <div class="est-count">
                        <span class="est-count-val">${est.qtd}</span>
                        <span class="est-qtd-hover"></span>
                    </div>
                </div>`;
            container.innerHTML += html;
        } else {
            container.innerHTML += `<div class="estrutura-misterio">???</div>`;
        }
    });

    // Injeta os valores corretos após criar o HTML
    atualizarTela();
}

// Renderiza Upgrades em formato de Quadradinhos
function renderizarUpgrades() {
    const container = document.getElementById('upgrades-container');
    container.innerHTML = '';
    upgrades.sort((a, b) => a.custo - b.custo);

    upgrades.forEach((upg, i) => {
        if (!upg.comprado && upg.visivel) {
            // Se o icone for url('...'), aplica como background. Se for Emoji, vai como texto.
            let styleBg = upg.icone.startsWith('url') ? `background-image: ${upg.icone}; color: transparent;` : '';

            const html = `
                <div id="upg-${i}" class="square-icon disabled" style="${styleBg}"
                     onclick="comprarUpgrade(${i})" onmouseenter="showUpgradeTooltip(${i})" onmouseleave="hideTooltip()">
                    ${!upg.icone.startsWith('url') ? upg.icone : ''}
                </div>`;
            container.innerHTML += html;
        }
    });
}

// Renderiza Conquistas dentro do Modal
function renderizarConquistas() {
    document.getElementById('conq-cliques').innerHTML = '';
    document.getElementById('conq-sps').innerHTML = '';
    document.getElementById('conq-estruturas').innerHTML = '';

    conquistas.forEach((conq, i) => {
        let containerId = `conq-${conq.tipo === 'clique' ? 'cliques' : conq.tipo === 'sps' ? 'sps' : 'estruturas'}`;
        let div = document.getElementById(containerId);

        let classe = conq.atingido ? 'conq-unlocked' : 'conq-locked disabled';
        let iconeVisivel = conq.atingido ? conq.icone : '❓';
        let styleBg = (conq.atingido && conq.icone.startsWith('url')) ? `background-image: ${conq.icone}; color: transparent;` : '';

        const html = `
            <div class="square-icon ${classe}" style="${styleBg}"
                 onmouseenter="showAchievementTooltip(${i})" onmouseleave="hideTooltip()">
                 ${!(conq.atingido && conq.icone.startsWith('url')) ? iconeVisivel : ''}
            </div>`;
        div.innerHTML += html;
    });
}

// ================= Game Loop & Init =================
carregarJogo();

setInterval(() => {
    smkoins += sps / 10;
    atualizarTela();
    // A cada tick não checaremos as conquistas para poupar processamento, 
    // mas de vez em quando é bom checar se tem SPS passivo batendo meta.
    if (Math.random() < 0.05) checarConquistas();
}, 100);

renderizarEstruturas();
renderizarUpgrades();
renderizarConquistas();
atualizarTela();