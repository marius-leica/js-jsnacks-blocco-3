/*
Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

*/
let numberList = [];
let somma = 0;

while (numberList.length < 5) {
  let askNumber = parseInt(prompt("Inserisci un numero"));

  if (!isNaN(askNumber) && askNumber !== "") {
    numberList.push(askNumber);
  }
  somma = 0;
  for (let i = 0; i < numberList.length; i++) {
    somma += numberList[i];
  }
}
console.log(numberList);
console.log(somma);
