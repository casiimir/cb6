import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { city } from "../../mocks/city";
import { GET } from "../../utils/http";
import styles from "./id.module.scss";

export default function City() {
  const { id } = useParams();

  const [cityData, setCityData] = useState({});

  useEffect(() => {
    GET(`accommodation?$filter=name%20eq%20%27'${id}'%27`).then((res) =>
      setCityData(res.results[0])
    );
  }, []);

  return (
    <div className={styles.City}>
      <img src={cityData.cover_image_url} alt={cityData.title} />
      <section className={styles.texts}>
        <Link to="/">
          <button>Torna indietro</button>
        </Link>
        <h1>{cityData.title}</h1>
        <p>{cityData.description}</p>
      </section>
    </div>
  );
}
