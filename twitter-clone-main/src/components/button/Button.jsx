import "./index.css";

const Button = ({ value, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
