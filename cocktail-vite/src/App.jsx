import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import { filteredList } from "./utils/funcs";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import SingleItem from "./components/singleItem/SingleItem";
// import "./App.scss";
import styles from "./App.module.scss";

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Cocktail");
  const [singleItemContext, setSingleItemContext] = useState({
    isVisible: false,
    payload: {},
    positionList: null,
  });

  useEffect(() => {
    GET("/search.php?f=d").then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      {singleItemContext.isVisible ? (
        <SingleItem
          data={singleItemContext}
          setSingleItemContext={setSingleItemContext}
          filteredList={filteredList(cocktailList, "strCategory", category)}
        />
      ) : (
        <>
          <Hero setCategory={setCategory} />
          <Content
            data={filteredList(cocktailList, "strCategory", category)}
            setSingleItemContext={setSingleItemContext}
          />
        </>
      )}
    </div>
  );
}

export default App;
