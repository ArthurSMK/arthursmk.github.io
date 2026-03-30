// ARQUIVO: script.js

// --- CÁLCULO DINÂMICO ---
function atualizarContagem() {
    const qtdNormais = parseInt(document.getElementById('qtd-rodadas').value) || 0;
    const intervalo = parseInt(document.getElementById('intervalo-bonus').value) || 0;
    let qtdBonus = (intervalo > 0) ? Math.floor(qtdNormais / intervalo) : 0;
    const total = qtdNormais + qtdBonus;
    const avisoDiv = document.getElementById('aviso-total');
    
    if (intervalo === 0) {
        avisoDiv.innerText = `Serão ${total} perguntas no total (Apenas Normais)`;
        avisoDiv.style.color = "var(--sucesso)";
    } else {
        avisoDiv.innerText = `Serão ${total} perguntas no total (${qtdNormais} Normais + ${qtdBonus} Bônus🌟)`;
        avisoDiv.style.color = "#ffcc00";
    }
}
window.addEventListener('DOMContentLoaded', atualizarContagem);

// --- SISTEMA DE ÁUDIO ---
const audioMusica = new Audio('musica-fundo.mp3'); audioMusica.loop = true; audioMusica.volume = 0.1; audioMusica.load(); 
const audioTick = new Audio('tick.mp3'); audioTick.volume = 0.3; audioTick.load();
const audioVitoria = new Audio('vitoria.mp3'); audioVitoria.volume = 0.3; audioVitoria.load();
const audioDerrota = new Audio('derrota.mp3'); audioDerrota.volume = 0.3; audioDerrota.load();

let telaDeJogoAtiva = false;
let musicaTocando = false;

document.body.addEventListener('click', () => {
    if (!musicaTocando && !telaDeJogoAtiva && document.getElementById('check-musica').checked) {
        audioMusica.play().catch(e => console.log("Aguardando interação")); musicaTocando = true;
    }
}, { once: true }); 

function tocarSFX(som) { if (document.getElementById('check-sfx').checked) { som.currentTime = 0; som.play().catch(e => console.error(e)); } }
function gerenciarMusicaCheckbox() {
    if (document.getElementById('check-musica').checked) {
        if (!telaDeJogoAtiva) { audioMusica.play(); musicaTocando = true; }
    } else { audioMusica.pause(); musicaTocando = false; }
}
function testarAudios() { tocarSFX(audioVitoria); }

// --- CONTROLE DO MODAL DE ALERTA ---
function mostrarAlerta(mensagem) {
    document.getElementById('modal-mensagem').innerText = mensagem;
    document.getElementById('modal-alerta').classList.add('ativo');
}

function fecharModal() {
    document.getElementById('modal-alerta').classList.remove('ativo');
}

// --- SISTEMA DE ANIMAÇÃO DO CHAT ---
function mostrarBalaoChat(user, message) {
    const container = document.getElementById('chat-bubbles-container');
    if (!container) return;

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';

    const avatar = document.createElement('img');
    avatar.className = 'chat-avatar';
    avatar.src = `https://decapi.me/twitch/avatar/${user.toLowerCase()}`;
    avatar.onerror = function() {
        this.src = 'https://static-cdn.jtvnw.net/user-default-pictures-uv/aecdef45-0074-4b55-a0fb-ce55a1532050-profile_image-70x70.png';
    };

    const textDiv = document.createElement('div');
    textDiv.className = 'chat-text';
    textDiv.innerHTML = `<b>${user}:</b> ${message}`;

    bubble.appendChild(avatar);
    bubble.appendChild(textDiv);
    container.appendChild(bubble);

    setTimeout(() => { if (bubble.parentElement) bubble.remove(); }, 4000);
}

// --- VARIÁVEIS DA PARTIDA ---
let configAtual = { modo: 'ffa' };
let rodadaAtualIndex = -1; 
let perguntasSorteadas = [];
let votosPorUsuario = {}; 
let contagemVotos = { A: 0, B: 0, C: 0, D: 0 };
let pontuacaoIndividual = {}; 
let jogoRodando = false;

