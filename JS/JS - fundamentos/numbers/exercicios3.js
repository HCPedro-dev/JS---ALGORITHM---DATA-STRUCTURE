/*
1-Calculadora Científica
  Implemente uma função de calculadora científica que recebe um número e aplica diferentes operações, como exponenciação, logaritmos e conversões de notação científica. Use toExponential() e outros métodos.
*/
function calculadoraCient (num) {
  return {
    exponencicao: num.toExponential(2),
    logaritmo: Math.log(num),
    raizQuadrada: Math.sqrt(num),
  };
}
console.log(calculadoraCient(100));


/*
2-Conversor de Bases Personalizado
  Escreva uma função que receba uma string representando um número em uma base (binária, octal, hexadecimal) e a converta para decimal usando Number.parseInt().
*/
function convertStrNumber(str, base) {
  return parseInt(str, base); 
}
console.log(convertStrNumber("ff", 16));
console.log(convertStrNumber("11111111", 2));
console.log(convertStrNumber("222222222", 8));


/*
3-Arredondamento Customizado
  Implemente uma função que arredonde um número para o múltiplo mais próximo de um valor especificado (por exemplo, arredondar para o múltiplo de 5 mais próximo).
*/

function roundToMultiple(num, multiple) {
  return Math.round(num / multiple) * multiple;
}
console.log(roundToMultiple(15.7, 5));
console.log(roundToMultiple(20.3, 5));


/*
4-Verificação de Infinito
  Crie uma função que verifica se um número é positivo ou negativo infinito usando Number.POSITIVE_INFINITY e Number.NEGATIVE_INFINITY.
*/

function checkInfinity(num) {
  return num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY;  // ou Math.isFinite(num)
}
console.log(checkInfinity(Infinity));


/*
5-Validação de Intervalo de Número Seguro
  Crie uma função que receba um número e valide se ele está dentro do intervalo seguro usando Number.MIN_SAFE_INTEGER e Number.MAX_SAFE_INTEGER.
*/
function securityValue(num) {
  return num >= Number.MIN_SAFE_INTEGER && num <= Number.MAX_SAFE_INTEGER;
}
console.log(securityValue(100000000));
console.log(securityValue(1000000000000000000000000000000000000000000));
