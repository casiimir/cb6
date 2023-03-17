import "./index.css";

const Cart = ({ cartList, setCartList }) => {
  const onHandleClick = (cartProduct) => {
    const filteredCartList = cartList.filter(
      (product) => product.id !== cartProduct.id
    );

    setCartList(() => filteredCartList);

    localStorage.setItem("cartList", JSON.stringify(filteredCartList));
  };

  return (
    <div className="Cart">
      {!cartList.length ? (
        <h2>Inserisci almeno un prodotto...</h2>
      ) : (
        <div className="Cart__list">
          {cartList.map((product) => (
            <div className="Cart__product" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <button
                onClick={() => onHandleClick(product)}
                className="Cart__product--delete"
              >
                ❌
              </button>
            </div>
          ))}
          <h3>
            Totale: {cartList.reduce((acc, product) => acc + product.price, 0)}$
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
