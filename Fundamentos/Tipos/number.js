const peso = 1.0;
const peso2 = Number('2.5');

console.log(peso, peso2);
console.log(Number.isInteger(peso2));

const avaliacao = 9.821;
const avaliacao2 = 7.0;

const total = avaliacao * peso + avaliacao2 * peso2;
const media = total / (peso + peso2);

console.log(media);
console.log(media.toString());//Transformar o valor em STRING
console.log(media.toFixed(2));//Fixar o total de casa decimal

