/*

1. creo una funzione che mi genera 5 numeri random con ciclo 
2. faccio stampare i numeri all interno del quadrato apposito e lo faccio o con html o con js scrivendo a mano l html 
3. setto l intervallo per tot secondi e dico che appena passati quesi secondi partono i prompt
4. se il valore dei prompt è == al numero random hai indovinato tot altrimenti nessuno
*/

// function getRandomNumb(){
//  return Math.floor(Math.random() * 99);
// }

let getRandomNumb = () => Math.floor(Math.random() * 99);

let numberFive = {
  number1: getRandomNumb(),
  number2: getRandomNumb(),
  number3: getRandomNumb(),
  number4: getRandomNumb(),
  number5: getRandomNumb(),
}
console.log(numberFive);

getRandomNumb(numberFive);
writeIn();

function writeIn(){

  const {number1, number2, number3, number4, number5} = numberFive;

  document.getElementById('box').innerHTML = `
  <div style="font-size:50px"> ${number1}, ${number2}, ${number3}, ${number4}, ${number5} </div>
  `;
}

