console.log("hello world");

/**Scrivere un programma a cui venga chiesto all'utente 
 * di inserire numeri uno dopo l'altro.
Quando l'utente scriverà 2 volte consecutive lo 
stesso numero allora il programma dovrà terminare. */

//promt inserert a number
// let number = parseInt(prompt("insert a number "));
// console.log(number);

//creare un promt con due numeri

//dicherare la variablile

//usare il loop do while

let a, b;

do {
  a = prompt("inserici il primo numberi");
  b = prompt("inserici il secondo numbero");
} while (a !== b);

console.log(a, b);
