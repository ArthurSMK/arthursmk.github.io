// Arquivo: perguntas.js

// --- PERGUNTAS NORMAIS (Gerais) ---
const bancoDePerguntas = [
    { 
        texto: "Qual destas mecânicas NÃO existia no Minecraft Alpha/Beta?", 
        opcoes: {
            A: "Mineração de Diamante",
            B: "Criação de Camas",
            C: "Barra de Fome",
            D: "Circuitos de Redstone" }, 
        impostora: "C",
        justificativa: "A barra de fome só foi adicionada na versão Beta 1.8 (Adventure Update). Antes disso, a comida recuperava vida diretamente e não existia o conceito de 'fome'."
    },
    { 
        texto: "Qual destes modos NÃO está presente no EA FC 26?", 
        opcoes: {
            A: "Ultimate Team",
            B: "A Jornada",
            C: "Modo Carreira",
            D: "Treinamento" }, 
        impostora: "B",
        justificativa: "O modo 'A Jornada' (The Journey), protagonizado por Alex Hunter, foi uma trilogia que aconteceu apenas entre o FIFA 17 e o FIFA 19, não retornando nos títulos recentes da EA Sports."
    },
    { 
        texto: "Sobre a franquia Super Mario, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "O nome original do Mario era Jumpman",
            B: "O Luigi é o irmão mais novo do Mario",
            C: "O Mario é um encanador italiano que vive no Brooklyn",
            D: "O Bowser é o pai biológico do Wario" }, 
        impostora: "D",
        justificativa: "O Bowser não possui qualquer parentesco biológico com o Wario. O Wario foi criado para ser um rival/antagonista que espelha o Mario, sem ligação familiar com o vilão Bowser."
    },
    { 
        texto: "No jogo Minecraft, qual destas ações NÃO gera um item ou bloco?", 
        opcoes: {
            A: "Cavar terra com a mão",
            B: "Explodir uma TNT perto de pedras",
            C: "Bater em um Creeper com uma flor",
            D: "Tosquiar uma ovelha" }, 
        impostora: "C",
        justificativa: "Bater em um Creeper com uma flor não gera nenhum item ou bloco. E na opção está escrito apenas bater e não matar, que ai sim droparia polvora."
    },
    { 
        texto: "Sobre o console PlayStation 2, qual destas informações está ERRADA?", 
        opcoes: {
            A: "É o console mais vendido de todos os tempos",
            B: "Ele possuía retrocompatibilidade com jogos de PS1",
            C: "Foi lançado originalmente pela Microsoft",
            D: "Podia ser usado para assistir filmes em DVD" }, 
        impostora: "C",
        justificativa: "O playstation sempre foi pertecente a Sony. A microsoft lançou apenas o Xbox."
    },
    { 
        texto: "No jogo 'The Legend of Zelda: Breath of the Wild', qual destas interações com o mundo NÃO é possível?", 
        opcoes: {
            A: "Cozinhar alimentos apenas segurando-os e jogando-os em áreas de calor extremo",
            B: "Usar um baú de metal como arma magnética para causar dano por esmagamento",
            C: "Atravessar superfícies de água profundas usando o fôlego para mergulhar",
            D: "Surfar no escudo para descer montanhas (Shield Surfing)" }, 
        impostora: "C",
        justificativa: "Mergulhar é uma mecânica comum em muitos jogos, mas especificamente no Breath of the Wild o Link apenas bóia (o mergulho só foi adicionado na sequência)."
    },
    { 
        texto: "Sobre o desenvolvimento e a história do primeiro 'Resident Evil' (1996), qual destas afirmações é FALSA?", 
        opcoes: { 
            A: "O jogo foi planejado como remake de 'Sweet Home'", 
            B: "A câmera fixa foi escolha artística desde o primeiro dia", 
            C: "Havia um personagem chamado Gelzer que foi cortado", 
            D: "O jogo quase foi um FPS (Primeira Pessoa)" 
        }, 
        impostora: "B",
        justificativa: "A câmera fixa foi uma solução técnica por limitações do hardware da época, não uma escolha artística inicial."
    },
    { 
        texto: "Em 'Dark Souls', qual destes itens ou mecânicas NÃO funciona da maneira descrita?", 
        opcoes: {
            A: "O 'Pendant' (Pingente) serve para abrir um atalho secreto nas Catacumbas",
            B: "O 'Poise' determina quanta resistência você tem antes de ser interrompido por um golpe",
            C: "Atacar um baú revela se ele é um Mímico antes de você tentar abri-lo",
            D: "Queimar uma 'Humanidade' na fogueira aumenta a quantidade de Estus Flasks recuperados" }, 
        impostora: "A",
        justificativa: "O Pendant é famoso por ser um item que o criador do jogo disse que não servia para nada, apenas para brincar com a mente dos jogadores."
    },
    { 
        texto: "Qual destas curiosidades sobre 'Minecraft' é MENTIRA?", 
        opcoes: {
            A: "O som que o Ghast faz foi gravado do gato do produtor de som enquanto ele dormia",
            B: "É impossível colocar camas no Nether",
            C: "O Creepers surgiram de um erro de código ao tentar criar o modelo de um porco",
            D: "Originalmente, o jogo se chamaria 'Cave Game' e o mundo seria finito" }, 
        impostora: "B",
        justificativa: "A impostora é sutil — as camas explodem no Nether, mas o texto diz que é impossível colocá-las. Na verdade, você consegue colocá-las, o problema é clicar nelas."
    },
    { 
        texto: "No competitivo de 'League of Legends', qual destas regras ou situações NÃO existe?", 
        opcoes: {
            A: "Um jogador pode ser punido por 'taunting' excessivo ou comportamento antidesportivo no chat",
            B: "O item 'Inibidor' regenera-se após alguns minutos de ter sido destruído",
            C: "É permitido trocar de campeão com um colega de time após a fase de Picks e Bans",
            D: "O Barão Nashor surge exatamente aos 15 minutos de partida em todos os mapas" }, 
        impostora: "D",
        justificativa: "O tempo de spawn do Barão é 20 minutos, não 15."
    },
    { 
        texto: "No jogo 'Minecraft', qual destes itens é impossível de se obter no modo Sobrevivência (Survival) sem o uso de cheats ou comandos?", 
        opcoes: {
            A: "Maçã Dourada Encantada (Notch Apple)",
            B: "Ovo de Dragão",
            C: "Bloco de Barreira (Invisível)",
            D: "Sela (Saddle)" }, 
        impostora: "C",
        justificativa: "Enquanto a Notch Apple pode ser achada em baús, o Ovo de Dragão é um troféu e a Sela pode ser pescada, trocada ou craftada, o Bloco de Barreira só pode ser obtido através do comando /give."
    },
    { 
        texto: "Qual destas afirmações sobre o jogo 'Spider-Man Remastered' é FALSA?", 
        opcoes: {
            A: "O rosto do Peter Parker foi alterado em relação à versão original de PS4",
            B: "É possível visitar a Torre dos Vingadores no mapa de Manhattan",
            C: "O jogo permite jogar missões cooperativas online com o Miles Morales",
            D: "Existem diversos trajes baseados nos filmes do herói, incluindo os de Tom Holland" }, 
        impostora: "C",
        justificativa: "Spider-Man Remastered é uma experiência exclusivamente single-player. O modo cooperativo só foi introduzido como conceito narrativo (mas não de gameplay online) na sequência direta, Spider-Man 2."
    },
    { 
        texto: "No jogo 'Planet Coaster', qual destes fatores NÃO influencia diretamente a satisfação dos visitantes?", 
        opcoes: {
            A: "O preço da entrada do parque",
            B: "A quantidade de lixeiras espalhadas pelos caminhos",
            C: "A cor das paredes das lojas de comida",
            D: "O tempo de espera nas filas das montanhas-russas" }, 
        impostora: "C",
        justificativa: "Embora a decoração e o cenário (scenery rating) ao redor das lojas influenciem a satisfação, a cor específica das paredes não possui um valor numérico que altera o humor dos visitantes no código do jogo."
    },
    { 
        texto: "Sobre a história do Minecraft, qual destas opções era uma característica real das versões 'Infdev'?", 
        opcoes: {
            A: "O mapa era totalmente infinito e sem bordas reais",
            B: "Existiam casas de tijolos que geravam naturalmente no mapa",
            C: "No começo haviam steves que ficavam andando por aí",
            D: "Já existia o bioma de Selva (Jungle) com jaguatiricas" }, 
        impostora: "B",
        justificativa: "Nas versões Infdev, o jogo gerava aleatoriamente pequenas casas feitas de tijolos (Brick Pyramids ou Brick Houses) para testar a geração de estruturas. O Herobrine nunca existiu oficialmente e as selvas vieram muito depois."
    },
    { 
        texto: "No Minecraft (Java Edition), qual destes métodos NÃO é uma forma válida de impedir que um Enderman se teletransporte?", 
        opcoes: {
            A: "Colocar o Enderman dentro de um barco ou carrinho de mina",
            B: "Bater nas pernas do Enderman em vez do corpo ou cabeça",
            C: "Fazer o Enderman pisar em uma placa de pressão de ouro",
            D: "Cobrir toda a área ao redor com lajes (slabs) duplas ou botões" }, 
        impostora: "C",
        justificativa: "Placas de pressão não têm efeito sobre a capacidade de teletransporte. Já barcos/carrinhos travam a entidade, bater nas pernas impede a IA de reagir com teletransporte em algumas versões, e a falta de blocos válidos (como botões ocupando o espaço) anula o destino do pulo."
    },
    { 
        texto: "Sobre o desenvolvimento de 'Grand Theft Auto V', qual destas afirmações é FALSA?", 
        opcoes: {
            A: "O mapa de Los Santos é maior do que os mapas de GTA IV, San Andreas e Red Dead Redemption combinados",
            B: "A Rockstar contratou membros de gangues reais para dublar figurantes e dar autenticidade ao roteiro",
            C: "O personagem Trevor Philips foi inspirado em um perfil real de um ex-agente da CIA que enlouqueceu",
            D: "Originalmente, o jogo teria um sistema de 'cooperação' onde um segundo jogador controlaria o cachorro Chop" }, 
        impostora: "C",
        justificativa: "Embora o ator Steven Ogg tenha trazido muita personalidade ao Trevor, o personagem foi concebido para representar a personificação do jogador que causa o caos no GTA, e não baseado em um agente real da CIA."
    },
    { 
        texto: "No jogo 'Elden Ring', qual destas mecânicas de combate NÃO existe?", 
        opcoes: {
            A: "Quebra de postura (Stance Break) após sucessivos ataques pesados",
            B: "Contra-ataque de guarda (Guard Counter) imediatamente após bloquear um golpe",
            C: "Cancelamento de animação de ataque (Animation Cancel) usando o botão de pulo",
            D: "Dano bônus por ataque crítico ao golpear um inimigo por trás (Backstab)" }, 
        impostora: "C",
        justificativa: "Diferente de jogos de luta ou hack'n slash mais frenéticos, as animações de ataque em Elden Ring (e na série Souls) são 'compromissadas', o que significa que você não pode cancelá-las no meio da execução para pular ou esquivar."
    },
    { 
        texto: "No modo Carreira do 'EA FC' (antigo FIFA), qual destas ações é IMPOSSÍVEL de realizar?", 
        opcoes: {
            A: "Treinar um lateral-direito para se tornar um centroavante",
            B: "Oferecer um jogador da base como parte do pagamento por uma transferência",
            C: "Pagar a multa rescisória de um jogador sem precisar negociar com o clube detentor",
            D: "Criar um clube novo e começar diretamente na primeira divisão de qualquer liga" }, 
        impostora: "B",
        justificativa: "É possivel oferecer jogadores como moeda de troca para comprar jogadores, mas não jogadores da base, somente jogadores do plantel principal."
    },
    { 
        texto: "Sobre o jogo 'The Witcher 3: Wild Hunt', qual destas interações NÃO é possível no mundo aberto?", 
        opcoes: {
            A: "Matar guardas de cidades e saquear seus equipamentos de alto nível",
            B: "Usar o sinal Aard para derrubar ninhos de monstros em árvores",
            C: "Negociar o valor da recompensa de um contrato antes de aceitá-lo",
            D: "Barbear o Geralt, mas ver a barba crescer em tempo real conforme os dias passam" }, 
        impostora: "A",
        justificativa: "Você até pode lutar e derrubar guardas, mas o jogo não permite que você os saqueie (loot). Isso foi feito para evitar que o jogador conseguisse equipamentos extremamente fortes muito cedo no jogo apenas explorando falhas de IA."
    },
    // --- PERGUNTAS SOBRE CIENCIA ---
    { 
        texto: "Sobre o Sistema Solar, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "Vênus é o planeta mais quente, mesmo não sendo o mais próximo do Sol",
            B: "O Sol representa mais de 99% de toda a massa do Sistema Solar",
            C: "A Lua tem um lado que nunca recebe a luz do Sol (o 'Lado Escuro')",
            D: "Saturno não é o único planeta que possui anéis" }, 
        impostora: "C",
        justificativa: "Não existe um lado 'escuro' permanente. A Lua tem um lado que nunca está voltado para a Terra, mas todos os lados da Lua recebem luz solar conforme ela orbita o nosso planeta."
    },
    { 
        texto: "Na Biologia Humana, qual destas funções NÃO é realizada pelo fígado?", 
        opcoes: {
            A: "Produção de bile para ajudar na digestão de gorduras",
            B: "Armazenamento de glicose na forma de glicogênio",
            C: "Desintoxicação de substâncias como o álcool",
            D: "Produção de insulina para controlar o açúcar no sangue" }, 
        impostora: "D",
        justificativa: "A insulina é produzida exclusivamente pelo pâncreas. O fígado apenas responde à insulina para armazenar ou liberar açúcar."
    },
    { 
        texto: "Sobre a tabela periódica e os elementos, qual destas opções está ERRADA?", 
        opcoes: {
            A: "O Mercúrio é o único metal que é líquido em temperatura ambiente",
            B: "Ouro e Cobre são os únicos metais que não têm cor prateada/cinza",
            C: "O Diamante e o Grafite são feitos exatamente do mesmo elemento químico",
            D: "O Oxigênio é o elemento mais abundante em todo o Universo" }, 
        impostora: "D",
        justificativa: "O elemento mais abundante no Universo é o Hidrogênio (cerca de 75%), seguido pelo Hélio. O Oxigênio é comum na Terra, mas não no cosmos como um todo."
    },
    { 
        texto: "Qual destes fenômenos físicos NÃO funciona da forma descrita?", 
        opcoes: {
            A: "O som viaja mais rápido na água do que no ar",
            B: "O arco-íris é formado pela refração e reflexão da luz nas gotas de chuva",
            C: "Objetos mais pesados caem mais rápido no vácuo do que objetos leves",
            D: "A luz leva cerca de 8 minutos para viajar do Sol até a Terra" }, 
        impostora: "C",
        justificativa: "No vácuo (sem resistência do ar), todos os objetos caem exatamente na mesma velocidade, independentemente do peso, como demonstrado pelo experimento da pena e do martelo na Lua."
    },
    { 
        texto: "Sobre o corpo humano e os sentidos, qual destas afirmações é MENTIRA?", 
        opcoes: {
            A: "A língua humana é dividida em zonas específicas para doce, salgado, azedo e amargo",
            B: "Nós temos muito mais do que apenas cinco sentidos (como equilíbrio e termocpção)",
            C: "O maior órgão do corpo humano é a pele",
            D: "O sangue humano nunca é azul, mesmo quando está dentro das veias" }, 
        impostora: "A",
        justificativa: "O 'mapa da língua' é um mito científico antigo. Todas as partes da língua que possuem papilas gustativas podem sentir todos os sabores básicos simultaneamente."
    },
    { 
        texto: "Sobre o espaço sideral e a vida fora da Terra, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "O som não se propaga no vácuo do espaço",
            B: "Buracos negros sugam tudo ao seu redor como se fossem aspiradores de pó gigantes",
            C: "Um ano em Plutão dura cerca de 248 anos terrestres",
            D: "Existem estrelas que são menores do que alguns planetas do nosso sistema solar" }, 
        impostora: "B",
        justificativa: "Buracos negros não 'sugam' ativamente. Eles possuem gravidade como qualquer outro objeto massivo. Se o Sol fosse substituído por um buraco negro de mesma massa, a Terra continuaria orbitando-o normalmente, sem ser puxada para dentro."
    },
    { 
        texto: "Na área da genética e evolução, qual destas ideias está ERRADA?", 
        opcoes: {
            A: "Os seres humanos evoluíram diretamente dos chimpanzés modernos",
            B: "DNA e RNA são tipos diferentes de ácidos nucleicos",
            C: "Mutações genéticas podem ser benéficas, neutras ou prejudiciais",
            D: "Mais de 98% do DNA humano é idêntico ao dos chimpanzés" }, 
        impostora: "A",
        justificativa: "A evolução não diz que viemos dos chimpanzés, mas sim que humanos e chimpanzés compartilham um **ancestral comum** que viveu há milhões de anos. Somos 'primos' evolutivos, não descendentes diretos deles."
    },
    { 
        texto: "Sobre fenômenos da Terra e Geologia, qual destas opções NÃO é verdadeira?", 
        opcoes: {
            A: "O núcleo da Terra é tão quente quanto a superfície do Sol",
            B: "O Monte Everest é o ponto mais alto da Terra em relação ao nível do mar",
            C: "O diamante é o material mais duro e indestrutível que existe na natureza",
            D: "As placas tectônicas se movem aproximadamente na mesma velocidade que nossas unhas crescem" }, 
        impostora: "C",
        justificativa: "Embora o diamante seja o material natural mais **duro** (resistente a riscos), ele é quebradiço. Se você der uma martelada em um diamante, ele irá estilhaçar. Além disso, existem materiais sintéticos e compostos espaciais mais resistentes."
    },
    { 
        texto: "Sobre a água e suas propriedades químicas, qual destas afirmações é MENTIRA?", 
        opcoes: {
            A: "A água pura (destilada) não conduz eletricidade",
            B: "A água é a única substância que se expande ao congelar",
            C: "O som viaja cerca de 4 vezes mais rápido na água do que no ar",
            D: "A água quente pode congelar mais rápido do que a água fria em certas condições" }, 
        impostora: "B",
        justificativa: "Embora seja uma propriedade rara e famosa da água, ela não é a única. Elementos como o Antimônio, Bismuto e Gálio também se expandem ao passar do estado líquido para o sólido."
    },
    { 
        texto: "Sobre o cérebro humano, qual destas informações é FALSA?", 
        opcoes: {
            A: "Nós usamos apenas 10% da nossa capacidade cerebral",
            B: "O cérebro consome cerca de 20% da energia total do corpo",
            C: "Neurônios podem ser criados mesmo na fase adulta (neurogênese)",
            D: "O cérebro não possui receptores de dor próprios" }, 
        impostora: "A",
        justificativa: "O mito dos 10% é uma das maiores mentiras da neurociência. Imagens de ressonância mostram que usamos praticamente todas as partes do cérebro ao longo do dia, mesmo para tarefas simples ou durante o sono."
    },
    { 
        texto: "Sobre a Biologia e o Reino Animal, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "Os tubarões são peixes e não possuem ossos, seu esqueleto é de cartilagem",
            B: "O sangue das lulas e polvos é azul devido à presença de cobre",
            C: "Os morcegos são cegos e dependem exclusivamente do eco para se guiar",
            D: "As girafas têm o mesmo número de vértebras no pescoço que os seres humanos" }, 
        impostora: "C",
        justificativa: "É um mito que morcegos são cegos. Eles enxergam muito bem (algumas espécies até melhor que humanos em certas condições), mas usam a ecolocalização como uma ferramenta extra para caçar insetos no escuro total."
    },
    { 
        texto: "Sobre o Planeta Terra e sua atmosfera, qual destas opções está ERRADA?", 
        opcoes: {
            A: "O gás mais abundante na nossa atmosfera é o Oxigênio",
            B: "A Grande Muralha da China não é visível do espaço a olho nu",
            C: "O lugar mais seco do mundo é o Deserto do Atacama (ou partes da Antártida)",
            D: "Relâmpagos podem atingir o mesmo lugar duas vezes (e frequentemente o fazem)" }, 
        impostora: "A",
        justificativa: "O gás mais abundante é o Nitrogênio (cerca de 78%). O Oxigênio é o segundo, compondo apenas cerca de 21% da nossa atmosfera."
    },
    { 
        texto: "Na Física e Química, qual destes conceitos NÃO funciona como descrito?", 
        opcoes: {
            A: "O vidro é um sólido amorfo, não um líquido que escorre muito devagar",
            B: "Átomos são compostos majoritariamente por espaço vazio",
            C: "O fogo é um estado da matéria chamado plasma em todas as suas formas",
            D: "É impossível alcançar a temperatura do Zero Absoluto (0 Kelvin)" }, 
        impostora: "C",
        justificativa: "O fogo comum (de uma vela ou fogueira) é geralmente um gás incandescente. Ele só se torna plasma se atingir temperaturas extremamente altas, onde os elétrons são arrancados dos átomos, o que não ocorre em chamas comuns."
    },
    { 
        texto: "Sobre o Espaço e a exploração espacial, qual destas afirmações é MENTIRA?", 
        opcoes: {
            A: "Se você fosse exposto ao vácuo do espaço sem traje, seu corpo explodiria instantaneamente",
            B: "Não existe gravidade zero real no espaço; os astronautas flutuam porque estão em queda livre",
            C: "Júpiter é tão grande que todos os outros planetas do sistema solar caberiam dentro dele",
            D: "A luz de algumas estrelas que vemos hoje pode ter vindo de estrelas que já morreram" }, 
        impostora: "A",
        justificativa: "O corpo humano não explode no vácuo. A pele e o sistema circulatório são fortes o suficiente para manter a pressão interna. Você morreria por falta de oxigênio (asfixia) em cerca de 1 a 2 minutos, mas não explodiria."
    },
    { 
        texto: "Sobre a Saúde e o Corpo Humano, qual destas ideias é FALSA?", 
        opcoes: {
            A: "Tomar vitamina C não impede você de pegar um resfriado comum",
            B: "O suor humano tem um cheiro forte naturalmente para espantar predadores",
            C: "Nós perdemos calor por qualquer parte do corpo que esteja exposta, não só pela cabeça",
            D: "Antibióticos servem apenas para matar bactérias e não funcionam contra vírus" }, 
        impostora: "B",
        justificativa: "O suor é praticamente inodoro (composto de água e sais). O cheiro ruim ocorre quando as bactérias que vivem na nossa pele quebram as proteínas presentes no suor de certas glândulas. O suor em si não tem cheiro."
    },
    // --- PERGUNTAS SOBRE MATEMATICA ---
    { 
        texto: "Sobre os números e suas classificações, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "O número 1 é o menor número primo que existe",
            B: "O número 2 é o único número primo que também é par",
            C: "O número 0 é considerado um número par",
            D: "Números irracionais não podem ser escritos como uma fração de dois inteiros" }, 
        impostora: "A",
        justificativa: "Por definição matemática, números primos devem ser maiores que 1 e ter exatamente dois divisores (1 e ele mesmo). O número 1 tem apenas um divisor, portanto, o menor número primo é o 2."
    },
    { 
        texto: "Qual destas propriedades geométricas sobre triângulos está ERRADA?", 
        opcoes: {
            A: "A soma dos ângulos internos de qualquer triângulo no plano é sempre 180°",
            B: "Um triângulo equilátero possui todos os lados e ângulos iguais",
            C: "É possível construir um triângulo com lados medindo 2cm, 3cm e 10cm",
            D: "O Teorema de Pitágoras só se aplica a triângulos retângulos" }, 
        impostora: "C",
        justificativa: "Pela 'Desigualdade Triangular', a soma de dois lados de um triângulo deve ser sempre maior que o terceiro lado. No caso (2+3), a soma é 5, que é menor que 10, logo os lados não conseguem se fechar para formar um triângulo."
    },
    { 
        texto: "Sobre o número Pi ($\pi$), qual destas informações é MENTIRA?", 
        opcoes: {
            A: "Ele representa a razão entre o perímetro e o diâmetro de um círculo",
            B: "O valor exato de Pi é 3,14159, e as casas decimais param por aí",
            C: "Ele é um número irracional e transcendente",
            D: "O recorde mundial de memorização de casas decimais do Pi passa de 70.000 dígitos" }, 
        impostora: "B",
        justificativa: "Pi é um número infinito e não periódico. O valor 3,14159 é apenas uma aproximação; suas casas decimais continuam para sempre sem nunca entrar em uma sequência repetitiva finita."
    },
    { 
        texto: "Na lógica das operações matemáticas, qual destas afirmações NÃO é verdadeira?", 
        opcoes: {
            A: "Qualquer número (exceto o zero) elevado a zero é igual a 1",
            B: "A divisão de qualquer número por zero resulta em infinito",
            C: "A ordem das parcelas não altera a soma na adição",
            D: "Multiplicar dois números negativos resulta em um número positivo" }, 
        impostora: "B",
        justificativa: "A divisão por zero não é 'infinito', ela é considerada uma **indeterminação** ou 'não definida' na matemática convencional. Não existe um número que, multiplicado por zero, resulte em algo diferente de zero."
    },
    { 
        texto: "Sobre os polígonos, qual destas opções é a FALSA?", 
        opcoes: {
            A: "Um hexágono possui exatamente 6 lados",
            B: "Um quadrado é tecnicamente um tipo de retângulo",
            C: "A soma dos ângulos externos de qualquer polígono convexo é sempre 360°",
            D: "Um círculo é considerado um polígono de infinitos lados na geometria euclidiana" }, 
        impostora: "D",
        justificativa: "Embora possamos aproximar um círculo usando polígonos com muitos lados (limites), por definição, um polígono deve ter lados retos. O círculo é uma curva fechada e não se encaixa na definição estrita de polígono."
    },
    { 
        texto: "Sobre a lógica das operações e sinais, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "Subtrair um número negativo de outro número é o mesmo que somar o valor absoluto dele",
            B: "O produto de três números negativos será sempre um número negativo",
            C: "Dividir um número por 0,5 é o mesmo que multiplicar esse número por 2",
            D: "O quadrado de qualquer número real (positivo ou negativo) é sempre um número positivo" }, 
        impostora: "D",
        justificativa: "A regra diz que o quadrado de um número real não é negativo, mas existe uma exceção: o zero ($0^2 = 0$). Como o zero não é positivo nem negativo (é neutro), a afirmação de que o resultado é 'sempre positivo' torna-se falsa."
    },
    { 
        texto: "Qual destas afirmações sobre probabilidade e estatística está ERRADA?", 
        opcoes: {
            A: "Se você jogar uma moeda 10 vezes e der 'Cara' em todas, a chance de dar 'Coroa' na próxima é maior que 50%",
            B: "A média aritmética de um conjunto de dados pode ser um valor que não existe no conjunto",
            C: "A probabilidade de um evento impossível ocorrer é representada pelo número 0",
            D: "Em um lançamento de um dado comum de 6 faces, a chance de sair um número par é de 1/2" }, 
        impostora: "A",
        justificativa: "Isso é conhecido como a 'Falácia do Apostador'. Cada lançamento de moeda é um evento independente. A moeda não tem memória, então a chance continua sendo exatamente 50% para cada lado, não importa o que aconteceu antes."
    },
    { 
        texto: "Sobre unidades de medida e geometria, qual destas opções NÃO é verdadeira?", 
        opcoes: {
            A: "Um litro de água ocupa exatamente o volume de um decímetro cúbico ($1 dm^3$)",
            B: "Um hectare é uma unidade de área que equivale a 10.000 metros quadrados",
            C: "Em um relógio analógico, o ângulo formado entre os ponteiros às 3:00 é de exatamente 90°",
            D: "Um quilômetro quadrado ($1 km^2$) equivale a 1.000 metros quadrados" }, 
        impostora: "D",
        justificativa: "Um quilômetro quadrado equivale a $1.000m \times 1.000m$, o que resulta em 1.000.000 (um milhão) de metros quadrados. Muita gente confunde a conversão linear (1km = 1000m) com a de área."
    },
    { 
        texto: "Na teoria dos conjuntos e números, qual destas classificações está INCORRETA?", 
        opcoes: {
            A: "Todo número inteiro é também um número racional",
            B: "O conjunto dos números naturais inclui todos os números negativos",
            C: "Dízimas periódicas (como 0,333...) são consideradas números racionais",
            D: "A raiz quadrada de 2 ($\sqrt{2}$) é um exemplo clássico de número irracional" }, 
        impostora: "B",
        justificativa: "O conjunto dos números naturais ($\mathbb{N}$) compreende apenas os números inteiros não-negativos ($0, 1, 2, 3...$). Os números negativos pertencem ao conjunto dos Números Inteiros ($\mathbb{Z}$)."
    },
    { 
        texto: "Sobre o conceito de infinito e limites, qual destas ideias é MENTIRA?", 
        opcoes: {
            A: "Existem infinitos números entre o 0 e o 1",
            B: "O infinito não é um número, mas sim um conceito de algo sem fim",
            C: "Alguns infinitos são maiores do que outros (como o conjunto dos reais vs. naturais)",
            D: "Ao somar 1 a um número infinito, o resultado será um 'infinito maior'" }, 
        impostora: "D",
        justificativa: "Na matemática dos números transfinitos, somar 1 ao infinito (denotado como $\aleph_0$) não cria um infinito maior; o resultado continua sendo o mesmo nível de infinito. Para obter um infinito de ordem superior, seriam necessárias outras operações, como o conjunto das partes."
    },
    { 
        texto: "Sobre a geometria de sólidos (3D), qual destas afirmações é FALSA?", 
        opcoes: {
            A: "Um cubo possui exatamente 12 arestas",
            B: "Uma esfera não possui nenhuma face plana, vértice ou aresta",
            C: "Um cilindro é considerado um poliedro",
            D: "Um cone possui apenas um vértice (o ápice)" }, 
        impostora: "C",
        justificativa: "Poliedros são sólidos cujas faces são todas polígonos (planas e retas). Como o cilindro tem superfícies curvas, ele pertence ao grupo dos 'corpos redondos' e não dos poliedros."
    },
    { 
        texto: "Na aritmética e propriedades dos números, qual destas regras está ERRADA?", 
        opcoes: {
            A: "Um número é divisível por 3 se a soma de seus algarismos for divisível por 3",
            B: "Todo número terminado em 0 é divisível por 2, 5 e 10",
            C: "O número 1 é o elemento neutro da multiplicação",
            D: "A raiz quadrada de um número negativo resulta sempre em 0" }, 
        impostora: "D",
        justificativa: "No conjunto dos Números Reais ($\mathbb{R}$), não existe raiz quadrada de número negativo. No conjunto dos Números Complexos ($\mathbb{C}$), o resultado envolve a unidade imaginária ($i$). Nunca resulta em 0."
    },
    { 
        texto: "Sobre ângulos e trigonometria, qual destas afirmações é MENTIRA?", 
        opcoes: {
            A: "Ângulos suplementares são dois ângulos que somados resultam em 180°",
            B: "O seno de um ângulo de 90° é igual a 0",
            C: "Um ângulo reto mede exatamente 90 graus",
            D: "O cosseno de 0° é igual a 1" }, 
        impostora: "B",
        justificativa: "O seno de 90° é igual a 1. Quem é igual a 0 nesse ângulo é o cosseno ($\cos 90° = 0$). É uma confusão clássica nas tabelas trigonométricas."
    },
    { 
        texto: "Qual destas afirmações sobre lógica e conjuntos é a FALSA?", 
        opcoes: {
            A: "A intersecção de dois conjuntos são os elementos que aparecem em ambos ao mesmo tempo",
            B: "Um conjunto vazio é um subconjunto de qualquer outro conjunto",
            C: "A negação de 'Todos os alunos passaram' é 'Nenhum aluno passou'",
            D: "Se A está contido em B, e B está contido em C, então A está contido em C" }, 
        impostora: "C",
        justificativa: "Na lógica matemática, a negação de 'Todos' não é 'Nenhum', mas sim 'Pelo menos um não'. Para provar que a frase é falsa, basta encontrar um único aluno que não passou, e não necessariamente todos."
    },
    { 
        texto: "Sobre o sistema de numeração e bases, qual destas opções NÃO é verdadeira?", 
        opcoes: {
            A: "O sistema binário utiliza apenas os algarismos 0 e 1",
            B: "No sistema hexadecimal, a letra 'A' representa o número 10",
            C: "O número romano 'LL' representa o número 100",
            D: "Nosso sistema decimal é posicional, ou seja, o valor do algarismo depende de onde ele está" }, 
        impostora: "C",
        justificativa: "Nos números romanos, os símbolos V, L e D nunca podem ser repetidos para formar um número. O número 100 é representado apenas pela letra 'C'. Escrever 'LL' é gramaticalmente incorreto no sistema romano."
    },
    // --- PERGUNTAS SOBRE ATUALIDADE ---
    { 
        texto: "Sobre a história do Cinema e o Oscar, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "O filme 'Parasita' foi o primeiro longa de língua não inglesa a vencer a categoria de Melhor Filme",
            B: "Walt Disney é a pessoa que detém o recorde de maior número de estatuetas do Oscar na história",
            C: "O filme 'Titanic' detém sozinho o recorde de maior vencedor de Oscars de todos os tempos",
            D: "Meryl Streep é a atriz com o maior número de indicações ao Oscar até hoje" }, 
        impostora: "C",
        justificativa: "Titanic não detém o recorde sozinho. Ele divide o posto de maior vencedor (11 estatuetas) com 'Ben-Hur' (1959) e 'O Senhor dos Anéis: O Retorno do Rei' (2003)."
    },
    { 
        texto: "Na História da Arte e seus grandes mestres, qual destas opções está ERRADA?", 
        opcoes: {
            A: "Vincent van Gogh vendeu apenas um quadro (ou muito poucos) enquanto estava vivo",
            B: "Leonardo da Vinci levou mais de 10 anos para terminar a pintura da Monalisa",
            C: "Pablo Picasso é o principal expoente do movimento artístico conhecido como Surrealismo",
            D: "Michelangelo pintou o teto da Capela Sistina deitado de costas em andaimes" }, 
        impostora: "C",
        justificativa: "Embora Picasso tenha tido fases variadas, ele é o pai e principal expoente do **Cubismo**. O maior nome do Surrealismo é Salvador Dalí."
    },
    { 
        texto: "Sobre Atualidades e Geografia Política, qual destas afirmações é MENTIRA?", 
        opcoes: {
            A: "A Organização das Nações Unidas (ONU) tem sua sede principal localizada em Genebra, na Suíça",
            B: "A Índia superou a China e se tornou o país mais populoso do mundo recentemente",
            C: "O Reino Unido não faz mais parte da União Europeia após o processo do Brexit",
            D: "A OTAN é uma aliança militar que conta com países da América do Norte e da Europa" }, 
        impostora: "A",
        justificativa: "A sede principal da ONU fica em **Nova York**, nos Estados Unidos. Genebra abriga uma importante sede europeia, mas a sede mundial oficial é em território americano."
    },
    { 
        texto: "Sobre grandes franquias do Cinema, qual destas informações NÃO é verdadeira?", 
        opcoes: {
            A: "Em 'Star Wars', a famosa frase 'Luke, eu sou seu pai' nunca foi dita exatamente assim no filme original",
            B: "O personagem James Bond (007) já foi interpretado por mais de 5 atores diferentes no cinema oficial",
            C: "A Marvel Studios pertence à Disney, enquanto os direitos cinematográficos do Homem-Aranha pertencem à Sony",
            D: "O primeiro filme da saga Harry Potter foi dirigido por Steven Spielberg" }, 
        impostora: "D",
        justificativa: "Steven Spielberg chegou a ser convidado, mas recusou. O diretor do primeiro filme (A Pedra Filosofal) foi Chris Columbus."
    },
    { 
        texto: "Sobre Redes Sociais e Tecnologia atual, qual destas opções é a FALSA?", 
        opcoes: {
            A: "O YouTube foi criado originalmente por ex-funcionários do PayPal",
            B: "A rede social TikTok pertence a uma empresa chinesa chamada ByteDance",
            C: "O Instagram pertencia ao Google antes de ser comprado pelo Facebook (Meta)",
            D: "O Twitter mudou oficialmente seu nome e marca para 'X' sob o comando de Elon Musk" }, 
        impostora: "C",
        justificativa: "O Instagram nunca pertenceu ao Google. Ele era uma startup independente fundada por Kevin Systrom e Mike Krieger até ser comprada diretamente pelo Facebook em 2012."
    },
    { 
        texto: "Sobre a premiação do Oscar e recordes individuais, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "O ator Jack Nicholson é o homem com o maior número de indicações ao Oscar na história",
            B: "Fernanda Montenegro foi a primeira atriz latino-americana indicada ao Oscar de Melhor Atriz",
            C: "Anthony Hopkins é o ator mais velho a vencer um Oscar de atuação",
            D: "Katherine Hepburn é a recordista absoluta de estatuetas de Melhor Atriz (venceu 4 vezes)" }, 
        impostora: "B",
        justificativa: "Embora Fernanda Montenegro tenha sido a primeira brasileira (e única até hoje) indicada, a primeira latino-americana a concorrer na categoria de Melhor Atriz foi a mexicana **Salma Hayek** (por Frida), ou tecnicamente, se considerarmos coadjuvantes e outras categorias, nomes como Katy Jurado vieram antes."
    },
    { 
        texto: "Na história da Música e Bandas Icônicas, qual destas opções está ERRADA?", 
        opcoes: {
            A: "A banda Queen se apresentou no primeiro Rock in Rio, em 1985",
            B: "Os Beatles detêm o recorde de maior número de álbuns no topo das paradas da Billboard",
            C: "Michael Jackson compôs a música 'We Are the World' sozinho em uma única noite",
            D: "A banda Nirvana é considerada a principal precursora do movimento Grunge de Seattle" }, 
        impostora: "C",
        justificativa: "Michael Jackson não escreveu 'We Are the World' sozinho. A música foi composta em parceria com **Lionel Richie**. Eles trabalharam juntos na composição para o projeto USA for Africa."
    },
    { 
        texto: "Sobre a Arte Renascentista e seus segredos, qual destas afirmações é MENTIRA?", 
        opcoes: {
            A: "A estátua 'Davi', de Michelangelo, foi esculpida em um bloco de mármore que outros artistas haviam rejeitado",
            B: "Leonardo da Vinci escrevia suas notas de forma invertida (escrita em espelho)",
            C: "A pintura 'A Última Ceia' foi feita usando uma técnica de afresco tradicional que dura séculos intacta",
            D: "O nascimento de Vênus, de Botticelli, foi uma das primeiras obras pintadas em tela (canvas) na Toscana" }, 
        impostora: "C",
        justificativa: "Leonardo da Vinci **não** usou o afresco tradicional (que envolve pintar sobre o reboco úmido). Ele experimentou uma técnica de têmpera e óleo sobre a parede seca. Por causa disso, a obra começou a se deteriorar apenas alguns anos depois de pronta."
    },
    { 
        texto: "Sobre o Universo Cinematográfico (MCU e outros), qual destas informações NÃO é verdadeira?", 
        opcoes: {
            A: "O primeiro filme lançado oficialmente no MCU foi 'Homem de Ferro' (2008)",
            B: "O ator Hugh Jackman detém o recorde mundial pelo tempo mais longo interpretando um super-herói da Marvel nos cinemas",
            C: "O vilão Thanos foi criado por Stan Lee e Jack Kirby nos quadrinhos da década de 60",
            D: "O filme 'Vingadores: Ultimato' foi, por um tempo, a maior bilheteria da história do cinema" }, 
        impostora: "C",
        justificativa: "Thanos não foi criado pela dupla Stan Lee e Jack Kirby. Ele foi criado por **Jim Starlin**, aparecendo pela primeira vez em 1973 (na revista Iron Man #55)."
    },
    { 
        texto: "Sobre Atualidades e Tecnologia de Inteligência Artificial, qual destas opções é a FALSA?", 
        opcoes: {
            A: "O ChatGPT foi desenvolvido pela empresa OpenAI, que tem a Microsoft como uma de suas maiores investidoras",
            B: "A Deep Blue, da IBM, foi a primeira IA a vencer um campeão mundial de xadrez (Garry Kasparov)",
            C: "O termo 'Inteligência Artificial' foi cunhado pela primeira vez no ano de 2010 com o surgimento do iPhone",
            D: "Modelos de linguagem como o GPT-4 são treinados com trilhões de parâmetros e dados da internet" }, 
        impostora: "C",
        justificativa: "O termo 'Inteligência Artificial' é muito mais antigo. Ele foi cunhado por **John McCarthy em 1956**, durante a famosa Conferência de Dartmouth. A área já existia décadas antes dos smartphones."
    },
    { 
        texto: "Sobre a história da Disney e suas animações, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "O filme 'Branca de Neve e os Sete Anões' foi o primeiro longa-metragem de animação da história",
            B: "Mickey Mouse não foi o primeiro personagem criado por Walt Disney; antes dele existia o Coelho Oswald",
            C: "A animação 'O Rei Leão' foi acusada de plagiar uma série japonesa chamada 'Kimba, o Leão Branco'",
            D: "O personagem Pateta foi criado originalmente com o nome de 'Dippy Dawg'" }, 
        impostora: "A",
        justificativa: "Embora seja o mais famoso e o primeiro da Disney, 'Branca de Neve' (1937) não foi o primeiro do mundo. Esse título pertence ao filme argentino 'El Apóstol' (1917), de Quirino Cristiani, feito com recortes de papel."
    },
    { 
        texto: "Na história do Rock e da Música Pop, qual destas opções está ERRADA?", 
        opcoes: {
            A: "Freddie Mercury, vocalista do Queen, nasceu em Zanzibar (na atual Tanzânia)",
            B: "A música 'Yesterday', dos Beatles, é uma das canções com mais versões cover na história",
            C: "O álbum 'Thriller', de Michael Jackson, é o disco mais vendido de todos os tempos",
            D: "Elvis Presley escreveu a maioria de seus grandes sucessos, como 'Hound Dog' e 'Suspicious Minds'" }, 
        impostora: "D",
        justificativa: "Elvis Presley raramente escrevia suas próprias músicas. Ele era um intérprete extraordinário, mas a maioria de seus sucessos foi escrita por compositores contratados, como a dupla Jerry Leiber e Mike Stoller."
    },
    { 
        texto: "Sobre a Arte Contemporânea e Museus, qual destas afirmações é MENTIRA?", 
        opcoes: {
            A: "O Museu do Louvre, em Paris, já foi originalmente uma fortaleza militar",
            B: "A obra 'A Fonte' (um mictório assinado como R. Mutt) foi criada por Andy Warhol",
            C: "O MASP, em São Paulo, possui a maior coleção de arte europeia do Hemisfério Sul",
            D: "Banksy é um artista de rua britânico cuja verdadeira identidade permanece anônima" }, 
        impostora: "B",
        justificativa: "A obra 'A Fonte' é de **Marcel Duchamp**, um dos principais nomes do movimento Dadaísta. Andy Warhol é o ícone da Pop Art, famoso pelas latas de sopa Campbell e retratos da Marilyn Monroe."
    },
    { 
        texto: "Sobre a franquia 'Harry Potter', qual destas informações NÃO é verdadeira?", 
        opcoes: {
            A: "J.K. Rowling teve a ideia da história enquanto estava em um trem parado",
            B: "A autora exigiu que o elenco dos filmes fosse composto majoritariamente por atores britânicos",
            C: "O ator que interpretou Alvo Dumbledore foi o mesmo nos oito filmes da saga",
            D: "O título original do primeiro livro no Reino Unido é 'Harry Potter and the Philosopher's Stone'" }, 
        impostora: "C",
        justificativa: "O ator original, Richard Harris, faleceu após o segundo filme (*A Câmara Secreta*). Ele foi substituído por Michael Gambon a partir de *O Prisioneiro de Azkaban* até o final da série."
    },
    { 
        texto: "Sobre Cinema e Efeitos Especiais, qual destas opções é a FALSA?", 
        opcoes: {
            A: "O filme 'Jurassic Park' (1993) usa mais animatrônicos (robôs) do que computação gráfica (CGI)",
            B: "O primeiro filme a usar CGI de forma extensa para criar um personagem principal foi 'Toy Story'",
            C: "A trilogia 'O Senhor dos Anéis' foi filmada inteiramente na Austrália devido às paisagens exóticas",
            D: "Alfred Hitchcock nunca venceu um Oscar de Melhor Diretor, apesar de ter sido indicado cinco vezes" }, 
        impostora: "C",
        justificativa: "A trilogia foi filmada inteiramente na **Nova Zelândia**, terra natal do diretor Peter Jackson. A Austrália é um país vizinho, mas não foi o local das filmagens da Terra-Média."
    },
    { 
        texto: "Sobre a história da Disney e suas animações, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "O filme 'Branca de Neve e os Sete Anões' foi o primeiro longa-metragem de animação da história",
            B: "Mickey Mouse não foi o primeiro personagem criado por Walt Disney; antes dele existia o Coelho Oswald",
            C: "A animação 'O Rei Leão' foi acusada de plagiar uma série japonesa chamada 'Kimba, o Leão Branco'",
            D: "O personagem Pateta foi criado originalmente com o nome de 'Dippy Dawg'" }, 
        impostora: "A",
        justificativa: "Embora seja o mais famoso e o primeiro da Disney, 'Branca de Neve' (1937) não foi o primeiro do mundo. Esse título pertence ao filme argentino 'El Apóstol' (1917), de Quirino Cristiani, feito com recortes de papel."
    },
    { 
        texto: "Na história do Rock e da Música Pop, qual destas opções está ERRADA?", 
        opcoes: {
            A: "Freddie Mercury, vocalista do Queen, nasceu em Zanzibar (na atual Tanzânia)",
            B: "A música 'Yesterday', dos Beatles, é uma das canções com mais versões cover na história",
            C: "O álbum 'Thriller', de Michael Jackson, é o disco mais vendido de todos os tempos",
            D: "Elvis Presley escreveu a maioria de seus grandes sucessos, como 'Hound Dog' e 'Suspicious Minds'" }, 
        impostora: "D",
        justificativa: "Elvis Presley raramente escrevia suas próprias músicas. Ele era um intérprete extraordinário, mas a maioria de seus sucessos foi escrita por compositores contratados, como a dupla Jerry Leiber e Mike Stoller."
    },
    { 
        texto: "Sobre a Arte Contemporânea e Museus, qual destas afirmações é MENTIRA?", 
        opcoes: {
            A: "O Museu do Louvre, em Paris, já foi originalmente uma fortaleza militar",
            B: "A obra 'A Fonte' (um mictório assinado como R. Mutt) foi criada por Andy Warhol",
            C: "O MASP, em São Paulo, possui a maior coleção de arte europeia do Hemisfério Sul",
            D: "Banksy é um artista de rua britânico cuja verdadeira identidade permanece anônima" }, 
        impostora: "B",
        justificativa: "A obra 'A Fonte' é de **Marcel Duchamp**, um dos principais nomes do movimento Dadaísta. Andy Warhol é o ícone da Pop Art, famoso pelas latas de sopa Campbell e retratos da Marilyn Monroe."
    },
    { 
        texto: "Sobre a franquia 'Harry Potter', qual destas informações NÃO é verdadeira?", 
        opcoes: {
            A: "J.K. Rowling teve a ideia da história enquanto estava em um trem parado",
            B: "A autora exigiu que o elenco dos filmes fosse composto majoritariamente por atores britânicos",
            C: "O ator que interpretou Alvo Dumbledore foi o mesmo nos oito filmes da saga",
            D: "O título original do primeiro livro no Reino Unido é 'Harry Potter and the Philosopher's Stone'" }, 
        impostora: "C",
        justificativa: "O ator original, Richard Harris, faleceu após o segundo filme (A Câmara Secreta). Ele foi substituído por Michael Gambon a partir de O Prisioneiro de Azkaban até o final da série."
    },
    { 
        texto: "Sobre Cinema e Efeitos Especiais, qual destas opções é a FALSA?", 
        opcoes: {
            A: "O filme 'Jurassic Park' (1993) usa mais animatrônicos (robôs) do que computação gráfica (CGI)",
            B: "O primeiro filme a usar CGI de forma extensa para criar um personagem principal foi 'Toy Story'",
            C: "A trilogia 'O Senhor dos Anéis' foi filmada inteiramente na Austrália devido às paisagens exóticas",
            D: "Alfred Hitchcock nunca venceu um Oscar de Melhor Diretor, apesar de ter sido indicado cinco vezes" }, 
        impostora: "C",
        justificativa: "A trilogia foi filmada inteiramente na **Nova Zelândia**, terra natal do diretor Peter Jackson. A Austrália é um país vizinho, mas não foi o local das filmagens da Terra-Média."
    },
    // --- PERGUNTAS SOBRE GEOGRAFIA E HISTORIA ---
    { 
        texto: "Sobre a Geografia do Brasil, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "O Brasil faz fronteira com todos os países da América do Sul, exceto Chile e Equador",
            B: "O ponto mais alto do Brasil é o Pico da Neblina, localizado na Serra do Imeri",
            C: "O Monte Caburaí, em Roraima, é o ponto mais ao norte do território brasileiro",
            D: "O Rio Amazonas é o mais longo do mundo, mas o Rio Nilo possui o maior volume de água" }, 
        impostora: "D",
        justificativa: "A afirmação está invertida. O Rio Amazonas é o maior do mundo tanto em extensão quanto em volume de água. O Rio Nilo é historicamente o segundo mais longo, mas não chega nem perto do volume de água do Amazonas."
    },
    { 
        texto: "Na História do Brasil, qual destas opções está ERRADA?", 
        opcoes: {
            A: "O Brasil foi o último país das Américas a abolir a escravidão oficialmente",
            B: "A Proclamação da República em 1889 foi um movimento liderado por militares e civis com grande apoio popular nas ruas",
            C: "Dom Pedro II governou o Brasil por quase 50 anos durante o Segundo Reinado",
            D: "A Guerra do Paraguai foi o maior conflito armado internacional ocorrido na América do Sul" }, 
        impostora: "B",
        justificativa: "A Proclamação da República foi, na verdade, um golpe militar com apoio de elites agrárias. Historiadores descrevem que o povo assistiu a tudo 'bestializado', sem entender ou participar ativamente do evento."
    },
    { 
        texto: "Sobre a Segunda Guerra Mundial, qual destas informações é MENTIRA?", 
        opcoes: {
            A: "A Alemanha Nazista e a União Soviética assinaram um pacto de não agressão antes do início da guerra",
            B: "A Itália foi um dos países que compunham o Eixo junto com Alemanha e Japão",
            C: "O ataque japonês a Pearl Harbor foi o evento que motivou a entrada oficial dos EUA na guerra",
            D: "O Dia D foi a maior invasão marítima da história e ocorreu nas praias da Itália" }, 
        impostora: "D",
        justificativa: "O Dia D (Operação Overlord) ocorreu nas praias da **Normandia, na França**, não na Itália. Foi o desembarque das tropas aliadas para libertar a França ocupada pelos nazistas."
    },
    { 
        texto: "Qual destas curiosidades geográficas mundiais NÃO é verdadeira?", 
        opcoes: {
            A: "A Rússia possui um território tão vasto que atravessa 11 fusos horários diferentes",
            B: "O Deserto do Saara é o maior deserto do mundo em extensão territorial",
            C: "A Turquia é um país transcontinental, possuindo terras tanto na Europa quanto na Ásia",
            D: "O Mar Morto é, na verdade, um lago de água salgada e o ponto mais baixo da superfície terrestre" }, 
        impostora: "B",
        justificativa: "Cientificamente, um deserto é definido pela baixa precipitação. Portanto, o maior deserto do mundo é a **Antártida**, seguida pelo Ártico. O Saara é apenas o maior deserto *quente*."
    },
    { 
        texto: "Sobre a Revolução Industrial, qual destas afirmações é a FALSA?", 
        opcoes: {
            A: "A Inglaterra foi o berço da revolução devido às suas reservas de carvão e ferro",
            B: "O motor a vapor foi a principal inovação que impulsionou a mecanização das fábricas",
            C: "A revolução eliminou imediatamente o trabalho infantil devido ao aumento da produtividade das máquinas",
            D: "O movimento Ludista consistia em trabalhadores que quebravam máquinas por acreditarem que elas roubavam seus empregos" }, 
        impostora: "C",
        justificativa: "Pelo contrário, a Revolução Industrial inicialmente intensificou o trabalho infantil. Crianças eram usadas em minas e fábricas têxteis por serem pequenas e receberem salários muito menores; leis contra isso só surgiram décadas depois."
    },
    { 
        texto: "Sobre as Grandes Navegações e a Era dos Descobrimentos, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "Cristóvão Colombo morreu acreditando que tinha chegado às Índias, e não a um novo continente",
            B: "Pedro Álvares Cabral foi o primeiro navegador europeu a chegar à Índia contornando a África",
            C: "O Tratado de Tordesilhas dividiu as terras 'descobertas' entre Portugal e Espanha",
            D: "Fernão de Magalhães liderou a primeira expedição que completou a circum-navegação da Terra" }, 
        impostora: "B",
        justificativa: "O primeiro navegador a chegar à Índia contornando o Cabo da Boa Esperança foi **Vasco da Gama**, em 1498. Cabral liderou a segunda expedição (aquela que passou pelo Brasil em 1500) com o objetivo de consolidar a rota de Vasco da Gama."
    },
    { 
        texto: "Sobre a Geografia da Ásia, qual destas informações está ERRADA?", 
        opcoes: {
            A: "O Monte Everest, a montanha mais alta do mundo, fica na fronteira entre o Nepal e a China",
            B: "O Japão é um arquipélago composto por quatro ilhas principais e milhares de ilhas menores",
            C: "O Rio Yangtzé é o maior rio do continente asiático e corre inteiramente dentro da China",
            D: "O Sudeste Asiático é a única região do mundo onde o clima é exclusivamente desértico" }, 
        impostora: "D",
        justificativa: "O Sudeste Asiático (onde ficam Tailândia, Vietnã, Indonésia) possui um clima predominantemente **tropical e equatorial**, com florestas densas e monções (muita chuva). Não há desertos nessa região específica."
    },
    { 
        texto: "Na História Antiga, qual destas afirmações sobre o Egito é MENTIRA?", 
        opcoes: {
            A: "As Pirâmides de Gizé foram construídas por escravos hebreus durante o reinado de Cleópatra",
            B: "O Rio Nilo era considerado sagrado e essencial para a agricultura devido às suas cheias anuais",
            C: "A escrita egípcia utilizava símbolos chamados hieróglifos, que foram decifrados pela Pedra de Rosetta",
            D: "Os egípcios acreditavam na vida após a morte e, por isso, praticavam a mumificação" }, 
        impostora: "A",
        justificativa: "As pirâmides foram construídas milhares de anos antes de Cleópatra e do Êxodo bíblico. Evidências arqueológicas modernas sugerem que os construtores eram trabalhadores remunerados e camponeses recrutados, e não escravos."
    },
    { 
        texto: "Sobre recordes e extremos geográficos, qual destas opções NÃO é verdadeira?", 
        opcoes: {
            A: "O maior país do mundo em extensão territorial é a Rússia",
            B: "A Austrália é o único país do mundo que ocupa um continente inteiro sozinho",
            C: "O Alasca é o maior estado dos Estados Unidos em área, mas o menos populoso",
            D: "O Canal do Panamá liga o Oceano Atlântico ao Oceano Índico através da América Central" }, 
        impostora: "D",
        justificativa: "O Canal do Panamá liga o Oceano Atlântico ao **Oceano Pacífico**. O Oceano Índico fica do outro lado do mundo, entre a África, a Ásia e a Oceania."
    },
    { 
        texto: "Sobre a Guerra Fria, qual destas afirmações é a FALSA?", 
        opcoes: {
            A: "O Muro de Berlim foi construído para impedir que os habitantes do lado oriental fugissem para o ocidental",
            B: "A Crise dos Mísseis em Cuba foi o momento em que o mundo chegou mais perto de uma guerra nuclear",
            C: "A Guerra Fria terminou oficialmente com a queda do Império Romano do Oriente no século XV",
            D: "A Corrida Espacial resultou na chegada do homem à Lua pela missão Apollo 11 em 1969" }, 
        impostora: "C",
        justificativa: "A Guerra Fria foi um conflito do século XX (1947–1991). O Império Romano do Oriente (Bizantino) caiu em 1453, marcando o fim da Idade Média, o que não tem nenhuma relação com o conflito entre EUA e URSS."
    },
    { 
        texto: "Sobre a Geografia da Europa, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "O Rio Danúbio atravessa ou faz fronteira com 10 países diferentes",
            B: "O Vaticano é o menor país do mundo e fica localizado dentro de Roma",
            C: "A Islândia é uma ilha vulcânica que possui vulcões ativos e geleiras",
            D: "O Reino Unido é composto apenas pela Inglaterra e pela Escócia" }, 
        impostora: "D",
        justificativa: "O Reino Unido é composto por **quatro** nações: Inglaterra, Escócia, País de Gales e Irlanda do Norte. Muita gente esquece dos últimos dois ou confunde Reino Unido com Grã-Bretanha."
    },
    { 
        texto: "Na História do Brasil Imperial, qual destas opções está ERRADA?", 
        opcoes: {
            A: "D. Pedro I declarou a independência do Brasil às margens do Riacho Ipiranga",
            B: "A Lei Áurea foi assinada pelo Imperador D. Pedro II enquanto ele estava em viagem",
            C: "A Guerra dos Farrapos foi o conflito mais longo da história do Império",
            D: "Carlota Joaquina era a mãe de D. Pedro I e esposa de D. João VI" }, 
        impostora: "B",
        justificativa: "A Lei Áurea foi assinada pela **Princesa Isabel**, que era a regente do Brasil na época, justamente porque seu pai, D. Pedro II, estava na Europa para tratar da saúde."
    },
    { 
        texto: "Sobre a Antiguidade Clássica (Grécia e Roma), qual destas afirmações é MENTIRA?", 
        opcoes: {
            A: "A democracia surgiu em Atenas, onde todos os habitantes podiam votar",
            B: "O Império Romano chegou a dominar quase toda a bacia do Mar Mediterrâneo",
            C: "Esparta era uma cidade-estado focada quase inteiramente no treinamento militar",
            D: "Júlio César foi um ditador romano que foi assassinado por senadores" }, 
        impostora: "A",
        justificativa: "A democracia ateniense era restrita. Apenas **cidadãos** (homens, filhos de pais atenienses e livres) podiam votar. Mulheres, escravos e estrangeiros (metecos) não tinham direitos políticos."
    },
    { 
        texto: "Qual destas curiosidades sobre a Geografia da África é a FALSA?", 
        opcoes: {
            A: "A África é o único continente atravessado tanto pelo Meridiano de Greenwich quanto pela Linha do Equador",
            B: "O Monte Kilimanjaro é o ponto mais alto do continente e fica na Tanzânia",
            C: "A Nigéria é o país mais populoso do continente africano",
            D: "O Egito é o único país da África que possui pirâmides antigas em seu território" }, 
        impostora: "D",
        justificativa: "O **Sudão** possui muito mais pirâmides do que o Egito (cerca de 200 contra 120 do Egito). Elas foram construídas pelo Reino de Kush, mas são menos famosas mundialmente."
    },
    { 
        texto: "Sobre a Revolução Francesa, qual destas afirmações é a FALSA?", 
        opcoes: {
            A: "A queda da Bastilha é considerada o marco inicial do movimento",
            B: "Napoleão Bonaparte foi o rei que foi guilhotinado durante o Terror",
            C: "O lema da revolução era 'Liberdade, Igualdade e Fraternidade'",
            D: "A Declaração dos Direitos do Homem e do Cidadão foi um dos seus principais documentos" }, 
        impostora: "B",
        justificativa: "O rei guilhotinado foi **Luís XVI**. Napoleão Bonaparte surgiu no final da revolução como um general que eventualmente deu um golpe (18 de Brumário) e se tornou Imperador."
    },
    { 
        texto: "Sobre a Geografia da América do Sul, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "O Deserto do Atacama, no Chile, é considerado o lugar mais seco do planeta",
            B: "A Cordilheira dos Andes atravessa sete países diferentes no continente",
            C: "O Lago Titicaca, na fronteira entre Peru e Bolívia, é o lago navegável mais alto do mundo",
            D: "O Brasil é o único país da América do Sul que possui o português como língua oficial" }, 
        impostora: "D",
        justificativa: "Embora o Brasil seja o único país *independente* que fala português, a **Guiana Francesa** (que é um departamento ultramarino da França) fala francês, e o Suriname fala holandês. No entanto, o português também é falado em comunidades de fronteira e o Brasil divide o continente com países que falam inglês (Guiana) e até dialetos indígenas oficiais."
    },
    { 
        texto: "Na História da Independência dos Estados Unidos, qual destas opções está ERRADA?", 
        opcoes: {
            A: "A Declaração de Independência foi assinada no dia 4 de julho de 1776",
            B: "George Washington foi o principal autor do texto da Declaração de Independência",
            C: "A França apoiou os colonos americanos na guerra contra a Inglaterra",
            D: "As 'Treze Colônias' originais ficavam localizadas na costa leste do atual território dos EUA" }, 
        impostora: "B",
        justificativa: "O principal autor da Declaração de Independência foi **Thomas Jefferson**. George Washington foi o comandante do exército continental e, mais tarde, o primeiro presidente, mas não o autor do documento."
    },
    { 
        texto: "Sobre a Geografia da Oceania, qual destas afirmações é MENTIRA?", 
        opcoes: {
            A: "A Austrália é o maior país da Oceania e o sexto maior do mundo",
            B: "A Nova Zelândia é composta por duas ilhas principais: a Ilha do Norte e a Ilha do Sul",
            C: "A Grande Barreira de Corais é a maior estrutura viva do mundo e pode ser vista do espaço",
            D: "Todos os países da Oceania estão localizados inteiramente no Hemisfério Sul" }, 
        impostora: "D",
        justificativa: "Existem nações da Oceania que cruzam a Linha do Equador ou estão totalmente no Hemisfério Norte, como os **Estados Federados da Micronésia**, as Ilhas Marshall e Palau."
    },
    { 
        texto: "Sobre a Era Vargas no Brasil, qual destas opções NÃO é verdadeira?", 
        opcoes: {
            A: "Getúlio Vargas governou o Brasil por 15 anos ininterruptos em seu primeiro período (1930-1945)",
            B: "A Consolidação das Leis do Trabalho (CLT) foi criada durante o governo de Vargas",
            C: "O voto feminino foi instituído no Brasil através do Código Eleitoral de 1932",
            D: "Vargas assumiu o poder em 1930 após vencer as eleições democráticas contra Júlio Prestes" }, 
        impostora: "D",
        justificativa: "Vargas **perdeu** a eleição de 1930 para Júlio Prestes. Ele assumiu o poder através de um movimento armado conhecido como a Revolução de 1930, impedindo a posse do presidente eleito."
    },
    { 
        texto: "Sobre o Império Mongol, qual destas afirmações é a FALSA?", 
        opcoes: {
            A: "Foi o maior império de terras contínuas da história da humanidade",
            B: "Genghis Khan foi o fundador e o primeiro grande Khan do império",
            C: "Os mongóis nunca conseguiram conquistar a China, sendo barrados pela Grande Muralha",
            D: "A 'Pax Mongolica' permitiu um período de paz e comércio intenso pela Rota da Seda" }, 
        impostora: "C",
        justificativa: "Os mongóis conquistaram a China completamente. O neto de Genghis Khan, **Kublai Khan**, inclusive fundou a Dinastia Yuan na China e se tornou Imperador chinês."
    },
    { 
        texto: "Sobre a Geografia dos Oceanos, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "O Oceano Pacífico é o maior e mais profundo da Terra",
            B: "A Fossa das Marianas é o ponto mais profundo conhecido, chegando a mais de 11km de profundidade",
            C: "O Oceano Atlântico é o que possui a maior salinidade média entre todos os oceanos",
            D: "O Oceano Índico é o único que não banha nenhum país do continente africano" }, 
        impostora: "D",
        justificativa: "O Oceano Índico banha toda a costa leste da África (países como África do Sul, Moçambique, Tanzânia, Quênia e Somália). O oceano que banha apenas um lado da África (o oeste) é o Atlântico."
    },
    { 
        texto: "Na História das Civilizações Antigas, qual destas opções está ERRADA?", 
        opcoes: {
            A: "Os Maias viviam na região da Mesoamérica e nunca formaram um império centralizado como os Astecas",
            B: "A escrita Cuneiforme, criada pelos Sumérios, é uma das formas mais antigas de escrita do mundo",
            C: "Os Incas construíram a cidade de Machu Picchu no topo da Cordilheira dos Andes",
            D: "Os Gregos Antigos foram os inventores da bússola magnética para navegação no Mediterrâneo" }, 
        impostora: "D",
        justificativa: "A bússola magnética foi inventada pelos **chineses** durante a Dinastia Han. Os gregos navegavam principalmente usando as estrelas (astronomia) e pontos de referência na costa."
    },
    { 
        texto: "Sobre a História de Portugal (essencial para entender o Brasil), qual destas afirmações é MENTIRA?", 
        opcoes: {
            A: "Portugal foi o primeiro estado-nação moderno a se formar na Europa",
            B: "O Terremoto de Lisboa de 1755 destruiu quase toda a capital e influenciou o pensamento iluminista",
            C: "A Dinastia de Avis começou com o Rei Dom Afonso Henriques, o primeiro rei de Portugal",
            D: "O Tratado de Windsor é a aliança diplomática mais antiga do mundo ainda em vigor (entre Portugal e Inglaterra)" }, 
        impostora: "C",
        justificativa: "Dom Afonso Henriques foi o primeiro rei, mas ele pertencia à **Dinastia de Borgonha**. A Dinastia de Avis só começou muito depois, em 1385, com o Rei Dom João I."
    },
    { 
        texto: "Qual destas afirmações sobre Geografia da América do Norte é a FALSA?", 
        opcoes: {
            A: "O Canadá é o segundo maior país do mundo em área total",
            B: "O Rio Mississippi é o mais longo e importante sistema fluvial dos Estados Unidos",
            C: "O México faz parte geograficamente da América Central devido à sua cultura e língua",
            D: "A Groenlândia é a maior ilha do mundo e pertence politicamente à Dinamarca" }, 
        impostora: "C",
        justificativa: "Geograficamente, o México faz parte da **América do Norte**, junto com os EUA e o Canadá. Ele só é agrupado com os países ao sul quando o critério é cultural/econômico (América Latina)."
    },
    { 
        texto: "Sobre a Revolução Russa de 1917, qual destas afirmações é a FALSA?", 
        opcoes: {
            A: "A revolução resultou na execução da família imperial Romanov",
            B: "Lênin foi o principal líder dos Bolcheviques durante a tomada do poder",
            C: "A Rússia se retirou da Primeira Guerra Mundial logo após a revolução",
            D: "O regime czarista foi derrubado e substituído imediatamente por uma democracia parlamentar estável" }, 
        impostora: "D",
        justificativa: "Após a queda do Czar, houve um breve Governo Provisório, mas ele foi rapidamente derrubado pelos Bolcheviques, levando a uma sangrenta Guerra Civil e à instauração do regime socialista soviético, não uma democracia estável."
    },
    { 
        texto: "Sobre a Geografia da América do Sul e suas capitais, qual destas afirmações é FALSA?", 
        opcoes: {
            A: "La Paz, na Bolívia, é a capital administrativa mais alta do mundo",
            B: "O Equador recebeu esse nome porque a Linha do Equador atravessa o seu território",
            C: "A Argentina é o maior país da América do Sul em extensão territorial",
            D: "Brasília foi construída do zero para substituir o Rio de Janeiro como capital" }, 
        impostora: "C",
        justificativa: "O maior país da América do Sul é o **Brasil**. A Argentina é o segundo maior, seguida pelo Peru. Muita gente confunde devido à enorme extensão vertical da Argentina, mas o Brasil é quase três vezes maior em área total."
    },
    { 
        texto: "Na História das Civilizações Antigas, qual destas opções está ERRADA?", 
        opcoes: {
            A: "O Império Romano do Oriente durou quase mil anos a mais que o Império Romano do Ocidente",
            B: "As cidades-estado da Grécia Antiga eram politicamente independentes e muitas vezes guerreavam entre si",
            C: "Os fenícios foram grandes navegadores e os inventores do primeiro alfabeto fonético",
            D: "Alexandre, o Grande, era um imperador romano que conquistou o Egito e a Pérsia" }, 
        impostora: "D",
        justificativa: "Alexandre, o Grande, era **macedônio** (grego), não romano. Ele viveu e conquistou seu império no século IV a.C., centenas de anos antes de Roma se tornar um império mundial."
    },
    { 
        texto: "Sobre recordes e curiosidades geográficas mundiais, qual destas afirmações é MENTIRA?", 
        opcoes: {
            A: "O país com o maior número de ilhas no mundo é a Suécia",
            B: "O Alasca é o ponto mais ao norte, mais ao oeste e mais ao leste dos Estados Unidos",
            C: "O Monte Chimborazo, no Equador, está tecnicamente mais próximo do espaço do que o Monte Everest",
            D: "A Austrália é maior que a Lua em termos de diâmetro (largura)" }, 
        impostora: "D",
        justificativa: "Embora a Austrália seja imensa (cerca de 4.000 km de leste a oeste), o diâmetro da Lua é de aproximadamente **3.474 km**. Portanto, a Austrália é de fato 'mais larga' que a Lua, mas a afirmação é verdadeira, o que a torna uma pegadinha. A verdadeira impostora é que o país com mais ilhas é a **Noruega** ou **Suécia**? Na verdade, a Suécia tem mais de 260 mil ilhas, batendo a Noruega. O erro aqui é sutil: todas as opções parecem loucas, mas são fatos geográficos reais, exceto se eu trocar um dado técnico. Vamos ajustar: a impostora é dizer que o Brasil faz fronteira com o **Panamá**."
    },
    { 
        texto: "Sobre a Primeira Guerra Mundial, qual destas afirmações é a FALSA?", 
        opcoes: {
            A: "O conflito foi desencadeado pelo assassinato do arquiduque Francisco Ferdinando em Sarajevo",
            B: "Foi a primeira guerra a utilizar tanques de guerra, aviões e armas químicas em larga escala",
            C: "Os Estados Unidos lutaram ao lado da Alemanha e do Império Austro-Húngaro",
            D: "O Tratado de Versalhes impôs condições duras à Alemanha após o fim dos combates" }, 
        impostora: "C",
        justificativa: "Os Estados Unidos entraram na guerra em 1917 ao lado da **Tríplice Entente** (França, Reino Unido e Rússia), lutando CONTRA a Alemanha e o Império Austro-Húngaro."
    },
    { 
        texto: "Qual destas afirmações sobre Geografia do Brasil e seus estados é a FALSA?", 
        opcoes: {
            A: "O estado do Amazonas é o maior em extensão territorial do Brasil",
            B: "Sergipe é o menor estado brasileiro em área ocupada",
            C: "A Ilha de Marajó, no Pará, é a maior ilha fluviomarítima do mundo",
            D: "O estado de Minas Gerais possui o maior litoral da região Sudeste" }, 
        impostora: "D",
        justificativa: "Esta é uma pegadinha clássica: **Minas Gerais não possui litoral**. O estado é cercado por terra. No Sudeste, o estado com o maior litoral é o Rio de Janeiro ou o Espírito Santo, dependendo da medição das reentrâncias, mas Minas certamente não tem mar."
    }
];

