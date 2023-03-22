import Card from "../card";
import styles from "./index.module.scss";

const Content = ({ data, setSingleItemContext }) => {
  return (
    <div className={styles.Content}>
      {data.map((cocktail, i) => (
        <Card
          data={{ ...cocktail, positionList: i }}
          setSingleItemContext={setSingleItemContext}
          key={cocktail.idDrink}
        />
      ))}
    </div>
  );
};

export default Content;
