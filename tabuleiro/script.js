let configPartida = { maxJogadores: 4 };
let jogadores = [];
let turnoAtualIndex = 0;
let rodadaGlobal = 1;

let statusGlobais = ["Vida", "Dinheiro"]; 
let itensCriados = []; 
let regrasAtivas = ["Todos os jogadores começam na Loja."]; 
let eventos = []; 
let dadosCasas = { "Loja": { id: "Loja", conexoes: [], descricao: "Mercado e Ponto Inicial", cooldowns: [] } };

let sorteiosSalvos = [];
let mapaNetwork = null; let nodesMap; let edgesMap;
let canalTwitch = ""; let twitchClient = null; let aceitandoJoins = false; let mensagensNaoLidas = 0;

window.onload = () => {
    if(localStorage.getItem('rpgTwitchSave')) { document.getElementById('btn-continuar-jogo').style.display = 'block'; }
    if(localStorage.getItem('rpgTwitchMacros')) { sorteiosSalvos = JSON.parse(localStorage.getItem('rpgTwitchMacros')); }
};

function salvarJogo() {
    if(!nodesMap) return;
    const pos = mapaNetwork.getPositions();
    const nodesArr = nodesMap.get().map(n => { if(pos[n.id]) { n.x = pos[n.id].x; n.y = pos[n.id].y; } return n; });
    const saveObj = { configPartida, jogadores, turnoAtualIndex, statusGlobais, itensCriados, regrasAtivas, dadosCasas, rodadaGlobal, eventos, nodes: nodesArr, edges: edgesMap.get() };
    localStorage.setItem('rpgTwitchSave', JSON.stringify(saveObj));
}

function carregarJogo() {
    const save = localStorage.getItem('rpgTwitchSave'); if(!save) return;
    const data = JSON.parse(save);
    configPartida = data.configPartida; jogadores = data.jogadores; turnoAtualIndex = data.turnoAtualIndex; statusGlobais = data.statusGlobais;
    itensCriados = data.itensCriados; regrasAtivas = data.regrasAtivas; dadosCasas = data.dadosCasas; rodadaGlobal = data.rodadaGlobal || 1; eventos = data.eventos || [];
    
    // Garante que o array de cooldowns exista em casas antigas carregadas
    Object.keys(dadosCasas).forEach(k => { if(!dadosCasas[k].cooldowns) dadosCasas[k].cooldowns = []; });

    mudarTela('container-jogo');
    nodesMap = new vis.DataSet(data.nodes); edgesMap = new vis.DataSet(data.edges);
    const container = document.getElementById('tabuleiro-visual');
    const options = { nodes: { borderWidth: 2, shadow: true, shape: 'box', widthConstraint: { maximum: 220 } }, edges: { width: 3, color: '#cdd6f4', length: 150, smooth: false }, physics: { enabled: true, barnesHut: { gravitationalConstant: -2000, springConstant: 0.04, springLength: 150 } } };
    mapaNetwork = new vis.Network(container, { nodes: nodesMap, edges: edgesMap }, options);
    mapaNetwork.on("dragStart", function (params) { if (params.nodes.length > 0) { nodesMap.update({id: params.nodes[0], fixed: false}); } });
    mapaNetwork.on("dragEnd", function (params) { if (params.nodes.length > 0) { nodesMap.update({id: params.nodes[0], fixed: {x:true, y:true}}); salvarJogo(); } });

    atualizarTudo(); focarNaCasa(jogadores[turnoAtualIndex].local);
}

let resolveAlerta, resolveConfirmacao, resolvePrompt;
function mostrarAlerta(msg) { document.getElementById('alerta-msg').innerText = msg; document.getElementById('modal-alerta').style.display = 'flex'; return new Promise(resolve => resolveAlerta = resolve); }
function fecharAlerta() { document.getElementById('modal-alerta').style.display = 'none'; if(resolveAlerta) resolveAlerta(); }
function mostrarConfirmacao(msg) { document.getElementById('confirm-msg').innerText = msg; document.getElementById('modal-confirmacao').style.display = 'flex'; return new Promise(resolve => resolveConfirmacao = resolve); }
function fecharConfirmacao(resultado) { document.getElementById('modal-confirmacao').style.display = 'none'; if(resolveConfirmacao) resolveConfirmacao(resultado); }
function mostrarPrompt(titulo, valorPadrao = '') { document.getElementById('prompt-titulo').innerText = titulo; document.getElementById('prompt-input').value = valorPadrao; document.getElementById('modal-prompt').style.display = 'flex'; document.getElementById('prompt-input').focus(); return new Promise(resolve => resolvePrompt = resolve); }
function fecharPrompt(resultado) { document.getElementById('modal-prompt').style.display = 'none'; if(resolvePrompt) resolvePrompt(resultado); }

