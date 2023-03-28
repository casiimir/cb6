import { Link } from "react-router-dom";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/me">Me</Link>
        </li>
        <li>
          <Link to="/about/her">Her</Link>
        </li>
      </ul>
    </div>
  );
}
