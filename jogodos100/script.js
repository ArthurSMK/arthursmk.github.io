// Banco de dados simulado com os dias
const gameData = [
    {
        date: "2026-01-01",
        pergunta: "Qual a promessa de Ano Novo mais comum?",
        respostas: [
            { texto: "Fazer academia", pontos: 45, sinonimos: ["academia", "malhar", "emagrecer", "dieta", "perder peso", "treinar"] },
            { texto: "Economizar dinheiro", pontos: 22, sinonimos: ["economizar", "juntar dinheiro", "guardar dinheiro", "ficar rico"] },
            { texto: "Aprender um novo idioma", pontos: 14, sinonimos: ["idioma", "ingles", "aprender ingles", "estudar"] },
            { texto: "Viajar mais", pontos: 10, sinonimos: ["viajar", "viagens"] },
            { texto: "Parar de fumar", pontos: 6, sinonimos: ["parar de fumar", "largar o cigarro"] },
            { texto: "Ler mais livros", pontos: 3, sinonimos: ["ler", "ler mais", "livros", "leitura"] }
        ]
    },
    {
        date: "2026-01-02",
        pergunta: "Algo que as pessoas costumam fazer na praia?",
        respostas: [
            { texto: "Tomar banho de mar", pontos: 38, sinonimos: ["entrar no mar", "nadar", "mergulhar", "banho de mar", "mar"] },
            { texto: "Tomar sol", pontos: 26, sinonimos: ["tomar sol", "bronzear", "pegar uma cor", "bronzeamento"] },
            { texto: "Jogar frescobol / Vôlei", pontos: 15, sinonimos: ["frescobol", "volei", "jogar bola", "altinha", "futevolei"] },
            { texto: "Comer petiscos", pontos: 11, sinonimos: ["comer", "petiscar", "porcao"] },
            { texto: "Caminhar na areia", pontos: 7, sinonimos: ["caminhar", "andar", "correr", "caminhada"] },
            { texto: "Beber água de coco", pontos: 3, sinonimos: ["agua de coco", "beber", "tomar uma"] }
        ]
    },
    {
        date: "2026-01-03",
        pergunta: "O que não pode faltar em um churrasco de domingo?",
        respostas: [
            { texto: "Carne", pontos: 42, sinonimos: ["carne", "picanha", "linguiça", "bife", "frango"] },
            { texto: "Cerveja", pontos: 26, sinonimos: ["cerveja", "breja", "gelada", "cerva", "chopp"] },
            { texto: "Pão de alho", pontos: 16, sinonimos: ["pao de alho", "pao"] },
            { texto: "Carvão", pontos: 10, sinonimos: ["carvao", "fogo"] },
            { texto: "Farofa", pontos: 4, sinonimos: ["farofa", "farinha"] },
            { texto: "Vinagrete", pontos: 2, sinonimos: ["vinagrete", "salada", "molho"] }
        ]
    },
    {
        date: "2026-01-04",
        pergunta: "Uma cor de escova de dentes muito comum?",
        respostas: [
            { texto: "Azul", pontos: 46 },
            { texto: "Branca", pontos: 24, sinonimos: ["branco", "branca"] },
            { texto: "Verde", pontos: 14 },
            { texto: "Vermelha", pontos: 9, sinonimos: ["vermelho", "vermelha"] },
            { texto: "Rosa", pontos: 7 }
        ]
    },
    {
        date: "2026-01-05",
        pergunta: "Um personagem da série 'The Boys' que as pessoas amam ou odeiam?",
        respostas: [
            { texto: "Capitão Pátria", pontos: 48, sinonimos: ["capitao patria", "homelander"] },
            { texto: "Billy Bruto", pontos: 28, sinonimos: ["billy bruto", "butcher", "billy", "bruto", "carniceiro"] },
            { texto: "Hughie", pontos: 12, sinonimos: ["hughie", "huguinho"] },
            { texto: "Luz-Estrela", pontos: 7, sinonimos: ["luz estrela", "starlight", "annie"] },
            { texto: "Soldier Boy", pontos: 5, sinonimos: ["soldier boy"] }
        ]
    },
    {
        date: "2026-01-06",
        pergunta: "O que você faz quando a live cai por culpa da internet?",
        respostas: [
            { texto: "Reinicia o modem", pontos: 42, sinonimos: ["reinicia o roteador", "reinicia a internet", "desliga e liga", "reiniciar"] },
            { texto: "Abre o 4G", pontos: 26, sinonimos: ["4g", "5g", "dados moveis", "roteia o celular", "celular"] },
            { texto: "Xinga a operadora", pontos: 18, sinonimos: ["xinga", "reclama", "fica puto", "raiva"] },
            { texto: "Avisa no Discord", pontos: 9, sinonimos: ["discord", "avisa", "manda mensagem", "twitter"] },
            { texto: "Desiste e vai dormir", pontos: 5, sinonimos: ["dorme", "desiste", "chora", "encerra a live"] }
        ]
    },
    {
        date: "2026-01-07",
        pergunta: "Uma ferramenta que um designer usa para criar um flyer?",
        respostas: [
            { texto: "Photoshop", pontos: 52, sinonimos: ["ps", "adobe photoshop"] },
            { texto: "Canva", pontos: 24 },
            { texto: "Illustrator", pontos: 14, sinonimos: ["ai", "adobe illustrator"] },
            { texto: "Figma", pontos: 7 },
            { texto: "Corel Draw", pontos: 3, sinonimos: ["corel"] }
        ]
    },
    {
        date: "2026-01-08",
        pergunta: "Qual o minério mais valioso do Minecraft?",
        respostas: [
            { texto: "Netherite", pontos: 45, sinonimos: ["netherite", "netherita", "detritos ancestrais"] },
            { texto: "Diamante", pontos: 35, sinonimos: ["dima", "diamante"] },
            { texto: "Esmeralda", pontos: 12, sinonimos: ["esmeralda"] },
            { texto: "Ouro", pontos: 5 },
            { texto: "Ferro", pontos: 3 }
        ]
    },
    {
        date: "2026-01-09",
        pergunta: "Algo que se coloca no pão no café da manhã?",
        respostas: [
            { texto: "Manteiga", pontos: 48, sinonimos: ["manteiga", "margarina", "qualina"] },
            { texto: "Queijo", pontos: 22, sinonimos: ["queijo", "mussarela"] },
            { texto: "Presunto", pontos: 14, sinonimos: ["presunto", "apresuntado", "fiambre"] },
            { texto: "Requeijão", pontos: 9, sinonimos: ["requeijao", "catupiry"] },
            { texto: "Ovo", pontos: 4, sinonimos: ["ovo", "ovos", "ovo frito"] },
            { texto: "Geleia", pontos: 3, sinonimos: ["geleia", "chimia"] }
        ]
    },
    {
        date: "2026-01-10",
        pergunta: "O que um streamer faz durante o 'Be Right Back' (Já volto)?",
        respostas: [
            { texto: "Ir ao banheiro", pontos: 46, sinonimos: ["banheiro", "mijadin", "mijar"] },
            { texto: "Pegar água", pontos: 28, sinonimos: ["agua", "beber agua", "encher a garrafa"] },
            { texto: "Comer", pontos: 14, sinonimos: ["comer", "lanchar", "jantar", "buscar comida"] },
            { texto: "Falar com alguém", pontos: 7, sinonimos: ["falar com alguem", "atender a porta", "mae", "namorada"] },
            { texto: "WhatsApp", pontos: 5, sinonimos: ["whatsapp", "zap", "celular", "mensagem"] }
        ]
    },
    {
        date: "2026-01-11",
        pergunta: "Um estado brasileiro que faz divisa com o Acre?",
        respostas: [
            { texto: "Amazonas", pontos: 70, sinonimos: ["am", "amazonas"] },
            { texto: "Rondônia", pontos: 30, sinonimos: ["ro", "rondonia"] }
        ]
    },
    {
        date: "2026-01-12",
        pergunta: "O que as pessoas mais compram em liquidações de janeiro?",
        respostas: [
            { texto: "Roupas", pontos: 38, sinonimos: ["roupa", "camisa", "calça", "vestido"] },
            { texto: "Eletrodomésticos", pontos: 26, sinonimos: ["eletrodomestico", "geladeira", "fogao", "maquina de lavar"] },
            { texto: "Sapatos", pontos: 15, sinonimos: ["sapato", "tenis", "calcado", "sandalia"] },
            { texto: "Televisão", pontos: 11, sinonimos: ["televisao", "tv"] },
            { texto: "Celular", pontos: 10, sinonimos: ["celular", "smartphone", "telefone"] }
        ]
    },
    {
        date: "2026-01-13",
        pergunta: "Um efeito de vídeo muito usado no After Effects?",
        respostas: [
            { texto: "Motion Blur", pontos: 32, sinonimos: ["motion blur", "desfoque de movimento", "blur"] },
            { texto: "Lumetri Color", pontos: 24, sinonimos: ["lumetri", "cor", "color grading", "color correction"] },
            { texto: "Keylight", pontos: 18, sinonimos: ["keylight", "chroma key", "tela verde", "fundo verde"] },
            { texto: "Glow", pontos: 14, sinonimos: ["glow", "brilho"] },
            { texto: "Slow Motion", pontos: 7, sinonimos: ["slow motion", "camera lenta", "slow"] },
            { texto: "Transições", pontos: 5, sinonimos: ["transicao", "transitions", "zoom"] }
        ]
    },
    {
        date: "2026-01-14",
        pergunta: "Um presente romântico que não custa dinheiro?",
        respostas: [
            { texto: "Carta de amor", pontos: 42, sinonimos: ["carta", "bilhete", "carta de amor", "cartinha", "poema"] },
            { texto: "Massagem", pontos: 26, sinonimos: ["massagem", "cafune"] },
            { texto: "Cozinhar o jantar", pontos: 16, sinonimos: ["cozinhar", "jantar", "fazer comida", "comida"] },
            { texto: "Playlist", pontos: 11, sinonimos: ["playlist", "musica", "playlist de musica"] },
            { texto: "Passeio", pontos: 5, sinonimos: ["passeio", "caminhada", "andar no parque"] }
        ]
    },
    {
        date: "2026-01-15",
        pergunta: "Qual o maior medo de um jogador de EA FC no Ultimate Team?",
        respostas: [
            { texto: "Handicap", pontos: 40, sinonimos: ["handicap", "script", "roubo", "ea manipulando"] },
            { texto: "Time cheio de ícones", pontos: 28, sinonimos: ["time full icon", "icones", "time pelado", "pay to win"] },
            { texto: "Desconectar", pontos: 18, sinonimos: ["desconectar", "cair a net", "dc", "queda de conexao"] },
            { texto: "Gastar coins e não vir nada", pontos: 9, sinonimos: ["azar nos packs", "pack lixo", "perder coins"] },
            { texto: "Tomar gol de rebote", pontos: 5, sinonimos: ["gol de rebote", "rebote", "gol cagado"] }
        ]
    },
    {
        date: "2026-01-16",
        pergunta: "Algo que as pessoas levam para a academia além da garrafa de água?",
        respostas: [
            { texto: "Fone de ouvido", pontos: 45, sinonimos: ["fone", "headset", "airpods", "musica"] },
            { texto: "Toalhinha", pontos: 25, sinonimos: ["toalha", "toalhinha"] },
            { texto: "Celular", pontos: 18, sinonimos: ["celular", "telefone", "smartphone"] },
            { texto: "Whey Protein", pontos: 7, sinonimos: ["whey", "suplemento", "creatina", "coqueteleira"] },
            { texto: "Tênis", pontos: 5, sinonimos: ["tenis"] }
        ]
    },
    {
        date: "2026-01-17",
        pergunta: "Um animal que vive na Amazônia?",
        respostas: [
            { texto: "Onça-pintada", pontos: 36, sinonimos: ["onca", "onca pintada", "jaguar"] },
            { texto: "Arara", pontos: 24, sinonimos: ["arara", "papagaio", "tucano"] },
            { texto: "Jacaré", pontos: 16, sinonimos: ["jacare"] },
            { texto: "Boto-cor-de-rosa", pontos: 12, sinonimos: ["boto", "boto cor de rosa", "golfinho"] },
            { texto: "Macaco", pontos: 7, sinonimos: ["macaco", "sagui", "mico"] },
            { texto: "Preguiça", pontos: 5, sinonimos: ["preguica", "bicho preguica"] }
        ]
    },
    {
        date: "2026-01-18",
        pergunta: "Qual o melhor sabor de sorvete?",
        respostas: [
            { texto: "Chocolate", pontos: 35, sinonimos: ["chocolate"] },
            { texto: "Baunilha", pontos: 22, sinonimos: ["baunilha"] },
            { texto: "Morango", pontos: 18, sinonimos: ["morango"] },
            { texto: "Flocos", pontos: 12, sinonimos: ["flocos"] },
            { texto: "Creme", pontos: 8, sinonimos: ["creme"] },
            { texto: "Napolitano", pontos: 5, sinonimos: ["napolitano"] }
        ]
    },
    {
        date: "2026-01-19",
        pergunta: "Um item que todo dentista usa para proteção?",
        respostas: [
            { texto: "Máscara", pontos: 38, sinonimos: ["mascara"] },
            { texto: "Luvas", pontos: 32, sinonimos: ["luva", "luvas"] },
            { texto: "Touca", pontos: 15, sinonimos: ["touca", "gorro"] },
            { texto: "Jaleco", pontos: 10, sinonimos: ["jaleco", "avental"] },
            { texto: "Óculos de proteção", pontos: 5, sinonimos: ["oculos", "oculos de protecao"] }
        ]
    },
    {
        date: "2026-01-20",
        pergunta: "Algo que se faz no shopping além de comprar?",
        respostas: [
            { texto: "Cinema", pontos: 40, sinonimos: ["cinema", "filme", "assistir filme"] },
            { texto: "Comer", pontos: 32, sinonimos: ["comer", "praça de alimentacao", "lanche", "mcdonalds", "jantar"] },
            { texto: "Passear", pontos: 18, sinonimos: ["passear", "olhar vitrine", "andar", "bater perna", "dar uma volta"] },
            { texto: "Jogar no fliperama", pontos: 6, sinonimos: ["fliperama", "jogar", "parquinho", "magic games"] },
            { texto: "Encontrar amigos", pontos: 4, sinonimos: ["encontrar amigos", "dar role", "role"] }
        ]
    },
    {
        date: "2026-01-21",
        pergunta: "Um estilo de música que toca muito em Rio Branco?",
        respostas: [
            { texto: "Sertanejo", pontos: 45, sinonimos: ["sertanejo", "sertanejo universitario", "modao"] },
            { texto: "Forró / Pisadinha", pontos: 28, sinonimos: ["forro", "pisadinha", "piseiro", "baraoes"] },
            { texto: "Paredão", pontos: 14, sinonimos: ["paredao", "brega funk", "funk"] },
            { texto: "MPB", pontos: 8, sinonimos: ["mpb"] },
            { texto: "Rock", pontos: 5, sinonimos: ["rock"] }
        ]
    },
    {
        date: "2026-01-22",
        pergunta: "Qual o maior desafio de criar conteúdo para o TikTok?",
        respostas: [
            { texto: "Prender a atenção", pontos: 42, sinonimos: ["retencao", "prender a atencao", "os 3 primeiros segundos", "engajamento"] },
            { texto: "Escolher a música", pontos: 24, sinonimos: ["musica", "audio em alta", "trend"] },
            { texto: "Editar", pontos: 16, sinonimos: ["editar", "edicao", "cortes"] },
            { texto: "Constância", pontos: 11, sinonimos: ["constancia", "postar todo dia", "frequencia"] },
            { texto: "Lidar com o flop", pontos: 7, sinonimos: ["flop", "flopar", "falta de view", "visualizacao"] }
        ]
    },
    {
        date: "2026-01-23",
        pergunta: "Um jogo que marcou a infância de muita gente?",
        respostas: [
            { texto: "Super Mario", pontos: 38, sinonimos: ["mario", "super mario", "mario bros", "super mario world"] },
            { texto: "GTA San Andreas", pontos: 24, sinonimos: ["gta", "gta san andreas", "san andreas", "bomba patch"] },
            { texto: "Minecraft", pontos: 18, sinonimos: ["minecraft", "mine"] },
            { texto: "Counter-Strike", pontos: 11, sinonimos: ["cs", "counter strike", "cs 1.6"] },
            { texto: "The Sims", pontos: 6, sinonimos: ["the sims"] },
            { texto: "Brasfoot", pontos: 3, sinonimos: ["brasfoot", "elifoot"] }
        ]
    },
    {
        date: "2026-01-24",
        pergunta: "O que você faz quando percebe que esqueceu o celular em casa?",
        respostas: [
            { texto: "Volta para buscar", pontos: 46, sinonimos: ["volto", "voltar", "busco", "buscar"] },
            { texto: "Fica ansioso", pontos: 28, sinonimos: ["ansioso", "nervoso", "desespero", "panico", "choro"] },
            { texto: "Tenta sobreviver sem", pontos: 14, sinonimos: ["sigo a vida", "ignora", "fica sem", "aceita"] },
            { texto: "Pede emprestado", pontos: 7, sinonimos: ["emprestado", "peço de alguem"] },
            { texto: "Reza", pontos: 5, sinonimos: ["reza", "ora"] }
        ]
    },
    {
        date: "2026-01-25",
        pergunta: "Qual o melhor dia da semana?",
        respostas: [
            { texto: "Sexta-feira", pontos: 48, sinonimos: ["sexta", "sextou", "sexta feira"] },
            { texto: "Sábado", pontos: 32, sinonimos: ["sabado"] },
            { texto: "Domingo", pontos: 12, sinonimos: ["domingo"] },
            { texto: "Quinta-feira", pontos: 5, sinonimos: ["quinta", "quinta feira"] },
            { texto: "Segunda-feira", pontos: 3, sinonimos: ["segunda", "segunda feira"] }
        ]
    },
    {
        date: "2026-01-26",
        pergunta: "Algo que você encontra em uma cozinha profissional?",
        respostas: [
            { texto: "Fogão industrial", pontos: 40, sinonimos: ["fogao", "fogao industrial", "forno"] },
            { texto: "Panelas grandes", pontos: 25, sinonimos: ["panela", "panelas", "cacapava", "frigideira"] },
            { texto: "Facas amoladas", pontos: 18, sinonimos: ["faca", "facas"] },
            { texto: "Geladeira de inox", pontos: 10, sinonimos: ["geladeira", "freezer", "camara fria"] },
            { texto: "Chef", pontos: 7, sinonimos: ["chef", "cozinheiro", "chapeiro"] }
        ]
    },
    {
        date: "2026-01-27",
        pergunta: "Qual o herói mais subestimado de todos?",
        respostas: [
            { texto: "Aquaman", pontos: 35, sinonimos: ["aquaman"] },
            { texto: "Arqueiro Verde", pontos: 24, sinonimos: ["arqueiro verde", "green arrow"] },
            { texto: "Gavião Arqueiro", pontos: 18, sinonimos: ["gaviao arqueiro", "hawkeye"] },
            { texto: "Homem-Formiga", pontos: 12, sinonimos: ["homem formiga", "ant man", "ant-man"] },
            { texto: "Cyborg", pontos: 7, sinonimos: ["cyborg", "ciborgue"] },
            { texto: "Shazam", pontos: 4, sinonimos: ["shazam", "capitao marvel"] }
        ]
    },
    {
        date: "2026-01-28",
        pergunta: "Um erro comum ao exportar um vídeo no Premiere?",
        respostas: [
            { texto: "Esquecer a área de saída", pontos: 36, sinonimos: ["esquecer o in out", "exportar tela preta", "in e out", "area de render"] },
            { texto: "Resolução errada", pontos: 28, sinonimos: ["resolucao", "tamanho errado", "qualidade ruim", "pixelado"] },
            { texto: "Arquivo muito pesado", pontos: 17, sinonimos: ["pesado", "tamanho muito grande", "gigante", "gb"] },
            { texto: "Áudio mudo", pontos: 12, sinonimos: ["audio", "sem som", "mutado", "sem audio"] },
            { texto: "Crash", pontos: 7, sinonimos: ["crash", "fechar do nada", "travar", "erro na exportacao"] }
        ]
    },
    {
        date: "2026-01-29",
        pergunta: "O que não pode faltar na mochila de um estudante?",
        respostas: [
            { texto: "Caderno", pontos: 38, sinonimos: ["caderno", "fichario", "cadernos"] },
            { texto: "Estojo", pontos: 32, sinonimos: ["estojo", "caneta", "lapis", "borracha", "canetas"] },
            { texto: "Livros", pontos: 15, sinonimos: ["livro", "livros", "apostila"] },
            { texto: "Notebook", pontos: 9, sinonimos: ["notebook", "laptop", "pc"] },
            { texto: "Lanche", pontos: 6, sinonimos: ["lanche", "comida", "merenda", "agua"] }
        ]
    },
    {
        date: "2026-01-30",
        pergunta: "Qual o maior canal do YouTube do Brasil (Top of Mind)?",
        respostas: [
            { texto: "KondZilla", pontos: 42, sinonimos: ["kondzilla", "canal kondzilla"] },
            { texto: "Felipe Neto", pontos: 28, sinonimos: ["felipe neto"] },
            { texto: "Whindersson", pontos: 16, sinonimos: ["whindersson", "whindersson nunes", "winderson"] },
            { texto: "Enaldinho", pontos: 9, sinonimos: ["enaldinho"] },
            { texto: "Casimiro", pontos: 5, sinonimos: ["casimiro", "caze", "cortes do casimiro", "cazetv"] }
        ]
    },
    {
        date: "2026-01-31",
        pergunta: "O que você sente quando as férias acabam?",
        respostas: [
            { texto: "Tristeza", pontos: 52, sinonimos: ["tristeza", "depressao", "desanimo", "vontade de chorar", "dor"] },
            { texto: "Preguiça", pontos: 24, sinonimos: ["preguica", "cansaco"] },
            { texto: "Saudade", pontos: 14, sinonimos: ["saudade", "nostalgia"] },
            { texto: "Planejar a próxima", pontos: 7, sinonimos: ["vontade de viajar", "planejar"] },
            { texto: "Aceitação", pontos: 3, sinonimos: ["aceitacao", "nada"] }
        ]
    },
    //Fevereiro
    {
        date: "2026-02-01",
        pergunta: "Algo que as pessoas costumam fazer no domingo?",
        respostas: [
            { texto: "Churrasco", pontos: 38, sinonimos: ["churras", "comer carne", "churrasco"] },
            { texto: "Descansar", pontos: 26, sinonimos: ["dormir", "soneca", "relaxar", "descansar", "ficar de boa"] },
            { texto: "Assistir Futebol", pontos: 15, sinonimos: ["futebol", "ver o jogo", "jogo", "fute", "fut"] },
            { texto: "Ir à igreja", pontos: 11, sinonimos: ["igreja", "culto", "missa"] },
            { texto: "Passear", pontos: 7, sinonimos: ["passear no parque", "passear", "sair", "ir no shopping"] },
            { texto: "Limpar a casa", pontos: 3, sinonimos: ["faxina", "limpar a casa", "arrumar a casa"] }
        ]
    },
    {
        date: "2026-02-02",
        pergunta: "Qual objeto não pode faltar em um consultório dentário?",
        respostas: [
            { texto: "Cadeira odontológica", pontos: 42, sinonimos: ["cadeira", "cadeira de dentista", "maca"] },
            { texto: "Motorzinho", pontos: 28, sinonimos: ["broca", "motor", "motorzinho", "caneta de alta rotação"] },
            { texto: "Espelho", pontos: 14, sinonimos: ["espelhinho", "espelho", "espelho bucal"] },
            { texto: "Luvas", pontos: 9, sinonimos: ["luva", "luvas"] },
            { texto: "Máscara", pontos: 7, sinonimos: ["mascara"] }
        ]
    },
    {
        date: "2026-02-03",
        pergunta: "Coisa que as pessoas mais reclamam sobre o calor em Rio Branco?",
        respostas: [
            { texto: "Suor excessivo", pontos: 35, sinonimos: ["suar muito", "suor", "transpiracao", "suadeira"] },
            { texto: "Ar-condicionado caro", pontos: 27, sinonimos: ["conta de energia", "conta de luz", "ar condicionado", "energia cara"] },
            { texto: "Fumaça", pontos: 18, sinonimos: ["fumaca", "queimadas", "poluicao"] },
            { texto: "Mosquitos", pontos: 12, sinonimos: ["piuns", "carapana", "mosquito", "muriçoca"] },
            { texto: "Falta de vento", pontos: 8, sinonimos: ["sem vento", "abafado", "quente"] }
        ]
    },
    {
        date: "2026-02-04",
        pergunta: "Um item essencial para construir um castelo no Minecraft?",
        respostas: [
            { texto: "Pedra", pontos: 45, sinonimos: ["pedra", "pedregulho", "tijolo de pedra", "cobblestone", "stone"] },
            { texto: "Madeira", pontos: 22, sinonimos: ["madeira", "tabua", "wood", "planks"] },
            { texto: "Vidro", pontos: 14, sinonimos: ["vidro", "painel de vidro", "glass"] },
            { texto: "Tochas", pontos: 10, sinonimos: ["tocha", "iluminacao", "luz", "torch"] },
            { texto: "Portão de ferro", pontos: 6, sinonimos: ["portao", "porta de ferro", "grade", "porta"] },
            { texto: "Estandartes", pontos: 3, sinonimos: ["estandarte", "bandeira", "banner"] }
        ]
    },
    {
        date: "2026-02-05",
        pergunta: "O que o chat da Twitch faz para chamar a atenção do streamer?",
        respostas: [
            { texto: "Mandar um Sub", pontos: 32, sinonimos: ["sub", "escorregar o prime", "prime", "inscricao", "inscrever"] },
            { texto: "Mandar Bits", pontos: 26, sinonimos: ["bits", "cheer", "doar bits"] },
            { texto: "Spamar emoji", pontos: 18, sinonimos: ["flood", "spamar", "mandar muito emote", "emote"] },
            { texto: "Donate / Pix", pontos: 15, sinonimos: ["pix", "donate", "doacao", "dinheiro"] },
            { texto: "Marcar no chat", pontos: 9, sinonimos: ["marcar o streamer", "arroba", "@", "mencionar"] }
        ]
    },
    {
        date: "2026-02-06",
        pergunta: "Algo que você encontra dentro de uma geladeira?",
        respostas: [
            { texto: "Água", pontos: 31, sinonimos: ["agua", "garrafa de agua", "jarra de agua"] },
            { texto: "Leite", pontos: 24, sinonimos: ["leite", "caixa de leite"] },
            { texto: "Ovos", pontos: 18, sinonimos: ["ovo", "ovos"] },
            { texto: "Manteiga", pontos: 12, sinonimos: ["manteiga", "margarina"] },
            { texto: "Frutas", pontos: 9, sinonimos: ["fruta", "verduras", "legumes", "tomate"] },
            { texto: "Cerveja", pontos: 6, sinonimos: ["cerveja", "breja", "refri", "refrigerante"] }
        ]
    },
    {
        date: "2026-02-07",
        pergunta: "Uma cor presente no logo de um streamer que usa o tema de borboleta?",
        respostas: [
            { texto: "Vermelho", pontos: 52, sinonimos: ["vermelho", "red", "#fd0041"] },
            { texto: "Preto", pontos: 28, sinonimos: ["preto", "black"] },
            { texto: "Branco", pontos: 20, sinonimos: ["branco", "white"] }
        ]
    },
    {
        date: "2026-02-08",
        pergunta: "Gênero de filme que as pessoas mais gostam de assistir no cinema?",
        respostas: [
            { texto: "Ação", pontos: 34, sinonimos: ["acao", "super heroi", "marvel"] },
            { texto: "Terror", pontos: 26, sinonimos: ["terror", "suspense", "horror"] },
            { texto: "Comédia", pontos: 18, sinonimos: ["comedia", "engracado", "rir"] },
            { texto: "Ficção Científica", pontos: 12, sinonimos: ["ficcao", "sci fi", "ficcao cientifica", "espaco"] },
            { texto: "Romance", pontos: 7, sinonimos: ["romance", "comedia romantica"] },
            { texto: "Animação", pontos: 3, sinonimos: ["animacao", "desenho", "pixar"] }
        ]
    },
    {
        date: "2026-02-09",
        pergunta: "Qual a maior dificuldade de quem trabalha com marketing digital?",
        respostas: [
            { texto: "Algoritmo", pontos: 38, sinonimos: ["algoritmo", "mudancas no algoritmo", "engajamento caindo", "entrega"] },
            { texto: "Criatividade", pontos: 24, sinonimos: ["criatividade", "ideias", "bloqueio criativo", "ter ideia de post"] },
            { texto: "Lidar com clientes", pontos: 19, sinonimos: ["cliente", "cliente chato", "aprovacao"] },
            { texto: "Prazos", pontos: 12, sinonimos: ["prazo", "tempo", "urgencia", "correria"] },
            { texto: "Analisar métricas", pontos: 7, sinonimos: ["metrica", "dados", "resultados", "relatorio"] }
        ]
    },
    {
        date: "2026-02-10",
        pergunta: "Algo que você faz para passar o tempo em uma viagem longa?",
        respostas: [
            { texto: "Ouvir música", pontos: 36, sinonimos: ["musica", "podcast", "spotify", "ouvir podcast"] },
            { texto: "Dormir", pontos: 28, sinonimos: ["dormir", "cochilar", "soneca"] },
            { texto: "Assistir filmes", pontos: 17, sinonimos: ["filme", "serie", "netflix", "assistir serie"] },
            { texto: "Jogar", pontos: 12, sinonimos: ["jogar", "videogame", "celular", "jogar no celular"] },
            { texto: "Ler", pontos: 7, sinonimos: ["ler", "livro", "kindle"] }
        ]
    },
    {
        date: "2026-02-11",
        pergunta: "Qual o melhor jogador do mundo atualmente (Opinião popular)?",
        respostas: [
            { texto: "Vini Jr", pontos: 42, sinonimos: ["vini jr", "vinicius junior", "vinicius jr", "vini"] },
            { texto: "Mbappé", pontos: 28, sinonimos: ["mbappe", "kylian mbappe"] },
            { texto: "Haaland", pontos: 15, sinonimos: ["haaland", "cometa", "erling haaland"] },
            { texto: "Messi", pontos: 10, sinonimos: ["messi", "lionel messi", "et"] },
            { texto: "Bellingham", pontos: 5, sinonimos: ["bellingham", "jude"] }
        ]
    },
    {
        date: "2026-02-12",
        pergunta: "O que você leva para um piquenique?",
        respostas: [
            { texto: "Frutas", pontos: 31, sinonimos: ["fruta", "maca", "uva", "morango"] },
            { texto: "Sanduíche", pontos: 26, sinonimos: ["sanduiche", "lanche", "pao"] },
            { texto: "Suco", pontos: 19, sinonimos: ["suco", "bebida", "refrigerante"] },
            { texto: "Toalha", pontos: 14, sinonimos: ["toalha xadrez", "pano", "toalha", "canga"] },
            { texto: "Biscoitos", pontos: 10, sinonimos: ["biscoito", "bolacha", "salgadinho"] }
        ]
    },
    {
        date: "2026-02-13",
        pergunta: "Um mob do Minecraft que todo mundo detesta?",
        respostas: [
            { texto: "Creeper", pontos: 55, sinonimos: ["creeper", "criper"] },
            { texto: "Esqueleto", pontos: 18, sinonimos: ["esqueleto", "skeleton", "esqueleto com arco"] },
            { texto: "Enderman", pontos: 12, sinonimos: ["enderman", "enderman roubando bloco"] },
            { texto: "Ghast", pontos: 8, sinonimos: ["ghast", "fantasma", "bicho do nether"] },
            { texto: "Aranha", pontos: 4, sinonimos: ["aranha", "aranha da caverna", "cave spider"] },
            { texto: "Phantom", pontos: 3, sinonimos: ["phantom", "fantasma voador", "bicho do sono"] }
        ]
    },
    {
        date: "2026-02-14",
        pergunta: "O que dar de presente para a namorada?",
        respostas: [
            { texto: "Flores", pontos: 38, sinonimos: ["flor", "flores", "buque", "rosas"] },
            { texto: "Chocolate", pontos: 24, sinonimos: ["chocolate", "bombom", "trufa", "cesta de chocolate"] },
            { texto: "Jantar Romântico", pontos: 18, sinonimos: ["jantar", "comida", "restaurante", "sair pra comer"] },
            { texto: "Perfume", pontos: 12, sinonimos: ["perfume", "creme", "maquiagem"] },
            { texto: "Joias", pontos: 8, sinonimos: ["joia", "anel", "colar", "brinco", "aliança"] }
        ]
    },
    {
        date: "2026-02-15",
        pergunta: "Um time clássico para se jogar no Modo Carreira do EA FC?",
        respostas: [
            { texto: "Real Madrid", pontos: 32, sinonimos: ["real madrid", "real"] },
            { texto: "Manchester City", pontos: 24, sinonimos: ["city", "manchester city", "man city"] },
            { texto: "Barcelona", pontos: 16, sinonimos: ["barcelona", "barca", "barça"] },
            { texto: "Borussia Dortmund", pontos: 12, sinonimos: ["borussia", "borussia dortmund", "dortmund"] },
            { texto: "Arsenal", pontos: 9, sinonimos: ["arsenal"] },
            { texto: "Rio Branco", pontos: 7, sinonimos: ["rio branco", "rio branco ac", "estrelão"] }
        ]
    },
    {
        date: "2026-02-16",
        pergunta: "Algo que se compra em uma farmácia?",
        respostas: [
            { texto: "Remédio", pontos: 45, sinonimos: ["remedio", "medicamento", "comprimido", "dorflex", "dipirona"] },
            { texto: "Shampoo", pontos: 18, sinonimos: ["shampoo", "condicionador", "creme de cabelo"] },
            { texto: "Fralda", pontos: 14, sinonimos: ["fralda"] },
            { texto: "Sabonete", pontos: 10, sinonimos: ["sabonete"] },
            { texto: "Desodorante", pontos: 8, sinonimos: ["desodorante", "rexona"] },
            { texto: "Escova de dentes", pontos: 5, sinonimos: ["escova", "pasta de dente", "fio dental"] }
        ]
    },
    {
        date: "2026-02-17",
        pergunta: "Qual a rede social mais viciante?",
        respostas: [
            { texto: "TikTok", pontos: 48, sinonimos: ["tiktok", "tik tok", "teco teco"] },
            { texto: "Instagram", pontos: 26, sinonimos: ["insta", "instagram", "reels"] },
            { texto: "YouTube", pontos: 14, sinonimos: ["youtube", "yt", "shorts"] },
            { texto: "Twitter", pontos: 8, sinonimos: ["twitter", "x"] },
            { texto: "Facebook", pontos: 4, sinonimos: ["facebook", "face"] }
        ]
    },
    {
        date: "2026-02-18",
        pergunta: "Uma gíria muito usada em streams?",
        respostas: [
            { texto: "GG", pontos: 35, sinonimos: ["gg", "good game"] },
            { texto: "L", pontos: 24, sinonimos: ["l", "faz o l", "loser"] },
            { texto: "F", pontos: 18, sinonimos: ["f", "f no chat"] },
            { texto: "Pog", pontos: 12, sinonimos: ["pog", "poggers", "pogchamp"] },
            { texto: "Baseado", pontos: 7, sinonimos: ["baseado", "based"] },
            { texto: "Cringe", pontos: 4, sinonimos: ["cringe", "paia"] }
        ]
    },
    {
        date: "2026-02-19",
        pergunta: "Como comemorar um aniversário de namoro?",
        respostas: [
            { texto: "Jantar fora", pontos: 42, sinonimos: ["jantar", "restaurante", "sair pra comer", "jantar romantico"] },
            { texto: "Viagem", pontos: 22, sinonimos: ["viagem", "viajar", "hotel"] },
            { texto: "Presentes", pontos: 16, sinonimos: ["presente", "troca de presentes", "dar presente"] },
            { texto: "Cinema", pontos: 11, sinonimos: ["cinema", "ver filme", "filme"] },
            { texto: "Festa surpresa", pontos: 9, sinonimos: ["festa surpresa", "festa", "bolo"] }
        ]
    },
    {
        date: "2026-02-20",
        pergunta: "O que não pode faltar em um escritório?",
        respostas: [
            { texto: "Computador", pontos: 40, sinonimos: ["pc", "notebook", "computador", "laptop"] },
            { texto: "Cadeira", pontos: 25, sinonimos: ["cadeira", "cadeira de escritorio", "poltrona"] },
            { texto: "Mesa", pontos: 15, sinonimos: ["mesa", "escrivaninha"] },
            { texto: "Café", pontos: 12, sinonimos: ["cafe", "garrafa de cafe", "maquina de cafe"] },
            { texto: "Caneta", pontos: 8, sinonimos: ["caneta", "lapis", "papel"] }
        ]
    },
    {
        date: "2026-02-21",
        pergunta: "Algo que as pessoas costumam fazer nas férias?",
        respostas: [
            { texto: "Viajar", pontos: 48, sinonimos: ["viajar", "viagem", "ir viajar"] },
            { texto: "Ir à praia", pontos: 26, sinonimos: ["praia", "mar", "piscina"] },
            { texto: "Dormir", pontos: 14, sinonimos: ["dormir", "acordar tarde", "descansar"] },
            { texto: "Visitar a família", pontos: 7, sinonimos: ["visitar", "familia", "ver os parentes"] },
            { texto: "Jogar", pontos: 5, sinonimos: ["jogar", "videogame", "pc"] }
        ]
    },
    {
        date: "2026-02-22",
        pergunta: "Qual o sabor de suco preferido dos brasileiros?",
        respostas: [
            { texto: "Laranja", pontos: 38, sinonimos: ["laranja"] },
            { texto: "Maracujá", pontos: 24, sinonimos: ["maracuja"] },
            { texto: "Uva", pontos: 18, sinonimos: ["uva"] },
            { texto: "Limão", pontos: 12, sinonimos: ["limao", "limonada"] },
            { texto: "Abacaxi", pontos: 8, sinonimos: ["abacaxi"] }
        ]
    },
    {
        date: "2026-02-23",
        pergunta: "Um software que um editor de vídeo profissional usa?",
        respostas: [
            { texto: "Premiere", pontos: 46, sinonimos: ["premiere", "adobe premiere", "pr"] },
            { texto: "After Effects", pontos: 28, sinonimos: ["after effects", "after", "ae"] },
            { texto: "DaVinci Resolve", pontos: 14, sinonimos: ["davinci", "resolve", "davinci resolve"] },
            { texto: "CapCut", pontos: 7, sinonimos: ["capcut"] },
            { texto: "Final Cut", pontos: 5, sinonimos: ["final cut", "final cut pro"] }
        ]
    },
    {
        date: "2026-02-24",
        pergunta: "O que levar para um acampamento no meio do mato?",
        respostas: [
            { texto: "Barraca", pontos: 36, sinonimos: ["barraca", "tenda"] },
            { texto: "Lanterna", pontos: 24, sinonimos: ["lanterna", "fogo", "luz"] },
            { texto: "Repelente", pontos: 18, sinonimos: ["repelente", "off"] },
            { texto: "Saco de dormir", pontos: 12, sinonimos: ["saco de dormir", "colchao", "coberta"] },
            { texto: "Canivete", pontos: 10, sinonimos: ["canivete", "faca", "facao"] }
        ]
    },
    {
        date: "2026-02-25",
        pergunta: "Qual o monumento ou lugar mais famoso de Rio Branco?",
        respostas: [
            { texto: "Palácio Rio Branco", pontos: 42, sinonimos: ["palacio rio branco", "palacio"] },
            { texto: "Passarela", pontos: 28, sinonimos: ["passarela", "passarela joaquim macedo"] },
            { texto: "Mercado Velho", pontos: 15, sinonimos: ["mercado velho", "mercado"] },
            { texto: "Gameleira", pontos: 10, sinonimos: ["gameleira", "calcadao"] },
            { texto: "Parque da Maternidade", pontos: 5, sinonimos: ["parque da maternidade", "parque"] }
        ]
    },
    {
        date: "2026-02-26",
        pergunta: "Qual a versão mais icônica do Minecraft?",
        respostas: [
            { texto: "1.8", pontos: 32, sinonimos: ["1.8", "1.8.9"] },
            { texto: "1.7.10", pontos: 26, sinonimos: ["1.7.10", "1.7"] },
            { texto: "1.20", pontos: 18, sinonimos: ["1.20"] },
            { texto: "Beta 1.7.3", pontos: 14, sinonimos: ["beta", "beta 1.7.3"] },
            { texto: "1.16", pontos: 10, sinonimos: ["1.16"] }
        ]
    },
    {
        date: "2026-02-27",
        pergunta: "Um site que todo mundo usa para estudar ou pesquisar?",
        respostas: [
            { texto: "Google", pontos: 52, sinonimos: ["google", "pesquisa do google"] },
            { texto: "Wikipedia", pontos: 24, sinonimos: ["wikipedia", "wiki"] },
            { texto: "YouTube", pontos: 14, sinonimos: ["youtube", "video aula"] },
            { texto: "ChatGPT", pontos: 7, sinonimos: ["chatgpt", "gpt", "ia"] },
            { texto: "Brainly", pontos: 3, sinonimos: ["brainly"] }
        ]
    },
    {
        date: "2026-02-28",
        pergunta: "A primeira coisa que você faz ao ligar o computador?",
        respostas: [
            { texto: "Abrir o navegador", pontos: 40, sinonimos: ["navegador", "chrome", "opera", "google chrome", "internet"] },
            { texto: "Abrir o Discord", pontos: 25, sinonimos: ["discord", "call", "dc"] },
            { texto: "Abrir o Spotify", pontos: 15, sinonimos: ["spotify", "musica"] },
            { texto: "Abrir um jogo", pontos: 12, sinonimos: ["jogo", "game", "steam", "jogar"] },
            { texto: "Abrir a OBS", pontos: 8, sinonimos: ["obs", "streamlabs", "abrir live", "live"] }
        ]
    },
    //Março
    {
        date: "2026-03-01",
        pergunta: "O que você encontra em um parque de diversões?",
        respostas: [
            { texto: "Montanha-russa", pontos: 35, sinonimos: ["montanha russa"] },
            { texto: "Algodão Doce", pontos: 22, sinonimos: ["algodao doce", "pipoca", "comida"] },
            { texto: "Roda-gigante", pontos: 18, sinonimos: ["roda gigante"] },
            { texto: "Bate-bate", pontos: 12, sinonimos: ["carrinho de bate bate", "bate bate", "carrinho"] },
            { texto: "Carrossel", pontos: 8, sinonimos: ["carrossel"] },
            { texto: "Pipoca", pontos: 5, sinonimos: ["pipoca"] }
        ]
    },
    {
        date: "2026-03-02",
        pergunta: "Uma profissão em que se costuma trabalhar à noite?",
        respostas: [
            { texto: "Segurança", pontos: 30, sinonimos: ["segurança", "vigia", "guarda", "vigilante"] },
            { texto: "Médico", pontos: 25, sinonimos: ["medico", "doutor"] },
            { texto: "Enfermeiro", pontos: 18, sinonimos: ["enfermeiro", "enfermeira", "tecnico de enfermagem"] },
            { texto: "Policial", pontos: 15, sinonimos: ["policial", "policia", "pm"] },
            { texto: "Porteiro", pontos: 8, sinonimos: ["porteiro"] },
            { texto: "Barman", pontos: 4, sinonimos: ["barman", "garcom", "bartender"] }
        ]
    },
    {
        date: "2026-03-03",
        pergunta: "Algo que você guarda na gaveta do quarto?",
        respostas: [
            { texto: "Meias", pontos: 40, sinonimos: ["meia", "meias"] },
            { texto: "Roupa íntima", pontos: 25, sinonimos: ["cueca", "calcinha", "roupa intima"] },
            { texto: "Documentos", pontos: 15, sinonimos: ["documento", "documentos", "papel", "identidade"] },
            { texto: "Cabos", pontos: 10, sinonimos: ["cabo", "cabos", "carregador", "fio"] },
            { texto: "Remédios", pontos: 6, sinonimos: ["remedio", "remedios"] },
            { texto: "Joias", pontos: 4, sinonimos: ["joia", "joias", "anel", "relogio"] }
        ]
    },
    {
        date: "2026-03-04",
        pergunta: "Qual a primeira coisa que você constrói no Minecraft?",
        respostas: [
            { texto: "Casa de terra", pontos: 38, sinonimos: ["casa de terra", "casa", "abrigo", "buraco", "casa de madeira"] },
            { texto: "Crafting table", pontos: 26, sinonimos: ["mesa de trabalho", "crafting table", "bancada"] },
            { texto: "Picareta", pontos: 18, sinonimos: ["picareta", "picareta de madeira", "ferramenta"] },
            { texto: "Fornalha", pontos: 10, sinonimos: ["fornalha", "forno"] },
            { texto: "Cama", pontos: 6, sinonimos: ["cama"] },
            { texto: "Baú", pontos: 2, sinonimos: ["bau", "chest"] }
        ]
    },
    {
        date: "2026-03-05",
        pergunta: "Algo que derrete no calor?",
        respostas: [
            { texto: "Sorvete", pontos: 45, sinonimos: ["sorvete", "picole"] },
            { texto: "Gelo", pontos: 30, sinonimos: ["gelo", "cubo de gelo"] },
            { texto: "Chocolate", pontos: 15, sinonimos: ["chocolate", "bombom"] },
            { texto: "Manteiga", pontos: 7, sinonimos: ["manteiga", "margarina"] },
            { texto: "Plástico", pontos: 3, sinonimos: ["plastico", "sacola"] }
        ]
    },
    {
        date: "2026-03-06",
        pergunta: "Um esporte olímpico muito assistido?",
        respostas: [
            { texto: "Ginástica", pontos: 32, sinonimos: ["ginastica", "ginastica artistica"] },
            { texto: "Natação", pontos: 26, sinonimos: ["natacao"] },
            { texto: "Atletismo", pontos: 18, sinonimos: ["atletismo", "corrida"] },
            { texto: "Vôlei", pontos: 14, sinonimos: ["volei", "volei de quadra", "volei de praia"] },
            { texto: "Judô", pontos: 7, sinonimos: ["judo", "luta"] },
            { texto: "Futebol", pontos: 3, sinonimos: ["futebol", "fut"] }
        ]
    },
    {
        date: "2026-03-07",
        pergunta: "O que as pessoas mais fazem enquanto estão presas no trânsito?",
        respostas: [
            { texto: "Ouvir música", pontos: 42, sinonimos: ["ouvir musica", "musica", "radio", "podcast"] },
            { texto: "Mexer no celular", pontos: 28, sinonimos: ["mexer no celular", "celular", "whatsapp", "instagram"] },
            { texto: "Reclamar", pontos: 15, sinonimos: ["reclamar", "xingar", "falar palavrao", "ficar estressado"] },
            { texto: "Buzinar", pontos: 8, sinonimos: ["buzinar", "apertar a buzina"] },
            { texto: "Cantar", pontos: 5, sinonimos: ["cantar", "cantar junto com a musica"] },
            { texto: "Comer", pontos: 2, sinonimos: ["comer", "lanchar"] }
        ]
    },
    {
        date: "2026-03-08",
        pergunta: "Presente comum de Dia das Mulheres ou Dia das Mães?",
        respostas: [
            { texto: "Perfume", pontos: 35, sinonimos: ["perfume", "creme", "maquiagem"] },
            { texto: "Roupa", pontos: 25, sinonimos: ["roupa", "blusa", "vestido"] },
            { texto: "Flores", pontos: 18, sinonimos: ["flor", "flores", "buque", "rosas"] },
            { texto: "Sapato", pontos: 12, sinonimos: ["sapato", "sandalia", "tenis"] },
            { texto: "Chocolate", pontos: 6, sinonimos: ["chocolate", "bombom", "trufa"] },
            { texto: "Joia", pontos: 4, sinonimos: ["joia", "brinco", "colar", "anel"] }
        ]
    },
    {
        date: "2026-03-09",
        pergunta: "Uma desculpa clássica para chegar atrasado?",
        respostas: [
            { texto: "Trânsito", pontos: 45, sinonimos: ["transito", "engarrafamento", "fila"] },
            { texto: "Despertador", pontos: 25, sinonimos: ["despertador nao tocou", "perdi a hora", "dormi demais", "celular descarregou"] },
            { texto: "Ônibus", pontos: 14, sinonimos: ["onibus atrasou", "perdi o onibus", "transporte publico", "metro"] },
            { texto: "Doente", pontos: 9, sinonimos: ["fiquei doente", "passei mal", "dor de barriga", "medico"] },
            { texto: "Chuva", pontos: 5, sinonimos: ["choveu", "chuva", "alagou tudo"] },
            { texto: "Perdi a chave", pontos: 2, sinonimos: ["perdi a chave", "esqueci a chave", "fiquei trancado"] }
        ]
    },
    {
        date: "2026-03-10",
        pergunta: "Nome de um super-herói que voa?",
        respostas: [
            { texto: "Superman", pontos: 48, sinonimos: ["superman", "super homem", "clark kent"] },
            { texto: "Homem de Ferro", pontos: 24, sinonimos: ["homem de ferro", "iron man", "tony stark"] },
            { texto: "Thor", pontos: 12, sinonimos: ["thor"] },
            { texto: "Lanterna Verde", pontos: 8, sinonimos: ["lanterna verde", "green lantern"] },
            { texto: "Visão", pontos: 5, sinonimos: ["visao", "vision"] },
            { texto: "Falcão", pontos: 3, sinonimos: ["falcao", "falcon"] }
        ]
    },
    {
        date: "2026-03-11",
        pergunta: "O que não pode faltar em um hambúrguer?",
        respostas: [
            { texto: "Carne", pontos: 42, sinonimos: ["carne", "hamburguer", "bife", "blend"] },
            { texto: "Queijo", pontos: 28, sinonimos: ["queijo", "cheddar", "mussarela"] },
            { texto: "Bacon", pontos: 15, sinonimos: ["bacon"] },
            { texto: "Alface", pontos: 7, sinonimos: ["alface", "salada"] },
            { texto: "Tomate", pontos: 5, sinonimos: ["tomate"] },
            { texto: "Maionese", pontos: 3, sinonimos: ["maionese", "molho"] }
        ]
    },
    {
        date: "2026-03-12",
        pergunta: "O que as pessoas costumam perder com muita frequência?",
        respostas: [
            { texto: "Caneta", pontos: 34, sinonimos: ["caneta", "lapis"] },
            { texto: "Guarda-chuva", pontos: 26, sinonimos: ["guarda chuva", "sombrinha"] },
            { texto: "Isqueiro", pontos: 18, sinonimos: ["isqueiro"] },
            { texto: "Borracha", pontos: 12, sinonimos: ["borracha"] },
            { texto: "Chave", pontos: 7, sinonimos: ["chave", "chaves"] },
            { texto: "Meia", pontos: 3, sinonimos: ["meia", "pé de meia"] }
        ]
    },
    {
        date: "2026-03-13",
        pergunta: "A última coisa que você faz antes de dormir?",
        respostas: [
            { texto: "Escovar os dentes", pontos: 38, sinonimos: ["escovar os dentes", "escovar o dente", "passar fio dental"] },
            { texto: "Celular", pontos: 32, sinonimos: ["mexer no celular", "ver o celular", "tiktok", "instagram", "alarme", "botar o despertador"] },
            { texto: "Rezar", pontos: 12, sinonimos: ["rezar", "orar", "fazer uma oracao"] },
            { texto: "Beber água", pontos: 9, sinonimos: ["beber agua", "tomar agua"] },
            { texto: "Ler", pontos: 6, sinonimos: ["ler", "ler um livro"] },
            { texto: "Apagar a luz", pontos: 3, sinonimos: ["apagar a luz", "desligar a luz"] }
        ]
    },
    {
        date: "2026-03-14",
        pergunta: "Qual o pior tipo de lag/problema em um jogo online?",
        respostas: [
            { texto: "Ping alto", pontos: 48, sinonimos: ["ping alto", "lag de internet", "internet ruim", "ms alto", "lag"] },
            { texto: "Queda de FPS", pontos: 26, sinonimos: ["queda de fps", "fps baixo", "fps caindo", "lag de video"] },
            { texto: "Travamento", pontos: 14, sinonimos: ["travamento de tela", "freeze", "congelar a tela", "travar tudo", "crash"] },
            { texto: "Input lag", pontos: 8, sinonimos: ["input lag", "delay de controle", "delay"] },
            { texto: "Desconexão", pontos: 4, sinonimos: ["desconexao", "cair do jogo", "dc", "server caiu"] }
        ]
    },
    {
        date: "2026-03-15",
        pergunta: "Lugar onde você precisa fazer silêncio absoluto?",
        respostas: [
            { texto: "Biblioteca", pontos: 45, sinonimos: ["biblioteca", "sala de estudos"] },
            { texto: "Hospital", pontos: 25, sinonimos: ["hospital", "clinica", "uti", "posto de saude"] },
            { texto: "Igreja", pontos: 15, sinonimos: ["igreja", "templo", "missa"] },
            { texto: "Cinema", pontos: 9, sinonimos: ["cinema", "teatro"] },
            { texto: "Sala de aula", pontos: 4, sinonimos: ["sala de aula", "escola", "prova"] },
            { texto: "Velório", pontos: 2, sinonimos: ["velorio", "enterro", "cemiterio"] }
        ]
    },
    {
        date: "2026-03-16",
        pergunta: "A melhor parte de uma festa de casamento?",
        respostas: [
            { texto: "Bolo", pontos: 35, sinonimos: ["bolo", "bolo de casamento"] },
            { texto: "Comida", pontos: 25, sinonimos: ["comida", "buffet", "jantar", "salgadinho"] },
            { texto: "Docinhos", pontos: 18, sinonimos: ["docinho", "doces", "bem casado", "brigadeiro"] },
            { texto: "Bebida liberada", pontos: 12, sinonimos: ["bebida liberada", "open bar", "beber", "bebida", "alcool"] },
            { texto: "Festa", pontos: 7, sinonimos: ["festa", "musica", "dancar", "pista de danca"] },
            { texto: "Lembrancinha", pontos: 3, sinonimos: ["lembrancinha"] }
        ]
    },
    {
        date: "2026-03-17",
        pergunta: "Animal que sempre tem no zoológico?",
        respostas: [
            { texto: "Leão", pontos: 38, sinonimos: ["leao", "leoa"] },
            { texto: "Macaco", pontos: 24, sinonimos: ["macaco", "chimpanze", "gorila"] },
            { texto: "Elefante", pontos: 16, sinonimos: ["elefante"] },
            { texto: "Girafa", pontos: 12, sinonimos: ["girafa"] },
            { texto: "Tigre", pontos: 7, sinonimos: ["tigre"] },
            { texto: "Zebra", pontos: 3, sinonimos: ["zebra"] }
        ]
    },
    {
        date: "2026-03-18",
        pergunta: "Sabor de pizza mais clássico e pedido?",
        respostas: [
            { texto: "Calabresa", pontos: 42, sinonimos: ["calabresa"] },
            { texto: "Mussarela", pontos: 26, sinonimos: ["mussarela", "queijo", "mucarela"] },
            { texto: "Marguerita", pontos: 14, sinonimos: ["marguerita", "margherita"] },
            { texto: "Portuguesa", pontos: 9, sinonimos: ["portuguesa"] },
            { texto: "Frango com Catupiry", pontos: 6, sinonimos: ["frango com catupiry", "frango"] },
            { texto: "Quatro Queijos", pontos: 3, sinonimos: ["quatro queijos", "4 queijos"] }
        ]
    },
    {
        date: "2026-03-19",
        pergunta: "Algo que você veste ou usa quando faz muito frio?",
        respostas: [
            { texto: "Casaco", pontos: 40, sinonimos: ["casaco", "blusa de frio", "moletom", "jaqueta"] },
            { texto: "Cobertor", pontos: 25, sinonimos: ["cobertor", "edredom", "manta"] },
            { texto: "Touca", pontos: 14, sinonimos: ["touca", "gorro"] },
            { texto: "Luva", pontos: 10, sinonimos: ["luva", "luvas"] },
            { texto: "Cachecol", pontos: 7, sinonimos: ["cachecol", "cachenez"] },
            { texto: "Meia grossa", pontos: 4, sinonimos: ["meia grossa", "meia"] }
        ]
    },
    {
        date: "2026-03-20",
        pergunta: "País da América do Sul onde se fala espanhol?",
        respostas: [
            { texto: "Argentina", pontos: 36, sinonimos: ["argentina"] },
            { texto: "Uruguai", pontos: 28, sinonimos: ["uruguai"] },
            { texto: "Chile", pontos: 18, sinonimos: ["chile"] },
            { texto: "Colômbia", pontos: 10, sinonimos: ["colombia"] },
            { texto: "Paraguai", pontos: 5, sinonimos: ["paraguai"] },
            { texto: "Peru", pontos: 3, sinonimos: ["peru"] }
        ]
    },
    {
        date: "2026-03-21",
        pergunta: "O que as pessoas mais fazem na academia?",
        respostas: [
            { texto: "Musculação", pontos: 45, sinonimos: ["musculacao", "levantar peso", "puxar ferro", "malhar"] },
            { texto: "Esteira", pontos: 25, sinonimos: ["esteira", "correr", "caminhada", "cardio"] },
            { texto: "Tirar foto", pontos: 14, sinonimos: ["tirar foto no espelho", "foto", "selfie"] },
            { texto: "Conversar", pontos: 8, sinonimos: ["conversar", "fofocar", "bater papo"] },
            { texto: "Bicicleta", pontos: 5, sinonimos: ["bicicleta", "bike", "pedalar"] },
            { texto: "Suar", pontos: 3, sinonimos: ["suar", "transpirar"] }
        ]
    },
    {
        date: "2026-03-22",
        pergunta: "Fruta que precisamos descascar para comer?",
        respostas: [
            { texto: "Banana", pontos: 46, sinonimos: ["banana"] },
            { texto: "Laranja", pontos: 24, sinonimos: ["laranja"] },
            { texto: "Mexerica", pontos: 14, sinonimos: ["mexerica", "tangerina", "bergamota", "ponkan"] },
            { texto: "Mamão", pontos: 8, sinonimos: ["mamao"] },
            { texto: "Abacaxi", pontos: 5, sinonimos: ["abacaxi"] },
            { texto: "Manga", pontos: 3, sinonimos: ["manga"] }
        ]
    },
    {
        date: "2026-03-23",
        pergunta: "O que dá mais raiva no Modo Carreira de jogos de futebol?",
        respostas: [
            { texto: "Tomar gol no finalzinho", pontos: 38, sinonimos: ["tomar gol no final", "gol no minuto 90", "gol no finalzinho", "script"] },
            { texto: "Jogador pedir para sair", pontos: 24, sinonimos: ["jogador pedir pra sair", "jogador forcar saida", "jogador querer sair", "transferencia"] },
            { texto: "Lesão", pontos: 18, sinonimos: ["lesao importante", "jogador machucar", "lesao", "contusao"] },
            { texto: "Diretoria reclamar", pontos: 12, sinonimos: ["diretoria reclamar", "demissao", "ser demitido", "objetivos idiotas"] },
            { texto: "Orçamento baixo", pontos: 5, sinonimos: ["orcamento baixo", "sem dinheiro", "falta de verba"] },
            { texto: "Erro do juiz", pontos: 3, sinonimos: ["erro da ia do juiz", "juiz", "arbitro roubando", "penalti roubado"] }
        ]
    },
    {
        date: "2026-03-24",
        pergunta: "Uma cor do arco-íris?",
        respostas: [
            { texto: "Azul", pontos: 35, sinonimos: ["azul", "anil"] },
            { texto: "Vermelho", pontos: 26, sinonimos: ["vermelho"] },
            { texto: "Amarelo", pontos: 18, sinonimos: ["amarelo"] },
            { texto: "Verde", pontos: 12, sinonimos: ["verde"] },
            { texto: "Violeta", pontos: 6, sinonimos: ["roxo", "violeta"] },
            { texto: "Laranja", pontos: 3, sinonimos: ["laranja"] }
        ]
    },
    {
        date: "2026-03-25",
        pergunta: "Algo que você com certeza encontra em um quarto de hotel?",
        respostas: [
            { texto: "Cama", pontos: 38, sinonimos: ["cama", "colchao"] },
            { texto: "Toalha", pontos: 24, sinonimos: ["toalha", "toalha de banho"] },
            { texto: "Frigobar", pontos: 16, sinonimos: ["frigobar", "geladeirinha", "geladeira"] },
            { texto: "Sabonete", pontos: 11, sinonimos: ["sabonete pequeno", "sabonete", "shampoo"] },
            { texto: "Ar-condicionado", pontos: 7, sinonimos: ["ar condicionado", "ar", "central de ar"] },
            { texto: "Televisão", pontos: 4, sinonimos: ["televisao", "tv"] }
        ]
    },
    {
        date: "2026-03-26",
        pergunta: "Instrumento musical de corda?",
        respostas: [
            { texto: "Violão", pontos: 48, sinonimos: ["violao"] },
            { texto: "Guitarra", pontos: 26, sinonimos: ["guitarra"] },
            { texto: "Violino", pontos: 14, sinonimos: ["violino"] },
            { texto: "Baixo", pontos: 7, sinonimos: ["baixo", "contrabaixo"] },
            { texto: "Harpa", pontos: 3, sinonimos: ["harpa"] },
            { texto: "Cavaquinho", pontos: 2, sinonimos: ["cavaquinho", "cavaco", "ukulele"] }
        ]
    },
    {
        date: "2026-03-27",
        pergunta: "Algo que voa, mas não é um pássaro?",
        respostas: [
            { texto: "Avião", pontos: 42, sinonimos: ["aviao", "jatinho"] },
            { texto: "Inseto", pontos: 22, sinonimos: ["inseto", "mosca", "mosquito", "borboleta", "abelha"] },
            { texto: "Morcego", pontos: 16, sinonimos: ["morcego"] },
            { texto: "Helicóptero", pontos: 10, sinonimos: ["helicoptero"] },
            { texto: "Pipa", pontos: 6, sinonimos: ["pipa", "papagaio"] },
            { texto: "Balão", pontos: 4, sinonimos: ["balao"] }
        ]
    },
    {
        date: "2026-03-28",
        pergunta: "Aplicativo que você abre todo santo dia no celular?",
        respostas: [
            { texto: "WhatsApp", pontos: 46, sinonimos: ["whatsapp", "zap", "wpp"] },
            { texto: "Instagram", pontos: 28, sinonimos: ["instagram", "insta"] },
            { texto: "TikTok", pontos: 12, sinonimos: ["tiktok", "teco teco"] },
            { texto: "YouTube", pontos: 8, sinonimos: ["youtube", "yt"] },
            { texto: "Twitter", pontos: 4, sinonimos: ["twitter", "x", "tt"] },
            { texto: "App de Banco", pontos: 2, sinonimos: ["app de banco", "banco", "nubank", "pix"] }
        ]
    },
    {
        date: "2026-03-29",
        pergunta: "O que as pessoas compram na bomboniere do cinema?",
        respostas: [
            { texto: "Pipoca", pontos: 58, sinonimos: ["pipoca", "balde de pipoca"] },
            { texto: "Refrigerante", pontos: 22, sinonimos: ["refrigerante", "refri", "coca", "coca cola"] },
            { texto: "Chocolate", pontos: 9, sinonimos: ["chocolate", "m&m", "bombom"] },
            { texto: "Balas / Fini", pontos: 6, sinonimos: ["balas", "fini", "bala", "doce"] },
            { texto: "Nachos", pontos: 3, sinonimos: ["nachos", "doritos"] },
            { texto: "Água", pontos: 2, sinonimos: ["agua", "garrafa de agua"] }
        ]
    },
    {
        date: "2026-03-30",
        pergunta: "Nome de um planeta do sistema solar (sem ser a Terra)?",
        respostas: [
            { texto: "Marte", pontos: 38, sinonimos: ["marte"] },
            { texto: "Júpiter", pontos: 26, sinonimos: ["jupiter"] },
            { texto: "Saturno", pontos: 16, sinonimos: ["saturno"] },
            { texto: "Vênus", pontos: 11, sinonimos: ["venus"] },
            { texto: "Urano", pontos: 6, sinonimos: ["urano"] },
            { texto: "Mercúrio", pontos: 3, sinonimos: ["mercurio"] }
        ]
    },
    {
        date: "2026-03-31",
        pergunta: "O que sempre se encontra na bolsa de uma mulher?",
        respostas: [
            { texto: "Maquiagem", pontos: 35, sinonimos: ["maquiagem", "batom", "po", "rimel", "make"] },
            { texto: "Carteira", pontos: 24, sinonimos: ["carteira", "dinheiro", "cartao"] },
            { texto: "Espelho", pontos: 16, sinonimos: ["espelho", "espelhinho"] },
            { texto: "Chaves", pontos: 12, sinonimos: ["chaves", "chave", "chave de casa"] },
            { texto: "Absorvente", pontos: 8, sinonimos: ["absorvente", "ob"] },
            { texto: "Perfume", pontos: 5, sinonimos: ["perfume", "creme"] }
        ]
    },
    //Abril
    {
        date: "2026-04-01",
        pergunta: "Qual é a cor que mais se destaca na bandeira do Brasil?",
        respostas: [
            { texto: "Verde", pontos: 45, sinonimos: ["verde", "verdao"] },
            { texto: "Amarelo", pontos: 30, sinonimos: ["amarelo"] },
            { texto: "Azul", pontos: 20, sinonimos: ["azul"] },
            { texto: "Branco", pontos: 5, sinonimos: ["branco"] }
        ]
    },
    {
        date: "2026-04-02",
        pergunta: "O que não pode faltar no setup de um streamer?",
        respostas: [
            { texto: "Microfone", pontos: 32, sinonimos: ["microfone", "mic"] },
            { texto: "Câmera", pontos: 26, sinonimos: ["camera", "webcam", "cam"] },
            { texto: "PC Gamer", pontos: 21, sinonimos: ["pc gamer", "computador", "pc"] },
            { texto: "Iluminação", pontos: 9, sinonimos: ["iluminacao", "ring light", "led", "luz"] },
            { texto: "Monitor", pontos: 6, sinonimos: ["monitor", "tela"] },
            { texto: "Fone de ouvido", pontos: 4, sinonimos: ["fone", "headset", "fone de ouvido"] },
            { texto: "Stream Deck", pontos: 2, sinonimos: ["stream deck", "mesa de som"] }
        ]
    },
    {
        date: "2026-04-03",
        pergunta: "Comida típica de festa de aniversário?",
        respostas: [
            { texto: "Bolo", pontos: 38, sinonimos: ["bolo", "bolo de aniversario"] },
            { texto: "Brigadeiro", pontos: 29, sinonimos: ["brigadeiro", "negrinho"] },
            { texto: "Coxinha", pontos: 14, sinonimos: ["coxinha"] },
            { texto: "Cachorro-quente", pontos: 7, sinonimos: ["cachorro quente", "hot dog"] },
            { texto: "Salgadinho", pontos: 5, sinonimos: ["salgadinho", "salgado", "empada", "kibe"] },
            { texto: "Beijinho", pontos: 4, sinonimos: ["beijinho", "branquinho"] },
            { texto: "Pastel", pontos: 2, sinonimos: ["pastel"] },
            { texto: "Refrigerante", pontos: 1, sinonimos: ["refrigerante", "refri", "guarana"] }
        ]
    },
    {
        date: "2026-04-04",
        pergunta: "Animal que as pessoas costumam ter como pet?",
        respostas: [
            { texto: "Cachorro", pontos: 48, sinonimos: ["cachorro", "cao", "dog", "cachorrinho", "cadelinha"] },
            { texto: "Gato", pontos: 32, sinonimos: ["gato", "gatinho", "felino"] },
            { texto: "Passarinho", pontos: 8, sinonimos: ["passaro", "ave", "calopsita", "periquito", "passarinho"] },
            { texto: "Peixe", pontos: 5, sinonimos: ["peixe", "peixinho", "aquario"] },
            { texto: "Coelho", pontos: 3, sinonimos: ["coelho"] },
            { texto: "Hamster", pontos: 2, sinonimos: ["hamster", "rato", "porquinho da india"] },
            { texto: "Tartaruga", pontos: 2, sinonimos: ["tartaruga", "jabuti"] }
        ]
    },
    {
        date: "2026-04-05",
        pergunta: "Se você pudesse ter um superpoder, qual escolheria?",
        respostas: [
            { texto: "Voar", pontos: 31, sinonimos: ["voar", "voo"] },
            { texto: "Invisibilidade", pontos: 22, sinonimos: ["invisibilidade", "ficar invisivel", "ser invisivel"] },
            { texto: "Super Força", pontos: 17, sinonimos: ["super forca", "forca", "ser forte"] },
            { texto: "Teletransporte", pontos: 14, sinonimos: ["teletransporte", "teleportar"] },
            { texto: "Ler Mentes", pontos: 9, sinonimos: ["ler mentes", "telepatia", "ler pensamento"] },
            { texto: "Super Velocidade", pontos: 4, sinonimos: ["super velocidade", "velocidade", "correr rapido", "ser rapido"] },
            { texto: "Cura", pontos: 3, sinonimos: ["cura", "curar", "fator de cura", "imortalidade"] }
        ]
    },
    {
        date: "2026-04-06",
        pergunta: "O que as pessoas fazem logo que acordam?",
        respostas: [
            { texto: "Pegar o celular", pontos: 58, sinonimos: ["pegar o celular", "celular", "ver o celular", "desligar o despertador", "mexer no celular"] },
            { texto: "Ir ao banheiro", pontos: 18, sinonimos: ["ir ao banheiro", "fazer xixi", "mijar", "banheiro"] },
            { texto: "Escovar os dentes", pontos: 12, sinonimos: ["escovar os dentes", "escovar o dente", "lavar o rosto"] },
            { texto: "Beber água", pontos: 8, sinonimos: ["beber agua", "tomar agua"] },
            { texto: "Abrir o olho", pontos: 4, sinonimos: ["abrir o olho", "abrir os olhos", "piscar"] }
        ]
    },
    {
        date: "2026-04-07",
        pergunta: "Super-herói mais famoso dos quadrinhos?",
        respostas: [
            { texto: "Homem-Aranha", pontos: 38, sinonimos: ["homem aranha", "spiderman", "aranha"] },
            { texto: "Batman", pontos: 27, sinonimos: ["batman", "homem morcego"] },
            { texto: "Superman", pontos: 18, sinonimos: ["superman", "super homem", "clark kent"] },
            { texto: "Homem de Ferro", pontos: 8, sinonimos: ["homem de ferro", "iron man"] },
            { texto: "Capitão América", pontos: 4, sinonimos: ["capitao america"] },
            { texto: "Mulher-Maravilha", pontos: 3, sinonimos: ["mulher maravilha", "wonder woman"] },
            { texto: "Wolverine", pontos: 2, sinonimos: ["wolverine", "logan"] }
        ]
    },
    {
        date: "2026-04-08",
        pergunta: "Qual o bloco mais comum e fácil de achar no Minecraft?",
        respostas: [
            { texto: "Terra", pontos: 45, sinonimos: ["terra", "dirt", "bloco de grama", "grama"] },
            { texto: "Pedra", pontos: 35, sinonimos: ["pedra", "pedregulho", "stone", "cobblestone"] },
            { texto: "Madeira", pontos: 12, sinonimos: ["madeira", "wood", "tora de madeira"] },
            { texto: "Areia", pontos: 5, sinonimos: ["areia", "sand"] },
            { texto: "Cascalho", pontos: 3, sinonimos: ["cascalho", "gravel"] }
        ]
    },
    {
        date: "2026-04-09",
        pergunta: "O que as pessoas mais costumam esquecer em casa ao sair?",
        respostas: [
            { texto: "Celular", pontos: 34, sinonimos: ["celular", "telefone"] },
            { texto: "Chaves", pontos: 28, sinonimos: ["chaves", "chave", "chave de casa", "chave do carro"] },
            { texto: "Carteira", pontos: 18, sinonimos: ["carteira", "dinheiro", "cartao"] },
            { texto: "Guarda-chuva", pontos: 9, sinonimos: ["guarda chuva", "sombrinha"] },
            { texto: "Óculos", pontos: 6, sinonimos: ["oculos", "oculos de sol", "oculos de grau"] },
            { texto: "Fone de ouvido", pontos: 3, sinonimos: ["fone", "fone de ouvido"] },
            { texto: "Garrafa de água", pontos: 2, sinonimos: ["garrafa de agua", "garrafinha", "agua"] }
        ]
    },
    {
        date: "2026-04-10",
        pergunta: "Qual é a posição mais cobiçada em um time de futebol?",
        respostas: [
            { texto: "Atacante", pontos: 42, sinonimos: ["atacante", "centroavante", "ponta", "camisa 9", "fazer gol"] },
            { texto: "Goleiro", pontos: 26, sinonimos: ["goleiro", "guarda redes"] },
            { texto: "Meio-campo", pontos: 18, sinonimos: ["meio campo", "meia", "camisa 10", "armador"] },
            { texto: "Zagueiro", pontos: 9, sinonimos: ["zagueiro", "defesa"] },
            { texto: "Lateral", pontos: 5, sinonimos: ["lateral"] }
        ]
    },
    {
        date: "2026-04-11",
        pergunta: "O que não pode faltar na bolsa para ir à praia?",
        respostas: [
            { texto: "Protetor solar", pontos: 28, sinonimos: ["protetor solar", "protetor", "bloqueador solar", "bronzeador"] },
            { texto: "Toalha", pontos: 22, sinonimos: ["toalha", "toalha de banho"] },
            { texto: "Óculos de sol", pontos: 17, sinonimos: ["oculos de sol", "oculos"] },
            { texto: "Canga", pontos: 12, sinonimos: ["canga", "pano", "esteira"] },
            { texto: "Água", pontos: 9, sinonimos: ["agua", "garrafa de agua"] },
            { texto: "Chinelo", pontos: 6, sinonimos: ["chinelo", "sandalia", "havaianas"] },
            { texto: "Chapéu", pontos: 4, sinonimos: ["chapeu", "bone"] },
            { texto: "Pente", pontos: 2, sinonimos: ["pente", "escova de cabelo"] }
        ]
    },
    {
        date: "2026-04-12",
        pergunta: "Uma profissão que exige o uso de uniforme?",
        respostas: [
            { texto: "Policial", pontos: 31, sinonimos: ["policial", "policia", "pm", "militar"] },
            { texto: "Médico", pontos: 22, sinonimos: ["medico", "doutor", "cirurgiao"] },
            { texto: "Bombeiro", pontos: 18, sinonimos: ["bombeiro"] },
            { texto: "Enfermeiro", pontos: 12, sinonimos: ["enfermeiro", "enfermeira"] },
            { texto: "Carteiro", pontos: 7, sinonimos: ["carteiro", "correios"] },
            { texto: "Segurança", pontos: 6, sinonimos: ["seguranca", "guarda"] },
            { texto: "Frentista", pontos: 4, sinonimos: ["frentista"] }
        ]
    },
    {
        date: "2026-04-13",
        pergunta: "Qual a atração mais procurada em um parque de diversões?",
        respostas: [
            { texto: "Montanha-russa", pontos: 46, sinonimos: ["montanha russa"] },
            { texto: "Roda-gigante", pontos: 23, sinonimos: ["roda gigante"] },
            { texto: "Bate-bate", pontos: 14, sinonimos: ["carrinho de bate bate", "bate bate"] },
            { texto: "Carrossel", pontos: 8, sinonimos: ["carrossel"] },
            { texto: "Trem fantasma", pontos: 6, sinonimos: ["trem fantasma", "casa de terror"] },
            { texto: "Elevador", pontos: 3, sinonimos: ["elevador", "kabum", "elevador que cai"] }
        ]
    },
    {
        date: "2026-04-14",
        pergunta: "O que faz uma pessoa chorar?",
        respostas: [
            { texto: "Cebola", pontos: 42, sinonimos: ["cebola", "cortar cebola"] },
            { texto: "Tristeza", pontos: 26, sinonimos: ["tristeza", "sofrimento", "depressao", "angustia", "luto", "perder alguem"] },
            { texto: "Filmes", pontos: 15, sinonimos: ["filmes", "filme triste", "serie", "musica triste"] },
            { texto: "Dor física", pontos: 11, sinonimos: ["dor", "dor fisica", "machucar", "bater o dedinho"] },
            { texto: "Felicidade", pontos: 6, sinonimos: ["felicidade", "emocao", "alegria"] }
        ]
    },
    {
        date: "2026-04-15",
        pergunta: "Um meio de transporte coletivo muito usado?",
        respostas: [
            { texto: "Ônibus", pontos: 55, sinonimos: ["onibus", "busao", "circular"] },
            { texto: "Metrô", pontos: 27, sinonimos: ["metro", "subway"] },
            { texto: "Trem", pontos: 11, sinonimos: ["trem"] },
            { texto: "Avião", pontos: 4, sinonimos: ["aviao"] },
            { texto: "Van", pontos: 3, sinonimos: ["van", "lotação", "perua"] }
        ]
    },
    {
        date: "2026-04-16",
        pergunta: "O que você vai comprar quando vai à padaria?",
        respostas: [
            { texto: "Pão francês", pontos: 52, sinonimos: ["pao frances", "pao", "pao de sal", "cacetinho", "paozinho"] },
            { texto: "Leite", pontos: 16, sinonimos: ["leite"] },
            { texto: "Frios", pontos: 12, sinonimos: ["frios", "presunto", "mussarela", "queijo", "mortadela"] },
            { texto: "Bolo", pontos: 8, sinonimos: ["bolo"] },
            { texto: "Pão de queijo", pontos: 6, sinonimos: ["pao de queijo"] },
            { texto: "Manteiga", pontos: 4, sinonimos: ["manteiga", "margarina"] },
            { texto: "Café", pontos: 2, sinonimos: ["cafe", "cafezinho"] }
        ]
    },
    {
        date: "2026-04-17",
        pergunta: "Qual animal marinho as pessoas têm mais medo?",
        respostas: [
            { texto: "Tubarão", pontos: 62, sinonimos: ["tubarao"] },
            { texto: "Baleia", pontos: 14, sinonimos: ["baleia"] },
            { texto: "Polvo", pontos: 8, sinonimos: ["polvo", "lula", "kraken"] },
            { texto: "Água-viva", pontos: 7, sinonimos: ["agua viva", "caravela"] },
            { texto: "Orca", pontos: 5, sinonimos: ["orca", "baleia orca"] },
            { texto: "Arraia", pontos: 4, sinonimos: ["arraia"] }
        ]
    },
    {
        date: "2026-04-18",
        pergunta: "O que você faz imediatamente quando falta energia em casa?",
        respostas: [
            { texto: "Pega o celular", pontos: 48, sinonimos: ["celular", "pega o celular", "acende a lanterna do celular", "liga o 4g"] },
            { texto: "Acende a lanterna", pontos: 24, sinonimos: ["lanterna", "pegar lanterna", "acender lanterna"] },
            { texto: "Acende vela", pontos: 16, sinonimos: ["vela", "acender vela", "procurar vela"] },
            { texto: "Reclama", pontos: 8, sinonimos: ["reclama", "xinga", "grita", "fala palavrao"] },
            { texto: "Vai dormir", pontos: 4, sinonimos: ["vai dormir", "dormir", "deitar"] }
        ]
    },
    {
        date: "2026-04-19",
        pergunta: "Disciplina escolar que a maioria dos alunos acha difícil?",
        respostas: [
            { texto: "Matemática", pontos: 52, sinonimos: ["matematica", "conta"] },
            { texto: "Física", pontos: 21, sinonimos: ["fisica"] },
            { texto: "Química", pontos: 14, sinonimos: ["quimica"] },
            { texto: "Português", pontos: 7, sinonimos: ["portugues", "gramatica"] },
            { texto: "História", pontos: 4, sinonimos: ["historia"] },
            { texto: "Biologia", pontos: 2, sinonimos: ["biologia", "ciencias"] }
        ]
    },
    {
        date: "2026-04-20",
        pergunta: "Qual é a fruta que geralmente associamos à cor vermelha?",
        respostas: [
            { texto: "Maçã", pontos: 42, sinonimos: ["maca"] },
            { texto: "Morango", pontos: 36, sinonimos: ["morango"] },
            { texto: "Melancia", pontos: 11, sinonimos: ["melancia"] },
            { texto: "Cereja", pontos: 6, sinonimos: ["cereja"] },
            { texto: "Framboesa", pontos: 3, sinonimos: ["framboesa"] },
            { texto: "Amora", pontos: 2, sinonimos: ["amora"] }
        ]
    },
    {
        date: "2026-04-21",
        pergunta: "País da Europa que atrai muitos turistas brasileiros?",
        respostas: [
            { texto: "Portugal", pontos: 41, sinonimos: ["portugal"] },
            { texto: "França", pontos: 24, sinonimos: ["franca", "paris"] },
            { texto: "Itália", pontos: 17, sinonimos: ["italia", "roma"] },
            { texto: "Inglaterra", pontos: 9, sinonimos: ["inglaterra", "reino unido", "londres"] },
            { texto: "Espanha", pontos: 6, sinonimos: ["espanha"] },
            { texto: "Alemanha", pontos: 3, sinonimos: ["alemanha"] }
        ]
    },
    {
        date: "2026-04-22",
        pergunta: "Ferramenta básica que todo mundo deveria ter em casa?",
        respostas: [
            { texto: "Martelo", pontos: 38, sinonimos: ["martelo"] },
            { texto: "Chave de fenda", pontos: 24, sinonimos: ["chave de fenda", "fenda"] },
            { texto: "Alicate", pontos: 17, sinonimos: ["alicate"] },
            { texto: "Fita isolante", pontos: 9, sinonimos: ["fita isolante", "fita", "durex"] },
            { texto: "Chave Philips", pontos: 7, sinonimos: ["chave philips", "philips"] },
            { texto: "Furadeira", pontos: 5, sinonimos: ["furadeira", "maquina de furar"] }
        ]
    },
    {
        date: "2026-04-23",
        pergunta: "Qual alimento estraga rápido se não ficar na geladeira?",
        respostas: [
            { texto: "Leite", pontos: 31, sinonimos: ["leite"] },
            { texto: "Carne", pontos: 27, sinonimos: ["carne", "frango", "peixe"] },
            { texto: "Iogurte", pontos: 16, sinonimos: ["iogurte", "danone"] },
            { texto: "Queijo", pontos: 12, sinonimos: ["queijo", "frios", "presunto"] },
            { texto: "Maionese", pontos: 8, sinonimos: ["maionese"] },
            { texto: "Ovo", pontos: 4, sinonimos: ["ovo", "ovos"] },
            { texto: "Comida pronta", pontos: 2, sinonimos: ["comida", "marmita", "sobra de comida", "arroz"] }
        ]
    },
    {
        date: "2026-04-24",
        pergunta: "Esporte que usa bola, além do futebol?",
        respostas: [
            { texto: "Vôlei", pontos: 38, sinonimos: ["volei", "voleibol"] },
            { texto: "Basquete", pontos: 27, sinonimos: ["basquete", "basquetebol"] },
            { texto: "Tênis", pontos: 14, sinonimos: ["tenis"] },
            { texto: "Handebol", pontos: 9, sinonimos: ["handebol", "handbol"] },
            { texto: "Golfe", pontos: 5, sinonimos: ["golfe"] },
            { texto: "Ping-pong", pontos: 4, sinonimos: ["ping pong", "tenis de mesa"] },
            { texto: "Boliche", pontos: 3, sinonimos: ["boliche"] }
        ]
    },
    {
        date: "2026-04-25",
        pergunta: "Qual é o inseto mais chato no verão?",
        respostas: [
            { texto: "Mosquito", pontos: 65, sinonimos: ["mosquito", "pernilongo", "muriçoca", "carapana", "borrachudo", "dengue"] },
            { texto: "Mosca", pontos: 18, sinonimos: ["mosca", "varejeira"] },
            { texto: "Barata", pontos: 10, sinonimos: ["barata"] },
            { texto: "Formiga", pontos: 5, sinonimos: ["formiga"] },
            { texto: "Mutuca", pontos: 3, sinonimos: ["mutuca", "piu"] }
        ]
    },
    {
        date: "2026-04-26",
        pergunta: "O que você abraça na hora de dormir?",
        respostas: [
            { texto: "Travesseiro", pontos: 46, sinonimos: ["travesseiro", "travesseiro de corpo", "almofada"] },
            { texto: "Cobertor", pontos: 24, sinonimos: ["cobertor", "edredom", "lencol", "coberta"] },
            { texto: "Namorado(a)", pontos: 16, sinonimos: ["namorada", "namorado", "marido", "esposa", "mulher", "homem", "companheiro"] },
            { texto: "Ursinho", pontos: 9, sinonimos: ["ursinho", "urso de pelucia", "pelucia"] },
            { texto: "Cachorro", pontos: 5, sinonimos: ["cachorro", "gato", "pet", "animal"] }
        ]
    },
    {
        date: "2026-04-27",
        pergunta: "Gênero musical muito popular no Brasil?",
        respostas: [
            { texto: "Sertanejo", pontos: 38, sinonimos: ["sertanejo", "sertanejo universitario", "modao"] },
            { texto: "Funk", pontos: 28, sinonimos: ["funk", "mandelao"] },
            { texto: "Samba", pontos: 14, sinonimos: ["samba"] },
            { texto: "Pagode", pontos: 11, sinonimos: ["pagode"] },
            { texto: "MPB", pontos: 5, sinonimos: ["mpb", "musica popular brasileira"] },
            { texto: "Forró", pontos: 4, sinonimos: ["forro", "piseiro", "pisadinha"] }
        ]
    },
    {
        date: "2026-04-28",
        pergunta: "Uma bebida que é sempre servida gelada?",
        respostas: [
            { texto: "Refrigerante", pontos: 44, sinonimos: ["refrigerante", "refri", "coca", "coca cola"] },
            { texto: "Cerveja", pontos: 32, sinonimos: ["cerveja", "breja", "gelada", "chopp"] },
            { texto: "Suco", pontos: 12, sinonimos: ["suco"] },
            { texto: "Água", pontos: 8, sinonimos: ["agua", "agua com gas"] },
            { texto: "Chá gelado", pontos: 3, sinonimos: ["cha gelado", "mate", "ice tea"] },
            { texto: "Energético", pontos: 1, sinonimos: ["energetico", "red bull"] }
        ]
    },
    {
        date: "2026-04-29",
        pergunta: "Qual é a cor de carro mais comum nas ruas?",
        respostas: [
            { texto: "Branco", pontos: 38, sinonimos: ["branco", "branca"] },
            { texto: "Prata", pontos: 28, sinonimos: ["prata"] },
            { texto: "Preto", pontos: 19, sinonimos: ["preto", "preta"] },
            { texto: "Cinza", pontos: 9, sinonimos: ["cinza", "chumbo"] },
            { texto: "Vermelho", pontos: 4, sinonimos: ["vermelho", "vermelha"] },
            { texto: "Azul", pontos: 2, sinonimos: ["azul"] }
        ]
    },
    {
        date: "2026-04-30",
        pergunta: "A melhor sobremesa para um almoço de domingo?",
        respostas: [
            { texto: "Pudim", pontos: 42, sinonimos: ["pudim", "pudim de leite"] },
            { texto: "Sorvete", pontos: 22, sinonimos: ["sorvete", "picole"] },
            { texto: "Pavê", pontos: 17, sinonimos: ["pave", "pave ou paca"] },
            { texto: "Mousse", pontos: 8, sinonimos: ["mousse", "mousse de maracuja", "mousse de limao"] },
            { texto: "Gelatina", pontos: 6, sinonimos: ["gelatina"] },
            { texto: "Bolo", pontos: 3, sinonimos: ["bolo", "torta"] },
            { texto: "Salada de frutas", pontos: 2, sinonimos: ["salada de frutas", "frutas"] }
        ]
    }
];

