/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/

// COME SI FA:
// chiedo di inserire il numero
//Creo un array vuoto dove inserire i vari array creati
//Creo N array in base al numero scelto dall'utente
//inserisco 10 numeri casuali in ogni array creato
//aggiungo all'array iniziale i nuovi array creati

const numeroScelto = parseInt(prompt("Inserisci un numero"));
const arrayGenerati = [];
//dovremo validare il numero inserito
// la condizione è che finchè la lunghezza di arrayGenerati è minore del numero scelto
while (arrayGenerati.length < numeroScelto) {
  const nuovoArray = []; //creo il nuovo array
  //inserisco 10 numeri casuali in ogni array creato
  while (nuovoArray.length < 10) {
    //creo un numero casuale
    const numeroCasuale = Math.floor(Math.random() * 100) + 1;

    //controllo se il numero è già presente nell'array
    if (!nuovoArray.includes(numeroCasuale)) {
      //se non è presente lo inserisco nell'array
      nuovoArray.push(numeroCasuale);
    }
    const somma = nuovoArray.reduce((acc, curr) => acc + curr);
    if (somma < 50) {
      arrayGenerati.push(nuovoArray);
      break;
    }
  }

  arrayGenerati.push(nuovoArray); //aggiungo il nuovo array all'array iniziale cosi quando arriverà al massimo si fermerà il ciclo
}
console.log(arrayGenerati);

//-----------------------------------------------------------------
// // array vuoto che conterra i numeri utente da sommare
// let numbersList = [];
// //
// let somma = 0;

// while (somma < 50) {
//   // const con prompt che chiede all'utente di inserire il numero
//   let askNumber = parseInt(prompt("Inserisci un numero"));

//   if (!isNaN(askNumber) && askNumber !== "") {
//   }
//   if (somma + askNumber >= 50) {
//     askNumber = parseInt(
//       prompt("Inserisci un numero minore o uguale a " + (50 - somma))
//     );
//   }
//   numbersList.push(askNumber);

//   somma = 0; // cosi posso resetare ad ogni cilo
//   for (let i = 0; i < numbersList.length; i++) {
//     somma += numbersList[i];
//   }
//   console.log(numbersList);
//   console.log(somma);
// }

// console.log(somma);
