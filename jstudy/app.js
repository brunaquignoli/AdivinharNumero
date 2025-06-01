// aprendendo js de verdade !!! finalmente

// primeira tentativa
// alert('bem vindo ao código de numero secreto!!!');
// let numeroSecreto = parseInt(Math.random() * 100 + 1);
// let chute;
// let tentativas = 1;

// while (chute != numeroSecreto) {
//     chute = prompt('Escolha um numero entre 1 e 10');
//     if (numeroSecreto == chute) {
//         break;
//         // usar crase pra concatenar
//     } else {
//         if (chute > numeroSecreto) {
//             alert(`o numero secreto é menor que ${chute}`);
//         } else {
//         alert(`o numero secreto é maior que ${chute}`);
//         }
//         tentativas++
//     }
// }

// // tentativas é maior do que 1? caso sim, vai printar tentativas, senão, vai printar tentativa
// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
// alert(`parabéns! você acertou o numero ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


/*
if (tentativas > 1) {
    alert(`parabéns! você acertou o numero ${numeroSecreto} com ${tentativas} tentativas`);
} else { 
    alert(`parabéns! você acertou o numero ${numeroSecreto} com ${tentativas} tentativa`);
}
    */

/*
document.querySelector('x') seleciona o primeiro elemento que corresponde ao seletor fornecido
x.innerHTML usada pra acessar ou modificar o conteúdo HTML de um elemento selecionado.
function x{} função em JavaScript, que é responsável por executar uma ação específica
console.log('x') imprime a mensagem ou o valor no console do navegador
 .value pega só o valor inserido, e não toda a tag
*/


/* let titulo = document.querySelector('h1'); // definiu que pede pra pegarmos algo do documento, no caso vai ser o h1, então ele delecionou o h1
 titulo.innerHTML = 'Jogo do número secreto'//innerHTML pega algo dentro do HTML

 let paragrafo = document.querySelector('p');
 paragrafo.innerHTML = 'Escolha um número entre 1 e 10';


*/

/*
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto 
}
*/

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
// sempre que temos um padrão de código/códigos muito parecidos, a gente pode isolar isso em uma função;

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
}


exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você acertou o numero ${numeroSecreto} com ${tentativas} ${palavraTentativa}`; // isso se chama template String
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor do que o seu chute');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior do que o seu chute');
        }
        tentativas++;
        limparCampo();
    }
}// trecho de código que é responsável por alguma funcionalidade específica

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 ); // precisa do parse int porque pode vir quebrado!
    let quatidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quatidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}


