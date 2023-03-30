import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import ActivitiesList from "../../components/activitiesList/ActivitiesList";
import styles from "../../styles/pages/Activities.module.scss";

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    GET("activities").then((res) => setActivities(() => res.results));
  }, []);

  const filterActivities = (list, type) =>
    list.filter((item) => item["@type"].includes(type));

  return (
    <div className={styles.Activities}>
      <section>
        <h2>Restaurants</h2>
        <ActivitiesList data={activities} />
      </section>
      <section>
        <h2>Museum</h2>
        <ActivitiesList data={filterActivities(activities, "Museum")} />
      </section>
    </div>
  );
}
