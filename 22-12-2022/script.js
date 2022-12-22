function doIt() {
  // Scope locale
  let surname = "Pluto";
  console.log(firstName);
}

let firstName = "Pippo";

// // console.log(surname);
// doIt();

function calc(num1, num2) {
  console.log(firstName); // Acconsentito
  let result = num1 + num2 + anotherNum; // errore, anotherNum è fuori scope

  function sum() {
    let anotherNum = 2;
    return result; // Acconsentito
  }
}

// console.log(result); // Errore

// Global (firstName) - Calc (result) - Sum(anotherNum)
//         --->         --->            --->
//                      <--- negato     <--- negato

// let p = 20;
// if(true) {
//     p = 100;
//     console.log('Locale:', p);
// }

// console.log('Globale:', p);

// let a = 0;

function anotherThing() {
  a++; // Concetto di funzione pura distrutto, ma è comunque valido
}

// console.log("Prima dell'invocazione", a);
// anotherThing();
// console.log("Dopo l'invocazione", a);

var a = 1;
let b = 1;
const c = 1;

// c = 2; // Errore - const non può essere riassegnata
b = 2;
a = 2;

// console.log("a:", a, "b:", b, "c:", c);
// console.log(`a: ${a} b: ${b} c: ${c}`);

if (true) {
  var t = 1; // Il cui scope è globale, sarà l'unica variabile visibile all'esterno di questo if
  let x = 1; // locale all'if
  const y = 1; // locale all'if
}

// console.log(`t: ${t} x: ${x} y: ${y}`);

// console.log(t); // valido, globale
// console.log(x); // sbagliato, locale
// console.log(y); // sbagliato, locale

function productGen(
  id,
  title,
  imgUrl,
  rating,
  nReviews,
  store,
  price,
  sale,
  fullPrice
) {
  return {
    id: id,
    title: title,
    imgUrl: imgUrl,
    rating: rating,
    nReviews: nReviews,
    store: store,
    price: price,
    sale: sale,
    fullPrice: fullPrice,
  };
}

// const adidasWB = {
//   id: 1,
//   title: "Adidas White Black",
//   imgUrl: "https://picsum.photos/200/300",
//   rating: 4.8,
//   nReviews: 87,
//   store: "Apidas Sports Wear",
//   price: 99,
//   sale: 5,
//   fullPrice: 99,
// };

const products = [];
// products.push(adidasWB)
// const products = [adidasWB];

products.push(
  productGen(1, "Titolo - Pippo", "http://...", 5, 100, "Italy", 100, 0, 100)
);

products.push(
  productGen(2, "Titolo - Pluto", "http://...", 5, 100, "France", 100, 0, 100)
);

// const products = [
//   productGen(1, "Titolo - Pippo", "http://...", 5, 100, "Italy", 100, 0, 100),
//   productGen(2, "Titolo - Pluto", "http://...", 5, 100, "France", 100, 0, 100),
//   // ...
// ];

console.log(products);
