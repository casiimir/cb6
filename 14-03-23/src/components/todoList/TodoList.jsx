import "./index.css";
import TodoItem from "../todoItem";

const TodoList = ({ list, setList }) => {
  return (
    <ul className="TodoList">
      {list
        .sort((item1, item2) => (item1.id <= item2.id ? 1 : -1))
        .map((item) => (
          <TodoItem item={item} setList={setList} key={item.id} />
        ))}
    </ul>
  );
};

export default TodoList;
