import { useState } from "react";
import MenuContent from "../menuContent";
import "./index.css";

const SideMenu = () => {
  const [isActive, setActive] = useState(false);
  // const [VALORE, METODO_MODIFICA_VALORE] = useState(VALORE_INIZIALE);

  const showMessage = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="SideMenu">
      <MenuContent />
      <button>Tweet</button>
      {/* <button onClick={showMessage}>click</button> */}
      {isActive ? <MenuContent /> : null}
      {/* <button onClick={() => showMessage()}>click</button> OK */}
      {/* <button onClick={showMessage()}>click</button> ERRORE */}
    </div>
  );
};

export default SideMenu;
