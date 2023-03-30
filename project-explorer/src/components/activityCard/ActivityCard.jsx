import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const ActivityCard = ({ data }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/activities/${data.name}%27`);
  };

  return (
    <div className={styles.ActivityCard} onClick={onHandleClick}>
      <img src={data.image.url} alt={data.name} />
      <h3>{data.name}</h3>
      <p>Phone: {data.telephone} $</p>
    </div>
  );
};

export default ActivityCard;
