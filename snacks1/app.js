console.log("hello-world");

//L'utente inserisce un numero
//con i promt
//il software stampa il maggiore

// //creare 2 variable di promt
// //1 numero promt
// const number1 = parseInt(prompt("inserici un numbero")); //number

// //2 numero promt
// const number2 = parseInt(prompt("inserici un numbero")); //number

// // salvare i 2 varaibli dentro un promt
// console.log(number1, number2, typeof number1, typeof number2);

//SE numbero 1 e > numbero 2
//-cl il numbero 1 e maggiore
//ALTRIMENTI
//-il numero 2 e maggiore

//prendere un numbero dal promt
let number1 = prompt("insert a number"); //string
let number2 = prompt("insert a number"); //string

//convertire in number
number1 = parseFloat(number1); //number
number2 = parseFloat(number2); //number
console.log(number1, typeof number1, typeof number2, number2);

//SE number 1 e > numbero 2
//- cl il numbero maggiore e number1
//Altrimenti SE il numbero 2 > number 1
//- cl il number maggiore e number2
//ALTRIMENTI
//-cl i numberi inseriti sono uguali

if (number1 > number2) {
  console.log(`il numbero maggiore e ${number1}`);
} else if (number2 > number1) {
  console.log(`il numero maggiore e ${number2}`);
} else {
  console.log(`i numeri sono uguali`);
}
