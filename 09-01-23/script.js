// Creazione della func. sum
function sum(firstNum, secondNum = 5) {
  //...
  console.log('ciao');
  return firstNum + secondNum;
}

// Creazione di una arrow function
const sumTwo = (firstNum, secondNum) => {
  //...
  return firstNum + secondNum;
};

// Creazione di una arrow function con valore di return
const sumTwoSlim = (firstNum, secondNum) => firstNum + secondNum;

let fruits = ['orange', 'mango', 'ananas', 'kiwi'];

function printFruits(first, second) {
  // Console log del primo parametro (first)
  console.log('=====>', arguments[0]);
}

function ourConcat(firstArr, secondArr) {
  const finalArr = [];

  for (let i = 0; i < firstArr.length; i++) {
    finalArr.push(firstArr[i]);
  }

  for (let i = 0; i < secondArr.length; i++) {
    finalArr.push(secondArr[i]);
  }

  return finalArr;
}

// Invocazione della func. sum
sum(2, 5);

console.log('function:', sum(10, 5));

console.log('arrow function:', sumTwo(3, 100));

console.log('arrow function slim:', sumTwoSlim(30, 44));

printFruits('apple', 'kiwi');

console.log([...fruits, 'apple']);
console.log(['orange', 'mango', 'ananas', 'kiwi', 'apple']);

fruits = ['orange', 'mango', 'ananas', 'kiwi'];

const freshFruits = ['apple', 'pear'];

let casketFruits = fruits + freshFruits;

casketFruits = ourConcat(fruits, freshFruits);

// Identico a riga 62
console.log('===>', casketFruits);

console.log('****>', [...fruits, ...freshFruits]);

// IIFE - funzione auto invocante
(function (str = 'CIAO') {
  console.log(str);
})();

// IIFE - versione arrow function
((str = 'CIAO') => console.log(str))();

// L'esagerazione piu estrema!

// function doSomething(arg1, arg2, callback) {
//   // Esegue alcune operazioni con arg1 e arg2
//   const result = 'risultato';
//   // Esegue la callback
//   callback(result)
// }

// function toUpperCaseCase(str) {
//   let stringCapitalized = '';

//   for(let i = 0; i < str.length; i++) {
//     stringCapitalized += str[i].toUpperCase()
//   }

//   console.log(stringCapitalized)
// }

// doSomething(1, 2, toUpperCaseCase)
