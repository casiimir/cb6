import CardProduct from "../cardProduct";
import "./index.css";

const ListProducts = ({ listData, setSingleProductModal }) => {
  return (
    <div className="ListProducts">
      {listData.map((product) => (
        <CardProduct
          productData={product}
          setSingleProductModal={setSingleProductModal}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ListProducts;
