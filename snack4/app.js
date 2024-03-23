console.log("hello-world");

//in un array sono coentenuti i nomi delgi invitai alla festa del grande gastsby
//chiedi all utente il suo nome e comunica se si puo partecipare o no

//creare un array con i nomi

let invivati = ["sara", "martina", "federica"];

let nome = prompt("inseriri il tuo nome ");

nome = nome.toLocaleLowerCase();
console.log(nome);

//SE nome includes invitati
//- sei stato invitato
//ALTRIMENTI
//-nn sei stato invitato

if (invivati.includes(nome)) {
  console.log("sei stato invitato");
} else {
  console.log("nn sei stato invitato");
}
