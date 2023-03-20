import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import { filteredList } from "./utils/funcs";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import "./App.scss";

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Cocktail");

  useEffect(() => {
    GET("/search.php?f=c").then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero setCategory={setCategory} />
      <Content data={filteredList(cocktailList, "strCategory", category)} />
    </div>
  );
}

export default App;
