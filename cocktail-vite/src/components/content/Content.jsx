import Card from "../card";
import "./index.scss";

const Content = ({ data, setSingleItemContext }) => {
  return (
    <div className="Content">
      {data.map((cocktail) => (
        <Card data={cocktail} setSingleItemContext={setSingleItemContext} />
      ))}
    </div>
  );
};

export default Content;
