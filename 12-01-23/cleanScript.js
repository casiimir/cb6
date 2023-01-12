import { qS, qSA, cE, todoGenerator } from './utils.js';
import { todos } from './mocks.js';

const bodyEl = qS('body');
const todoListEl = cE('div');
const todoListTitleEl = cE('h1');

todoListEl.className = 'todo-list';
todoListTitleEl.textContent = 'Todo List';

bodyEl.append(todoListTitleEl, todoListEl);

todos.map((todo) =>
  todoGenerator(todo.id, todo.todo, todo.completed, todoListEl)
);
