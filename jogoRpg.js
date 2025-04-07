// Objeto do jogador
let player = {
    nome: '',
    dano: 0,
    HP: 0
};

// Criando inimigos
const inimigos = [
    { nome: 'Goblin', HP: 500, dano: 50 },
    { nome: 'Orc', HP: 700, dano: 70 },
    { nome: 'Dragão', HP: 1500, dano: 150 }
];

// Inicializando o jogador
function inicializarJogo() {
    player.nome = prompt("Digite o nome do seu personagem:");
    let pontos = 20;
    let vida = parseInt(prompt("Distribua pontos para HP (1 ponto = 100 HP). Pontos disponíveis: " + pontos));
    let ataque = 20 - vida;
    
    player.HP = vida * 100;
    player.dano = ataque * 10;
    
    alert(`Bem-vindo ${player.nome}! Você tem ${player.HP} de HP e ${player.dano} de DANO.`);
    iniciarHistoria();
}

// História inicial
function iniciarHistoria() {
    let escolha = prompt("Você está diante de uma caverna sombria. O que deseja fazer?\nA) Entrar\nB) Fugir").toUpperCase();
    if (escolha === 'A') {
        encontrarInimigo();
    } else {
        alert("Você fugiu e o jogo terminou!");
    }
}

// Encontro com inimigo
function encontrarInimigo() {
    let inimigo = inimigos[Math.floor(Math.random() * inimigos.length)];
    alert(`Você encontrou um ${inimigo.nome} com ${inimigo.HP} de HP e ${inimigo.dano} de dano!`);
    batalha(inimigo);
}

// Sistema de batalha
function batalha(inimigo) {
    while (player.HP > 0 && inimigo.HP > 0) {
        let escolha = prompt("Escolha seu ataque:\nA) Ataque Simples\nB) Ataque Combo\nC) Ataque Especial").toUpperCase();
        let danoCausado = 0;
        let dado = Math.round(Math.random() * 5) + 1;

        if (escolha === 'A') {
            danoCausado = player.dano;
        } else if (escolha === 'B' && dado > 2) {
            danoCausado = player.dano * 1.5;
        } else if (escolha === 'C' && dado > 3) {
            danoCausado = player.dano * 2;
        } else {
            alert("Seu ataque falhou!");
        }

        inimigo.HP -= danoCausado;
        alert(`Você causou ${danoCausado} de dano. O ${inimigo.nome} agora tem ${inimigo.HP} de HP.`);

        if (inimigo.HP > 0) {
            player.HP -= inimigo.dano;
            alert(`${inimigo.nome} atacou! Você agora tem ${player.HP} de HP.`);
        }
    }

    if (player.HP <= 0) {
        alert("Você foi derrotado!");
    } else {
        alert(`Parabéns! Você derrotou ${inimigo.nome}!`);
    }
}

// Iniciar o jogo
inicializarJogo();
