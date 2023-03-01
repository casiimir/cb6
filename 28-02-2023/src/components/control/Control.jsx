import Button from "../button";
import "./index.css";

const Control = ({ listDataLength }) => {
  // const getTodayDate = () => console.log(new Date().toLocaleString());
  // const getAlert = () => alert("Sta scadendo il tempo");
  const getProductsNum = () =>
    alert(`Il numero di prodotti corrisponde a: ${listDataLength}`);

  return (
    <div className="Control">
      <Button
        text="Quanti prodotti?"
        clickFunc={getProductsNum}
        isDisabled={false}
      />
      {/* <Button text="Alert" clickFunc={getAlert} isDisabled={false} /> */}
    </div>
  );
};

export default Control;
