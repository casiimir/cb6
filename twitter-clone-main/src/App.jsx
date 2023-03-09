import { useEffect } from "react";
import SideMenu from "./components/sideMenu";
import Content from "./components/content";
import SideTrends from "./components/sideTrends";
import HamburgerMenu from "./components/hamburgerMenu";
import "./App.css";

function App() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window.pageYOffset);
    }
  }, []);

  return (
    <div className="App">
      <SideMenu />
      <Content />
      <SideTrends />
    </div>
  );
}

export default App;
