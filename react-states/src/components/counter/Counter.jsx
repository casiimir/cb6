import { useState, useContext } from "react";
import { GlobalContext } from "../../store";
import "./index.css";

const Counter = () => {
  // const [value, setValue] = useState(0);

  // const onHandleClick = (e) => {
  //   switch (e.target.className) {
  //     case "increment":
  //       return setValue((prev) => prev + 1);
  //     case "decrement":
  //       return setValue((prev) => prev - 1);
  //     case "reset":
  //       return setValue(0);
  //     default:
  //       return setValue(0);
  //   }
  // };

  const { state, dispatch } = useContext(GlobalContext);

  const onHandleClick = (e) => dispatch({ type: e.target.className });

  return (
    <div className="Counter">
      {/* <button className="increment" onClick={onHandleClick}>
        Increment
      </button>
      <h1>{value}</h1>
      <button className="decrement" onClick={onHandleClick}>
        Decrement
      </button>
      <button className="reset" onClick={onHandleClick}>
        Reset
      </button>
      <button onClick={() => setValueApp(value)}>Send to Parent (App)</button> */}
      <button className="increment" onClick={onHandleClick}>
        Increment
      </button>
      <h1>{state.value}</h1>
      <button className="decrement" onClick={onHandleClick}>
        Decrement
      </button>
      <button className="reset" onClick={onHandleClick}>
        Reset
      </button>
      <button>Send to Parent (App)</button>
    </div>
  );
};

export default Counter;
