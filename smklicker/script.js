// ================= Variáveis Globais =================
let smkoins = 0;
let sps = 0; 
let cliquesTotais = 0;

let multiplicadorClique = 1;
let multiplicadorSPSGlobal = 1;

// ================= Banco de Dados do GDD =================
const estruturas = [
    { id: 'lurkers', nome: 'Lurkers', desc: 'A galera que deixa a aba mutada.', custoBase: 15, spsBase: 1, qtd: 0, mult: 1 },
    { id: 'mods', nome: 'Moderadores', desc: 'Pessoas para organizar o chat.', custoBase: 100, spsBase: 5, qtd: 0, mult: 1 },
    { id: 'fundadores', nome: 'Fundadores', desc: 'Pessoas que estão desde o começo.', custoBase: 1100, spsBase: 25, qtd: 0, mult: 1 },
    { id: 'lojinha', nome: 'Lojinho da Nikk', desc: 'A Nikk Craft abre a lojinha.', custoBase: 12000, spsBase: 100, qtd: 0, mult: 1 },
    { id: 'justchatting', nome: 'Just Chatting', desc: 'Momento de trocar ideia.', custoBase: 130000, spsBase: 500, qtd: 0, mult: 1 },
    { id: 'minecraft', nome: 'Minecraft Clássico', desc: 'Transmitir versões antigas.', custoBase: 1400000, spsBase: 2000, qtd: 0, mult: 1 },
    { id: 'smkast', nome: 'SMKast', desc: 'O podcast da live.', custoBase: 20000000, spsBase: 10000, qtd: 0, mult: 1 }
];

let upgrades = [
    { id: 'mouse', nome: 'Mouse de Bolinha', desc: 'Dobra a eficiência dos cliques.', custo: 500, comprado: false, tipo: 'clique' },
    { id: 'sub', nome: '1 Mês de Sub', desc: 'Duplica TODAS as estruturas (SPS x2).', custo: 100000, comprado: false, tipo: 'global' },
    { id: 'abafixada', nome: 'Aba Fixada', desc: 'Dobra o SPS dos Lurkers.', custo: 150, comprado: false, tipo: 'estrutura', alvo: 'lurkers' },
    { id: 'banhammer', nome: 'Ban Hammer de Ouro', desc: 'Dobra o SPS dos Moderadores.', custo: 1000, comprado: false, tipo: 'estrutura', alvo: 'mods' }
];

const conquistas = [
    { id: 'dedo', nome: 'Dedo Nervoso', atingido: false, condicao: () => cliquesTotais >= 1000 },
    { id: 'base', nome: 'A Base Vem Forte', atingido: false, condicao: () => estruturas[0].qtd >= 10 },
    { id: 'origens', nome: 'De Volta às Origens', atingido: false, condicao: () => estruturas[5].qtd >= 1 },
    { id: 'serieb', nome: 'Rumo à Série B', atingido: false, condicao: () => smkoins >= 1000000 }
];

// ================= Funções Principais =================
function clicarBorboleta() {
    smkoins += (1 * multiplicadorClique);
    cliquesTotais++;
    atualizarTela();
    checarConquistas();
}

function calcularCusto(estrutura) {
    return Math.floor(estrutura.custoBase * Math.pow(1.15, estrutura.qtd));
}

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
        
        // Atualiza o tooltip na hora se o mouse ainda estiver em cima
        showStructureTooltip(index);
    }
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

        hideTooltip(); // Esconde o tooltip ao comprar
        calcularSPS();
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
    conquistas.forEach(conq => {
        if (!conq.atingido && conq.condicao()) {
            conq.atingido = true;
            document.getElementById('latest-achievement').innerText = `🏆 ${conq.nome}`;
        }
    });
}

// ================= Tooltips (A Caixinha que segue o Mouse) =================
const tooltip = document.getElementById('tooltip');

document.addEventListener('mousemove', (e) => {
    if (tooltip.style.display === 'block') {
        tooltip.style.left = (e.pageX + 15) + 'px';
        tooltip.style.top = (e.pageY + 15) + 'px';
    }
});

window.showStructureTooltip = function(index) {
    const est = estruturas[index];
    let producaoAtual = est.qtd * est.spsBase * est.mult * multiplicadorSPSGlobal;
    let porcentagem = sps > 0 ? ((producaoAtual / sps) * 100).toFixed(1) : 0;
    
    let html = `<h4>${est.nome}</h4><p>${est.desc}</p>`;
    
    if (est.qtd > 0) {
        html += `<div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #444;">
                    <p>Produção atual: <strong>${producaoAtual.toLocaleString('pt-BR')} SPS</strong></p>
                    <p>Responsável por: <strong style="color: var(--smk-pink);">${porcentagem}%</strong> do SPS total</p>
                 </div>`;
    } else {
        html += `<div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #444;">
                    <p style="color: var(--text-muted);">Compre pelo menos 1 para ver os detalhes de produção.</p>
                 </div>`;
    }
    
    tooltip.innerHTML = html;
    tooltip.style.display = 'block';
};

window.showUpgradeTooltip = function(index) {
    const upg = upgrades[index];
    tooltip.innerHTML = `
        <h4>${upg.nome}</h4>
        <p>${upg.desc}</p>
        <p style="margin-top: 10px; color: var(--smk-pink); font-weight: bold;">Custo: ${upg.custo.toLocaleString('pt-BR')} SMK</p>
    `;
    tooltip.style.display = 'block';
};

window.hideTooltip = function() {
    tooltip.style.display = 'none';
};

// ================= Atualização de Interface (UI) =================
function atualizarTela() {
    document.getElementById('smkoins').innerText = Math.floor(smkoins).toLocaleString('pt-BR');
    document.getElementById('sps').innerText = sps.toLocaleString('pt-BR');

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
    container.innerHTML = ''; 

    estruturas.forEach((est, i) => {
        const custoAtual = calcularCusto(est);
        const html = `
            <div id="est-${i}" class="estrutura-item disabled" 
                 onclick="comprarEstrutura(${i})"
                 onmouseenter="showStructureTooltip(${i})"
                 onmouseleave="hideTooltip()">
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

    // Ordena do mais barato para o mais caro
    upgrades.sort((a, b) => a.custo - b.custo);

    upgrades.forEach((upg, i) => {
        if (!upg.comprado) {
            const html = `
                <button id="upg-${i}" class="upgrade-btn disabled" 
                        onclick="comprarUpgrade(${i})"
                        onmouseenter="showUpgradeTooltip(${i})"
                        onmouseleave="hideTooltip()">
                    ${upg.nome}<br><span style="color:#fd0041">${upg.custo.toLocaleString('pt-BR')} SMK</span>
                </button>
            `;
            container.innerHTML += html;
        }
    });
}

// ================= Game Loop =================
setInterval(() => {
    smkoins += sps / 10;
    atualizarTela();
}, 100);

// Inicia o jogo
renderizarEstruturas();
renderizarUpgrades();
atualizarTela();