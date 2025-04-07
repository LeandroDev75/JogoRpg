// Função para criar o jogador
function criarJogador() {
    const nome = prompt("Digite o seu nome:");
    let vida = parseInt(prompt("Distribua seus 20 pontos de atributos. Quantos pontos você quer em vida?"));
    let ataque = 20 - vida;

    // Verifica se os pontos estão corretos
    if (vida < 0 || ataque < 0) {
        alert("Você não pode distribuir pontos negativos!");
        return criarJogador(); // Reinicia a criação do jogador
    }

    const player = {
        nome: nome,
        HP: vida * 100,
        dano: ataque * 10
    };

    return player;
}

// Função para criar um inimigo
function criarInimigo(nome) {
    return {
        nome: nome,
        HP: 100,
        dano: 10
    };
}

// Função para realizar a batalha
function batalha(player, inimigo) {
    while (player.HP > 0 && inimigo.HP > 0) {
        const acao = prompt("Escolha sua ação: A) Ataque Simples B) Ataque Combo C) Ataque Especial");

        let danoCausado = 0;
        const dado = Math.round(Math.random() * 5) + 1; // Dado de 1 a 6

        switch (acao.toUpperCase()) {
            case 'A':
                danoCausado = player.dano;
                break;
            case 'B':
                if (dado > 2) {
                    danoCausado = player.dano * 1.5;
                } else {
                    alert("Ataque Combo falhou!");
                    continue; // Volta para o início do loop
                }
                break;
            case 'C':
                if (dado > 3) {
                    danoCausado = player.dano * 2;
                } else {
                    alert("Ataque Especial falhou!");
                    continue; // Volta para o início do loop
                }
                break;
            default:
                alert("Ação inválida!");
                continue; // Volta para o início do loop
        }

        // Aplica dano ao inimigo
        inimigo.HP -= danoCausado;
        alert(`Você causou ${danoCausado} de dano a ${inimigo.nome}. HP do inimigo: ${inimigo.HP}`);

        // Inimigo ataca
        if (inimigo.HP > 0) {
            player.HP -= inimigo.dano;
            alert(`${inimigo.nome} atacou! Você perdeu ${inimigo.dano} de HP. Seu HP: ${player.HP}`);
        }
    }

    if (player.HP <= 0) {
        alert(`Você foi derrotado por ${inimigo.nome}.`);
    } else {
        alert(`Parabéns, você venceu a batalha contra ${inimigo.nome}!`);
    }
}

// Função principal do jogo
function iniciarJogo() {
    const player = criarJogador();
    const inimigo = criarInimigo("Goblin");

    alert(`Bem-vindo, ${player.nome}! Você tem ${player.HP} HP e ${player.dano} de dano.`);

    // Inicia a batalha
    batalha(player, inimigo);
}

// Inicia o jogo
iniciarJogo();