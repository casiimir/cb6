// console.log("Ciao ragazzi");

// let userPrompt = prompt("Come ti chiami?");

// console.log(userPrompt);

// alert("Attenzione!");

let favouriteBook = "Alice nel paese delle meraviglie";

// alert(favouriteBook);

// console.log("Il mio libro preferito è: " + favouriteBook);

// TIPI PROMITIVI
let myName = "Pippo"; // string

let age = 3; // number

let isCartoon = true; // boolean

// console.log("Addizione: " + (2 + 5));
// console.log("Sottrazione: " + (12 - 5));
// console.log("Moltiplicazione: " + 2 * 5);
// console.log("Divisione: " + 15 / 5);
// console.log("Modulo: " + (15 % 5));

// console.log(age);
// // Convert num to string
// console.log(age.toString());

// console.log("2323");
// // Convert string to num
// console.log(parseInt("2323"));

age = 12;

// if (age > 18) {
//   console.log("Sei maggiorenne");
// } else if (age === 18) {
//   console.log("Sei appena diventato maggiorenne");
// } else {
//   console.log("Non sei maggiorenne");
// }

// switch (age) {
//   case 18:
//     console.log("Sei appena diventato maggiorenne");
//     break;
//   case 20:
//     console.log("Sei maggiorenne");
//     break;
//   case 8:
//     console.log("Sei minorenne");
//     break;
//   default:
//     console.log("Scusami non sono stato abbastanza istruito");
// }

// if (age < 18) {
//   console.log("Sei minorenne");
// } else {
//   console.log("Sei maggiorenne");
// }

// Operatore ternario
// age < 18 ? console.log("Sei minorenne") : console.log("Sei maggiorenne!");

let userName = prompt("Ciao! Come ti chiami?");
let userAge = prompt("Quanti anni hai?");
let intUserAge = parseInt(userAge);

// console.log("Ciao " + userName + " so che hai " + userAge + " anni.");

// if (intUserAge >= 18) {
//   console.log("Ciao " + userName + " so che sei maggiorenne!");
// } else {
//   console.log("Ciao " + userName + " sei ancora minorenne!");
// }

if (intUserAge >= 18 && userName !== "Pluto") {
  console.log("Ciao " + userName + " so che sei maggiorenne!");
} else if (userName === "Pluto") {
  console.log("Sei un cagnolino, quindi non vale per te!");
} else {
  console.log("Ciao " + userName + " sei ancora minorenne!");
}

// IF annidato
// if(userName !== "Pluto") {
//   if(userAge >= 18) {
//     console.log("Ciao " + userName + " so che sei maggiorenne!");
//   } else {
//     console.log("Ciao " + userName + " sei ancora minorenne!");
//   }
// } else {
//   console.log("Sei un cagnolino, quindi non vale per te!");
// }
