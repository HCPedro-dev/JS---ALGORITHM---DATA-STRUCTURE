let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);
console.log(!isAtivo);

// situacos que ira se comportar como verdadero
console.log(!!2);
console.log(!!-3);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

// situacoes que ira se comportar como falso
console.log(!!0);
console.log(!!NaN);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);