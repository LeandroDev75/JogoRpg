//função para iniciar o jogo e dar boa vindas

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
};

let inimigo = {
    nome:"Darkglow",
    hp: 0,
    dano: 0
};

let esqueletos = {
    nome: "Esqueletóides",
    vida: 1500,
    poder: 500
};

//variaveis para armazenar pontos
let pontosTotais = 20;
let pontosVida;
let pontosAtaque;

//Variavéis de ataque
let ataque = 100;
let ataque1 = ataque * 1 //Dano * 1
let ataque2 = ataque * 1.5; //Dano * 1.5
let ataque3 = ataque * 2;  //Dano * 2
let atacar;



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
    se juntou à Exploração de Dungeon, e você estava se preparando
    para sua primeira incursão em uma masmorra! Após alguns dias 
    de viagem, você chega à entrada da misteriosa masmorra. 
    Você está cheio de expectativas enquanto se aproxima. 
    A entrada da masmorra está diante de você, escura e 
    ameaçadora. As paredes de pedra são escorregadias de 
    umidade, e o ar cheira a mofo e decomposição.
    
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
    alert(`" Você decide explorar a área circundante. 
        Após uma busca sem resultados na área, você se dirige à masmorra, 
        aceitando a tranquilidade antes do desafio iminente. 
        Embora sem descobertas notáveis, a expectativa cresce enquanto 
        você se prepara para adentrar a dungeon. 
        Clique no botão "Ok" para continuar!`);

  } else {
    alert(`"Você decide explorar a área circundante, esperando 
        encontrar pistas ou recursos valiosos que possam 
        ajudá-lo em sua missão. Enquanto explora, nota algumas 
        marcas entalhadas nas árvores próximas que lhe deixam 
        curioso, você continua a busca e finalmente descobre algo: 
        um frasco misterioso escondido entre as folhas caídas, 
        ele contém uma substância brilhante de cor azul intensa. 
        Intrigado, você examina mais de perto o frasco e percebe 
        que se trata de uma poção mágica. A etiqueta, escrita em 
        uma língua antiga, sugere que a poção tem propriedades de cura."
        
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

alert(`Você tem ${player.hp} de HP de vida e ${player.dano} de Dano de ataque`);
        
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
o que os espera pela frente.

Clique em "Ok" para continuar!`)
    }

