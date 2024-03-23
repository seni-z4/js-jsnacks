console.log("hello world");

//il utente deve inserie 1o numeri

//la progamma stampa la somma di tutti i numeri

/*let number1 = parseInt(prompt("inserici un numero"));
let number2 = parseInt(prompt("inserici un numero"));
let number3 = parseInt(prompt("inserici un numero"));
let number4 = parseInt(prompt("inserici un numero"));
let number5 = parseInt(prompt("inserici un numero"));

console.log(number1, number2, number3, number4, number5);

const toale = number1 + number2 + number3 + number4 + number5;

console.log(toale);
*/

let somma = 0;

for (let i = 0; i < 10; i++) {
  const number = parseInt(prompt("inserici un numbero"));
  // console.log(number);

  somma = somma + number;
  console.log(somma);
}

console.log(`il totale dei numeri inseriti e di ${somma}`);
