import { useState } from "react";
import Day from "../day";
import "./index.css";

const Month = ({ monthNum, monthLiteral }) => {
  const [activeElement, setActiveElement] = useState(new Date().getDate());

  return (
    <div className="Month">
      <h2>{monthLiteral}</h2>
      <div className="Month__wrapper">
        {[...new Array(monthNum)].map((item, i) => (
          <Day
            content={i + 1}
            activeElement={activeElement}
            setActiveElement={setActiveElement}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Month;
