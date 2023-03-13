import { useState } from "react";
import { getDaysActualMonth, getMonthLiteral, toCapitalize } from "../../utils";
import Month from "../month";
import "./index.css";

const Calendar = () => {
  const [monthCounter, setMonthCounter] = useState(0);

  const onHandlePreviousClick = () => setMonthCounter((prev) => prev - 1);
  const onHandleNextClick = () => setMonthCounter((prev) => prev + 1);

  return (
    <div className="Calendar">
      <button onClick={onHandlePreviousClick}>{"<"}</button>
      <Month
        monthNum={getDaysActualMonth(monthCounter)}
        monthLiteral={toCapitalize(
          getMonthLiteral(new Date().getMonth() + monthCounter)
        )}
      />
      <button onClick={onHandleNextClick}>{">"}</button>
    </div>
  );
};

export default Calendar;
