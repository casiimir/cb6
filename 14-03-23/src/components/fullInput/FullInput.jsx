import { useState } from "react";
import "./index.css";

const FullInput = ({ setList }) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();

    // CHECK VALORE PRESENTE
    // setList((prev) => {
    //   if (
    //     !prev.find(
    //       (item) => item.content.toLowerCase() === inputValue.toLowerCase()
    //     )
    //   ) {
    //     return [
    //       ...prev,
    //       {
    //         id: prev.length + 1,
    //         content: inputValue,
    //         isCompleted: false,
    //       },
    //     ];
    //   } else {
    //     alert("Valore già presente!");
    //     return prev;
    //   }
    // });

    setList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue("");
  };

  const onInputChange = (e) => setInputValue(() => e.target.value);

  return (
    <form className="FullInput" onSubmit={onHandleSubmit}>
      <input
        value={inputValue}
        onChange={onInputChange}
        type="text"
        placeholder="Inserisci task..."
        required
      />
      <input type="submit" value="Aggiungi" />
    </form>
  );
};

export default FullInput;