// VARIÁVEIS DE TEMPO - AJUSTADO PARA 60 SEGUNDOS
let tempoTotal = 60;
let tempoRestante = 60;
let intervalo;

// VARIÁVEIS DO NOVO MODO 1x1
let chatGeralParticipantes = []; // Guarda todo mundo que falar no chat
let jogadoresDuelo = []; // Os 2 sorteados

function mudarTela(idNovaTela) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.getElementById(idNovaTela).classList.add('ativa');
    telaDeJogoAtiva = (idNovaTela === 'tela-jogo');
}

function mudarTema() { document.documentElement.setAttribute('data-theme', document.getElementById('tema-site').value); }

function voltarMenuJogo() {
    clearInterval(intervalo); jogoRodando = false; mudarTela('tela-menu');
    if (document.getElementById('check-musica').checked) { audioMusica.play(); musicaTocando = true; }
    
    document.getElementById('caixa-pergunta').style.display = "none";
    document.getElementById('container-tempo').style.display = "none";
    document.getElementById('resultado').style.display = "none";
    document.getElementById('justificativa-box').style.display = "none";
}

function iniciarJogo() {
    configAtual.modo = document.getElementById('modo-jogo').value;

    // VERIFICAÇÃO DO MODO 1x1 COM O NOVO MODAL CUSTOMIZADO
    if (configAtual.modo === '1v1') {
        if (chatGeralParticipantes.length < 2) {
            mostrarAlerta("Não há pelo menos 2 pessoas que tenham interagido no chat para sortear o Duelo! Peça para o chat digitar qualquer coisa e tente novamente.");
            return; // Impede o jogo de iniciar
        }
        let embaralhados = [...chatGeralParticipantes].sort(() => 0.5 - Math.random());
        jogadoresDuelo = [embaralhados[0], embaralhados[1]];
    }

    const qtdNormais = parseInt(document.getElementById('qtd-rodadas').value);
    const intervaloBonus = parseInt(document.getElementById('intervalo-bonus').value);
    perguntasSorteadas = [];

    let normaisEmbaralhadas = [...bancoDePerguntas].sort(() => Math.random() - 0.5);
    let bonusEmbaralhadas = [...bancoDePerguntasBonus].sort(() => Math.random() - 0.5);
    let contadorBonus = 0;

    for (let i = 1; i <= qtdNormais; i++) {
        let pNormal = Object.assign({}, normaisEmbaralhadas[(i - 1) % normaisEmbaralhadas.length]);
        pNormal.isBonus = false; perguntasSorteadas.push(pNormal);
        if (intervaloBonus > 0 && i % intervaloBonus === 0 && bonusEmbaralhadas.length > 0) {
            let pBonus = Object.assign({}, bonusEmbaralhadas[contadorBonus % bonusEmbaralhadas.length]);
            pBonus.isBonus = true; perguntasSorteadas.push(pBonus); contadorBonus++;
        }
    }

    rodadaAtualIndex = -1; pontuacaoIndividual = {}; 
    
    document.getElementById('caixa-pergunta').style.display = "none";
    document.getElementById('container-tempo').style.display = "none";
    document.getElementById('resultado').style.display = "none";
    document.getElementById('btn-encerrar').style.display = "none";
    document.getElementById('justificativa-box').style.display = "none";
    
    // Mostra mensagem especial se for duelo
    if (configAtual.modo === '1v1') {
        document.getElementById('dica-teclado').innerHTML = `<b>⚔️ DUELO SORTEADO: ${jogadoresDuelo[0]} VS ${jogadoresDuelo[1]}</b><br>Pressione [ESPAÇO] para iniciar!`;
    } else {
        document.getElementById('dica-teclado').innerText = "Pressione [ESPAÇO] para iniciar!";
    }
    
    esconderAlternativas();
    mudarTela('tela-jogo');
    audioMusica.pause(); musicaTocando = false;
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && telaDeJogoAtiva) {
        event.preventDefault(); if (!jogoRodando) avancarRodada();
    }
});

