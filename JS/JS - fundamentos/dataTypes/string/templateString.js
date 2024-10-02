const nome = 'Rebeca';
const concatenacao = 'Ola ' + nome + '!';
const templateString = `
   Olá, 
   ${nome}
   !`;


console.log(concatenacao);
console.log(templateString); // existe uma diferenca aqui pois o template string ira considerar os espacos deixados.

// template string nao suporta expressoes

let i = 5;
console.log(`O valor de i é ${i++}`); // O valor de i é 5, depois de incrementar
console.log(`O valor de i é ${i}`); // O valor de i é 6, porque incrementou antes da expressao ser avaliada.
