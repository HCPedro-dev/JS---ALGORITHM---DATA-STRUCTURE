const valores =  [ 'a', 'b', 'c', 'd', 'e'];
console.log(valores[0], valores[1], valores[2]);
console.log(valores[9]); // ter cuidado ao selecionar um indice no array pois não irá retornar um erro mas sim o valor UNDEFIEND
console.log(valores.length); // verifica o numero de itens no array;

valores[10] = 'j'; // ao adicionar um valor ao indice 10 do array a linguagem adiciona itens vazios até a posicao desejada;
console.log(valores);

valores[5] = 'f'; // ao adicionar um valor ao array
console.log(valores); 

// podemos usar o método splice para adicionar ou remover itens do array;
valores.splice(2, 0, 'x', 'y'); // adiciona 'x' e 'y' na posicao 2 do array
console.log(valores);

valores.splice(5, 1); // remove um item do array na posicao 5
console.log(valores);

valores.push('g'); // adiciona um item ao array no ultimo indice
console.log(valores);
console.log(valores.length);
console.log(typeof valores);

console.log(valores.pop()); // remove o ultimo item do array
console.log(valores);
