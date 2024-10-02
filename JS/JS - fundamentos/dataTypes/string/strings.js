const escola =  "Codigo";

console.log(escola.charAt(0)); // retorna posicao do indice selecionado "o"
console.log(escola.charAt(3)); 
console.log(escola.charCodeAt(2)); // retorna o indice da tela unicode desejado
console.log(escola.indexOf("o")); // retorna a posicao do item desejado dentro o array
console.log(escola.substring(0, 3)); // retorna os itens desejado dentro do array 
console.log('Escola ' + escola + '!'); //
console.log(escola.replace(escola.charAt(1), '0'));
console.log('Pedro,Maria,Ana'.split(',')); 