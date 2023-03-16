import { useState, useEffect } from "react";
import CardList from "./components/cardList";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import MiniCard from "./components/miniCard/MiniCard";
import Navbar from "./components/navbar";
import ProductDetail from "./components/productDetail";
import { GET } from "./utils/http";
import "./App.css";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [cartList, setCardList] = useState([]);
  const [miniCards, setMiniCards] = useState([]);
  const [modalContext, setModalContext] = useState({
    productData: {},
    isVisibile: false,
  });

  useEffect(() => {
    GET(
      searchInputValue ? `/products/category/${searchInputValue}` : "/products"
    ).then((data) => setMiniCards(() => data.products));
  }, [searchInputValue]);

  const localStorageCartList =
    window !== "undefined" &&
    JSON.parse(localStorage.getItem("cartList") || "[]").length;

  return (
    <div className="App">
      <Navbar
        cartListLength={localStorageCartList || cartList.length}
        setSearchInputValue={setSearchInputValue}
      />
      <Hero />
      <div className="App__miniCards">
        {miniCards.map((card) => (
          <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
        ))}
      </div>
      <CardList
        title="Technology"
        endpoint="/products?limit=10"
        setModalContext={setModalContext}
      />
      <CardList
        title="Skincare"
        endpoint="/products?limit=10&skip=10"
        setModalContext={setModalContext}
      />
      <Footer />
      {modalContext.isVisibile && (
        <ProductDetail
          productData={modalContext.productData}
          setCardList={setCardList}
          setModalContext={setModalContext}
        />
      )}
    </div>
  );
}

export default App;
