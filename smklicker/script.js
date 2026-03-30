// ================= Variáveis Globais =================
let smkoins = 0;
let sps = 0; 
let cliquesTotais = 0;
let estruturasCompradasTotais = 0;

let multiplicadorClique = 1;
let multiplicadorSPSGlobal = 1;
let multiplicadorCompra = 1; // <--- Adicione esta linha

// ================= Formatador de Números =================
function formatarNumero(num) {
    if (num < 1000000) return Math.floor(num).toLocaleString('pt-BR');
    const sufixos = [
        { valor: 1e93,nome: 'Trigintilhões' }, { valor: 1e90,nome: 'Novemvigintilhões' }, { valor: 1e87,nome: 'Octovigintilhões' },
        { valor: 1e84,nome: 'Septenvigintilhões' }, { valor: 1e81,nome: 'Sexvigintilhões' }, { valor: 1e78,nome: 'Quinvigintilhões' },
        { valor: 1e75,nome: 'Quatuorvigintilhões' }, { valor: 1e72,nome: 'Trevigintilhões' }, { valor: 1e69,nome: 'Duovigintilhões' },
        { valor: 1e66,nome: 'Unvigintilhões' }, { valor: 1e63,nome: 'Vigintilhões' }, { valor: 1e60,nome: 'Novemdecilhões' },
        { valor: 1e57,nome: 'Octodecilhões' }, { valor: 1e54,nome: 'Septendecilhões' }, { valor: 1e51,nome: 'Sexdecilhões' },
        { valor: 1e48,nome: 'Quindecilhões' }, { valor: 1e45,nome: 'Quatuordecilhões' }, { valor: 1e42,nome: 'Tredecilhões' },
        { valor: 1e39,nome: 'Duodecilhões' }, { valor: 1e36,nome: 'Undecilhões' }, { valor: 1e33,nome: 'Decilhões' },
        { valor: 1e30,nome: 'Nonilhões' }, { valor: 1e27,nome: 'Octilhões' }, { valor: 1e24,nome: 'Septilhões' },
        { valor: 1e21,nome: 'Sextilhões' }, { valor: 1e18,nome: 'Quintilhões' }, { valor: 1e15,nome: 'Quatrilhões' },
        { valor: 1e12,nome: 'Trilhões' }, { valor: 1e9,  nome: 'Bilhões' }, { valor: 1e6,  nome: 'Milhões' }
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
    { id: 'lurkers', nome: 'Lurkers', desc: 'A galera que deixa a aba mutada.', custoBase: 15, spsBase: 1, qtd: 0, mult: 1 },
    { id: 'mods', nome: 'Moderadores', desc: 'Pessoas para organizar o chat e chamar mais gente.', custoBase: 100, spsBase: 5, qtd: 0, mult: 1 },
    { id: 'fundadores', nome: 'Fundadores', desc: 'Pessoas que estão desde o começo e geram muitas views.', custoBase: 1100, spsBase: 25, qtd: 0, mult: 1 },
    { id: 'lojinho', nome: 'Lojinho da Nikk', desc: 'A Nikk Craft abre a lojinha, atraindo views pela curiosidade.', custoBase: 12000, spsBase: 100, qtd: 0, mult: 1 },
    { id: 'justchatting', nome: 'Just Chatting', desc: 'Aquele momento de trocar ideia, prendendo a atenção de todos.', custoBase: 130000, spsBase: 500, qtd: 0, mult: 1 },
    { id: 'minecraft', nome: 'Minecraft Clássico', desc: 'Transmitir versões antigas atrai os saudosistas em peso.', custoBase: 1400000, spsBase: 2000, qtd: 0, mult: 1 },
    { id: 'smkast', nome: 'SMKast', desc: 'O podcast da live para conversar sobre tudo. Atrai um público gigante.', custoBase: 20000000, spsBase: 10000, qtd: 0, mult: 1 }
];

// O "icone" aceita Emoji ou uma URL de imagem (ex: "url('img/mouse.png')")
let upgrades = [
    // Upgrades Globais
    { id: 'cafe_expresso', icone: '🌎', nome: 'Garrafa de Café Expresso', desc: 'Duplica TODAS as estruturas (SPS x2). O streamer não dorme, a live não para.', custo: 100000, comprado: false, tipo: 'global', visivel: true },
    { id: 'cadeira_ergonomica', icone: '🌎', nome: 'Cadeira Gamer Ergonômica', desc: 'Duplica TODAS as estruturas (SPS x2). Fim das dores nas costas, lives de 12 horas desbloqueadas.', custo: 5000000, comprado: false, tipo: 'global', reqUpg: 'cafe_expresso', visivel: false }, // 5 Milhões
    { id: 'fibra_optica', icone: '🌎', nome: 'Internet Fibra Óptica 1 Giga', desc: 'Duplica TODAS as estruturas (SPS x2). Zero lag de upload, a transmissão flui na velocidade da luz.', custo: 250000000, comprado: false, tipo: 'global', reqUpg: 'cadeira_ergonomica', visivel: false }, // 250 Milhões
    { id: 'iluminacao_pro', icone: '🌎', nome: 'Kit de Softbox e LEDs', desc: 'Duplica TODAS as estruturas (SPS x2). A iluminação profissional deixa a webcam com cara de cinema.', custo: 15000000000, comprado: false, tipo: 'global', reqUpg: 'fibra_optica', visivel: false }, // 15 Bilhões
    { id: 'mic_estudio', icone: '🌎', nome: 'Microfone Condensador de Estúdio', desc: 'Duplica TODAS as estruturas (SPS x2). Voz de locutor de rádio, retenção máxima de público no Just Chatting.', custo: 1000000000000, comprado: false, tipo: 'global', reqUpg: 'iluminacao_pro', visivel: false }, // 1 Trilhão
    { id: 'camera_4k', icone: '🌎', nome: 'Câmera Mirrorless 4K', desc: 'Duplica TODAS as estruturas (SPS x2). Cada poro do seu rosto é renderizado em altíssima definição.', custo: 75000000000000, comprado: false, tipo: 'global', reqUpg: 'mic_estudio', visivel: false }, // 75 Trilhões
    { id: 'dual_pc', icone: '🌎', nome: 'Setup Dual PC da NASA', desc: 'Duplica TODAS as estruturas (SPS x2). Jogar EA FC, Cyberpunk e streamar ao mesmo tempo sem perder 1 frame.', custo: 5e15, comprado: false, tipo: 'global', reqUpg: 'camera_4k', visivel: false }, // 5 Quadrilhões
    { id: 'selo_parceiro', icone: '🌎', nome: 'Parceria Oficial (Verificado)', desc: 'Duplica TODAS as estruturas (SPS x2). O algoritmo da Twitch finalmente te nota e recomenda pra todo mundo.', custo: 500e15, comprado: false, tipo: 'global', reqUpg: 'dual_pc', visivel: false }, // 500 Quadrilhões
    { id: 'patrocinio_marca', icone: '🌎', nome: 'Patrocínio Master', desc: 'Duplica TODAS as estruturas (SPS x2). Orçamento milionário entra no canal para bancar os eventos mais insanos.', custo: 50e18, comprado: false, tipo: 'global', reqUpg: 'selo_parceiro', visivel: false }, // 50 Quintilhões
    { id: 'estudio_proprio', icone: '🌎', nome: 'Estúdio Próprio Isolado', desc: 'Duplica TODAS as estruturas (SPS x2). Acústica perfeita, cenário impecável, hype incontrolável.', custo: 5e21, comprado: false, tipo: 'global', reqUpg: 'patrocinio_marca', visivel: false }, // 5 Sextilhões
    { id: 'transmissao_neural', icone: '🌎', nome: 'Transmissão Neural Borboleta', desc: 'Duplica TODAS as estruturas (SPS x2). Você transmite a live diretamente para a mente da sua comunidade.', custo: 500e21, comprado: false, tipo: 'global', reqUpg: 'estudio_proprio', visivel: false }, // 500 Sextilhões
    
    // Upgrades de Clique
    { id: 'mouse_bolinha', icone: '👆', nome: 'Mouse de Bolinha', desc: 'Dobra a eficiência dos cliques.', custo: 100, comprado: false, tipo: 'clique', requisitoCliques: 50, visivel: false },
    { id: 'mouse_optico', icone: '👆', nome: 'Mouse Óptico Genérico', desc: 'Dobra a eficiência dos cliques.', custo: 1000, comprado: false, tipo: 'clique', requisitoCliques: 250, visivel: false }, // ~1k
    { id: 'mouse_escritorio', icone: '👆', nome: 'Mouse Sem Fio de Escritório', desc: 'Dobra a eficiência dos cliques.', custo: 10000, comprado: false, tipo: 'clique', requisitoCliques: 1000, visivel: false }, // ~10k
    { id: 'mouse_gamer', icone: '👆', nome: 'Mouse Gamer de Entrada (RGB)', desc: 'Dobra a eficiência dos cliques.', custo: 100000, comprado: false, tipo: 'clique', requisitoCliques: 2500, visivel: false }, // ~100k
    { id: 'mouse_paracord', icone: '👆', nome: 'Mouse com Cabo Paracord', desc: 'Dobra a eficiência dos cliques.', custo: 5000000, comprado: false, tipo: 'clique', requisitoCliques: 10000, visivel: false }, // ~5M
    { id: 'mouse_ultraleve', icone: '👆', nome: 'Mouse Gamer Ultraleve (Colmeia)', desc: 'Dobra a eficiência dos cliques.', custo: 500000000, comprado: false, tipo: 'clique', requisitoCliques: 25000, visivel: false }, // ~500M
    { id: 'mouse_superlight', icone: '👆', nome: 'Mouse Sem Fio Pro Superlight', desc: 'Dobra a eficiência dos cliques.', custo: 50000000000, comprado: false, tipo: 'clique', requisitoCliques: 50000, visivel: false }, // ~50B
    { id: 'mouse_8k', icone: '👆', nome: 'Mouse com Sensor 8000Hz', desc: 'Dobra a eficiência dos cliques.', custo: 5000000000000, comprado: false, tipo: 'clique', requisitoCliques: 100000, visivel: false }, // ~5T
    { id: 'mouse_quantico', icone: '👆', nome: 'Mouse Óptico-Mecânico Quântico', desc: 'Dobra a eficiência dos cliques.', custo: 500000000000000, comprado: false, tipo: 'clique', requisitoCliques: 250000, visivel: false }, // ~500T
    { id: 'mouse_neural', icone: '👆', nome: 'Mouse de Neuro-Conexão', desc: 'Dobra a eficiência dos cliques.', custo: 50e15, comprado: false, tipo: 'clique', requisitoCliques: 500000, visivel: false }, // ~50Qa
    { id: 'mouse_borboleta', icone: '👆', nome: 'A Borboleta Digital (Mouse Supremo)', desc: 'Dobra a eficiência dos cliques.', custo: 5e18, comprado: false, tipo: 'clique', requisitoCliques: 1000000, visivel: false }, // ~5Qi
    
    // Upgrades Lurkers
    { id: 'abafixada', icone: '📌', nome: 'Aba Fixada', desc: 'Dobra o SPS dos Lurkers. Eles não fecham mais o navegador sem querer.', custo: 150, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 1, visivel: false },
    { id: 'abamutada', icone: '📌', nome: 'Aba Mutada', desc: 'Dobra o SPS dos Lurkers. Menos barulho, mais farm de views.', custo: 5000, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 25, visivel: false }, // ~5 Mil
    { id: 'qualidade160p', icone: '📌', nome: 'Qualidade 160p', desc: 'Dobra o SPS dos Lurkers. Economizando internet para focar em deixar a live aberta.', custo: 150000, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 50, visivel: false }, // ~150 Mil
    { id: 'escondidonotrabalho', icone: '📌', nome: 'Escondido no Trabalho', desc: 'Dobra o SPS dos Lurkers. O chefe achou que era uma planilha.', custo: 150000000, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 100, visivel: false }, // ~150 Milhões
    { id: 'pcligadodemadrugada', icone: '📌', nome: 'PC Ligado de Madrugada', desc: 'Dobra o SPS dos Lurkers. A live rolando solta enquanto eles dormem.', custo: 200000000000, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 150, visivel: false }, // ~200 Bilhões
    { id: 'segundomonitor', icone: '📌', nome: 'Segundo Monitor', desc: 'Dobra o SPS dos Lurkers. A stream agora é parte definitiva do setup deles.', custo: 200e12, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 200, visivel: false }, // ~200 Trilhões
    { id: 'celularnagaveta', icone: '📌', nome: 'Celular na Gaveta', desc: 'Dobra o SPS dos Lurkers. Bateria viciada, mas a view tá contando.', custo: 250e15, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 250, visivel: false }, // ~250 Quadrilhões
    { id: 'antiinatividade', icone: '📌', nome: 'Extensão Anti-Inatividade', desc: 'Dobra o SPS dos Lurkers. Um script impede a Twitch de pausar o vídeo.', custo: 250e18, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 300, visivel: false }, // ~250 Quintilhões
    { id: 'lurkerprofissional', icone: '📌', nome: 'Lurker Profissional', desc: 'Dobra o SPS dos Lurkers. Eles não assistem mais à live, eles habitam a live.', custo: 300e21, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 350, visivel: false }, // ~300 Sextilhões
    { id: 'entidadeonipresente', icone: '📌', nome: 'Entidade Onipresente', desc: 'Dobra o SPS dos Lurkers. Um espírito ancestral que contabiliza +1 viewer.', custo: 300e24, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 400, visivel: false }, // ~300 Septilhões
    { id: 'sombraborboleta', icone: '📌', nome: 'A Sombra da Borboleta', desc: 'Dobra o SPS dos Lurkers. O silêncio absoluto se converte em hype infinito.', custo: 350e27, comprado: false, tipo: 'estrutura', alvo: 'lurkers', reqEstruturaQtd: 450, visivel: false }, // ~350 Octilhões
    
    // Upgrades Mods
    { id: 'banhammer', icone: '🔨', nome: 'Ban Hammer de Ouro', desc: 'Dobra o SPS dos Moderadores. O chat não ousa mais pisar fora da linha.', custo: 1000, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 1, visivel: false },
    { id: 'nightbot', icone: '🔨', nome: 'Nightbot Configurado', desc: 'Dobra o SPS dos Moderadores. Comandos automáticos trabalhando por você.', custo: 35000, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 25, visivel: false }, // ~35 Mil
    { id: 'filtro_palavras', icone: '🔨', nome: 'Filtro de Palavras Implacável', desc: 'Dobra o SPS dos Moderadores. Copypastas chatas são destruídas na velocidade da luz.', custo: 1200000, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 50, visivel: false }, // ~1.2 Milhões
    { id: 'modo_seguidores', icone: '🔨', nome: 'Modo Apenas Seguidores', desc: 'Dobra o SPS dos Moderadores. Espanta os trolls e foca na comunidade.', custo: 1200000000, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 100, visivel: false }, // ~1.2 Bilhões
    { id: 'visao_raiox', icone: '🔨', nome: 'Painel de Mod em Segundo Monitor', desc: 'Dobra o SPS dos Moderadores. Visão completa de logs e histórico dos baderneiros.', custo: 1300000000000, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 150, visivel: false }, // ~1.3 Trilhões
    { id: 'delay_chat', icone: '🔨', nome: 'Modo Lento e Delay Tático', desc: 'Dobra o SPS dos Moderadores. Tempo exato para apagar a mensagem antes do streamer ler.', custo: 1.5e15, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 200, visivel: false }, // ~1.5 Quadrilhões
    { id: 'tropa_vips', icone: '🔨', nome: 'Milícia de VIPs', desc: 'Dobra o SPS dos Moderadores. Subornando a galera ativa com a espadinha para ajudar a vigiar.', custo: 1.5e18, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 250, visivel: false }, // ~1.5 Quintilhões
    { id: 'skynet_mods', icone: '🔨', nome: 'Exército de Bots Anti-Spam', desc: 'Dobra o SPS dos Moderadores. A inteligência artificial assumiu a ordem do chat.', custo: 1.8e21, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 300, visivel: false }, // ~1.8 Sextilhões
    { id: 'ban_interdimensional', icone: '🔨', nome: 'Banimento Interdimensional', desc: 'Dobra o SPS dos Moderadores. O troll é banido de todas as realidades alternativas da Twitch.', custo: 2e24, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 350, visivel: false }, // ~2 Septilhões
    { id: 'juizo_final', icone: '🔨', nome: 'O Juízo Final do Chat', desc: 'Dobra o SPS dos Moderadores. O botão de "Limpar Chat" agora purifica a alma dos viewers.', custo: 2e27, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 400, visivel: false }, // ~2 Octilhões
    { id: 'espada_nikk', icone: '🔨', nome: 'A Espada Ancestral da Nikk', desc: 'Dobra o SPS dos Moderadores. A lenda da moderação abençoa a equipe com controle absoluto.', custo: 2.5e30, comprado: false, tipo: 'estrutura', alvo: 'mods', reqEstruturaQtd: 450, visivel: false }, // ~2.5 Nonilhões

     // Upgrades Fundadores
    { id: '1mes', icone: '👑', nome: '1 Mês de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 15000, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 1, visivel: false }, // ~15 Mil
    { id: '3meses', icone: '👑', nome: '3 Meses de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 500000, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 25, visivel: false }, // ~500 Mil
    { id: '6meses', icone: '👑', nome: '6 Meses de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 18000000, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 50, visivel: false }, // ~18 Milhões
    { id: '9meses', icone: '👑', nome: '9 Meses de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 20000000000, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 100, visivel: false }, // ~20 Bilhões
    { id: '1ano', icone: '👑', nome: '1 Ano de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 20000000000000, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 150, visivel: false }, // ~20 Trilhões
    { id: '1anoemeio', icone: '👑', nome: '1 Ano e Meio de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 25e15, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 200, visivel: false }, // ~25 Quadrilhões
    { id: '2anos', icone: '👑', nome: '2 Anos de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 25e18, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 250, visivel: false }, // ~25 Quintilhões
    { id: '3anos', icone: '👑', nome: '3 Anos de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 30e21, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 300, visivel: false }, // ~30 Sextilhões
    { id: '4anos', icone: '👑', nome: '4 Anos de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 30e24, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 350, visivel: false }, // ~30 Septilhões
    { id: '5anos', icone: '👑', nome: '5 Anos de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 35e27, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 400, visivel: false }, // ~35 Octilhões
    { id: '6anos', icone: '👑', nome: '6 Anos de Sub', desc: 'Dobra o SPS dos Fundadores.', custo: 35e30, comprado: false, tipo: 'estrutura', alvo: 'fundadores', reqEstruturaQtd: 450, visivel: false }, // ~35 Nonilhões

    //Upgrades Lojinho
    { id: 'estoque_renovado', icone: '🛍️', nome: 'Estoque Renovado', desc: 'Dobra o SPS da Lojinho. Itens básicos como figurinhas e badges simples chegam na prateleira.', custo: 120000, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 1, visivel: false }, // 120 Mil
    { id: 'resgate_pontos', icone: '🛍️', nome: 'Comandos de Resgate', desc: 'Dobra o SPS da Lojinho. Integração com os pontos do canal facilita as "vendas".', custo: 5000000, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 25, visivel: false }, // 5 Milhões
    { id: 'caixa_misteriosa', icone: '🛍️', nome: 'Lootbox da Comunidade', desc: 'Dobra o SPS da Lojinho. Ninguém sabe o que tem dentro, mas todo mundo quer comprar.', custo: 150000000, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 50, visivel: false }, // 150 Milhões
    { id: 'mercado_livre_smk', icone: '🛍️', nome: 'SMK Livre', desc: 'Dobra o SPS da Lojinho. Entrega rápida de memes e engajamento em todo o chat.', custo: 150000000000, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 100, visivel: false }, // 150 Bilhões
    { id: 'frete_gratis', icone: '🛍️', nome: 'Selo Frete Grátis', desc: 'Dobra o SPS da Lojinho. Removendo barreiras para o chat gastar todos os SMKoins.', custo: 150000000000000, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 150, visivel: false }, // 150 Trilhões
    { id: 'itens_exclusivos', icone: '🛍️', nome: 'Edição Limitada ArthurSMK', desc: 'Dobra o SPS da Lojinho. Itens raros que só os mais ricos do chat conseguem ostentar.', custo: 1.5e17, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 200, visivel: false }, // 150 Quadrilhões
    { id: 'franquia_global', icone: '🛍️', nome: 'Franquia da Nikk', desc: 'Dobra o SPS da Lojinho. A lojinha agora tem filiais em todas as streams da categoria.', custo: 1.5e20, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 250, visivel: false }, // 150 Quintilhões
    { id: 'monopolio_hype', icone: '🛍️', nome: 'Monopólio do Hype', desc: 'Dobra o SPS da Lojinho. Não existe mais concorrência, tudo passa pela mão da Nikk.', custo: 1.5e23, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 300, visivel: false }, // 150 Sextilhões
    { id: 'e_commerce_neural', icone: '🛍️', nome: 'E-commerce Telepático', desc: 'Dobra o SPS da Lojinho. O viewer pensa no item e a Lojinho já debita os SMKoins.', custo: 2e26, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 350, visivel: false }, // 200 Septilhões
    { id: 'lojinho_multiversal', icone: '🛍️', nome: 'Lojinho Multiversal', desc: 'Dobra o SPS da Lojinho. Vendendo produtos para versões alternativas da sua comunidade.', custo: 2e29, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 400, visivel: false }, // 200 Octilhões
    { id: 'artefato_supremo', icone: '🛍️', nome: 'O Artefato Divino da Nikk', desc: 'Dobra o SPS da Lojinho. Um item lendário que converte cada transação em energia pura de hype.', custo: 2.5e32, comprado: false, tipo: 'estrutura', alvo: 'lojinho', reqEstruturaQtd: 450, visivel: false }, // 250 Nonilhões

    //Upgrades Just Chatting
    { id: 'mic_condensador', icone: '🎤', nome: 'Microfone Condensador', desc: 'Dobra o SPS do Just Chatting. Áudio limpinho, o chat ouve até sua respiração.', custo: 1300000, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 1, visivel: false }, // 1.3 Milhão
    { id: 'react_videos', icone: '🎤', nome: 'React de Vídeos em Alta', desc: 'Dobra o SPS do Just Chatting. Reagir a vídeos aleatórios segura a view que é uma beleza.', custo: 50000000, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 25, visivel: false }, // 50 Milhões
    { id: 'tier_lists', icone: '🎤', nome: 'Tier Lists Polêmicas', desc: 'Dobra o SPS do Just Chatting. Fazer ranking de comida gera um caos maravilhoso no chat.', custo: 1500000000, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 50, visivel: false }, // 1.5 Bilhão
    { id: 'historia_triste', icone: '🎤', nome: 'Storytelling de Qualidade', desc: 'Dobra o SPS do Just Chatting. Contar histórias da sua vida prende a atenção de 100% da live.', custo: 1.5e12, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 100, visivel: false }, // 1.5 Trilhão
    { id: 'fofoca_edificante', icone: '🎤', nome: 'Fofoca Edificante', desc: 'Dobra o SPS do Just Chatting. Comentar o drama alheio atrai curiosos de toda a Twitch.', custo: 1.5e15, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 150, visivel: false }, // 1.5 Quadrilhão
    { id: 'papo_cabeca', icone: '🎤', nome: 'Filosofia de Boteco', desc: 'Dobra o SPS do Just Chatting. Discussões profundas sobre o universo às 3 da manhã.', custo: 2e18, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 200, visivel: false }, // 2 Quintilhões
    { id: 'hipnose_coletiva', icone: '🎤', nome: 'Hipnose Coletiva', desc: 'Dobra o SPS do Just Chatting. Sua voz se torna tão suave que o chat entra em transe de hype.', custo: 2e21, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 250, visivel: false }, // 2 Sextilhões
    { id: 'carisma_sobrenatural', icone: '🎤', nome: 'Carisma Sobrenatural', desc: 'Dobra o SPS do Just Chatting. Você sorri e milhares de SMKoins são gerados instantaneamente.', custo: 2.5e24, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 300, visivel: false }, // 2.5 Septilhões
    { id: 'orador_supremo', icone: '🎤', nome: 'Orador Supremo', desc: 'Dobra o SPS do Just Chatting. Cada palavra dita ecoa pela plataforma inteira.', custo: 2.5e27, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 350, visivel: false }, // 2.5 Octilhões
    { id: 'seita_borboleta', icone: '🎤', nome: 'O Culto da Borboleta', desc: 'Dobra o SPS do Just Chatting. O Just Chatting transcende e vira um estilo de vida absoluto.', custo: 3e30, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 400, visivel: false }, // 3 Nonilhões
    { id: 'verbo_primordial', icone: '🎤', nome: 'O Verbo Primordial', desc: 'Dobra o SPS do Just Chatting. Uma única palavra sua contém todo o engajamento do universo.', custo: 3e33, comprado: false, tipo: 'estrutura', alvo: 'justchatting', reqEstruturaQtd: 450, visivel: false }, // 3 Decilhões

    //Upgrades Minecraft
    { id: 'versao_1_0', icone: '🌱', nome: 'Versão 1.0 Oficial', desc: 'Dobra o SPS do Minecraft Clássico. O saudosismo bate forte e a galera não sai mais da live.', custo: 14000000, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 1, visivel: false }, // 14 Milhões
    { id: 'primeira_noite', icone: '🌱', nome: 'Sobrevivendo à Primeira Noite', desc: 'Dobra o SPS do Minecraft Clássico. Uma casa de terra, mas segura contra os Creepers.', custo: 500000000, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 25, visivel: false }, // 500 Milhões
    { id: 'diamantes', icone: '🌱', nome: 'A Primeira Picareta de Diamante', desc: 'Dobra o SPS do Minecraft Clássico. O chat vai à loucura quando você acha o minério azul.', custo: 15000000000, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 50, visivel: false }, // 15 Bilhões
    { id: 'portal_nether', icone: '🌱', nome: 'Portal do Nether', desc: 'Dobra o SPS do Minecraft Clássico. Acessando uma nova dimensão de views flamejantes.', custo: 15e12, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 100, visivel: false }, // 15 Trilhões
    { id: 'ender_dragon', icone: '🌱', nome: 'A Queda do Dragão', desc: 'Dobra o SPS do Minecraft Clássico. Zerando o jogo e subindo os créditos na tela.', custo: 20e15, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 150, visivel: false }, // 20 Quadrilhões
    { id: 'era_dos_mods', icone: '🌱', nome: 'A Era dos Mods', desc: 'Dobra o SPS do Minecraft Clássico. Instalando modpacks caóticos que mudam a gameplay inteira.', custo: 20e18, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 200, visivel: false }, // 20 Quintilhões
    { id: 'servidor_comunidade', icone: '🌱', nome: 'Servidor com a Comunidade', desc: 'Dobra o SPS do Minecraft Clássico. O chat inteiro entra no mapa para construir e destruir tudo.', custo: 20e21, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 250, visivel: false }, // 20 Sextilhões
    { id: 'automacao_redstone', icone: '🌱', nome: 'Engenharia Redstone', desc: 'Dobra o SPS do Minecraft Clássico. Fazendas automáticas de engajamento rodando 24 horas.', custo: 25e24, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 300, visivel: false }, // 25 Septilhões
    { id: 'hardcore_mode', icone: '🌱', nome: 'Modo Hardcore', desc: 'Dobra o SPS do Minecraft Clássico. A tensão de que o jogo pode acabar a qualquer segundo prende o público.', custo: 25e27, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 350, visivel: false }, // 25 Octilhões
    { id: 'metaverso_blocos', icone: '🌱', nome: 'Metaverso de Blocos', desc: 'Dobra o SPS do Minecraft Clássico. O jogo agora é uma realidade virtual indistinguível da vida real.', custo: 30e30, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 400, visivel: false }, // 30 Nonilhões
    { id: 'codigo_fonte', icone: '🌱', nome: 'Acesso ao Código Fonte', desc: 'Dobra o SPS do Minecraft Clássico. Você hackeia a Matrix dos blocos e controla as leis da física da stream.', custo: 30e33, comprado: false, tipo: 'estrutura', alvo: 'minecraft', reqEstruturaQtd: 450, visivel: false }, // 30 Decilhões

    // Upgrades SMKast
    { id: 'marketing_cortes', icone: '🎧', nome: 'Estratégia de Cortes', desc: 'Dobra o SPS do SMKast. Seus clipes curtos viralizam no TikTok e no Shorts, dobrando a audiência da live.', custo: 200000000, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 1, visivel: false }, // 200 Milhões
    { id: 'convidado_polemico', icone: '🎧', nome: 'Convidado Polêmico', desc: 'Dobra o SPS do SMKast. O chat entra em ebulição com as opiniões duvidosas de quem você chamou pra conversar.', custo: 6500000000, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 25, visivel: false }, // 6.5 Bilhões
    { id: 'mesa_padrao', icone: '🎧', nome: 'Mesa de Podcast Profissional', desc: 'Dobra o SPS do SMKast. Microfones caríssimos em braços articulados. Agora o visual impõe respeito.', custo: 200000000000, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 50, visivel: false }, // 200 Bilhões
    { id: 'patrocinio_energetico', icone: '🎧', nome: 'Patrocínio de Energético', desc: 'Dobra o SPS do SMKast. Geladeirinha no fundo do cenário e orçamento infinito para a produção.', custo: 200e12, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 100, visivel: false }, // 200 Trilhões
    { id: 'plateia_aovivo', icone: '🎧', nome: 'SMKast com Plateia ao Vivo', desc: 'Dobra o SPS do SMKast. Você aluga um teatro e a comunidade inteira comparece para gritar no fundo.', custo: 250e15, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 150, visivel: false }, // 250 Quadrilhões
    { id: 'rede_televisao', icone: '🎧', nome: 'Rede SMK de Televisão', desc: 'Dobra o SPS do SMKast. O podcast compra uma emissora de TV aberta e domina a mídia tradicional.', custo: 300e18, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 200, visivel: false }, // 300 Quintilhões
    { id: 'traducao_global', icone: '🎧', nome: 'Tradução Simultânea Global', desc: 'Dobra o SPS do SMKast. O mundo inteiro assiste e entende as piadas internas da sua live em tempo real.', custo: 300e21, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 250, visivel: false }, // 300 Sextilhões
    { id: 'transmissao_espacial', icone: '🎧', nome: 'Transmissão Espacial', desc: 'Dobra o SPS do SMKast. O estúdio é lançado na órbita da Terra. Aliens começam a se inscrever no canal.', custo: 350e24, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 300, visivel: false }, // 350 Septilhões
    { id: 'entrevista_historica', icone: '🎧', nome: 'Máquina do Tempo', desc: 'Dobra o SPS do SMKast. Você volta no tempo para entrevistar figuras históricas e quebra a internet.', custo: 350e27, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 350, visivel: false }, // 350 Octilhões
    { id: 'monopolio_da_fala', icone: '🎧', nome: 'O Monopólio da Comunicação', desc: 'Dobra o SPS do SMKast. Todas as conversas do planeta Terra agora são propriedades intelectuais do SMKast.', custo: 400e30, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 400, visivel: false }, // 400 Nonilhões
    { id: 'a_voz_do_universo', icone: '🎧', nome: 'A Voz do Universo', desc: 'Dobra o SPS do SMKast. As palavras ditas no SMKast se tornam as leis da física que regem a realidade.', custo: 400e33, comprado: false, tipo: 'estrutura', alvo: 'smkast', reqEstruturaQtd: 450, visivel: false } // 400 Decilhões
];

// Conquistas separadas por 'tipo' para organizar no Menu
const conquistas = [
    // CLIQUES
    { id: 'c_100', icone: '👆', tipo: 'clique', nome: 'Dedo de Manteiga', desc: 'Clique 100 vezes.', reqDesc: 'Dar 100 cliques.', atingido: false, condicao: () => cliquesTotais >= 100 },
    { id: 'c_1k', icone: '⚡', tipo: 'clique', nome: 'Dedo Nervoso', desc: 'Clique 1.000 vezes.', reqDesc: 'Dar 1.000 cliques.', atingido: false, condicao: () => cliquesTotais >= 1000 },
    { id: 'c_10k', icone: '🔥', tipo: 'clique', nome: 'Quebra-Mouse', desc: 'Clique 10.000 vezes.', reqDesc: 'Dar 10.000 cliques.', atingido: false, condicao: () => cliquesTotais >= 10000 },

    // SPS
    { id: 's_1k', icone: '📈', tipo: 'sps', nome: 'A Máquina Ligou', desc: 'Faça 1.000 SPS.', reqDesc: 'Chegar a 1.000 SPS.', atingido: false, condicao: () => sps >= 1000 },
    { id: 's_1m', icone: '🚀', tipo: 'sps', nome: 'Milionário Automático', desc: 'Faça 1 Milhão de SPS.', reqDesc: 'Chegar a 1.000.000 SPS.', atingido: false, condicao: () => sps >= 1000000 },

    // ESTRUTURAS
    { id: 'e_l10', icone: '👻', tipo: 'estrutura', nome: 'A Base Vem Forte', desc: 'Compre 10 Lurkers.', reqDesc: 'Ter 10 Lurkers.', atingido: false, condicao: () => estruturas[0].qtd >= 10 },
    { id: 'e_l50', icone: '🥷', tipo: 'estrutura', nome: 'Exército Silencioso', desc: 'Compre 50 Lurkers.', reqDesc: 'Ter 50 Lurkers.', atingido: false, condicao: () => estruturas[0].qtd >= 50 },
    { id: 'e_origem', icone: '⛏️', tipo: 'estrutura', nome: 'De Volta às Origens', desc: 'Compre 1 Minecraft Clássico.', reqDesc: 'Comprar o Minecraft Clássico.', atingido: false, condicao: () => estruturas[5].qtd >= 1 },
    { id: 'e_total100', icone: '🏙️', tipo: 'estrutura', nome: 'Pequeno Império', desc: 'Compre 100 estruturas no total.', reqDesc: 'Ter 100 estruturas somadas.', atingido: false, condicao: () => estruturasCompradasTotais >= 100 }
];

// ================= Salvamento e Carregamento (Save/Load) =================
function salvarJogoManual() {
    salvarJogo();
    mostrarNotificacao('💾 Jogo Salvo com Sucesso!');
    fecharModal('modal-config');
}

function salvarJogo() {
    const saveData = {
        smkoins, sps, cliquesTotais, estruturasCompradasTotais,
        // Agora o jogo salva e lê o ID único de cada item, não a posição
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
                if (u.tipo === 'clique') multiplicadorClique *= 2;
                if (u.tipo === 'global') multiplicadorSPSGlobal *= 2;
                if (u.tipo === 'estrutura') {
                    const est = estruturas.find(e => e.id === u.alvo);
                    if (est) est.mult *= 2;
                }
            }
        });

        calcularSPS();
        verificarDesbloqueios();
        renderizarConquistas();
    }
}

function resetarJogo() {
    if(confirm('Tem certeza que deseja apagar todo o seu progresso? Isso não pode ser desfeito!')) {
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
window.onclick = function(event) {
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

function clicarBorboleta() {
    smkoins += (1 * multiplicadorClique);
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

        if (upg.tipo === 'clique') multiplicadorClique *= 2;
        if (upg.tipo === 'global') multiplicadorSPSGlobal *= 2;
        if (upg.tipo === 'estrutura') {
            const est = estruturas.find(e => e.id === upg.alvo);
            if (est) est.mult *= 2;
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
    estruturas.forEach(est => {
        novoSPS += (est.qtd * est.spsBase * est.mult);
    });
    sps = novoSPS * multiplicadorSPSGlobal;
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
    if(teveNova) renderizarConquistas();
}

function verificarDesbloqueios() {
    let mudouAlgo = false;
    upgrades.forEach(upg => {
        if (!upg.comprado && !upg.visivel) {
            if (upg.tipo === 'clique' && upg.requisitoCliques && cliquesTotais >= upg.requisitoCliques) { upg.visivel = true; mudouAlgo = true; } 
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

window.showStructureTooltip = function(index) {
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

window.showUpgradeTooltip = function(index) {
    const upg = upgrades[index];
    tooltip.innerHTML = `<h4>${upg.nome}</h4><p>${upg.desc}</p><p style="margin-top: 10px; color: var(--smk-pink); font-weight: bold;">Custo: ${formatarNumero(upg.custo)} SMK</p>`;
    tooltip.style.display = 'block';
};

window.showAchievementTooltip = function(index) {
    const c = conquistas[index];
    if (c.atingido) {
        tooltip.innerHTML = `<h4>🏆 ${c.nome}</h4><p>${c.desc}</p>`;
    } else {
        tooltip.innerHTML = `<h4>???</h4><p style="color: var(--text-muted)">Requisito: ${c.reqDesc}</p>`;
    }
    tooltip.style.display = 'block';
};

window.hideTooltip = function() { tooltip.style.display = 'none'; };

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
    if(Math.random() < 0.05) checarConquistas(); 
}, 100);

renderizarEstruturas();
renderizarUpgrades();
renderizarConquistas();
atualizarTela();