// var _ = require("lodash");
import _ from "./node_modules/lodash/lodash.js";
import { GET } from "./utils/http.js";
import usersList from "./mocks/usersList.json" assert { type: "json" };

const numbers = [5, 44, 3, 2, 54, 66, 768, 4, 23, 1, 2, 0, 11, 43];

// Soluzione con funzione scritta a mano
const getMinNum = (numbers) => {
  let minNum = numbers[0];
  numbers.forEach((n) => {
    if (minNum >= n) {
      minNum = n;
    }
  });

  return minNum;
};

// Soluzione tramite libreria esterna (Lodash)
// console.log(`Il numero più piccolo è: ${_.min(numbers)}`);

GET("https://dummyjson.com/quotes")
  .then((data) =>
    data.quotes.forEach((quote) => console.log(`Autore: ${quote.author}`))
  )
  .then(() => console.log(usersList));
