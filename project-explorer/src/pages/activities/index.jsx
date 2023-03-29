import { useState, useEffect } from "react";
import CardList from "../../components/cardList/CardList";
import styles from "../../styles/pages/Activities.module.scss";

export default function Activities() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItemList(data));
  }, []);

  const filterList = (list, category) =>
    list.filter((item) => item.category === category);

  return (
    <div className={styles.Activities}>
      <section>
        <h2>Categoria: Elettronica</h2>
        <CardList data={filterList(itemList, "electronics")} />
      </section>
      <section>
        <h2>Categoria: Vestiti</h2>
        <CardList data={filterList(itemList, "men's clothing")} />
      </section>
    </div>
  );
}
