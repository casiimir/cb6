import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/pages/About.module.scss";

export default function About() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [inputTimeValue, setInputTimeValue] = useState("");

  const onHandleClick = () => {
    navigate(`/activities?time=${inputTimeValue}`);
  };

  const onHandleInputTime = (e) => {
    setInputTimeValue(() => e.target.value);
  };

  return (
    <div className={styles.About}>
      <h1>About</h1>
      <input
        value={inputTimeValue}
        onChange={onHandleInputTime}
        type="time"
        name=""
        id=""
      />
      <button onClick={onHandleClick}>Imposta ora</button>
    </div>
  );
}