// Estado atual e salvamentos
let allSaves = JSON.parse(localStorage.getItem('jogoDos100_allSaves')) || {};
let currentPuzzle = null;
let gameState = null;

// Elementos da DOM
const screens = {
    menu: document.getElementById('menu-screen'),
    game: document.getElementById('game-screen'),
    modalEnd: document.getElementById('end-modal'),
    modalCalendar: document.getElementById('calendar-modal')
};

const UI = {
    btnStart: document.getElementById('btn-start'),
    btnOpenCalendar: document.getElementById('btn-open-calendar'),
    btnCloseCalendar: document.getElementById('btn-close-calendar'),
    btnBackMenu: document.getElementById('btn-back-menu'),
    btnBackFromGame: document.getElementById('btn-back-from-game'), // Adicione esta linha
    btnSubmit: document.getElementById('btn-submit'),
    btnHint: document.getElementById('btn-hint'), // Adicione esta linha
    guessInput: document.getElementById('guess-input'),
    board: document.getElementById('board'),
    scoreDisplay: document.getElementById('score-display'),
    livesDisplay: document.getElementById('lives-display').children,
    questionDisplay: document.getElementById('question-display'),
    feedback: document.getElementById('feedback-message'),
    wrongGuessesContainer: document.getElementById('wrong-guesses-container'),
    wrongGuessesList: document.getElementById('wrong-guesses-list'),
    calendarGrid: document.getElementById('calendar-grid'),
    
    
    endTitle: document.getElementById('end-title'),
    finalScore: document.getElementById('final-score'),
    finalHints: document.getElementById('final-hints'), // Adicione esta linha
    missedContainer: document.getElementById('missed-words-container'),
    missedList: document.getElementById('missed-words-list'),
    btnShare: document.getElementById('btn-share'),

    calendarGrid: document.getElementById('calendar-grid'),
    calendarMonthYear: document.getElementById('calendar-month-year'),
    btnPrevMonth: document.getElementById('btn-prev-month'),
    btnNextMonth: document.getElementById('btn-next-month')
};

