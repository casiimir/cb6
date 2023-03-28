import { Link, Outlet } from "react-router-dom";
import styles from "../styles/pages/About.module.scss";

export default function About() {
  return (
    <div className={styles.About}>
      <h1>About</h1>
      <h4>About</h4>
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
      <Outlet />
    </div>
  );
}
