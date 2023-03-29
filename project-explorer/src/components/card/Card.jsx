import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/activities/${data.id}`);
  };

  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <img src={data.image} alt={data.title} />
      <h3>{data.title.split(" ").splice(0, 3).join(" ")}</h3>
      <p>Prezzo: {data.price} $</p>
    </div>
  );
};

export default Card;
