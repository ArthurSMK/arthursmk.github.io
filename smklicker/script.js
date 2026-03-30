// ================= Variáveis Globais =================
let smkoins = 0;
let sps = 0; // SMKoins Por Segundo
let cliquesTotais = 0;

// Multiplicadores
let multiplicadorClique = 1;
let multiplicadorSPSGlobal = 1;

// ================= Banco de Dados do GDD =================

// 2. Estruturas (Geração Passiva)
const estruturas = [
    { id: 'lurkers', nome: 'Lurkers', desc: 'A galera mutada.', custoBase: 15, spsBase: 1, qtd: 0, mult: 1 },
    { id: 'mods', nome: 'Moderadores', desc: 'Organizam o chat.', custoBase: 100, spsBase: 5, qtd: 0, mult: 1 },
    { id: 'fundadores', nome: 'Fundadores', desc: 'Desde o começo.', custoBase: 1100, spsBase: 25, qtd: 0, mult: 1 },
    { id: 'lojinha', nome: 'Lojinho da Nikk', desc: 'A Nikk Craft abre a lojinha.', custoBase: 12000, spsBase: 100, qtd: 0, mult: 1 },
    { id: 'justchatting', nome: 'Just Chatting', desc: 'Prendendo a atenção.', custoBase: 130000, spsBase: 500, qtd: 0, mult: 1 },
    { id: 'minecraft', nome: 'Minecraft Clássico', desc: 'Atrai os saudosistas.', custoBase: 1400000, spsBase: 2000, qtd: 0, mult: 1 },
    { id: 'smkast', nome: 'SMKast', desc: 'O podcast da live.', custoBase: 20000000, spsBase: 10000, qtd: 0, mult: 1 }
];

// 3. Upgrades
const upgrades = [
    { id: 'mouse', nome: 'Mouse de Bolinha', desc: 'Dobra o clique', custo: 500, comprado: false, tipo: 'clique' },
    { id: 'sub', nome: '1 Mês de Sub', desc: 'SPS x2 (Global)', custo: 100000, comprado: false, tipo: 'global' },
    { id: 'abafixada', nome: 'Aba Fixada', desc: 'Melhora Lurkers', custo: 150, comprado: false, tipo: 'estrutura', alvo: 'lurkers' },
    { id: 'banhammer', nome: 'Ban Hammer de Ouro', desc: 'Melhora Mods', custo: 1000, comprado: false, tipo: 'estrutura', alvo: 'mods' }
    // Você pode adicionar os outros upgrades da sua lista aqui seguindo esse padrão!
];

// 5. Conquistas
const conquistas = [
    { id: 'dedo', nome: 'Dedo Nervoso', atingido: false, condicao: () => cliquesTotais >= 1000 },
    { id: 'base', nome: 'A Base Vem Forte', atingido: false, condicao: () => estruturas[0].qtd >= 10 },
    { id: 'origens', nome: 'De Volta às Origens', atingido: false, condicao: () => estruturas[5].qtd >= 1 },
    { id: 'serieb', nome: 'Rumo à Série B', atingido: false, condicao: () => smkoins >= 1000000 }
];

// ================= Funções Principais =================

// Função de Clique Manual
function clicarBorboleta() {
    smkoins += (1 * multiplicadorClique);
    cliquesTotais++;
    atualizarTela();
    checarConquistas();
}

// Matemática de Preço do GDD: Custo = CustoBase * (1.15 ^ Quantidade)
function calcularCusto(estrutura) {
    return Math.floor(estrutura.custoBase * Math.pow(1.15, estrutura.qtd));
}

// Comprar Estrutura
function comprarEstrutura(index) {
    const est = estruturas[index];
    const custo = calcularCusto(est);

    if (smkoins >= custo) {
        smkoins -= custo;
        est.qtd++;
        calcularSPS();
        renderizarEstruturas();
        atualizarTela();
        checarConquistas();
    }
}

// Comprar Upgrade
function comprarUpgrade(index) {
    const upg = upgrades[index];
    
    if (smkoins >= upg.custo && !upg.comprado) {
        smkoins -= upg.custo;
        upg.comprado = true;

        // Aplica o efeito
        if (upg.tipo === 'clique') multiplicadorClique *= 2;
        if (upg.tipo === 'global') multiplicadorSPSGlobal *= 2;
        if (upg.tipo === 'estrutura') {
            const est = estruturas.find(e => e.id === upg.alvo);
            if (est) est.mult *= 2;
        }

        calcularSPS();
        renderizarUpgrades();
        atualizarTela();
    }
}

