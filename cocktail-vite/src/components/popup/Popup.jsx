import styles from "./index.module.scss";

const Popup = ({ children }) => {
  return <div className={styles.Popup}>{children}</div>;
};

export default Popup;