function avancarRodada() {
    rodadaAtualIndex++;
    document.getElementById('resultado').style.display = "none";
    document.getElementById('justificativa-box').style.display = "none";

    if (rodadaAtualIndex >= perguntasSorteadas.length) {
        document.getElementById('caixa-pergunta').style.display = "block";
        document.getElementById('texto-pergunta').innerText = "🏁 FIM DE JOGO! 🏁";
        document.getElementById('texto-pergunta').style.color = "#fff";
        document.getElementById('container-tempo').style.display = "none";
        document.getElementById('dica-teclado').innerText = "Partida finalizada.";
        esconderAlternativas();
        
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.style.display = "block";
        resultadoDiv.className = "caixa-resultado";

        if (configAtual.modo === 'ffa') {
            let rankingArray = Object.entries(pontuacaoIndividual).sort((a, b) => b[1] - a[1]);
            let rankingHtml = "🏆 RANKING FINAL DO CHAT 🏆<br><br>";
            if (rankingArray.length === 0) {
                rankingHtml += "Ninguém pontuou nessa partida! 😭"; tocarSFX(audioDerrota); 
            } else {
                const top3 = rankingArray.slice(0, 3); const medalhas = ["🥇", "🥈", "🥉"];
                top3.forEach((jogador, index) => { 
                    const avatar = `https://decapi.me/twitch/avatar/${jogador[0].toLowerCase()}`;
                    rankingHtml += `<div class="podio-item" style="display:flex; align-items:center; justify-content:center; gap:12px;">
                        ${medalhas[index]} <img src="${avatar}" style="width:40px; height:40px; border-radius:50%; border:2px solid var(--sucesso); object-fit:cover;"> ${jogador[0]}: ${jogador[1]} pts
                    </div>`; 
                });
                tocarSFX(audioVitoria); 
            }
            resultadoDiv.innerHTML = rankingHtml;
        } else if (configAtual.modo === '1v1') {
            let ptsJ1 = pontuacaoIndividual[jogadoresDuelo[0]] || 0;
            let ptsJ2 = pontuacaoIndividual[jogadoresDuelo[1]] || 0;

            let rankingHtml = `<div style="text-align:center;">🏆 RESULTADO DO DUELO 🏆<br><br>`;
            rankingHtml += `<div style="display:flex; justify-content:center; gap:30px; margin-top:10px; align-items:center;">`;
            rankingHtml += `<div><img src="https://decapi.me/twitch/avatar/${jogadoresDuelo[0].toLowerCase()}" style="width:70px; height:70px; object-fit:cover; border-radius:50%; border:3px solid ${ptsJ1 >= ptsJ2 ? 'var(--sucesso)' : 'var(--primary-color)'}"><br><b>${jogadoresDuelo[0]}</b><br>${ptsJ1} pts</div>`;
            rankingHtml += `<div style="font-size:30px;">⚔️</div>`;
            rankingHtml += `<div><img src="https://decapi.me/twitch/avatar/${jogadoresDuelo[1].toLowerCase()}" style="width:70px; height:70px; object-fit:cover; border-radius:50%; border:3px solid ${ptsJ2 >= ptsJ1 ? 'var(--sucesso)' : 'var(--primary-color)'}"><br><b>${jogadoresDuelo[1]}</b><br>${ptsJ2} pts</div>`;
            rankingHtml += `</div>`;

            if (ptsJ1 > ptsJ2) { rankingHtml += `<br>🎉 <b>${jogadoresDuelo[0]}</b> venceu o duelo!`; tocarSFX(audioVitoria); } 
            else if (ptsJ2 > ptsJ1) { rankingHtml += `<br>🎉 <b>${jogadoresDuelo[1]}</b> venceu o duelo!`; tocarSFX(audioVitoria); } 
            else { rankingHtml += `<br>🤝 <b>EMPATE!</b>`; tocarSFX(audioVitoria); }
            
            rankingHtml += `</div>`;
            resultadoDiv.innerHTML = rankingHtml;

        } else {
            resultadoDiv.innerText = "Obrigado por jogarem no modo Unidos!"; tocarSFX(audioVitoria);
        }

        document.getElementById('btn-encerrar').style.display = "block";
        return;
    }

    const pergunta = perguntasSorteadas[rodadaAtualIndex];
    votosPorUsuario = {}; contagemVotos = { A: 0, B: 0, C: 0, D: 0 }; 
    tempoRestante = tempoTotal; jogoRodando = true;

    ['a', 'b', 'c', 'd'].forEach(letra => {
        const linha = document.getElementById(`linha-${letra}`);
        linha.classList.remove('resposta-certa', 'resposta-errada');
        document.getElementById(`votos-${letra}`).innerText = "0";
    });

    document.getElementById('caixa-pergunta').style.display = "block";
    const tituloDiv = document.getElementById('texto-pergunta');
    
    let textoIntro = configAtual.modo === '1v1' ? `Duelo (${jogadoresDuelo[0]} vs ${jogadoresDuelo[1]})` : `Rodada ${rodadaAtualIndex + 1}`;

    if (pergunta.isBonus) {
        tituloDiv.innerHTML = `🌟 <span style="color:#ffcc00">BÔNUS - ${textoIntro}:</span> ${pergunta.texto}`;
        document.getElementById('caixa-pergunta').style.borderColor = "#ffcc00";
    } else {
        tituloDiv.innerHTML = `<span style="color:var(--primary-color)">${textoIntro}:</span> ${pergunta.texto}`;
        document.getElementById('caixa-pergunta').style.borderColor = "var(--primary-color)";
    }

    document.getElementById('texto-a').innerText = pergunta.opcoes.A;
    document.getElementById('texto-b').innerText = pergunta.opcoes.B;
    document.getElementById('texto-c').innerText = pergunta.opcoes.C;
    document.getElementById('texto-d').innerText = pergunta.opcoes.D;
    
    mostrarAlternativas();
    
    document.getElementById('container-tempo').style.display = "block";
    document.getElementById('timer-text').innerText = `Tempo: ${tempoRestante}s`;
    const barraFill = document.getElementById('barra-tempo-fill');
    barraFill.style.width = "100%";
    barraFill.style.backgroundColor = "var(--primary-color)";
    
    document.getElementById('dica-teclado').innerText = configAtual.modo === '1v1' ? "Apenas os jogadores do Duelo podem votar!" : "Votações abertas no chat!";

    clearInterval(intervalo);
    intervalo = setInterval(() => {
        tempoRestante--; 
        document.getElementById('timer-text').innerText = `Tempo: ${tempoRestante}s`;
        
        const porcentagem = (tempoRestante / tempoTotal) * 100;
        barraFill.style.width = `${porcentagem}%`;
        
        if (tempoRestante <= 5) { barraFill.style.backgroundColor = "#ff4444"; }
        if (tempoRestante === 5) { tocarSFX(audioTick); }
        
        if (tempoRestante <= 0) encerrarRodada(pergunta);
    }, 1000);
}

