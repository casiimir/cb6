import ActivityCard from "../activityCard";
import styles from "./index.module.scss";

const activitiesList = ({ data }) => {
  return (
    <div className={styles.activitiesList}>
      {data.map((item, i) => (
        <ActivityCard data={item} key={i} />
      ))}
    </div>
  );
};

export default activitiesList;
