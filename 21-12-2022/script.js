// Dichiarazione
function sum() {
  let operation = prompt("Inserisci operazione matematica");
  let num1 = prompt("Inserisci il primo numero");
  let parsedNum1 = parseInt(num1);
  let num2 = prompt("Inserisci il secondo numero");
  let parsedNum2 = parseInt(num2);

  if (operation === "+") {
    console.log(parsedNum1 + parsedNum2);
  } else if (operation === "-") {
    console.log(parsedNum1 - parsedNum2);
  } else if (operation === "*") {
    console.log(parsedNum1 * parsedNum2);
  } else if (operation === "/") {
    console.log(parsedNum1 / parsedNum2);
  }
}

// function sumBase(num1, num2) {
//   return num1 + num2;
// }

// let sum3And2 = sumBase(2,3);

function randomInRange(max) {
  return parseInt(Math.random() * max);
}

// console.log(randomInRange(10000));

function welcomeMsg(msg, another = "a tutti") {
  // console.log(msg + another);
  //...
  //...
  return msg + another;
}

// momento dichiarazione -> Parametri
function replaceString(wordToReplace, replaceWith) {
  let string = prompt("Inserisci una frase");

  return string.replace(wordToReplace, replaceWith);
}

// momento invocazione -> Argomenti
// let danteR = replaceString("cammin", "cucina");
// console.log(danteR);

// let operation = prompt("Inserisci operazione matematica");

// if (operation === "+") {
//   console.log(3 + 2);
// } else if (operation === "-") {
//   console.log(3 - 2);
// } else if (operation === "*") {
//   console.log(3 * 2);
// } else if (operation === "/") {
//   console.log(3 / 2);
// }

// Sintassi funzioni
// function NOME_FUNZIONE (...PARAMS) {
//   // blocco codice
// }

// Invocazione
// sum();

welcomeMsg("Ciao");
// let myPersonalMsg = welcomeMsg("Ciao ");
// console.log(myPersonalMsg);

// ---------->> -*- <<------------
// Objects
const pipposCar = {
  color: "red", // proprietà
  brand: "Ferrari", // proprietà
  isFast: true, // proprietà
  nSeat: 3, // proprietà
  // metodo (ovvero una funzione ma sita all'interno di un oggetto)
  run: function () {
    console.log("VRUUMM vruuum!!");
  },
};

// I valori di reference possono modificare i sotto elementi anche se const
// console.log(pipposCar);
pipposCar.color = "blue";
// console.log(pipposCar);

// console.log(pipposCar); // stampa l'intero oggetto
// console.log("La marca dell'auto di Pippo è: " + pipposCar.brand);
// console.log("L'auto di Pippo ha " + pipposCar["nSeat"] + "n posti a sedere");
// pipposCar.run();

// Per ottenere tutte le chiavi di un oggetto - return array
// console.log(Object.keys(pipposCar));
// Per ottenere tutte i valori di un oggetto - return array
// console.log(Object.values(pipposCar));

// Va a cercare se un proprietà esiste
// console.log(pipposCar.hasOwnProperty("run"));
// console.log(pipposCar.valueOf("pippo"));

const productsList = [
  {
    id: 0,
    title: "T-shirt",
    price: 99,
    colors: ["red", "black", "white"],
    currency: "€",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, hic?",
  },
  {
    id: 1,
    title: "Bag",
    price: 29,
    colors: ["red", "black"],
    currency: "€",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, hic?",
  },
  {
    id: 2,
    title: "Mouse",
    price: 10,
    colors: ["black"],
    currency: "€",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, hic?",
  },
];

let totalPrice = 0;

for (product of productsList) {
  totalPrice = totalPrice + product.price;
}

// console.log(totalPrice);

const fruitsArr = ["mela", "pera", "kiwi", "mango"];

console.log(fruitsArr);

const fruitsObj = {
  0: "mela",
  1: "pera",
  2: "kiwi",
  3: "mango",
};

fruitsArr.length = 10;

// for (index in fruitsArr) {
//   console.log(index);
// }

for (let i = 0; i < fruitsArr.length; i++) {
  console.log(i);
}
