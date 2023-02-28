import { productsList } from "../../mocks/productsList";
import CardProduct from "../cardProduct";
import "./index.css";

const ListProducts = () => {
  return (
    <div className="ListProducts">
      {productsList.map((product) => (
        <CardProduct productData={product} />
      ))}
    </div>
  );
};

export default ListProducts;
