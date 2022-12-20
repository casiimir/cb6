// Array di stringhe
let fruits = ["mela", "pera", "ananas", "kiwi"];
let vegs = ["lemon", "orange", "tomatos"];

// Ritorna la lunghezza totale
// console.log(fruits.length);

// Ritorna il 3 valore 'ananas'
// console.log(fruits[2]);

// Metodo push - aggiunge un valore alla coda dell'array
// console.log("prima", fruits);
// fruits.push("anguria");
// console.log("dopo", fruits);

// Metodo unshift - aggiunge un valore in testa all'array
// console.log("prima", fruits);
// fruits.unshift("anguria");
// console.log("dopo", fruits);

// Metodo pop - rimuove l'ultimo valore in coda all'array
// console.log("prima", fruits);
// fruits.pop();
// console.log("dopo", fruits);

// Metodo shift - rimuove il primo valore in testa all'array
// console.log("prima", fruits);
// fruits.shift();
// console.log("dopo", fruits);

// Metodo concat - concatena più arrays tra loro
// let fullFruits = fruits.concat(vegs);
// console.log(fullFruits);

// Metodo slice - il primo valore è inclusivo, l'ultimo è esclusivo
// let favouriteFruits = fruits.slice(1, 3);
// console.log(favouriteFruits);

// let newFruit = prompt("Che frutta vuoi mangiare?");

// if (fruits.includes(newFruit)) {
//   console.log("Prendilo dal cesto " + newFruit);
// } else {
//   console.log("Devi comprare " + newFruit);
// }

// CICLI
// Il ciclo for
// for (inizializzazione; condizione; incremento) {
//   // blocco codice - il codice da eseguire n volte
// }

// i = i + 1
// i += 1
// i++

// For classico - range
// for (let i = 1; i <= 9999; i++) {
//   console.log(i);
// }

// ...

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i + ": " + fruits[i]);
// }

// console.log(i); // la var. i non esiste all'esterno
// ...

// For minimal - Index = i
// for (let fruitIndex in fruits) {
//   console.log(fruitIndex);
// }

// For minimal - Value = fruits[i]
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// let userNames = [];

// for (let x = 4; x > 0; x--) {
//   userNames.push(prompt("Inserisci il tuo nome"));
// }

// Alla ricerca di Pippo! v.1
// for (let userName of userNames) {
//   if (userName === "Pippo") {
//     console.log("Ho trovato Pippo!");
//   }
// }

// Alla ricerca di Pippo! v.2
// if (userNames.includes("Pippo")) {
//   console.log("Ho trovato Pippo!");
// }

// console.log(userNames);

// Array di array
let stuff = [
  "pen",
  "mouse",
  "notebook",
  "paper",
  ["pens", "keys", "scotch", "mouse"],
];

// Array multidimensionale matrice
let matrix = [
  [1, 2, 3], // 0
  [4, 5, 6], // 1
  [7, 8, 9], // 2
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