// Recalcular a Produção Passiva
function calcularSPS() {
    let novoSPS = 0;
    estruturas.forEach(est => {
        novoSPS += (est.qtd * est.spsBase * est.mult);
    });
    sps = novoSPS * multiplicadorSPSGlobal;
}

// Checagem de Conquistas
function checarConquistas() {
    conquistas.forEach(conq => {
        if (!conq.atingido && conq.condicao()) {
            conq.atingido = true;
            document.getElementById('latest-achievement').innerText = `🏆 ${conq.nome}`;
            // Aqui você pode adicionar um efeito sonoro ou pop-up no futuro
        }
    });
}

// ================= Atualização de Interface (UI) =================

function atualizarTela() {
    // Formata os números para ficarem bonitos (ex: 1.000.000)
    document.getElementById('smkoins').innerText = Math.floor(smkoins).toLocaleString('pt-BR');
    document.getElementById('sps').innerText = sps.toLocaleString('pt-BR');

    // Atualiza botões de Estruturas (cinza se não puder comprar)
    estruturas.forEach((est, i) => {
        const div = document.getElementById(`est-${i}`);
        if (div) {
            if (smkoins >= calcularCusto(est)) {
                div.classList.remove('disabled');
            } else {
                div.classList.add('disabled');
            }
        }
    });

    // Atualiza botões de Upgrades
    upgrades.forEach((upg, i) => {
        const btn = document.getElementById(`upg-${i}`);
        if (btn && !upg.comprado) {
            if (smkoins >= upg.custo) {
                btn.classList.remove('disabled');
            } else {
                btn.classList.add('disabled');
            }
        }
    });
}

function renderizarEstruturas() {
    const container = document.getElementById('estruturas-container');
    container.innerHTML = ''; // Limpa

    estruturas.forEach((est, i) => {
        const custoAtual = calcularCusto(est);
        const html = `
            <div id="est-${i}" class="estrutura-item disabled" onclick="comprarEstrutura(${i})">
                <div class="est-info">
                    <h4>${est.nome}</h4>
                    <p class="est-preco">💰 ${custoAtual.toLocaleString('pt-BR')} SMK</p>
                </div>
                <div class="est-count">${est.qtd}</div>
            </div>
        `;
        container.innerHTML += html;
    });
}

function renderizarUpgrades() {
    const container = document.getElementById('upgrades-container');
    container.innerHTML = '';

    upgrades.forEach((upg, i) => {
        if (!upg.comprado) {
            const html = `
                <button id="upg-${i}" class="upgrade-btn disabled" onclick="comprarUpgrade(${i})" title="${upg.desc}">
                    ${upg.nome}<br><span style="color:#fd0041">${upg.custo} SMK</span>
                </button>
            `;
            container.innerHTML += html;
        }
    });
}

// ================= Sistema de Eventos (Golden Cookies) =================

function spawnEventoAleatorio() {
    // 5% de chance de spawn a cada intervalo checado
    if (Math.random() < 0.05) {
        const container = document.getElementById('evento-container');
        const eventoBtn = document.createElement('button');
        eventoBtn.className = 'evento-btn';
        eventoBtn.innerText = '🦋 Dourada!';
        
        // Posição aleatória na tela
        eventoBtn.style.top = Math.random() * 80 + 10 + '%';
        eventoBtn.style.left = Math.random() * 80 + 10 + '%';

        eventoBtn.onclick = () => {
            // Efeito de "A Raid" (exemplo simplificado: ganha 100x o clique atual na hora)
            smkoins += (multiplicadorClique * 100);
            eventoBtn.remove();
            atualizarTela();
        };

        container.appendChild(eventoBtn);

        // Some depois de 5 segundos se não clicar
        setTimeout(() => {
            if(eventoBtn.parentNode) eventoBtn.remove();
        }, 5000);
    }
}

// ================= Inicialização e Game Loop =================

// Roda a cada 100ms para o dinheiro subir suavemente
setInterval(() => {
    smkoins += sps / 10;
    atualizarTela();
}, 100);

// Roda a cada 5 segundos para checar se spawna evento
setInterval(spawnEventoAleatorio, 5000);

// Inicia o jogo
renderizarEstruturas();
renderizarUpgrades();
atualizarTela();