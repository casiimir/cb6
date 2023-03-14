import { useState } from "react";
import FullInput from "./components/fullInput";
import TodoList from "./components/todoList";
import todoList from "./mock/todoList";
import "./App.css";

function App() {
  const [list, setList] = useState(todoList);

  return (
    <div className="App">
      <h1>Todo list</h1>
      <div className="wrapper">
        <FullInput setList={setList} />
        <TodoList list={list} setList={setList} />
      </div>
    </div>
  );
}

export default App;
