const qS = (element) => document.querySelector(element);
const qSA = (element) => document.querySelectorAll(element);
const cE = (type) => document.createElement(type);

const todoGenerator = (todoId, todoText, isCompleted, parent) => {
  const todoEl = cE('div');
  const isCompletedEl = cE('div');
  const textEl = cE('p');

  todoEl.setAttribute('id', todoId);
  todoEl.className = 'todo';
  isCompletedEl.className = 'circle-check';
  isCompleted ? isCompletedEl.classList.add('completed') : null;
  textEl.textContent = todoText;
  todoEl.append(isCompletedEl, textEl);

  isCompletedEl.addEventListener('click', () => {
    isCompletedEl.classList.toggle('completed');
  });

  parent.appendChild(todoEl);
};

export { qS, qSA, cE, todoGenerator };
