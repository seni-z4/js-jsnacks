console.log("hello-world");

/**L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

//creare 2 promt

//prima devi stampare la parola piu corta

//poi devi stampare la parola piu lunga

let parola1 = prompt("inserici una parola");
let parola2 = prompt("inserici una parola");

console.log(parola1, parola2);

let parolaCorta, parolaLunga;
//prima la parola corta poi lunga

if (parola1.length < parola2.length) {
  //20-10
  parolaCorta = parola1;
  parolaLunga = parola2;
} else {
  parolaCorta = parola2;
  parolaLunga = parola1;
}

console.log(`la parola piu corta ${parolaCorta}`);
console.log(`la parola piu lunga ${parolaLunga}`);
