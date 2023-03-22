import { valuesExtractor } from "../../utils/funcs";
import styles from "./index.module.scss";

const SingleItem = ({ data, setSingleItemContext, filteredList }) => {
  const ingredientsData = () => valuesExtractor(data, "strIngredient");

  const onHandleCloseBtn = () =>
    setSingleItemContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

  const onHandleNextBtn = () => {
    setSingleItemContext((prev) => ({
      ...prev,
      payload: filteredList[prev.positionList + 1],
      positionList: prev.positionList + 1,
    }));
  };

  const onHandlePrevBtn = () => {
    setSingleItemContext((prev) => ({
      ...prev,
      payload: filteredList[prev.positionList - 1],
      positionList: prev.positionList - 1,
    }));
  };

  return (
    <div className={styles.SingleItem}>
      <div className={styles.textSection}>
        <h1>{data.payload.strDrink}</h1>
        <p>{data.payload.strCategory}</p>
        <p>Container: {data.payload.strGlass}</p>
        <div className={styles.list}>
          <ul>
            <h3>Ingredients</h3>
            {ingredientsData().map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <ul>
            <h3>Instructions</h3>
            <li>{data.payload.strInstructions}</li>
          </ul>
        </div>
        <button className={styles.closeBtn} onClick={onHandleCloseBtn}>
          X
        </button>
      </div>
      <div className={styles.image}>
        <img src={data.payload.strDrinkThumb} alt={data.payload.idDrink} />
        <div className={styles.carousel}>
          <button onClick={onHandlePrevBtn}>Previous</button>
          <button onClick={onHandleNextBtn}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