let displayMonth = new Date().getMonth();
let displayYear = new Date().getFullYear();

const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

// Formatar data (YYYY-MM-DD -> DD/MM)
function formatToBR(dateStr) {
    const parts = dateStr.split('-');
    return `${parts[2]}/${parts[1]}`;
}

function getTodayDateStr() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function init() {
    setupEventListeners();
}

function setupEventListeners() {
    UI.btnStart.addEventListener('click', () => {
        loadDay(getTodayDateStr());
    });
    
    UI.btnOpenCalendar.addEventListener('click', openCalendar);
    UI.btnCloseCalendar.addEventListener('click', () => {
        screens.modalCalendar.classList.add('hidden');
    });

    UI.btnBackMenu.addEventListener('click', backToMenu);
    
    UI.btnSubmit.addEventListener('click', handleGuess);
    UI.guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleGuess();
    });
    UI.btnShare.addEventListener('click', shareScore);

    UI.btnPrevMonth.addEventListener('click', () => {
        displayMonth--;
        if (displayMonth < 0) { displayMonth = 11; displayYear--; }
        renderCalendarGrid();
    });

    UI.btnNextMonth.addEventListener('click', () => {
        displayMonth++;
        if (displayMonth > 11) { displayMonth = 0; displayYear++; }
        renderCalendarGrid();
    });

    // Listener do botão de voltar da tela do jogo
    UI.btnBackFromGame.addEventListener('click', () => {
        screens.game.classList.add('hidden');
        screens.menu.classList.remove('hidden');
    });

    UI.btnHint.addEventListener('click', handleHint);
}

