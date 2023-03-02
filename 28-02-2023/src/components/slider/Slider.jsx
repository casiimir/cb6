import { useState } from "react";
import "./index.css";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1677727990864-2e519807eeb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1677725284091-505971561e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1677690092396-e1efd8a3bc01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];

  const [actualImg, setActualImg] = useState(0);

  return (
    <div className="Slider">
      <img src={images[actualImg]} alt="image" />
      <button onClick={() => setActualImg(actualImg - 1)}>{"<"}</button>
      <button onClick={() => setActualImg(actualImg + 1)}>{">"}</button>
    </div>
  );
};

export default Slider;
