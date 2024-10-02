/*
1-Conversão para Diferentes Bases
  Crie uma função que receba um número decimal e o converta para suas representações em binário, octal e hexadecimal usando toString() com diferentes radix.
*/
function convert(num){
  return {
    binary: num.toString(2),
    octal: num.toString(8),
    hexadecimal: num.toString(16)
  };
}
console.log(convert(10)); 

/*
2-Validação de Inteiros Seguros
  Crie uma função que verifique se um número é um inteiro seguro usando Number.isSafeInteger(). Teste com números grandes.
*/
function intSeguro(num) {
  return Number.isSafeInteger(num);
}
console.log(intSeguro(10000000000000000000));
console.log(intSeguro(1000000)); 


/*
3-Comparação entre NaN e outros Valores
  Escreva uma função que retorne true se um valor for NaN, comparando-o com Number.NaN e Number.isNaN().
*/
function isNaN(num) {
  return num!== num;
}
console.log(isNaN(NaN));
console.log(isNaN(10));


/*
4-Conversão de String com Ponto Flutuante
  Crie uma função que converta uma string contendo um número decimal para um número de ponto flutuante usando Number.parseFloat().
*/
function convertStrNum(str) {
  return Number.parseFloat(str);
}
console.log(convertStrNum('10.5'));

/*
5-Limitação de Precisão
  Implemente uma função que arredonde um número para um determinado número de dígitos usando toPrecision().
*/
function roundTo(num, precision) {
  return Number(num.toFixed(precision));
}
console.log(roundTo(10.5678, 3));
console.log(roundTo(10.5678, 2));
console.log(roundTo(10.5678, 4));