// Carrega o jogo de um dia específico
function loadDay(dateStr) {
    currentPuzzle = gameData.find(d => d.date === dateStr);
    
    if (!currentPuzzle) {
        currentPuzzle = gameData[gameData.length - 1];
    }

    if (allSaves[currentPuzzle.date]) {
        gameState = allSaves[currentPuzzle.date];
        // Proteções para saves antigos:
        if (!gameState.wrongGuesses) gameState.wrongGuesses = [];
        if (!gameState.hints) gameState.hints = {};
        if (gameState.totalHints === undefined) gameState.totalHints = 0; // Adicione esta linha
    } else {
        gameState = {
            date: currentPuzzle.date,
            score: 0,
            mistakes: 0,
            revealedIndexes: [],
            wrongGuesses: [], 
            hints: {},
            totalHints: 0, // Adicione esta linha
            status: "playing"
        };
    }

    screens.menu.classList.add('hidden');
    screens.modalCalendar.classList.add('hidden');
    screens.game.classList.remove('hidden');
    
    UI.questionDisplay.textContent = currentPuzzle.pergunta;
    UI.guessInput.value = '';
    
    renderBoard();
    updateScoreUI();
    updateLivesUI();
    renderWrongGuesses(); // Chamamos a nova função de renderização

    if (gameState.status !== "playing") {
        endGame(gameState.status === "won", true);
    } else {
        UI.guessInput.focus();
    }
}

