import { useState } from "react";
import "./index.css";

const Navbar = ({
  cartListLength,
  setSearchInputValue,
  setModalCartVisibility,
}) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSearchInputValue(() => inputValue);
  };

  const onHandleCartClick = () => {
    setModalCartVisibility((prev) => !prev);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca prodotto ..."
          required
        />
      </form>
      <div className="Navbar__cart">
        <p onClick={onHandleCartClick}>{cartListLength} 🛒</p>
      </div>
    </div>
  );
};

export default Navbar;
