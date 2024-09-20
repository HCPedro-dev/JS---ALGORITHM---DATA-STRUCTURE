/*
 * importante saber que JS é uma linguagem fracamente tipada isso significa que o fato de não definir um tipo para as variaveis pode causar mudanças fora do controle tipo:
 * let x = 10; neste caso o tipo é number
 * let x = '10'; neste caso o tipo é uma string, mesmo indicando um number;
 * let x = function; agora X pode ser uma function;
 * O PROBLEMA NESTES CASOS É QUE NÃO SE DEFININDO UM TIPO DO DADO QUE SERÁ INSERIDO NA VARIÁVEL PODE CAUSAR UM DESCONTROLE AO LONDO DO PROGRAMA EM ALGUM MOMENTO PODENDO SE PERDER DO VALOR ORIGINAL;
 * EX: inicei um programa utilizando na variavel X um tipo number e dado momento le a mudou para uma STRING;
*/

let x = 10; // tipo number
console.log(typeof x); // retorna 'number'

x = '10'; // tipo string
console.log(typeof x); // retorna 'string'