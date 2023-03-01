import { productsList } from "./mocks/productsList";
import Control from "./components/control";
import Hero from "./components/hero";
import ListProducts from "./components/listProducts/ListProducts";
import "./main.css";

const Main = () => {
  return (
    <div className="Main">
      <Hero title="Store" />
      <Control listDataLength={productsList.length} />
      <ListProducts listData={productsList} />
    </div>
  );
};

export default Main;
