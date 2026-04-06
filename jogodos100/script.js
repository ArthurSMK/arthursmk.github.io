// Banco de dados simulado com os dias
const gameData = [
    {
        date: "2026-04-01",
        pergunta: "Qual é a cor que mais se destaca na bandeira do Brasil?",
        respostas: [
            { texto: "Verde", pontos: 45 },
            { texto: "Amarelo", pontos: 30 },
            { texto: "Azul", pontos: 20 },
            { texto: "Branco", pontos: 5 }
        ]
    },
    {
        date: "2026-04-02",
        pergunta: "O que não pode faltar no setup de um streamer?",
        respostas: [
            { texto: "Microfone", pontos: 32 },
            { texto: "Câmera", pontos: 26 },
            { texto: "PC Gamer", pontos: 21 },
            { texto: "Iluminação", pontos: 9 },
            { texto: "Monitor", pontos: 6 },
            { texto: "Fone de ouvido", pontos: 4 },
            { texto: "Stream Deck", pontos: 2 }
        ]
    },
    {
        date: "2026-04-03",
        pergunta: "Comida típica de festa de aniversário?",
        respostas: [
            { texto: "Bolo", pontos: 38 },
            { texto: "Brigadeiro", pontos: 29 },
            { texto: "Coxinha", pontos: 14 },
            { texto: "Cachorro-quente", pontos: 7 },
            { texto: "Salgadinho", pontos: 5 },
            { texto: "Beijinho", pontos: 4 },
            { texto: "Pastel", pontos: 2 },
            { texto: "Refrigerante", pontos: 1 }
        ]
    },
    {
        date: "2026-04-04",
        pergunta: "Animal que as pessoas costumam ter como pet?",
        respostas: [
            { texto: "Cachorro", pontos: 48 },
            { texto: "Gato", pontos: 32 },
            { texto: "Passarinho", pontos: 8 },
            { texto: "Peixe", pontos: 5 },
            { texto: "Coelho", pontos: 3 },
            { texto: "Hamster", pontos: 2 },
            { texto: "Tartaruga", pontos: 2 }
        ]
    },
    {
        date: "2026-04-05",
        pergunta: "Se você pudesse ter um superpoder, qual escolheria?",
        respostas: [
            { texto: "Voar", pontos: 31 },
            { texto: "Invisibilidade", pontos: 22 },
            { texto: "Super Força", pontos: 17 },
            { texto: "Teletransporte", pontos: 14 },
            { texto: "Ler Mentes", pontos: 9 },
            { texto: "Super Velocidade", pontos: 4 },
            { texto: "Cura", pontos: 3 }
        ]
    },
    {
        date: "2026-04-06",
        pergunta: "O que as pessoas fazem logo que acordam?",
        respostas: [
            { texto: "Pegar o celular", pontos: 58 },
            { texto: "Ir ao banheiro", pontos: 18 },
            { texto: "Escovar os dentes", pontos: 12 },
            { texto: "Beber água", pontos: 8 },
            { texto: "Desligar o despertador", pontos: 4 }
        ]
    },
    {
        date: "2026-04-07",
        pergunta: "Super-herói mais famoso dos quadrinhos?",
        respostas: [
            { texto: "Homem-Aranha", pontos: 38 },
            { texto: "Batman", pontos: 27 },
            { texto: "Superman", pontos: 18 },
            { texto: "Homem de Ferro", pontos: 8 },
            { texto: "Capitão América", pontos: 4 },
            { texto: "Mulher-Maravilha", pontos: 3 },
            { texto: "Wolverine", pontos: 2 }
        ]
    },
    {
        date: "2026-04-08",
        pergunta: "Qual o bloco mais comum e fácil de achar no Minecraft?",
        respostas: [
            { texto: "Terra", pontos: 45 },
            { texto: "Pedra", pontos: 35 },
            { texto: "Madeira", pontos: 12 },
            { texto: "Areia", pontos: 5 },
            { texto: "Cascalho", pontos: 3 }
        ]
    },
    {
        date: "2026-04-09",
        pergunta: "O que as pessoas mais costumam esquecer em casa ao sair?",
        respostas: [
            { texto: "Celular", pontos: 34 },
            { texto: "Chaves", pontos: 28 },
            { texto: "Carteira", pontos: 18 },
            { texto: "Guarda-chuva", pontos: 9 },
            { texto: "Óculos", pontos: 6 },
            { texto: "Fone de ouvido", pontos: 3 },
            { texto: "Garrafa de água", pontos: 2 }
        ]
    },
    {
        date: "2026-04-10",
        pergunta: "Qual é a posição mais cobiçada em um time de futebol?",
        respostas: [
            { texto: "Atacante", pontos: 42 },
            { texto: "Goleiro", pontos: 26 },
            { texto: "Meio-campo", pontos: 18 },
            { texto: "Zagueiro", pontos: 9 },
            { texto: "Lateral", pontos: 5 }
        ]
    },
    {
        date: "2026-04-11",
        pergunta: "O que não pode faltar na bolsa para ir à praia?",
        respostas: [
            { texto: "Protetor solar", pontos: 28 },
            { texto: "Toalha", pontos: 22 },
            { texto: "Óculos de sol", pontos: 17 },
            { texto: "Canga", pontos: 12 },
            { texto: "Água", pontos: 9 },
            { texto: "Chinelo", pontos: 6 },
            { texto: "Chapéu", pontos: 4 },
            { texto: "Pente", pontos: 2 }
        ]
    },
    {
        date: "2026-04-12",
        pergunta: "Uma profissão que exige o uso de uniforme?",
        respostas: [
            { texto: "Policial", pontos: 31 },
            { texto: "Médico", pontos: 22 },
            { texto: "Bombeiro", pontos: 18 },
            { texto: "Enfermeiro", pontos: 12 },
            { texto: "Carteiro", pontos: 7 },
            { texto: "Segurança", pontos: 6 },
            { texto: "Frentista", pontos: 4 }
        ]
    },
    {
        date: "2026-04-13",
        pergunta: "Qual a atração mais procurada em um parque de diversões?",
        respostas: [
            { texto: "Montanha-russa", pontos: 46 },
            { texto: "Roda-gigante", pontos: 23 },
            { texto: "Bate-bate", pontos: 14 },
            { texto: "Carrossel", pontos: 8 },
            { texto: "Trem fantasma", pontos: 6 },
            { texto: "Elevador", pontos: 3 }
        ]
    },
    {
        date: "2026-04-14",
        pergunta: "O que faz uma pessoa chorar?",
        respostas: [
            { texto: "Cebola", pontos: 42 },
            { texto: "Tristeza", pontos: 26 },
            { texto: "Filmes", pontos: 15 },
            { texto: "Dor física", pontos: 11 },
            { texto: "Felicidade", pontos: 6 }
        ]
    },
    {
        date: "2026-04-15",
        pergunta: "Um meio de transporte coletivo muito usado?",
        respostas: [
            { texto: "Ônibus", pontos: 55 },
            { texto: "Metrô", pontos: 27 },
            { texto: "Trem", pontos: 11 },
            { texto: "Avião", pontos: 4 },
            { texto: "Van", pontos: 3 }
        ]
    },
    {
        date: "2026-04-16",
        pergunta: "O que você vai comprar quando vai à padaria?",
        respostas: [
            { texto: "Pão francês", pontos: 52 },
            { texto: "Leite", pontos: 16 },
            { texto: "Frios", pontos: 12 },
            { texto: "Bolo", pontos: 8 },
            { texto: "Pão de queijo", pontos: 6 },
            { texto: "Manteiga", pontos: 4 },
            { texto: "Café", pontos: 2 }
        ]
    },
    {
        date: "2026-04-17",
        pergunta: "Qual animal marinho as pessoas têm mais medo?",
        respostas: [
            { texto: "Tubarão", pontos: 62 },
            { texto: "Baleia", pontos: 14 },
            { texto: "Polvo", pontos: 8 },
            { texto: "Água-viva", pontos: 7 },
            { texto: "Orca", pontos: 5 },
            { texto: "Arraia", pontos: 4 }
        ]
    },
    {
        date: "2026-04-18",
        pergunta: "O que você faz imediatamente quando falta energia em casa?",
        respostas: [
            { texto: "Pega o celular", pontos: 48 },
            { texto: "Acende a lanterna", pontos: 24 },
            { texto: "Acende vela", pontos: 16 },
            { texto: "Reclama", pontos: 8 },
            { texto: "Vai dormir", pontos: 4 }
        ]
    },
    {
        date: "2026-04-19",
        pergunta: "Disciplina escolar que a maioria dos alunos acha difícil?",
        respostas: [
            { texto: "Matemática", pontos: 52 },
            { texto: "Física", pontos: 21 },
            { texto: "Química", pontos: 14 },
            { texto: "Português", pontos: 7 },
            { texto: "História", pontos: 4 },
            { texto: "Biologia", pontos: 2 }
        ]
    },
    {
        date: "2026-04-20",
        pergunta: "Qual é a fruta que geralmente associamos à cor vermelha?",
        respostas: [
            { texto: "Maçã", pontos: 42 },
            { texto: "Morango", pontos: 36 },
            { texto: "Melancia", pontos: 11 },
            { texto: "Cereja", pontos: 6 },
            { texto: "Framboesa", pontos: 3 },
            { texto: "Amora", pontos: 2 }
        ]
    },
    {
        date: "2026-04-21",
        pergunta: "País da Europa que atrai muitos turistas brasileiros?",
        respostas: [
            { texto: "Portugal", pontos: 41 },
            { texto: "França", pontos: 24 },
            { texto: "Itália", pontos: 17 },
            { texto: "Inglaterra", pontos: 9 },
            { texto: "Espanha", pontos: 6 },
            { texto: "Alemanha", pontos: 3 }
        ]
    },
    {
        date: "2026-04-22",
        pergunta: "Ferramenta básica que todo mundo deveria ter em casa?",
        respostas: [
            { texto: "Martelo", pontos: 38 },
            { texto: "Chave de fenda", pontos: 24 },
            { texto: "Alicate", pontos: 17 },
            { texto: "Fita isolante", pontos: 9 },
            { texto: "Chave Philips", pontos: 7 },
            { texto: "Furadeira", pontos: 5 }
        ]
    },
    {
        date: "2026-04-23",
        pergunta: "Qual alimento estraga rápido se não ficar na geladeira?",
        respostas: [
            { texto: "Leite", pontos: 31 },
            { texto: "Carne", pontos: 27 },
            { texto: "Iogurte", pontos: 16 },
            { texto: "Queijo", pontos: 12 },
            { texto: "Maionese", pontos: 8 },
            { texto: "Ovo", pontos: 4 },
            { texto: "Comida", pontos: 2 }
        ]
    },
    {
        date: "2026-04-24",
        pergunta: "Esporte que usa bola, além do futebol?",
        respostas: [
            { texto: "Vôlei", pontos: 38 },
            { texto: "Basquete", pontos: 27 },
            { texto: "Tênis", pontos: 14 },
            { texto: "Handebol", pontos: 9 },
            { texto: "Golfe", pontos: 5 },
            { texto: "Ping-pong", pontos: 4 },
            { texto: "Boliche", pontos: 3 }
        ]
    },
    {
        date: "2026-04-25",
        pergunta: "Qual é o inseto mais chato no verão?",
        respostas: [
            { texto: "Mosquito", pontos: 65 },
            { texto: "Mosca", pontos: 18 },
            { texto: "Barata", pontos: 9 },
            { texto: "Formiga", pontos: 5 },
            { texto: "Mutuca", pontos: 3 }
        ]
    },
    {
        date: "2026-04-26",
        pergunta: "O que você abraça na hora de dormir?",
        respostas: [
            { texto: "Travesseiro", pontos: 46 },
            { texto: "Cobertor", pontos: 24 },
            { texto: "Namorada", pontos: 16 },
            { texto: "Ursinho", pontos: 9 },
            { texto: "Cachorro", pontos: 5 }
        ]
    },
    {
        date: "2026-04-27",
        pergunta: "Gênero musical muito popular no Brasil?",
        respostas: [
            { texto: "Sertanejo", pontos: 38 },
            { texto: "Funk", pontos: 28 },
            { texto: "Samba", pontos: 14 },
            { texto: "Pagode", pontos: 11 },
            { texto: "MPB", pontos: 5 },
            { texto: "Forró", pontos: 4 }
        ]
    },
    {
        date: "2026-04-28",
        pergunta: "Uma bebida que é sempre servida gelada?",
        respostas: [
            { texto: "Refrigerante", pontos: 44 },
            { texto: "Cerveja", pontos: 32 },
            { texto: "Suco", pontos: 12 },
            { texto: "Água", pontos: 8 },
            { texto: "Chá gelado", pontos: 3 },
            { texto: "Energético", pontos: 1 }
        ]
    },
    {
        date: "2026-04-29",
        pergunta: "Qual é a cor de carro mais comum nas ruas?",
        respostas: [
            { texto: "Branco", pontos: 38 },
            { texto: "Prata", pontos: 28 },
            { texto: "Preto", pontos: 19 },
            { texto: "Cinza", pontos: 9 },
            { texto: "Vermelho", pontos: 4 },
            { texto: "Azul", pontos: 2 }
        ]
    },
    {
        date: "2026-04-30",
        pergunta: "A melhor sobremesa para um almoço de domingo?",
        respostas: [
            { texto: "Pudim", pontos: 42 },
            { texto: "Sorvete", pontos: 22 },
            { texto: "Pavê", pontos: 17 },
            { texto: "Mousse", pontos: 8 },
            { texto: "Gelatina", pontos: 6 },
            { texto: "Bolo", pontos: 3 },
            { texto: "Salada de frutas", pontos: 2 }
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

    // 2. Procura nas respostas corretas
    currentPuzzle.respostas.forEach((resp, index) => {
        if (normalizeText(resp.texto) === normalizedGuess) {
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