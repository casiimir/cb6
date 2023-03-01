import CardProduct from "../cardProduct";
import "./index.css";

const ListProducts = ({ listData }) => {
  return (
    <div className="ListProducts">
      {listData.map((product) => (
        <CardProduct productData={product} key={product.id} />
      ))}
    </div>
  );
};

export default ListProducts;
