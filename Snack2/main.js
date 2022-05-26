/*
Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.
*/

let userNumber = prompt("inserisci un numero da 1 a 10");

for (let i = 0; i < userNumber; i++) {
  let randomNumber = Math.floor(Math.random() * 10);
  let myArray = [];

  myArray.push(randomNumber);
  console.log(myArray);
  3;
}
