/* Suponhamos que tenha uma lista de 256 nomes e esteja fazendo uma pesquisa binária. Qual seria o número máximo de etapas que voce levaria
para encontrar o nome desejado? */

// Resposta: 8
const generateRange = Array.from({ length: 256 }, (_, i) => i); 
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
