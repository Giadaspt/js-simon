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

writeIn();

function makeArrFive(){

  let numberFive = [];

  for(let i = 0; i < 5; i++){
    numberFive.push(getRandomNumb());
  }

  return numberFive;

}

console.log(makeArrFive());

function askNumberAs(){
  let askNumber;

  for(let i = 0; i < 5; i++ ){
    askNumber;//prompt('inserisci uno dei numeri che hai visto prima');

    // if(askNumber !== numb){
      
    //   document.querySelector('.container').innerHTML = `
    //   Hai indovinato ${numeri} numeri
    //   `;
    // }
  }

}
  
setTimeout(function(){
  document.getElementById('box').innerHTML = '';
  askNumberAs();

}, 2000);

function writeIn(){

  document.getElementById('box').innerHTML = `
  <div style="font-size:50px">${makeArrFive()} </div>
  `;
}

