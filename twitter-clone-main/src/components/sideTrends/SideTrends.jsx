import { useRef } from "react";
import TrendList from "../trendList";
import "./index.css";

const SideTrends = () => {
  const sideTrendsRef = useRef(null);

  return (
    <div
      ref={sideTrendsRef}
      className="SideTrends"
      onScroll={() =>
        sideTrendsRef.current.scrollTop >= 1
          ? (sideTrendsRef.current.style.transform = "translateY(-500px)")
          : (sideTrendsRef.current.style.transform = "translateY(0)")
      }
    >
      <h1>SIDETRENDS</h1>
      <TrendList />
    </div>
  );
};

export default SideTrends;