function saveProgress() {
    allSaves[gameState.date] = gameState;
    localStorage.setItem('jogoDos100_allSaves', JSON.stringify(allSaves));
}

// Renderiza o Calendário
function openCalendar() {
    // Sempre abre o calendário no mês/ano atual
    const today = new Date();
    displayMonth = today.getMonth();
    displayYear = today.getFullYear();
    
    renderCalendarGrid();
    screens.modalCalendar.classList.remove('hidden');
}

function renderCalendarGrid() {
    UI.calendarGrid.innerHTML = '';
    UI.calendarMonthYear.textContent = `${monthNames[displayMonth]} ${displayYear}`;

    // Descobre qual dia da semana o mês começa (0 = Dom, 1 = Seg...)
    const firstDay = new Date(displayYear, displayMonth, 1).getDay();
    // Quantos dias tem no mês
    const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();

    const todayStr = getTodayDateStr();

    // Cria os espaços vazios antes do dia 1
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'calendar-day empty';
        UI.calendarGrid.appendChild(emptyDiv);
    }

    // Cria os dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${displayYear}-${String(displayMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        const btn = document.createElement('button');
        btn.className = 'calendar-day';
        btn.textContent = day;

        // Verifica se existe um jogo cadastrado no banco de dados para este dia
        const puzzleExists = gameData.find(d => d.date === dateStr);

        // Só libera o dia SE existir puzzle E a data for hoje ou no passado
        if (puzzleExists && dateStr <= todayStr) {
            const save = allSaves[dateStr];
            if (save) {
                btn.classList.add(save.status); // won, lost, playing
                // ATUALIZE ESTA LINHA ABAIXO:
                btn.setAttribute('data-tooltip', `Pontuação: ${save.score}/100 | Erros: ${save.mistakes}/3 | Dicas: ${save.totalHints || 0}`);
            } else {
                btn.setAttribute('data-tooltip', "Disponível! Clique para jogar.");
            }
            btn.onclick = () => loadDay(dateStr);
        } else {
            // Dia sem jogo cadastrado ou dia no futuro
            btn.classList.add('disabled');
        }

        UI.calendarGrid.appendChild(btn);
    }
}

