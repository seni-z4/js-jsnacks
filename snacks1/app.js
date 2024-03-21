console.log("hello-world");

//L'utente inserisce un numero
//con i promt
//il software stampa il maggiore

//creare 2 variable di promt
//1 numero promt
const number1 = parseInt(prompt("inserici un numbero")); //number

//2 numero promt
const number2 = parseInt(prompt("inserici un numbero")); //number

// salvare i 2 varaibli dentro un promt
console.log(number1, number2, typeof number1, typeof number2);

//SE numbero 1 e > numbero 2
//-cl il numbero 1 e maggiore
//ALTRIMENTI
//-il numero 2 e maggiore

// if (number1 > number2) {
//   console.log(`il numbero ${number1} e maggiore`);
// } else {
//   console.log(`il numbero ${number1} e maggiore`);
// }

if (number1 === number2) {
  console.log("il numbero che hai inserito e uguale");
} else if (number1 > number2) {
  console.log(`il numbero ${number1} e maggiore`);
} else if (number2 > number1) {
  console.log(`il numbero ${number2} e minore`);
} else {
  alert("insert a valid number");
}
