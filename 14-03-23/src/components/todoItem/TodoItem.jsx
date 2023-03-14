import "./index.css";

const TodoItem = ({ item, setList }) => {
  const onHandleClick = () => {
    setList((prev) => [
      ...prev.filter((todo) => todo.id !== item.id),
      {
        id: item.id,
        content: item.content,
        isCompleted: !item.isCompleted,
      },
    ]);
  };

  return (
    <li
      onClick={onHandleClick}
      className={`TodoItem ${item.isCompleted && "completed"}`}
    >
      <p>{item.content}</p>
    </li>
  );
};

export default TodoItem;
