import "./index.css";

const TrendItem = ({ data }) => {
  return (
    <div>
      <h3>{data.todo}</h3>
      <p>Status: {data.completed ? "✅" : "❌"}</p>
    </div>
  );
};

export default TrendItem;
