import "./index.css";
import MenuContent from "../menuContent";

const HamburgerMenu = ({ showMenu }) => {
  return (
    <div className={`hamburger ${showMenu ? "show" : ""}`}>
      <MenuContent />
    </div>
  );
};

export default HamburgerMenu;