function backToMenu() {
    screens.modalEnd.classList.add('hidden');
    screens.game.classList.add('hidden');
    screens.menu.classList.remove('hidden');
}

function renderBoard() {
    UI.board.innerHTML = '';
    currentPuzzle.respostas.forEach((resposta, index) => {
        const slot = document.createElement('div');
        slot.className = 'answer-slot';
        
        const isRevealed = gameState.revealedIndexes.includes(index);
        const isGameOver = gameState.status !== "playing";

        if (isRevealed) {
            slot.classList.add('revealed');
            slot.innerHTML = `<span>${index + 1}. ${resposta.texto}</span> <span class="points">${resposta.pontos}</span>`;
        } else if (isGameOver && !isRevealed) {
            slot.classList.add('missed');
            slot.innerHTML = `<span>${index + 1}. ${resposta.texto}</span> <span class="points">${resposta.pontos}</span>`;
        } else {
            // Lógica para verificar se a palavra oculta tem alguma dica
            let hintLevel = gameState.hints[index] || 0;
            let displayString = "[Oculto]";
            
            if (hintLevel > 0) {
                displayString = generateHintString(resposta.texto, hintLevel);
                slot.classList.add('has-hint'); // Adiciona a classe para mostrar os tracinhos
            } else {
                slot.classList.remove('has-hint');
            }

            slot.classList.add('hidden-answer');
            slot.innerHTML = `<span>${index + 1}. ${displayString}</span> <span class="points">--</span>`;
        }
        
        UI.board.appendChild(slot);
    });
}

