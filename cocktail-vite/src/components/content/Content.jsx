import Card from "../card";
import "./index.scss";

const Content = ({ data }) => {
  return (
    <div className="Content">
      {data.map((cocktail) => (
        <Card data={cocktail} />
      ))}
    </div>
  );
};

export default Content;
