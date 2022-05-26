/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. Interrompi il ciclo appena il nome è stato trovato.

*/

const guests = ["John", "John", "Joe", "Jack", "Jill", "Jim", "Joe"];
let inTheListIndex = false;
let i = 0;

do {
  const nomeInserito = prompt("Inserisci il tuo nome");

  // controllare che sia un prodotto valido.
  let nomeValido = false;

  for (let i = 0; i < guests.length; i++) {
    if (nomeInserito === guests[i]) {
      nomeValido = true;
    }
  }

  if (nomeValido) {
    // se prodotto valido, aggiungere il prodotto alla lista spesa
    alert("Sei un VIP!!!");
    inTheListIndex = true;
  } else {
    alert("Sei un povereto!!!");
    inTheListIndex = false;
  }
  console.log(inTheListIndex);
} while ((inTheListIndex = true));
console.log(inTheListIndex);

/*while (inTheListIndex === undefined && i < guests.length) {
  const nomeUtente = parseInt(prompt("Inserisci il tuo nome"));

  let valido = false;
  for (let i = 0; i < guests.length; i++) {
    if (nomeUtente === guests[i]) {
      valido = true;
    }

    if (valido) {
      alert("Sei un VIP!!!");
    } else {
      alert("Sei un povereto!!!");
    }
    // if (guests[i] === nomeUtente) {
    //   inTheListIndex = i;
    //   alert("Sei un VIP!!!");
    // } else if (guests[i] !== nomeUtente) {
    //   alert("Sei un povereto!!!");
    // }
  }
}*/

// while (nomeUtente === guests[i]) {
//   const nomeUtente = prompt("Inserisci il tuo nome");

//   let i = 0;
//   if (nomeUtente === guests[i]) {
//   }
//   if (inTheList) {
//     alert("Sei un VIP!!!");
//   } else {
//     alert("Sei un povereto!!!");
//   }
// }