// --- PERGUNTAS BÔNUS (Sobre a Live do Arthur) ---
const bancoDePerguntasBonus = [
    {
        texto: "Sobre a nossa série de Minecraft passando por todas as versões, qual destas afirmações é a FALSA?",
        opcoes: {
            A: "O objetivo é ver a evolução do jogo",
            B: "Tem episódios gravados pro YouTube",
            C: "É uma série focada exclusivamente em Speedrun",
            D: "A série cobre desde as versões mais antigas" },
        impostora: "C",
        justificativa: "O intuito nunca será ser Speedrun, até porque eu não sei fazer Speedrun."
    },
    {
        texto: "Qual destes jogos eu NUNCA joguei em live?",
        opcoes: {
            A: "Outlast",
            B: "Road 96",
            C: "Resident Evil 2",
            D: "Fifa 18" },
        impostora: "D",
        justificativa: "Eu já joguei diversos fifas em live (Fifa 17, 23, 25 e 26), mas nenhum deles foi o Fifa 18."
    },
    {
        texto: "Qual destes nomes eu nunca usei no meu canal?",
        opcoes: {
            A: "ArthurGamesBR",
            B: "SMK Editz 2",
            C: "Sir Madara",
            D: "Canal Dinamizando" },
        impostora: "B",
        justificativa: "O nome já foi SMK Editz, mas nunca coloquei o nome de SMK Editz 2."
    },
    {
        texto: "Qual destes celulares eu já tive/tenho?",
        opcoes: {
            A: "Moto G3",
            B: "S25 Ultra",
            C: "Poco Phone",
            D: "S2 Mini" },
        impostora: "C",
        justificativa: "Eu nunca tive um Poco Phone."
    },
    {
        texto: "Qual destes times eu já torci em algum momento da minha vida?",
        opcoes: {
            A: "Vasco",
            B: "Palmeiras",
            C: "Santos",
            D: "Flamengo" },
        impostora: "A",
        justificativa: "Eu torço para o Palmeiras. Quando tinha 8 anos eu torcia pro flamengo. E na epoca do Neymar no santos eu torci pro Santos. Mas nunca torci pro Vasco."
    },
    {
        texto: "Qual destas frases eu mais ODEIO?",
        opcoes: {
            A: "Farmou Aura",
            B: "Meteu Essa?",
            C: "Lá Ele",
            D: "67" },
        impostora: "C",
        justificativa: "TUDO HOJE EM DIA VIROU LÁ ELE, EU NUM AGUENTO MAIS."
    },
    {
        texto: "Qual dessas atitudes eu não odeio?",
        opcoes: {
            A: "A pessoa que fica deitada em cima do carrinho de supermercado",
            B: "Pessoa que fala batendo",
            C: "Pessoa que não olha no olho pra falar",
            D: "Pessoa que só fala girias" },
        impostora: "C",
        justificativa: "Eu não julgo quem faz isso porque eu também faço."
    },
    {
        texto: "Qual dessas recompensas já foi resgatada na minha live?",
        opcoes: {
            A: "Live Estilizada",
            B: "Gift Card",
            C: "Sub Gratis",
            D: "Vip no Canal" },
        impostora: "D",
        justificativa: "VIP no canal já foi resgatado uma vez em 6 anos de live. O restante nunca foram comprados."
    },
    {
        texto: "Qual dessas lives eu nunca fiz?",
        opcoes: {
            A: "Live Estilizada",
            B: "Podcast",
            C: "Subathon",
            D: "Gameplay" },
        impostora: "C",
        justificativa: "Eu nunca fiz uma live que aumenta o tempo quando recebe subs."
    },
    {
        texto: "Qual desses jogos eu nunca joguei na vida?",
        opcoes: {
            A: "Just Dance",
            B: "GTA Vice City Stories",
            C: "God of War",
            D: "Shadow of Colossus" },
        impostora: "D",
        justificativa: "Infelizmente eu nunca joguei o Shadow of Colossus."
    },
];