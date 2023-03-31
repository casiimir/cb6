import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GET } from "../../utils/http";
import ActivitiesList from "../../components/activitiesList/ActivitiesList";
import styles from "../../styles/pages/Activities.module.scss";

export default function Activities() {
  const [searchParams] = useSearchParams();

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    GET("activities").then((res) => setActivities(() => res.results));
  }, []);

  const filterActivities = (list, type) =>
    list.filter((item) => item["@type"].includes(type));

  return (
    <div className={styles.Activities}>
      {searchParams.get("time") && (
        <h1>
          Orario per le {searchParams.get("time")} va benissimo, ci vediamo
          presto!
        </h1>
      )}
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
