// sequencia de exercícios falando sobre numbers


/* 
1-Verificação de Inteiro
  Crie uma função que receba um número e verifique se ele é um número inteiro usando Number.isInteger().
*/
//reposta:
function isInteger(num) {
  return Number.isInteger(num);
}
console.log(isInteger(10)); // true




/*
2-Conversão de String para Inteiro
  Escreva uma função que receba uma string e a converta em um número inteiro usando Number.parseInt().
*/
function converterParaInt(str) { 
  return Number.parseInt(str);
}
console.log(converterParaInt("46"));
console.log(converterParaInt("46abc"));



/*
3-Verificar se um Número é Finito
  Crie uma função que determine se um número é finito utilizando Number.isFinite().
*/
function validacaoFinito(val) {
  return Number.isFinite(val);
}
console.log(isFinite(10)); // true
console.log(isFinite(0.7 / 10)); 



/*
4-Formatação de Casas Decimais
  Dada uma função, retorne o valor formatado para duas casas decimais usando toFixed().
*/
function formatarCasasDecimais(num) {
  return num.toFixed(2);
}
console.log(formatarCasasDecimais(100));
console.log(formatarCasasDecimais(0.3));


/*
5-Converter para Notação Exponencial
  Escreva uma função que converta um número grande para notação exponencial com uma precisão de 3 dígitos usando toExponential().
*/

function converterNotacaoExponencial(num) {
  return num.toExponential(3);
}
console.log(converterNotacaoExponencial(100000.333333333));
console.log(converterNotacaoExponencial(222,555.55));