import Hero from "./components/hero";
import ListProducts from "./components/listProducts/ListProducts";
import "./main.css";

const Main = () => {
  return (
    <div className="Main">
      <Hero title="Store" />
      <ListProducts />
    </div>
  );
};

export default Main;
