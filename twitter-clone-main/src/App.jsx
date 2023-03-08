import SideMenu from "./components/sideMenu";
import Content from "./components/content";
import SideTrends from "./components/sideTrends";
import HamburgerMenu from "./components/hamburgerMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Content />
      <SideTrends />
    </div>
  );
}

export default App;