else if (escolha2 === "B") {

    alert(`Ao analisar o interior da caverna, você nota 
        que o piso está repleto de ossos de animais, 
        deixando o cheiro pútrido ainda mais evidente, 
        você começa a observar as paredes da caverna e 
        encontra um objeto pendurado...
        
        Clique em "Ok" para continuar`)


   let escolha2_1 = prompt(`O que você quer fazer? 
            
            Escolha a opção "A" ou "B" para processeguir.`).toUpperCase();

                        
            if (escolha2_1 === "A") {
             alert(`
Ao sair fora, você tropeça em um monte de ossos. 
O estrondo ecoa pelo ambiente e o barulho rompe 
o silêncio, alertando aqueles que vivem nas 
profundezas da caverna...

Clique no botão "Ok" para continuar!`)   
            }

            else if (escolha2_1 === "B") {

                alert(`
O objeto parece ser uma lanterna antiga, coberta de poeira 
e teias de aranha. Ao se aproximar para examiná-la, você percebe 
que ainda há vestígios de óleo dentro dela, e ao tocar nela você 
a derruba abruptamente com um estrondo alto, ecoando pelo ambiente. 
O barulho rompe o silêncio, deixando a equipe tensa e alerta, tentando 
prestar atenção ao que os espera adiante +PODER

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

Você tem ${player.hp} de HP de vida e ${player.dano} de ataque.

Clique em "Ok" para continuar!

`);

//----------------------------------------------------------------------

let escolha3;

do {
escolha3 = prompt(`O que você quer fazer?

    Opções:

    A - Lutar
    B - Correr

    Digite a letra A ou B

    `).toUpperCase();

    if (escolha3 !== "A" && escolha3 !== "B" ) {

        alert(`Opção inválida! Escolha a letra "A" ou "B".`)
    }
    
 } while (escolha3 !== "A" && escolha3 !== "B") 
  
if (escolha3 === "A") { 
    
    player.hp += 200;
    player.dano += 30;
     
alert(`Lutar contra ${esqueletos.nome}: 
    Status dos esqueletos: ${esqueletos.vida} HP de vida e ${esqueletos.poder} Dano de ataque.  
    
    Você recebeu uma recompensa: Colar de Ossos
    
    Você ganhou 200 de HP de vida e 30 de Dano de ataque.

    Você tem ${player.hp} de HP de vida e ${player.dano} de Dano de ataque. 
    `);  

//---------------

let escolha3_1;

do {
escolha3_1 = prompt(`Agora escolha o caminha A ou B para proceguir.`).toUpperCase();

   if (escolha3_1 !== "A" && escolha3_1 !== "B") {
   
    alert(`Opção inválida! Escolha a letra "A" ou "B".`)

   }
    
} while (escolha3_1 !== "A" && escolha3_1 !== "B");

    if (escolha3_1 === "A") {
     
alert(`Finalmente o Exército foi conquistado! 
Uma sesação de paz invade cada centímetro da câmara... 
Num piscar de olhos você está em uma planície muito 
peculiar e ao mesmo tempo familiar também... 
você percebe que está diante de três portas...`)  

    } else {

alert(`Não foi dessa vez que você derrotou o antigo Exército de Esqueletos... tudo fica escuro e quieto...`)

    }


    } else { alert(`
Ao Sair correndo você bate com a cabeça num 
pilar de pedra e perde a consciência...`);

    }
    
//----------------------------------------------

    let escolha4;    

do {
    

escolha4 = prompt(`O que você deseja fazer?
    
    Para proceguir, escolha uma opção;

    A, B ou C `).toUpperCase();

    if(escolha4 !== "A" && escolha4 !== "B" && escolha4 !== "C") {

        alert(`Opção inválida! Escolha a letra A, B ou C`)

    }
    

} while (escolha4 !== "A" && escolha4 !== "B" && escolha4 !== "C"); 

if (escolha4 === "A") {
 
 alert(`
Você escolhe a Porta de Ouro. Atrás dela você encontra
muito ouro, cristais, etc... você começa a imaginar toda 
a glória e poder que poderá onter com este tesouro 
praticamente infinito. Assim que você toca a primeira 
moeda a seu alncace uma voz grave e ecoante chama seu nome... 
"Então você prefere assim? Acha que seria fácil?"... 
o ${inimigo.nome} surge com uma aura de poder nunca antes vista...`)
    
}

else if (escolha4 === "B") { alert(`

Você escolhe a Porta de Ferro, após atravessa-la tudo 
a sua volta desaparece, o infinito é seu novo horizonte... 
alguns minutos se passam até que você consegue escutar 
alguém chamando por seu nome... "Finalmente você conseguiu 
chegar até minha morada... Seus passos até aqui não foram 
fáceis, não espere nenhum tipo de alívio agora..."

`)} 

else { alert(`

Você escolhe a Porta da Casa dos seus Pais. ao atravessa-la você se sente quente e cada vez mais pesado, estranhamente isso não o incomoda...

`)}

player.hp += 8000;

alert(`
Lutar contra ${inimigo.nome}: Status do Inimigo:   

Recompensa: União dos povos: Você ganhou 8000 de HP vida e paz mundial por 1 ano.

Você tem ${player.hp} de HP de vida e ${player.dano} de Dano de ataque

`);

let escolha5;

do {

    escolha5 = prompt(`Você tem 2 caminhos para seguir!
        
        Escolha o caminho A ou o Caminho B para prosseguir.
        
        `).toUpperCase();

    if(escolha5 !== "A" && escolha5 !== "B") {

alert(`Opção inválida! Escolha a letra A, B ou C`);

    }

} while (escolha5 !== "A" && escolha5 !== "B")


if (escolha5 === "A") {

alert
(`O ${inimigo.nome} não mais nos assombrará! 
É hora de voltar a vila e comemorar com o povo...`)    

} else {

    alert(`
Por quantos séculos mais ${inimigo.nome} 
reinará nas sobras de nosso vale? 
Tudo fica escuro e quieto...`)

}

//----------- Atacar -------------

do {
atacar = prompt(`
"Seu turno, escolha um ataque: ataque 1, 2 ou 3"

Digite uma opção abaixo:

1 - Ataque Simples
2 - Ataque Combo
3 - Ataque Especial

`)

if (atacar !== "1" && atacar !== "2" && atacar !== "3") {

    alert(`Opção inválida! Escolha o número 1, 2, ou 3`)

}

}  while (atacar !== "1" && atacar !== "2" && atacar !== "3");
    
if (atacar === "1") {
    alert(`Você escolheu o Ataque 1!

        Você tem ${player.hp} de HP de vida e ${player.dano} de Dano de ataque.

        Seu inimigo ${inimigo.nome} tem ${inimigo.hp} HP de Vida e ${inimigo.dano} de Dano de Ataque.
        
        Clique em "Ok" para continuar!
        
        `);

        inimigo.hp -= ataque1; //Diminui a quantidade de hp do inimigo
        player.dano -= ataque1; //Diminui a quantidade de dano do player

        alert(`
"Você desferiu um ataque Simples com sucesso!" 
O seu inimigo ${inimigo.nome} sofreu ${ataque1} de Dano de vida! Ainda restam ${inimigo.hp} pontos de Vida do inimigo...

Você tem ${player.hp} de vida e ${player.dano} de Dano de Ataque.

Seu inimigo tem ${inimigo.hp} de Vida e ${inimigo.dano} de Dano de Ataque.

Clique em "Ok" para continuar!

`)
//----------------------------------------------------------------

} else if (atacar === "2") {

   let atacar2 = Math.floor(Math.random() * 6) + 1;

   alert(`Você precisa jogar um dado para confirmar seu "Ataque Combo"!
    Se o dado cair no número 1 ou 2, você erra o "Ataque combo", e
    se for maior que 2, você acerta o "Ataque Combo".

    Clique em "Ok" para jogar o dado!
    
    `)

    alert(`O dado caiu no número ${atacar2}
        
Clique em "Ok" para continuar

        `)

   if(atacar2 > 2) {

    inimigo.hp -= ataque2;
    player.dano -= ataque2;

    alert(`Você desferiu um Ataque Combo com sucesso! O inimigo ${inimigo.nome} sofreu ${ataque2} de Dano de Ataque!


        Você tem ${player.hp} de HP de vida e ${player.dano} de Dano de ataque.
        Seu inimigo ${inimigo.nome} tem ${inimigo.hp} HP de vida e ${inimigo.dano} de Dano de Ataque.

        
        Clique em "Ok" para continuar!`)

    } else {

       alert(`"Você desferiu um "Ataque Combo" mas errou. O ${inimigo.nome} não sofreu dano! Ainda restam ${inimigo.vida} pontos de vida..."`)
    }

}

//--------------------------

     else if (atacar === "3") {

        let atacar3 = Math.floor(Math.random() * 6) + 1;

        alert(`Você precisa jogar um dado para confirmar seu "Ataque Especial"!
            Se o dado cair no número 1 ou 3, você erra o "Ataque Especial", e
            se for maior que 3, você acerta o "Ataque Especial".
        
            Clique em "Ok" para jogar o dado!
            
            `)
        
            alert(`O dado caiu no número ${atacar3}
                
        Clique em "Ok" para continuar
        
                `)


        if(atacar3 > 3) {

            inimigo.hp -= ataque3;
            player.dano -= ataque3;

            alert(`Você desferiu um Ataque Especial com sucesso! O inimigo ${inimigo.nome} sofreu ${ataque3} de Dano de Ataque!


                Você tem ${player.hp} de HP de vida e ${player.dano} de Dano de ataque.
                Seu inimigo ${inimigo.nome} tem ${inimigo.hp} HP de vida e ${inimigo.dano} de Dano de Ataque.
        
                
                Clique em "Ok" para continuar!`)

    } else {

    alert(`
"Você desferiu um "Ataque Especial" mas errou. O ${inimigo.nome} não sofreu dano! Ainda restam ${inimigo.hp} pontos de vida..."`)
        
    }

}







