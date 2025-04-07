//função para iniciar o jogo e dar boa vindas
function iniciarJogo() {
alert("Bem-vindo ao jogo RPG Fullture!"); 


let nome; 

do {nome = prompt("Qual o seu nome?");

    if (nome.length === 0){
        alert(`Digite seu nome! Clique em "Ok" para continuar!`)

    }

} while (nome.length === 0) {
    
};

//Variavel para armazenar um objeto nome, hp, dano
let player = {
    nome: nome,
    hp: 0,
    dano: 0
}

let inimigo = {
    nome:"Darkglow",
    hp: 0,
    dano: 0
}

//variaveis para armazenar pontos
let pontosTotais = 20;
let pontosVida;
let pontosAtaque;

//Distribuição dos pontos
do {
    pontosVida = parseInt(prompt("Você tem 20 pontos para dividir entre Vida e Ataque. Quantos pontos você quer colocar em Vida?"))
    
    if(isNaN(pontosVida) || pontosVida < 1 || pontosVida > 20) {
        alert("Valor inválido! Insira um número entre 1 e 20");
    }
} while (isNaN(pontosVida) || pontosVida < 1 || pontosVida >20);

//Calculando os pontos de hp e dano
player.hp = pontosVida * 100;
player.dano = pontosVida * 10;

alert(`${player.nome}, você começa sua jornada com ${player.hp} HP de vida e ${player.dano} Dano.`)


    alert(`Mensagem: Então ${nome}, já se passaram alguns dias desde que você
    se juntou à Exploração de Dungeon, e você estava se preparando para sua 
    primeira incursão em uma masmorra! Após alguns dias de viagem, você chega
    à entrada da misteriosa masmorra. Você está cheio de expectativas enquanto
    se aproxima. A entrada da masmorra está diante de você, escura e ameaçadora.
    As paredes de pedra são escorregadias de umidade, e o ar cheira a mofo e decomposição.
    
    Clique no botão "Ok" para continuar!`);

    let escolha1;
    
    do {
        escolha1 = prompt(`O que você quer fazer?
        A - Entrar na caverna
        B - Explorar`).toUpperCase();

        if (escolha1 !== "A" && escolha1 !== "B") {
            alert('Opção invalida! Escolha a letra A ou B');
        }
    } while (escolha1 !== 'A' && escolha1 !== 'B');

if (escolha1 === 'A') {

  alert(`"Ao entrar na masmorra, você percebe que as paredes estão cobertas
por símbolos estranhos, emitindo uma luz fraca na penumbra. 
O ar dentro está impregnado com o cheiro forte de morte e 
decomposição, fazendo sua pele arrepiar. Você consegue 
ouvir os sons distantes de algo se movendo nas profundezas da 
masmorra, mas não consegue identificar exatamente o que é."

Clique no botão "Ok" para continuar!`);

} 

else if (escolha1 === 'B') {
  // Gerar true ou false aleatoriamente
  const escolhaAleatoria = Math.random() < 0.5;

  if (escolhaAleatoria) {
    alert(`" Você decide explorar a área circundante. Após uma busca sem resultados na área, você se dirige à masmorra, aceitando a tranquilidade antes do desafio iminente. Embora sem descobertas notáveis, a expectativa cresce enquanto você se prepara para adentrar a dungeon. 
        Clique no botão "Ok" para continuar!`);

  } else {
    alert(`"Você decide explorar a área circundante, esperando encontrar pistas ou recursos valiosos que possam ajudá-lo em sua missão. Enquanto explora, nota algumas marcas entalhadas nas árvores próximas que lhe deixam curioso, você continua a busca e finalmente descobre algo: um frasco misterioso escondido entre as folhas caídas, ele contém uma substância brilhante de cor azul intensa. Intrigado, você examina mais de perto o frasco e percebe que se trata de uma poção mágica. A etiqueta, escrita em uma língua antiga, sugere que a poção tem propriedades de cura."
        
        Você ganhou 500 HP de vida!`);
    
    player.hp += 500;
    
    alert(`
        Você tem ${player.hp} de HP e ${player.dano} de Dano!
        `)  
}
} 
else {
  alert(`Opção inválida! Escolha a letra A ou B`);
}

//----------------------------------------------------------------

let escolha2;

do {
escolha2 = prompt(`O que você quer fazer?
        A - Seguir caminhando
        B - Analisar o interior da caverna
        
        Digite a opção "A" ou "B"`).toUpperCase(); 

        if(escolha2 !== "A" && escolha2 !== "B") {

            alert(`Opção invalida! Escolha a letra A ou B`)

        }

    } while (escolha2 !== "A" && escolha2 !== "B");

    let escolhaAleatoria2 = Math.random() < 0.5;
    alert(escolhaAleatoria2);

    if (escolha2 === "A" && escolhaAleatoria2 == true) {

     alert(
`"Ao seguir caminhando você tropeça..."

Você perdeu 200 HP de vida!`
)

player.hp -= 200;

alert(`Você tem ${hp} de HP de vida e ${dano} de Dano`)
        
    } else if (escolha2 === "A" && escolhaAleatoria2 == false) {
        alert(`
Ao seguir caminhando pela caverna, o tempo passa e a sua 
a equipe de aventureiros começa a ganhar confiança, 
a atenção vai se dispersando e quando notam, todos 
estão fazendo piadas em tom de voz descontraído. 
Tudo parece estar indo bem até que todos começam 
a ouvir um ruído arrepiante surgindo em meio a suas 
vozes, o clima alegre se dissipa repentinamente, 
todos ficam alertas e em silêncio, tentando observar 
o que os espera pela frente.`)
    }

else if (escolha2 === "B") {

    alert(`Ao analisar o interior da caverna, você nota que o piso está repleto de ossos de animais, deixando o cheiro pútrido ainda mais evidente, você começa a observar as paredes da caverna e encontra um objeto pendurado...
        
        Clique em "Ok" para continuar`)


   let escolha2_1 = prompt(`O que você quer fazer? 
            
            Escolha a opção "A" ou "B" para processeguir.`)

                        
            if (escolha2_1 === "A") {
             alert(`
Ao sair fora, você tropeça em um monte de ossos. O estrondo ecoa pelo ambiente e o barulho rompe o silêncio, alertando aqueles que vivem nas profundezas da caverna...

Clique no botão "Ok" para continuar!`)   
            }

            else if (escolha2_1 === "B") {

                alert(`
O objeto parece ser uma lanterna antiga, coberta de poeira e teias de aranha. Ao se aproximar para examiná-la, você percebe que ainda há vestígios de óleo dentro dela, e ao tocar nela você a derruba abruptamente com um estrondo alto, ecoando pelo ambiente. O barulho rompe o silêncio, deixando a equipe tensa e alerta, tentando prestar atenção ao que os espera adiante +PODER

Você ganhou 500 HP de vida, parabéns!

Clique em "Ok" para continuar!

`)

player.hp += 500;

alert(`Você tem ${player.hp} de HP de vida e ${player.dano} de Dano`)

            }

        
         } else {

        alert(`Opção inválida! Escolha a letra "A" ou "B".`)
    }

 //---------------------------------------------------------------------------------------
 
 alert(`
Ao olhar adiante, sua equipe depara-se com um grupo de esqueletos dispostos em uma formação ameaçadora. Suas figuras ósseas parecem animadas e prontas para o combate enquanto ficam próximas a um cristal que emite uma luz fraca. As órbitas vazias dos olhos focam em você com uma intensidade sinistra conforme você se aproxima cautelosamente, sentindo a presença ameaçadora dos mortos-vivos.

Você tem ${player.vida} de HP de vida e ${player.dano} de ataque.

`);

let escolha3 = prompt(`O que você quer fazer?

    Opções:

    A - Lutar
    B - Correr

    `)

    do (escolha3 === !escolha3)
    while (escolha3 === !escolha3) {

        alert(`Opção inválida! Escolha a letra "A" ou "B".`)

    }

    if (escolha3 === "A") {
     
     
let lutar1 = prompt (`Lutar contra <exercito de esqueletos>: Status dos esqueletos:   recompensa: colar de ossos: +30de dano Poção de +200 HP`);  

    } else { alert(`
Ao Sair correndo você bate com a cabeça num 
pilar de pedra e perde a consciência...`);

    }

    

    


}

iniciarJogo();