function renderWrongGuesses() {
    if (gameState.wrongGuesses && gameState.wrongGuesses.length > 0) {
        UI.wrongGuessesContainer.classList.remove('hidden');
        UI.wrongGuessesList.innerHTML = '';
        
        gameState.wrongGuesses.forEach(guess => {
            const span = document.createElement('span');
            span.className = 'wrong-guess-chip';
            span.textContent = guess;
            UI.wrongGuessesList.appendChild(span);
        });
    } else {
        UI.wrongGuessesContainer.classList.add('hidden');
        UI.wrongGuessesList.innerHTML = '';
    }
}

function updateScoreUI() {
    UI.scoreDisplay.textContent = `${gameState.score}/100`;
}

function updateLivesUI() {
    for (let i = 0; i < 3; i++) {
        if (i < gameState.mistakes) {
            UI.livesDisplay[i].classList.add('lost');
        } else {
            UI.livesDisplay[i].classList.remove('lost');
        }
    }
}

function showFeedback(msg) {
    UI.feedback.textContent = msg;
    setTimeout(() => { UI.feedback.textContent = ''; }, 2000);
}

// --- SISTEMA DE VALIDAÇÃO INTELIGENTE ---
function checkMatch(inputJogador, respostaObj) {
    const guess = normalizeText(inputJogador);
    const textoPrincipal = normalizeText(respostaObj.texto);

    // 1. Acerto Exato
    if (guess === textoPrincipal) return true;

    // 2. Acerto por Divisão (Ex: "Fazer academia / Emagrecer" -> aceita "Fazer academia" ou "Emagrecer")
    const partes = respostaObj.texto.split(/[\/-]/).map(p => normalizeText(p));
    if (partes.includes(guess)) return true;

    // 3. Acerto por Sinônimos (Se você cadastrar no banco de dados)
    if (respostaObj.sinonimos) {
        const sinonimos = respostaObj.sinonimos.map(s => normalizeText(s));
        if (sinonimos.includes(guess)) return true;
    }

    // 4. Acerto por Palavra-Chave (Se a resposta tiver várias palavras, aceita se a pessoa digitar a palavra mais importante)
    // Ignora palavras curtas de ligação (de, da, o, a, um)
    const palavrasDaResposta = textoPrincipal.split(' ').filter(p => p.length > 3);
    if (palavrasDaResposta.length > 1) {
        if (palavrasDaResposta.includes(guess)) return true;
    }

    return false;
}

