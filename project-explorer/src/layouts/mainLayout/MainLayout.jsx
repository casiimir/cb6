import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import styles from "./index.module.scss";

const MainLayout = () => {
  return (
    <div className={styles.MainLayout}>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
