const peso1 = 1.0; 
const peso2 = Number('2.0'); // valor stryng 

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.8;
const avaliacao2 = 6.7;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(`Média: ${media.toFixed(1)}`);
console.log(typeof media);
console.log(typeof Number);


/*
 agora alguns dos diversos métodos que o number tem e JS
 * Number.isFinite(value): Verifica se o valor é um número finito;
 * Number.isNaN(value): Verifica se o valor é NaN (Not a Number);
 * Number.isInteger(value): Verifica se o valor é um número inteiro;
 * Number.isSafeInteger(value): Verifica se o valor é um inteiro seguro (dentro dos limites permitidos para inteiros em JavaScript);
 * Number.parseFloat(value): Converte uma string para um número de ponto flutuante;
 * Number.parseInt(value, [radix]): Converte uma string para um número inteiro, opcionalmente aceitando uma base (radix);
 * Number.MAX_SAFE_INTEGER: O maior inteiro seguro que pode ser representado em JavaScript (2^53 - 1);
 * Number.MIN_SAFE_INTEGER: O menor inteiro seguro que pode ser representado em JavaScript (-(2^53 - 1));
 * Number.MAX_VALUE: O maior número positivo representável;
 * Number.MIN_VALUE: O menor número positivo representável (próximo de zero);
 * Number.POSITIVE_INFINITY: Representa o valor Infinity;
 * Number.NEGATIVE_INFINITY: Representa o valor -Infinity;
*/

/*
 Agora métodos para instancia de NUMER
 * toExponential(fractionDigits): Retorna uma string com a notação exponencial do número.
 * toFixed(digits): Retorna uma string representando o número com um número fixo de casas decimais.
 * toPrecision(precision): Retorna uma string representando o número com a precisão total especificada.
 * toString([radix]): Converte o número para uma string, podendo especificar a base (radix) do número (binário, octal, hexadecimal, etc.).
 * valueOf(): Retorna o valor primitivo do objeto Number.
*/


