import styles from "./index.module.scss";

const Hero = ({ setCategory }) => {
  const onHandleClick = (value) => {
    setCategory(value);
  };

  return (
    <div className={styles.Hero}>
      <h1>Cocktail by Edgemony</h1>
      <ul className={styles.firstList}>
        <li>Alcolico</li>
        <li>Analcolico</li>
        <li>Vini</li>
        <li>Dessert</li>
      </ul>
      <hr />
      <ul className={styles.secondList}>
        <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Punch / Party Drink")}>Punch</li>
        <li onClick={() => onHandleClick("Coffee / Tea")}>Coffee</li>
        <li onClick={() => onHandleClick("Other / Unknown")}>Other</li>
      </ul>
    </div>
  );
};

export default Hero;
