import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/city/${inputValue.toLowerCase()}`);
    setInputValue(() => "");
  };

  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/activities">Activities</Link>
        </li>
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Search..."
          minLength={3}
          required
        />
      </form>
    </div>
  );
};

export default Navbar;
