import "./index.css";

const Popup = ({ children }) => {
  return (
    <div className="Popup">
      <h2>Questo è il componente Popup stesso</h2>
      {children}
    </div>
  );
};

export default Popup;
