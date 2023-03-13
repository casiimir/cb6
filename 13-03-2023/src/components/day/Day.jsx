import "./index.css";

const Day = ({ content, activeElement, setActiveElement }) => {
  const onHandleClick = () => setActiveElement(content);

  return (
    <div
      className={`Day ${content === activeElement && "active"}`}
      onClick={onHandleClick}
    >
      {content}
    </div>
  );
};

export default Day;
