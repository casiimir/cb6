import { useState, useEffect } from "react";
import CardList from "./components/cardList";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import MiniCard from "./components/miniCard/MiniCard";
import Navbar from "./components/navbar";
import { GET } from "./utils/http";
import "./App.css";

function App() {
  const [miniCards, setMiniCards] = useState([]);

  useEffect(() => {
    GET("/products").then((data) => setMiniCards(() => data.products));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="App__miniCards">
        {miniCards.map((card) => (
          <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
        ))}
      </div>
      <CardList title="Technology" endpoint="/products?limit=10" />
      <CardList title="Skincare" endpoint="/products?limit=10&skip=10" />
      <Footer />
    </div>
  );
}

export default App;
