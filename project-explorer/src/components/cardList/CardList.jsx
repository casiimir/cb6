import Card from "../card";
import styles from "./index.module.scss";

const CardList = ({ data }) => {
  return (
    <div className={styles.CardList}>
      {data.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardList;
