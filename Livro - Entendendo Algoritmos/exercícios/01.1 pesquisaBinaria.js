/* 
1.1
Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma
pesquisa binária. Qual seria o número máximo de etapas que você levaria
para encontrar o nome desejado?
*/
// Resposta: 7

/* const numbers = Array.from({ length: 129}, (_, i) => i); */
const generateRange = Array.from({ length: 128 }, (_, i) => i); 
const searchNumbers = 110;
const result = searchBinrary(generateRange, searchNumbers)

function searchBinrary(generateRange, searchNumbers) {
  let left = 0;
  let right = generateRange.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (generateRange[mid] === searchNumbers) {
      return mid;
    } else if (generateRange[mid] < searchNumbers) {
      left = mid + 1;
    } else { 
      right = mid - 1;
    }
  }
}

console.log(`Element ${searchNumbers} found`);