function handleGuess() {
    if (gameState.status !== "playing") return;

    const inputVal = UI.guessInput.value.trim();
    if (!inputVal) return;

    const normalizedGuess = normalizeText(inputVal);
    let foundMatch = false;
    let alreadyRevealed = false;

    // 1. Verifica se já não é uma palavra que ele tentou e errou
    const alreadyWrong = gameState.wrongGuesses.some(w => normalizeText(w) === normalizedGuess);
    if (alreadyWrong) {
        showFeedback('Você já tentou essa palavra!');
        UI.guessInput.value = '';
        return; // Sai da função sem tirar vida
    }

    // 2. Procura nas respostas corretas com Inteligência
    currentPuzzle.respostas.forEach((resp, index) => {
        // Usa a nova função checkMatch em vez do ===
        if (checkMatch(inputVal, resp)) { 
            if (gameState.revealedIndexes.includes(index)) {
                alreadyRevealed = true;
            } else {
                foundMatch = true;
                gameState.revealedIndexes.push(index);
                gameState.score += resp.pontos;
            }
        }
    });

    UI.guessInput.value = '';

    // 3. Aplica o resultado
    if (alreadyRevealed) {
        showFeedback('Você já adivinhou essa!');
    } else if (foundMatch) {
        renderBoard();
        updateScoreUI();
        
        if (gameState.revealedIndexes.length === currentPuzzle.respostas.length) {
            gameState.status = "won";
            endGame(true, false);
        }
    } else {
        // Se chegou aqui, é um erro novo
        gameState.mistakes++;
        gameState.wrongGuesses.push(inputVal); // Salva exatamente como o jogador digitou
        
        updateLivesUI();
        renderWrongGuesses(); // Atualiza os chips de erro
        
        if (gameState.mistakes >= 3) {
            gameState.status = "lost";
            endGame(false, false);
        } else {
            showFeedback('Resposta não encontrada!');
        }
    }
    
    saveProgress();
}

// Gera o texto da dica baseado no nível (1 = tracinhos, 2 = primeira letra)
function generateHintString(text, level) {
    let result = "";
    let firstCharRevealed = false;
    
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char === ' ') {
            result += ' '; // Mantém os espaços em branco entre as palavras
        } else {
            if (level >= 2 && !firstCharRevealed) {
                result += char; // Revela a primeira letra/caractere
                firstCharRevealed = true;
            } else {
                result += '-'; // Troca o resto por tracinho
            }
        }
    }
    return result;
}

// Lógica ao clicar no botão de dica
function handleHint() {
    if (gameState.status !== "playing") return;

    let unrevealed = [];
    currentPuzzle.respostas.forEach((resp, index) => {
        if (!gameState.revealedIndexes.includes(index)) {
            unrevealed.push(index);
        }
    });

    if (unrevealed.length === 0) return;

    // Filtra quem ainda não tem NENHUMA dica (nível 0)
    let level0 = unrevealed.filter(i => (gameState.hints[i] || 0) === 0);
    let availableForHint;

    if (level0.length > 0) {
        // Se tem palavra sem dica, prioriza dar a dica dos tracinhos
        availableForHint = level0;
    } else {
        // Se todas as ocultas já têm tracinhos, então podemos dar a primeira letra (nível 1)
        let level1 = unrevealed.filter(i => (gameState.hints[i] || 0) === 1);
        availableForHint = level1;
    }

    if (availableForHint.length === 0) {
        showFeedback('Dicas máximas já atingidas!');
        return;
    }

    // Escolhe uma palavra aleatória dentro do nível escolhido
    let targetIndex = availableForHint[Math.floor(Math.random() * availableForHint.length)];
    
    // Aumenta o nível da dica dessa palavra
    gameState.hints[targetIndex] = (gameState.hints[targetIndex] || 0) + 1;
    
    // Contabiliza o total de dicas usadas
    gameState.totalHints = (gameState.totalHints || 0) + 1;

    showFeedback('Dica revelada!');
    saveProgress();
    renderBoard();
}

function endGame(won, instant = false) {
    renderBoard(); 
    
    const showModal = () => {
        screens.modalEnd.classList.remove('hidden');
        UI.finalScore.textContent = gameState.score;
        UI.endTitle.textContent = won ? "Parabéns!" : "Game Over";
        
        // Adicione esta linha para exibir o total de dicas:
        if (UI.finalHints) UI.finalHints.textContent = gameState.totalHints || 0;
        
        if (!won) {
            UI.missedContainer.classList.remove('hidden');
            UI.missedList.innerHTML = '';
            currentPuzzle.respostas.forEach((resp, index) => {
                if (!gameState.revealedIndexes.includes(index)) {
                    const li = document.createElement('li');
                    li.textContent = `- ${resp.texto} (${resp.pontos} pts)`;
                    UI.missedList.appendChild(li);
                }
            });
        } else {
            UI.missedContainer.classList.add('hidden');
        }
    };

    if (instant) {
        showModal();
    } else {
        setTimeout(showModal, 500); 
    }
}

function shareScore() {
    const vidasUsadas = gameState.mistakes;
    let vidasEmoji = "";
    for(let i=0; i<3; i++) {
        vidasEmoji += (i < vidasUsadas) ? "❌" : "❤️";
    }

    // Atualize o texto de compartilhamento para incluir as dicas
    const dicasUsadas = gameState.totalHints || 0;
    const shareText = `Jogo Dos 100 - ${formatToBR(gameState.date)}\nPontuação: ${gameState.score}/100\nTentativas: ${vidasEmoji}\nDicas Usadas: ${dicasUsadas}\nJogue agora!`;
    
    navigator.clipboard.writeText(shareText).then(() => {
        const originalText = UI.btnShare.textContent;
        UI.btnShare.textContent = "Copiado!";
        setTimeout(() => { UI.btnShare.textContent = originalText; }, 2000);
    });
}

init();