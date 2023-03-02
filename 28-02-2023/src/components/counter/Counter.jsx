import { useState } from "react";
import "./index.css";

const Counter = () => {
  // No no no ...
  // let count = 0;
  // const onCountIncrement = () => (count += 1);

  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <p>Hai cliccato {count} volte</p>
      <button onClick={() => setCount((prev) => prev++)}>Incrementa</button>
    </div>
  );
};

export default Counter;
