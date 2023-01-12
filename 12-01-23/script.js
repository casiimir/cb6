// const changeCardColor = () => (cardEl.style.color = 'blue');
// const removeCardEl = () => cardEl.remove();

// const cardEl = document.querySelector('.card');
// const cardBtnEl = document.querySelector('.card__btn');

// cardEl.addEventListener('click', changeCardColor);
// cardBtnEl.addEventListener('click', removeCardEl);

import { qS, cE } from './utils.js';

const todoGenerator = (todoText, parent) => {
  const todoEl = cE('div');
  const textEl = cE('p');

  todoEl.className = 'todo';
  textEl.textContent = todoText;
  todoEl.appendChild(textEl);
  parent.appendChild(todoEl);
};

const bodyEl = qS('body');
const todoListEl = cE('div');

todoListEl.className = 'todo-list';
bodyEl.appendChild(todoListEl);

// todoGenerator('Io sono una todo', todoListEl);

const numsArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const todoList = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false
  }
];

// for (let i = 0; i < objsArr.length; i++) {
//   console.log(objsArr[i].title);
// }

todoList.forEach((todo) => todoGenerator(todo.title, todoListEl));

// Callback tendenzialmente usate dentro i metodi/funzioni e` sempre anonima
// () => {}
// Callback e` una funzione che accetta un parametro come funzione o ritorna una funzione o entrambi

// FOREACH ritorna undefined
// const todoListTitles = todoList.forEach((todo) => todo.title);

// MAP ritorna un array della stessa dimensione dell'array di partenza (todoList) contente quello che e` il valore di ritorno (todo.title)
const todoListTitles = todoList.map((todo) => todo.title);

// FILTER ritorna un array di dimensione pari agli elementi che rispettano la sua condizione
const filteredTitles = todoList.filter((todo) => todo.title.length >= 34);
// console.log(filteredTitles);

const ourForEach = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
};

const transformString = (str) => {
  let finalStr = '';

  for (let i = 0; i < str.length; i++) {
    finalStr += str[i].toUpperCase();
  }

  return finalStr.slice(2);
};

ourForEach(todoList, (todo) => console.log());

const transformedTodosTitle = todoList.map((todo) =>
  transformString(todo.title)
);

console.log(transformedTodosTitle);
