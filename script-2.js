// 2 Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o 
// próximo valor sempre será a soma dos 2 valores anteriores(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

let primeiroNuemero = prompt("Informe o primeiro número");
let segundoNumero = prompt("Informe o segundo número");
let resultado =  parseInt(primeiroNuemero) + parseInt(segundoNumero)
alert(resultado);


alert(`${primeiroNuemero} , ${segundoNumero} , ${resultado}`)

let calculaNumeroSequencia = parseInt(resultado) + parseInt(segundoNumero);

let numeroSequencia = prompt("Advinhe qual seria o próximo número na seqência ?");

if( parseInt(numeroSequencia) === calculaNumeroSequencia ){
    alert(`Parabéns você acertou ${primeiroNuemero} , ${segundoNumero} , ${resultado} , ${numeroSequencia}`)
}else{
    alert(` O número correto seria ${calculaNumeroSequencia} `)
}