function mudarTela(idTela) { document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa')); document.getElementById('container-jogo').style.display = 'none'; if (idTela === 'container-jogo') { document.getElementById('container-jogo').style.display = 'flex'; } else { document.getElementById(idTela).classList.add('ativa'); } }

function iniciarLobby() {
    configPartida.maxJogadores = parseInt(document.getElementById('config-max-jogadores').value);
    let canalInput = document.getElementById('config-twitch-canal').value.trim().toLowerCase();
    canalTwitch = canalInput.replace('https://www.twitch.tv/', '').replace('https://twitch.tv/', '').replace('@', '');
    
    jogadores = []; rodadaGlobal = 1; eventos = []; itensCriados = []; regrasAtivas = ["Todos os jogadores começam na Loja."];
    dadosCasas = { "Loja": { id: "Loja", conexoes: [], descricao: "Mercado e Ponto Inicial", cooldowns: [] } };
    
    atualizarLobby(); mudarTela('tela-lobby'); aceitandoJoins = true;
    if(canalTwitch !== "") { conectarTwitchNativo(); } else { document.getElementById('status-twitch').innerText = "⚠️ Twitch não conectada. Use o botão Add manual."; document.getElementById('status-twitch').style.color = "var(--accent)"; }
}

function conectarTwitchNativo() {
    if(twitchClient) twitchClient.close();
    document.getElementById('status-twitch').innerText = "⏳ Conectando ao Servidor da Twitch..."; document.getElementById('status-twitch').style.color = "yellow";
    let ws = new WebSocket('wss://irc-ws.chat.twitch.tv:443');
    ws.onopen = function() { ws.send('CAP REQ :twitch.tv/tags twitch.tv/commands'); ws.send('PASS SCHMOOPIIE'); ws.send('NICK justinfan' + Math.floor(Math.random() * 100000)); ws.send('JOIN #' + canalTwitch); document.getElementById('status-twitch').innerText = `✅ Conectado à Twitch: ${canalTwitch} (Digitem !join)`; document.getElementById('status-twitch').style.color = "var(--success)"; };
    ws.onmessage = function(event) {
        let messages = event.data.split('\r\n');
        messages.forEach(msg => {
            if (!msg) return;
            if (msg.startsWith('PING')) { ws.send('PONG ' + msg.split(' ')[1]); return; }
            if (msg.includes('PRIVMSG')) {
                let matchMsg = msg.match(/PRIVMSG #[^ ]+ :(.+)/);
                if (matchMsg) {
                    let textoChat = matchMsg[1].trim(); let nick = "";
                    let matchNome = msg.match(/display-name=([^;]+)/); if (matchNome && matchNome[1]) { nick = matchNome[1]; } else { let matchUser = msg.match(/:([^!]+)!/); if (matchUser && matchUser[1]) nick = matchUser[1]; }
                    if (aceitandoJoins) { if (textoChat.toLowerCase() === '!join' && nick) { adicionarJogadorGlobal(nick); }
                    } else {
                        if (jogadores.length > 0 && !jogadores[turnoAtualIndex].morto) {
                            if (nick.toLowerCase() === jogadores[turnoAtualIndex].nome.toLowerCase()) {
                                let chatBox = document.getElementById('chat-jogador-atual');
                                if (chatBox && chatBox.innerHTML.includes('Aguardando')) { chatBox.innerHTML = ''; }
                                if (chatBox) { chatBox.innerHTML += `<div class="chat-bolha">${textoChat}</div>`; chatBox.scrollTop = chatBox.scrollHeight; }
                                let modalChat = document.getElementById('modal-chat');
                                if(modalChat && modalChat.style.display !== 'flex') { mensagensNaoLidas++; document.getElementById('notificacao-chat').innerText = mensagensNaoLidas; document.getElementById('notificacao-chat').style.display = 'block'; }
                            }
                        }
                    }
                }
            }
        });
    };
    ws.onerror = function() { document.getElementById('status-twitch').innerText = "❌ Erro de conexão com a Twitch."; document.getElementById('status-twitch').style.color = "var(--accent)"; };
    ws.onclose = function() { if(aceitandoJoins) { document.getElementById('status-twitch').innerText = "❌ Conexão caiu. Reinicie a sala."; document.getElementById('status-twitch').style.color = "var(--accent)"; } };
    twitchClient = ws;
}

function adicionarJogadorGlobal(nick) {
    if(!aceitandoJoins) return; if(jogadores.length >= configPartida.maxJogadores) return; if(jogadores.some(j => j.nome.toLowerCase() === nick.toLowerCase())) return;
    let novoJogador = { id: jogadores.length, nome: nick, local: "Loja", inventario: [], stats: {}, morto: false };
    statusGlobais.forEach(s => novoJogador.stats[s] = 10); jogadores.push(novoJogador); atualizarLobby();
}

function simularJoin() { const nick = document.getElementById('simulador-nick').value.trim(); if (nick !== '') { adicionarJogadorGlobal(nick); document.getElementById('simulador-nick').value = ''; } }
function adicionarStreamer() { adicionarJogadorGlobal("Arthur"); }
function atualizarLobby() { const lista = document.getElementById('lista-lobby'); const btn = document.getElementById('btn-comecar-jogo'); if(!lista || !btn) return; lista.innerHTML = ''; jogadores.forEach(j => { lista.innerHTML += `<li>🎮 ${j.nome} entrou!</li>`; }); document.getElementById('contador-jogadores').innerText = `Jogadores: ${jogadores.length} / ${configPartida.maxJogadores}`; if (jogadores.length >= 2) { btn.disabled = false; btn.innerText = jogadores.length === configPartida.maxJogadores ? "Sala Cheia - Sortear Ordem!" : "Sortear Ordem e Começar"; btn.style.backgroundColor = jogadores.length === configPartida.maxJogadores ? "var(--success)" : "var(--primary)"; } else { btn.disabled = true; } }

function sortearOrdem() {
    aceitandoJoins = false; mudarTela('tela-sorteio');
    const roleta = document.getElementById('roleta-nomes'); const listaFinal = document.getElementById('ordem-final-lista');
    let embaralhados = [...jogadores]; let tempo = 0; roleta.style.display = 'block'; listaFinal.style.display = 'none'; document.getElementById('titulo-sorteio').innerText = "Sorteando a Ordem...";
    const intervalo = setInterval(() => {
        roleta.innerText = embaralhados[Math.floor(Math.random() * embaralhados.length)].nome; tempo += 100;
        if (tempo >= 3000) {
            clearInterval(intervalo); roleta.style.display = 'none';
            for (let i = embaralhados.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [embaralhados[i], embaralhados[j]] = [embaralhados[j], embaralhados[i]]; }
            jogadores = embaralhados; document.getElementById('titulo-sorteio').innerText = "Ordem Definida!"; listaFinal.innerHTML = '';
            embaralhados.forEach((jog, idx) => { listaFinal.innerHTML += `<li><strong>${idx + 1}º</strong> - ${jog.nome}</li>`; }); listaFinal.style.display = 'block';
            setTimeout(() => { iniciarJogoDeFato(); abrirModal('modal-boas-vindas'); }, 4000);
        }
    }, 100);
}

function iniciarJogoDeFato() {
    mudarTela('container-jogo'); turnoAtualIndex = 0; limparChatDoTurno();
    setTimeout(() => { iniciarMapaMotor(); atualizarTudo(); setTimeout(() => focarNaCasa(jogadores[turnoAtualIndex].local), 500); }, 200); 
}

function voltarAoMenu() {
    fecharModal('modal-vitoria'); localStorage.removeItem('rpgTwitchSave'); mudarTela('tela-menu'); window.location.reload();
}

function abrirModal(id) { document.getElementById(id).style.display = 'flex'; if(id === 'modal-editar') renderizarEditor(); if(id === 'modal-sorteio') renderizarSorteiosSalvos(); }
function fecharModal(id) { document.getElementById(id).style.display = 'none'; }
function abrirModalChat() { abrirModal('modal-chat'); mensagensNaoLidas = 0; document.getElementById('notificacao-chat').style.display = 'none'; const chatBox = document.getElementById('chat-jogador-atual'); if(chatBox) chatBox.scrollTop = chatBox.scrollHeight; }

// ==========================================
// NOVO MODAL: COOLDOWN DAS CASAS
// ==========================================
function abrirModalCooldown() {
    const selCasa = document.getElementById('cooldown-casa'); const selJog = document.getElementById('cooldown-jogador');
    selCasa.innerHTML = ''; Object.keys(dadosCasas).forEach(casa => { selCasa.innerHTML += `<option value="${casa}">${casa}</option>`; });
    selJog.innerHTML = '<option value="Todos">Todos os Jogadores</option>'; jogadores.forEach(j => { selJog.innerHTML += `<option value="${j.nome}">${j.nome}</option>`; });
    abrirModal('modal-cooldown');
}

function aplicarCooldown() {
    const casa = document.getElementById('cooldown-casa').value; const alvo = document.getElementById('cooldown-jogador').value; const turnos = parseInt(document.getElementById('cooldown-turnos').value);
    if(!casa || isNaN(turnos) || turnos < 1) return;
    if(!dadosCasas[casa].cooldowns) dadosCasas[casa].cooldowns = [];
    
    // Sobrescreve cooldown anterior se o mesmo alvo for escolhido
    dadosCasas[casa].cooldowns = dadosCasas[casa].cooldowns.filter(c => c.alvo !== alvo);
    dadosCasas[casa].cooldowns.push({ alvo: alvo, turnos: turnos });

    fecharModal('modal-cooldown'); atualizarTudo();
    mostrarAlerta(`🚫 A casa '${casa}' foi bloqueada para '${alvo}' por ${turnos} rodada(s)!`);
}

function limparChatDoTurno() {
    const chatBox = document.getElementById('chat-jogador-atual'); const chatSub = document.getElementById('chat-subtitulo');
    if(chatBox && chatSub && jogadores[turnoAtualIndex]) {
        chatSub.innerText = `Lendo chat de: ${jogadores[turnoAtualIndex].nome}`;
        chatBox.innerHTML = `<em style="color: #aaa; font-size: 1.2em; text-align: center; width: 100%; display: block; margin-top: 5px;">Aguardando mensagens de ${jogadores[turnoAtualIndex].nome}...</em>`;
    }
    mensagensNaoLidas = 0; document.getElementById('notificacao-chat').style.display = 'none';
}

function iniciarMapaMotor() {
    nodesMap = new vis.DataSet([{ id: "Loja", label: "LOJA\n(Mercado e Ponto Inicial)\n\n[ Todos Aqui ]", shape: "box", color: "#a6e3a1", font: { color: "#111", size: 14, bold: true }, margin: 10 }]);
    edgesMap = new vis.DataSet([]);
    const container = document.getElementById('tabuleiro-visual');
    const options = { nodes: { borderWidth: 2, shadow: true, shape: 'box', widthConstraint: { maximum: 220 } }, edges: { width: 3, color: '#cdd6f4', length: 150, smooth: false }, physics: { enabled: true, barnesHut: { gravitationalConstant: -2000, springConstant: 0.04, springLength: 150 } } };
    mapaNetwork = new vis.Network(container, { nodes: nodesMap, edges: edgesMap }, options);
    mapaNetwork.on("dragStart", function (params) { if (params.nodes.length > 0) { nodesMap.update({id: params.nodes[0], fixed: false}); } });
    mapaNetwork.on("dragEnd", function (params) { if (params.nodes.length > 0) { nodesMap.update({id: params.nodes[0], fixed: {x:true, y:true}}); salvarJogo(); } }); 
}
function focarNaCasa(nodeId) { if(mapaNetwork) { mapaNetwork.focus(nodeId, { scale: 1.0, animation: { duration: 1000, easingFunction: 'easeInOutQuad' } }); } }

function atualizarTudo() {
    atualizarHUD(); atualizarTurnoUI(); atualizarMarcadoresNoMapa(); renderizarRegrasLive();
    document.getElementById('banner-turno').innerText = `RODADA ${rodadaGlobal} | Vez de: ${jogadores[turnoAtualIndex].nome}`;
    salvarJogo(); 

    let vivos = jogadores.filter(j => !j.morto);
    if (jogadores.length > 1 && vivos.length === 1) { document.getElementById('vencedor-nome').innerText = vivos[0].nome; document.getElementById('modal-vitoria').style.display = 'flex'; }
}

function passarTurno() {
    let vivos = jogadores.filter(j => !j.morto);
    if(vivos.length <= 1) return; 

    let loopGuard = 0; let rodadaVirou = false;
    do {
        turnoAtualIndex++; 
        if(turnoAtualIndex >= jogadores.length) { turnoAtualIndex = 0; rodadaVirou = true; }
        loopGuard++;
    } while (jogadores[turnoAtualIndex].morto && loopGuard <= jogadores.length);
    
    limparChatDoTurno(); 

    if(rodadaVirou) {
        rodadaGlobal++; let msgs = [];
        eventos.forEach(e => { if(rodadaGlobal % e.frequencia === 0) msgs.push(`- ${e.mensagem}`); });
        
        // DECREMENTA COOLDOWNS DAS CASAS A CADA RODADA
        for (let cNome in dadosCasas) {
            if (dadosCasas[cNome].cooldowns) {
                dadosCasas[cNome].cooldowns.forEach(c => c.turnos--);
                dadosCasas[cNome].cooldowns = dadosCasas[cNome].cooldowns.filter(c => c.turnos > 0);
            }
        }

        if(msgs.length > 0) { mostrarAlerta(`⏰ ATENÇÃO! EVENTOS DA RODADA ${rodadaGlobal}:\n\n` + msgs.join('\n')); }
        document.getElementById('banner-turno').innerText = `RODADA ${rodadaGlobal} | Vez de: ${jogadores[turnoAtualIndex].nome}`;
    }

    atualizarTudo(); focarNaCasa(jogadores[turnoAtualIndex].local);
}

async function matarJogador(index) { const sim = await mostrarConfirmacao(`Tem certeza que o jogador ${jogadores[index].nome} MORREU?`); if(sim) { jogadores[index].morto = true; atualizarTudo(); if(index === turnoAtualIndex) passarTurno(); } }
function moverJogador(destino) { jogadores[turnoAtualIndex].local = destino; atualizarTudo(); focarNaCasa(destino); }
function teleportarJogador(index) { const select = document.getElementById(`teleport-${index}`); if (select.value) { jogadores[index].local = select.value; atualizarTudo(); if(index === turnoAtualIndex) focarNaCasa(select.value); } }

function atualizarTurnoUI() {
    const jogadorDaVez = jogadores[turnoAtualIndex];
    document.getElementById('info-turno-master').innerText = `Vez de: ${jogadorDaVez.nome} (${jogadorDaVez.local})`;
    
    const avisoLoja = document.getElementById('aviso-loja');
    if (jogadorDaVez.local === 'Loja') {
        let lojaHtml = `<div style="color: var(--success); font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">🛒 Vitrine da Loja:</div>`;
        if (itensCriados.length > 0) {
            itensCriados.forEach((item, idx) => { lojaHtml += `<button class="btn-padrao" style="background-color: var(--success); color: #111; padding: 8px; margin: 2px 0;" onclick="comprarItemDaLoja(${idx})">Comprar ${item.nome} (💰${item.preco})</button>`; });
        } else { lojaHtml += `<div style="font-size: 0.85em; color: #aaa;"><em>Sem estoque.</em></div>`; }
        avisoLoja.innerHTML = lojaHtml; avisoLoja.style.display = 'block';
    } else { avisoLoja.style.display = 'none'; }
    
    const divOpcoes = document.getElementById('opcoes-movimento');
    const locaisConectados = dadosCasas[jogadorDaVez.local].conexoes;
    divOpcoes.innerHTML = '<p style="font-size: 0.85em; margin: 0 0 5px 0; font-weight: bold; color: #ccc;">Andar para:</p>';
    if (locaisConectados.length === 0) { divOpcoes.innerHTML += `<em>Nenhum caminho!</em>`; } 
    else { 
        locaisConectados.forEach(destino => { 
            // VERIFICA SE O CAMINHO ESTÁ BLOQUEADO POR COOLDOWN
            let bloqueado = false;
            let msgBloqueio = "";
            if (dadosCasas[destino] && dadosCasas[destino].cooldowns) {
                for (let c of dadosCasas[destino].cooldowns) {
                    if (c.alvo === "Todos" || c.alvo === jogadorDaVez.nome) {
                        bloqueado = true; msgBloqueio = `Bloqueado (${c.turnos} rod)`; break;
                    }
                }
            }

            if (bloqueado) {
                divOpcoes.innerHTML += `<button class="btn-padrao" style="background-color: #555; color: #888; cursor: not-allowed; padding: 6px; margin: 2px 0;" disabled>🔒 ${destino} [${msgBloqueio}]</button>`;
            } else {
                divOpcoes.innerHTML += `<button class="btn-padrao" style="background-color: #89b4fa; padding: 6px; margin: 2px 0;" onclick="moverJogador('${destino}')">Ir para: ${destino}</button>`; 
            }
        }); 
    }
}

async function comprarItemDaLoja(itemIndex) {
    const jogador = jogadores[turnoAtualIndex]; const item = itensCriados[itemIndex];
    if (jogador.stats["Dinheiro"] !== undefined) {
        if (jogador.stats["Dinheiro"] >= item.preco) { jogador.stats["Dinheiro"] -= item.preco; } else { await mostrarAlerta(`Dinheiro insuficiente! Custa 💰${item.preco}.`); return; }
    }
    jogador.inventario.push({...item}); itensCriados.splice(itemIndex, 1); atualizarTudo();
}

function usarItem(jogadorIndex, itemIndex) { jogadores[jogadorIndex].inventario.splice(itemIndex, 1); atualizarTudo(); }
async function transferirItem(deJogadorIndex, itemIndex) {
    const itemObj = jogadores[deJogadorIndex].inventario[itemIndex];
    const resposta = await mostrarPrompt(`Transferir '${itemObj.nome}' para o jogador número (1 a ${jogadores.length}):`);
    if (resposta) {
        const numJogador = parseInt(resposta);
        if (isNaN(numJogador) || numJogador < 1 || numJogador > jogadores.length) { await mostrarAlerta("Número de jogador inválido."); return; }
        const paraJogadorIndex = numJogador - 1;
        if (paraJogadorIndex === deJogadorIndex) { await mostrarAlerta("Não pode transferir para si mesmo."); return; }
        if (jogadores[paraJogadorIndex].morto) { await mostrarAlerta("Este jogador está morto."); return; }
        jogadores[deJogadorIndex].inventario.splice(itemIndex, 1); jogadores[paraJogadorIndex].inventario.push(itemObj);
        atualizarTudo(); await mostrarAlerta(`Item transferido para ${jogadores[paraJogadorIndex].nome}!`);
    }
}
function darItem(jogadorIndex) {
    const select = document.getElementById(`select-item-${jogadorIndex}`); const itemNome = select.value;
    if (itemNome) { 
        const itemIdxNaLoja = itensCriados.findIndex(i => i.nome === itemNome);
        let itemParaDar = { nome: itemNome, preco: 0, efeito: "Sem efeito" };
        if(itemIdxNaLoja > -1) { itemParaDar = {...itensCriados[itemIdxNaLoja]}; itensCriados.splice(itemIdxNaLoja, 1); }
        jogadores[jogadorIndex].inventario.push(itemParaDar); atualizarTudo(); 
    }
}

// MACROS ETERNOS
function salvarSorteioAtual() {
    const input = document.getElementById('input-sorteio-custom').value.trim();
    if(!input) { mostrarAlerta("Digite algo na caixa de texto para salvar!"); return; }
    if(!sorteiosSalvos.includes(input)) {
        sorteiosSalvos.push(input); localStorage.setItem('rpgTwitchMacros', JSON.stringify(sorteiosSalvos)); renderizarSorteiosSalvos();
    } else { mostrarAlerta("Este sorteio já está salvo na lista."); }
}

function renderizarSorteiosSalvos() {
    const container = document.getElementById('lista-sorteios-salvos'); if(!container) return; container.innerHTML = '';
    if(sorteiosSalvos.length === 0) { container.innerHTML = '<em style="color: #666; font-size: 0.85em;">Nenhum sorteio salvo.</em>'; return; }
    sorteiosSalvos.forEach((s, i) => {
        container.innerHTML += `<div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.4); padding: 5px 10px; border-radius: 6px; border: 1px solid #444; gap: 10px;"><button class="btn-padrao" style="flex: 1; margin: 0; padding: 5px; font-size: 0.9em; text-align: left; background: transparent; color: var(--text); border: none; cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" onclick="rodarSorteioSalvo(${i})">▶️ ${s}</button><button class="btn-padrao" style="background-color: var(--accent); color: #111; margin: 0; padding: 5px 10px; width: auto;" onclick="excluirSorteioSalvo(${i})">🗑️</button></div>`;
    });
}
function rodarSorteioSalvo(index) { document.getElementById('input-sorteio-custom').value = sorteiosSalvos[index]; sortear('custom'); }
function excluirSorteioSalvo(index) { sorteiosSalvos.splice(index, 1); localStorage.setItem('rpgTwitchMacros', JSON.stringify(sorteiosSalvos)); renderizarSorteiosSalvos(); }

function animarRoleta(opcoesArray, emojiBase) {
    if(!opcoesArray || opcoesArray.length === 0) return;
    const divRes = document.getElementById('resultado-sorteio'); let tempo = 0; divRes.innerHTML = `<em>Girando...</em>`; divRes.style.color = "var(--text)";
    document.getElementById('input-sorteio-custom').disabled = true;
    const intervalo = setInterval(() => {
        divRes.innerHTML = `${emojiBase} <strong>${opcoesArray[Math.floor(Math.random() * opcoesArray.length)]}</strong>`; tempo += 100;
        if (tempo >= 2000) { 
            clearInterval(intervalo); divRes.innerHTML = `${emojiBase} <strong style="color: var(--success); font-size: 1.1em;">${opcoesArray[Math.floor(Math.random() * opcoesArray.length)]}</strong>`;
            document.getElementById('input-sorteio-custom').disabled = false;
        }
    }, 100);
}

function sortear(tipo) {
    if (tipo === 'casa') { const casas = Object.keys(dadosCasas); if(casas.length>0) animarRoleta(casas, '🏠'); } 
    else if (tipo === 'item') { if(itensCriados.length>0) animarRoleta(itensCriados.map(i => i.nome), '📦'); } 
    else if (tipo === 'custom') { 
        const inputTexto = document.getElementById('input-sorteio-custom').value; if(inputTexto.trim() === '') return;
        const opcoesStr = inputTexto.split(','); let arrayFinal = [];
        if (inputTexto.includes('%')) {
            opcoesStr.forEach(op => { let match = op.trim().match(/(.*?)\s+(\d+(?:\.\d+)?)%$/);
                if (match) { let nome = match[1].trim(); let peso = Math.round(parseFloat(match[2])); for(let i=0; i<peso; i++) arrayFinal.push(nome);
                } else { arrayFinal.push(op.trim()); }
            });
        } else { arrayFinal = opcoesStr.map(op => op.trim()).filter(op => op !== ''); }
        if(arrayFinal.length === 0) return; animarRoleta(arrayFinal, '🎯');
    }
}

// FUNÇÕES DE CRIAÇÃO QUE AGORA LIMPAM OS INPUTS APÓS O SUCESSO!
function criarNovoStatus() { 
    const nome = document.getElementById('novo-status-nome').value.trim(); const valorInicial = parseInt(document.getElementById('novo-status-valor').value) || 0; 
    if (!nome || statusGlobais.includes(nome)) { mostrarAlerta("Preencha o nome do status."); return; }
    statusGlobais.push(nome); jogadores.forEach(j => { j.stats[nome] = valorInicial; }); 
    
    document.getElementById('novo-status-nome').value = ''; document.getElementById('novo-status-valor').value = ''; // LIMPA
    fecharModal('modal-criar'); atualizarTudo(); 
}

function criarRegra() { 
    const i = document.getElementById('regra-texto'); if(i.value.trim() === '') { mostrarAlerta("A regra não pode ser vazia."); return; }
    regrasAtivas.push(i.value.trim()); 
    
    i.value = ''; // LIMPA
    fecharModal('modal-criar'); atualizarTudo(); 
}

function renderizarRegrasLive() { const lista = document.getElementById('regras-lista'); lista.innerHTML = ''; regrasAtivas.forEach((r, index) => { lista.innerHTML += `<div class="regra-card"><strong>Regra ${index + 1}:</strong>${r}</div>`; }); }

function criarItem() { 
    const n = document.getElementById('item-nome').value.trim(); const e = document.getElementById('item-efeito').value.trim(); 
    let pStr = document.getElementById('item-preco').value.trim();
    if(!n) { mostrarAlerta("Dê um nome para o item!"); return; }
    let precoF = pStr === '' ? 0 : parseInt(pStr);
    itensCriados.push({ nome: n, efeito: e || "Nenhum", preco: precoF }); 
    
    document.getElementById('item-nome').value = ''; document.getElementById('item-efeito').value = ''; document.getElementById('item-preco').value = ''; // LIMPA
    fecharModal('modal-criar'); atualizarTudo(); 
}

function criarCasa() {
    const nome = document.getElementById('casa-nome').value.trim(); const descricao = document.getElementById('casa-efeito-master').value.trim();
    if(!nome) { mostrarAlerta("Dê um nome para a casa!"); return; } if(dadosCasas[nome]) { mostrarAlerta("Esta casa já existe!"); return; }
    const con1 = document.getElementById('casa-conexao1').value; const con2 = document.getElementById('casa-conexao2').value;

    dadosCasas[nome] = { id: nome, conexoes: [], descricao: descricao || "Sem descrição", cooldowns: [] };
    nodesMap.add({ id: nome, label: `${nome}\n(${dadosCasas[nome].descricao})\n\n[ Vazia ]`, shape: 'box', color: '#cba6f7', font: { color: "#111", size: 14 }, margin: 10 });
    if(con1) { edgesMap.add({ from: con1, to: nome }); dadosCasas[nome].conexoes.push(con1); dadosCasas[con1].conexoes.push(nome); }
    if(con2 && con2 !== con1) { edgesMap.add({ from: con2, to: nome }); dadosCasas[nome].conexoes.push(con2); dadosCasas[con2].conexoes.push(nome); }

    atualizarSelectsDeCasas(); 
    
    document.getElementById('casa-nome').value = ''; document.getElementById('casa-efeito-master').value = ''; document.getElementById('casa-conexao2').value = ''; // LIMPA
    fecharModal('modal-criar'); atualizarTudo();
}

function criarEvento() {
    const msg = document.getElementById('evento-msg').value.trim(); const turnos = parseInt(document.getElementById('evento-turnos').value);
    if(!msg || !turnos) { mostrarAlerta("Preencha a mensagem e de quantas em quantas rodadas deve avisar."); return; }
    eventos.push({ mensagem: msg, frequencia: turnos });
    
    document.getElementById('evento-msg').value = ''; document.getElementById('evento-turnos').value = ''; // LIMPA
    fecharModal('modal-criar'); atualizarTudo();
}

function atualizarSelectsDeCasas() {
    const sel1 = document.getElementById('casa-conexao1'); const sel2 = document.getElementById('casa-conexao2');
    sel1.innerHTML = ''; sel2.innerHTML = '<option value="">Conexão 2 (Opcional)</option>';
    Object.keys(dadosCasas).forEach(nomeCasa => { sel1.innerHTML += `<option value="${nomeCasa}">Ligar à: ${nomeCasa}</option>`; sel2.innerHTML += `<option value="${nomeCasa}">Ligar à: ${nomeCasa}</option>`; });
}

function atualizarMarcadoresNoMapa() {
    const atualizacoes = [];
    for (let nomeCasa in dadosCasas) {
        let labelLive = `${nomeCasa}`;
        if (dadosCasas[nomeCasa].descricao) { labelLive += `\n(${dadosCasas[nomeCasa].descricao})`; }
        
        // ADICIONA CADEADO NO MAPA SE TIVER COOLDOWN
        if(dadosCasas[nomeCasa].cooldowns && dadosCasas[nomeCasa].cooldowns.length > 0) {
            let locks = dadosCasas[nomeCasa].cooldowns.map(c => `${c.alvo}: ${c.turnos}R`);
            labelLive += `\n🔒 Bloqueio (${locks.join(', ')})`;
        }

        let jogadoresAqui = jogadores.filter(j => j.local === nomeCasa && !j.morto).map(j => j.nome);
        if (jogadoresAqui.length > 0) { labelLive += `\n\n[ ${jogadoresAqui.join(' | ')} ]`; } else if (nomeCasa !== 'Loja') { labelLive += `\n\n[ Vazia ]`; }
        atualizacoes.push({ id: nomeCasa, label: labelLive });
    }
    nodesMap.update(atualizacoes);
}

function alterarStatus(index, atr, val) { if(jogadores[index].morto) return; jogadores[index].stats[atr] += val; atualizarHUD(); }

function atualizarHUD() {
    const listaLive = document.getElementById('jogadores-lista-live'); const listaMaster = document.getElementById('controles-master-jogadores');
    if(!listaLive || !listaMaster) return; listaLive.innerHTML = ''; listaMaster.innerHTML = '';
    const lojaLive = document.getElementById('itens-lista'); lojaLive.innerHTML = '';
    if (itensCriados.length === 0) { lojaLive.innerHTML = `<div style="color:#aaa; font-style:italic; padding-left: 10px;">Vazia</div>`; } 
    else { itensCriados.forEach(item => { lojaLive.innerHTML += `<div class="item-loja-card"><strong style="font-size: 1.1em; color: var(--success);">${item.nome}</strong> (💰${item.preco})<br><small style="color: #ccc;">Efeito: ${item.efeito || "Nenhum"}</small></div>`; }); }

    let optionsCasas = `<option value="">Teleportar p/...</option>`; Object.keys(dadosCasas).forEach(casa => { optionsCasas += `<option value="${casa}">${casa}</option>`; });
    let optionsItens = `<option value="">Dar item...</option>`; itensCriados.forEach(item => { optionsItens += `<option value="${item.nome}">${item.nome}</option>`; });

    jogadores.forEach((jog, index) => {
        const classeAtiva = (index === turnoAtualIndex && !jog.morto) ? 'jogador-ativo' : ''; const classeMorto = jog.morto ? 'jogador-morto' : ''; const classeMortoMaster = jog.morto ? 'morto-master' : '';
        
        let htmlStatusLive = ''; for (let stat in jog.stats) { htmlStatusLive += `<span class="status-item">${stat}: ${jog.stats[stat]}</span>`; }
        let htmlInventario = '🎒 Itens: ';
        if (jog.inventario.length > 0) { htmlInventario += jog.inventario.map(it => { let nomeIt = it.nome || it; let efIt = it.efeito || 'Sem efeito.'; return `<span class="tooltip-item" data-efeito="${efIt}">${nomeIt}</span>`; }).join(', '); } else { htmlInventario += 'Nenhum'; }
        listaLive.innerHTML += `<div class="jogador-card ${classeAtiva} ${classeMorto}"><strong>${index + 1}. ${jog.nome}</strong> (Em: ${jog.local})<div class="status-bar">${htmlStatusLive}</div><div class="inventario-box">${htmlInventario}</div></div>`;

        let htmlStatusMaster = ''; for (let stat in jog.stats) { htmlStatusMaster += `<div class="status-control-box"><button class="btn-pequeno" onclick="alterarStatus(${index}, '${stat}', -1)">-</button><span>${stat}: ${jog.stats[stat]}</span><button class="btn-pequeno" onclick="alterarStatus(${index}, '${stat}', 1)">+</button></div>`; }
        let htmlMochilaMaster = '';
        if (jog.inventario.length > 0 && !jog.morto) {
            htmlMochilaMaster += `<div style="margin-top: 8px; border-top: 1px solid #555; padding-top: 8px; font-size: 0.85em; color: #ccc;"><strong>Mochila:</strong>`;
            jog.inventario.forEach((itemObj, itemIdx) => { let nomeIt = itemObj.nome || itemObj; htmlMochilaMaster += `<div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.4); padding: 4px 8px; margin-top: 4px; border-radius: 4px;"><span style="color: white; font-weight: bold; flex: 1;">${nomeIt}</span><button class="btn-padrao" style="background-color: var(--primary); color: #111; padding: 2px 8px; width: auto; font-size: 0.85em; margin: 0 4px;" onclick="transferirItem(${index}, ${itemIdx})">Passar</button><button class="btn-padrao" style="background-color: var(--accent); color: #111; padding: 2px 8px; width: auto; font-size: 0.85em; margin: 0;" onclick="usarItem(${index}, ${itemIdx})">Usar</button></div>`; }); htmlMochilaMaster += `</div>`;
        }
        let botaoMorte = ''; if(jog.stats['Vida'] !== undefined && jog.stats['Vida'] <= 0 && !jog.morto) { botaoMorte = `<button class="btn-padrao" style="background-color: var(--accent); margin-top: 10px;" onclick="matarJogador(${index})">☠️ Declarar Morto!</button>`; }

        listaMaster.innerHTML += `<div class="controles-jogador-master ${classeMortoMaster}"><div class="nome-master">${index + 1}. ${jog.nome}</div><div class="status-grid-master">${htmlStatusMaster}</div><div class="acoes-extras-master"><select id="select-item-${index}">${optionsItens}</select><button class="btn-padrao" style="background-color: var(--success); color: #111; width: auto; padding: 6px 10px; margin: 0;" onclick="darItem(${index})" ${jog.morto?'disabled':''}>Dar</button></div><div class="acoes-extras-master"><select id="teleport-${index}">${optionsCasas}</select><button class="btn-padrao" style="background-color: #89b4fa; color: #111; width: auto; padding: 6px 10px; margin: 0;" onclick="teleportarJogador(${index})" ${jog.morto?'disabled':''}>Mover</button></div>${htmlMochilaMaster}${botaoMorte}</div>`;
    });
}

async function renderizarEditor() {
    const div = document.getElementById('listas-edicao'); div.innerHTML = '';
    let htmlRegras = `<div class="caixa-interna"><h4>Regras</h4>`; regrasAtivas.forEach((r, i) => { htmlRegras += `<div class="item-edicao"><span>Regra ${i+1}</span> <div><button class="btn-padrao btn-edicao" onclick="editarTexto('regra', ${i})">✏️</button><button class="btn-padrao btn-edicao" style="background:var(--accent);" onclick="excluir('regra', ${i})">🗑️</button></div></div>`; }); htmlRegras += `</div>`;
    let htmlItens = `<div class="caixa-interna"><h4>Itens</h4>`; itensCriados.forEach((it, i) => { htmlItens += `<div class="item-edicao"><span>${it.nome}</span> <div><button class="btn-padrao btn-edicao" onclick="editarTexto('item', ${i})">✏️</button><button class="btn-padrao btn-edicao" style="background:var(--accent);" onclick="excluir('item', ${i})">🗑️</button></div></div>`; }); htmlItens += `</div>`;
    let htmlCasas = `<div class="caixa-interna"><h4>Casas (Descrições)</h4>`; Object.keys(dadosCasas).forEach((nomeCasa) => { htmlCasas += `<div class="item-edicao"><span>${nomeCasa}</span> <div><button class="btn-padrao btn-edicao" onclick="editarTexto('casa', '${nomeCasa}')">✏️</button></div></div>`; }); htmlCasas += `</div>`;
    let htmlEventos = `<div class="caixa-interna"><h4>Lembretes (A cada X turnos)</h4>`; eventos.forEach((ev, i) => { htmlEventos += `<div class="item-edicao"><span>${ev.mensagem}</span> <div><button class="btn-padrao btn-edicao" style="background:var(--accent);" onclick="excluir('evento', ${i})">🗑️</button></div></div>`; }); htmlEventos += `</div>`;
    div.innerHTML = htmlRegras + htmlItens + htmlCasas + htmlEventos;
}

async function editarTexto(tipo, id) {
    if(tipo === 'regra') { let novo = await mostrarPrompt("Editar Regra:", regrasAtivas[id]); if(novo) { regrasAtivas[id] = novo; atualizarTudo(); renderizarEditor(); } } 
    else if (tipo === 'item') { let novoNome = await mostrarPrompt("Editar Nome do Item:", itensCriados[id].nome); if(novoNome) { itensCriados[id].nome = novoNome; atualizarTudo(); renderizarEditor(); } } 
    else if (tipo === 'casa') { let novaDesc = await mostrarPrompt(`Editar descrição da casa [${id}]:`, dadosCasas[id].descricao); if(novaDesc !== null) { dadosCasas[id].descricao = novaDesc; atualizarMarcadoresNoMapa(); renderizarEditor(); } }
}

async function excluir(tipo, id) {
    const sim = await mostrarConfirmacao("Tem certeza que quer excluir?");
    if(sim) { if(tipo === 'regra') { regrasAtivas.splice(id, 1); } else if (tipo === 'item') { itensCriados.splice(id, 1); } else if (tipo === 'evento') { eventos.splice(id, 1); } atualizarTudo(); renderizarEditor(); }
}