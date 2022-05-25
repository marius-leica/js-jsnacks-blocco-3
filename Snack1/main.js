/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/

// array vuoto che conterra i numeri utente da sommare
let numbersList = [];
//
let somma = 0;

while (somma < 50) {
  // const con prompt che chiede all'utente di inserire il numero
  let askNumber = parseInt(prompt("Inserisci un numero"));

  if (!isNaN(askNumber) && askNumber !== "") {
  }
  if (somma + askNumber >= 50) {
    askNumber = parseInt(
      prompt("Inserisci un numero minore o uguale a " + (50 - somma))
    );
  }
  numbersList.push(askNumber);

  somma = 0; // cosi posso resetare ad ogni cilo
  for (let i = 0; i < numbersList.length; i++) {
    somma += numbersList[i];
  }
  console.log(numbersList);
  console.log(somma);
}

console.log(somma);
