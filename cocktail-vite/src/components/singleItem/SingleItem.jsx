import "./index.scss";

const SingleItem = ({ data, setSingleItemContext }) => {
  const onHandleClick = () =>
    setSingleItemContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

  return (
    <div className="SingleItem">
      <div className="SingleItem__text">
        <h1>{data.strDrink}</h1>
        <p>{data.strCategory}</p>
        <p>Container: {data.strGlass}</p>
        <div className="SingleItem__text--lists">
          <ul>
            <h3>Ingredients</h3>
            <li>{data.strIngredient1}</li>
            <li>{data.strIngredient2}</li>
            <li>{data.strIngredient3}</li>
          </ul>
          <ul>
            <h3>Instructions</h3>
            <li>{data.strInstructions}</li>
          </ul>
        </div>
        <button onClick={onHandleClick}>X</button>
      </div>
      <div className="SingleItem__image">
        <img src={data.strDrinkThumb} alt={data.idDrink} />
        <div className="SingleItem__image--carousel">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
