import "./index.css";

const CardProduct = ({ productData }) => {
  const onHandleClick = () => alert(`Hai selezionato ${productData.title}`);

  return (
    <div className="CardProduct">
      <img src={productData.thumbnail} alt="Apple" />
      <div className="CardProduct__text-content">
        <h4>{productData.title}</h4>
        <p>{productData.description}</p>
        <p>{productData.price} $</p>
        <hr />
        <p>{productData.brand}</p>
        <button onClick={onHandleClick}>Click</button>
      </div>
    </div>
  );
};

export default CardProduct;
