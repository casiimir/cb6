import { useState } from "react";
import { productsList } from "./mocks/productsList";
import Control from "./components/control";
import Hero from "./components/hero";
import ImageProduct from "./components/imageProduct/ImageProduct";
import ListProducts from "./components/listProducts/ListProducts";
import Modal from "./components/modal";
import Slider from "./components/slider";
import "./main.css";

const Main = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const [isModalOpen, setModalOpen] = useState(true);
  const [singleProductModal, setSingleProductModal] = useState(null);

  return (
    <div className={`Main ${isDarkMode && "dark-mode"}`}>
      <Hero title="Store" />
      <Slider />
      <Control listDataLength={productsList.length} />
      <ListProducts
        listData={productsList}
        setSingleProductModal={setSingleProductModal}
      />
      <button
        className="toggle-mode"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
      {isModalOpen ? <Modal setModalOpen={setModalOpen} /> : null}
      {singleProductModal ? (
        <ImageProduct
          product={singleProductModal}
          setSingleProductModal={setSingleProductModal}
        />
      ) : null}
    </div>
  );
};

export default Main;
