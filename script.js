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

let arr = makeArrFive();

writeIn();

function makeArrFive(){

  let numberFive = [];

  for(let i = 0; i < 5; i++){
    numberFive.push(getRandomNumb());
  }

  return numberFive;
}

function askNumberAs(){
  let askNumber;
  let print = document.querySelector('.container');
  console.log(arr);
  
  
  for(let i = 0; i < arr.length; i++ ){
    if (arr[i]){
    print.innerHTML = `hai indovinato ${arr[i] !== askNumber}`;
    }
    askNumber = prompt('inserisci uno dei numeri che hai visto prima');
    console.log(arr[i]);
    console.log(askNumber);

    
  }

}
  
setTimeout(function(){
  document.getElementById('box').innerHTML = '';
  askNumberAs();

}, 2000);

function writeIn(){

  document.getElementById('box').innerHTML = `
  <div style="font-size:50px">${arr} </div>
  `;
}

