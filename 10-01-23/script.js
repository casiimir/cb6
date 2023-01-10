import { products } from './mocks.js';

const createCard = (title, img, description) => {
  const bodyEl = document.body;
  const cardEl = document.createElement('div');
  const imgEl = document.createElement('img');
  const titleEl = document.createElement('h2');
  const descriptionEl = document.createElement('p');

  cardEl.className = 'card';
  cardEl.setAttribute('id', 'pippo');
  // cardEl.style.border = '8px solid red';

  imgEl.className = 'card__img';
  imgEl.setAttribute('src', img);
  imgEl.setAttribute('alt', title);

  titleEl.className = 'card__title';
  titleEl.textContent = title;

  descriptionEl.className = 'card__description';
  descriptionEl.textContent = description;

  cardEl.append(imgEl, titleEl, descriptionEl);
  bodyEl.appendChild(cardEl);
};

// Crea la singola
// createCard({
//   title: 'titolo',
//   img: 'https://picsum.photos/200/200',
//   description: 'descrizione descrizione'
// });

for (let product of products) {
  createCard(product.title, product.img, product.description);
}

// Identico a sopra
// for (let i = 0; i < products.length; i++) {
//   createCard(products[i]);
// }

// HERO
const heroElClass = document.querySelector('.hero');
// const heroElId = document.querySelector('#hero');
// const heroElTag = document.querySelector('section');
// multiplo
const heroElsTag = document.querySelectorAll('section');

// const heroElById = document.getElementById('hero')
// const heroElByClass = document.getElementsByClassName('hero')

const cardEls = document.querySelectorAll('.card');

console.log(cardEls[0]);

// for (let i = 0; i < cardEls.length; i++) {
//   console.log(cardEls[i].children[1].textContent);
// }

// console.log(cardEls[0].lastChild.previousElementSibling.previousElementSibling);

// const firstCard = cardEls[0];
// const lastElIn = firstCard.lastElementChild;
// const previousElInLastEl = lastElIn.previousElementSibling;

// Esperiemento aggiunta elemento prima di un'altro (Hero)
// const bodyEl = document.body;
// const heroEl = document.querySelector('.hero');

// const ballEl = document.createElement('div');

// ballEl.className = 'ball';

// bodyEl.insertBefore(ballEl, heroEl);