function encerrarRodada(pergunta) {
    jogoRodando = false; clearInterval(intervalo);
    document.getElementById('timer-text').innerText = "TEMPO ESGOTADO!";
    document.getElementById('barra-tempo-fill').style.width = "0%";
    document.getElementById('dica-teclado').innerText = "Pressione [ESPAÇO] para a próxima tela.";

    const impostora = pergunta.impostora.toLowerCase();
    
    ['a', 'b', 'c', 'd'].forEach(letra => {
        const card = document.getElementById(`linha-${letra}`);
        if (letra === impostora) { card.classList.add('resposta-certa'); } else { card.classList.add('resposta-errada'); }
    });

    const justiBox = document.getElementById('justificativa-box');
    if (pergunta.justificativa) {
        document.getElementById('justificativa-texto').innerText = pergunta.justificativa;
        justiBox.style.display = "block";
    } else { justiBox.style.display = "none"; }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = "block";

    if (configAtual.modo === 'coop') {
        let alternativaVencedora = "A"; let maiorNumeroVotos = -1;
        for (const letra in contagemVotos) {
            if (contagemVotos[letra] > maiorNumeroVotos) { maiorNumeroVotos = contagemVotos[letra]; alternativaVencedora = letra; }
        }
        if (alternativaVencedora === pergunta.impostora) {
            resultadoDiv.className = "caixa-resultado resultado-sucesso";
            resultadoDiv.innerHTML = `<i class="fa-solid fa-check-circle"></i> O CHAT ACERTOU!<br>A resposta errada era a letra ${pergunta.impostora}.`;
            tocarSFX(audioVitoria);
        } else {
            resultadoDiv.className = "caixa-resultado resultado-falha";
            resultadoDiv.innerHTML = `<i class="fa-solid fa-skull"></i> O CHAT ERROU!<br>Vocês votaram na ${alternativaVencedora}, mas a certa era a ${pergunta.impostora}.`;
            tocarSFX(audioDerrota);
        }
    } else {
        let totalAcertos = 0;
        for (const user in votosPorUsuario) {
            if (votosPorUsuario[user] === pergunta.impostora) {
                totalAcertos++;
                if (!pontuacaoIndividual[user]) pontuacaoIndividual[user] = 0;
                pontuacaoIndividual[user] += pergunta.isBonus ? 2 : 1; 
            }
        }

        if (totalAcertos > 0) {
            resultadoDiv.className = "caixa-resultado resultado-sucesso";
            let textoPonto = pergunta.isBonus ? "garantiram 2 PONTOS BÔNUS!" : "acertaram e pontuaram!";
            resultadoDiv.innerHTML = `<i class="fa-solid fa-trophy"></i> Excelente!<br>${totalAcertos} pessoa(s) ${textoPonto}`;
            tocarSFX(audioVitoria);
        } else {
            resultadoDiv.className = "caixa-resultado resultado-falha";
            resultadoDiv.innerHTML = `<i class="fa-solid fa-face-frown"></i> Ninguém acertou essa...<br>A resposta que vocês procuravam era a ${pergunta.impostora}!`;
            tocarSFX(audioDerrota);
        }
    }
}

function mostrarAlternativas() { ['a', 'b', 'c', 'd'].forEach(letra => document.getElementById(`linha-${letra}`).style.display = "flex"); }
function esconderAlternativas() { ['a', 'b', 'c', 'd'].forEach(letra => document.getElementById(`linha-${letra}`).style.display = "none"); }

ComfyJS.Init("arthursmk");

ComfyJS.onChat = (user, message, flags, self, extra) => {
    mostrarBalaoChat(user, message);
    if (!chatGeralParticipantes.includes(user)) chatGeralParticipantes.push(user);
};

ComfyJS.onCommand = (user, command, message, flags, extra) => {
    let textoCompleto = "!" + command;
    if (message) textoCompleto += " " + message;
    mostrarBalaoChat(user, textoCompleto);
    
    if (!chatGeralParticipantes.includes(user)) chatGeralParticipantes.push(user);

    if (!jogoRodando) return;
    
    if (configAtual.modo === '1v1' && !jogadoresDuelo.includes(user)) return;

    const voto = command.toUpperCase();
    if (['A', 'B', 'C', 'D'].includes(voto)) {
        if (!votosPorUsuario[user]) {
            votosPorUsuario[user] = voto; contagemVotos[voto]++;
            document.getElementById(`votos-${voto.toLowerCase()}`).innerText = contagemVotos[voto];
        }
    }
};