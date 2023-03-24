import styled from "styled-components";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #4b0d0d;
  ${(props) => props.pippo && "background: red; border: 16px solid white;"}
`;

const HeroHr = styled.hr`
  width: 80%;
  border: 0;
  border-bottom: 1px dotted #4b0d0d;
  border-width: 4px;
`;

const FirstList = styled.ul`
  display: flex;
  gap: 40px;
  padding: 0;
  list-style-type: none;

  & li {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const SecondList = styled.ul`
  display: flex;
  gap: 40px;
  padding: 0;
  list-style-type: none;

  & li {
    padding: 4px 8px;
    cursor: pointer;
    border-bottom: 1px solid #4b0d0d;

    &:hover {
      background-color: #4b0d0d;
      color: #dfdcbe;
    }
  }
`;

const Hero = ({ setCategory }) => {
  const onHandleClick = (value) => {
    setCategory(value);
  };

  return (
    <HeroWrapper>
      <HeroTitle pippo="222">Cocktail by Edgemony</HeroTitle>
      <FirstList>
        <li>Alcolico</li>
        <li>Analcolico</li>
        <li>Vini</li>
        <li>Dessert</li>
      </FirstList>
      <HeroHr />
      <SecondList>
        <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Punch / Party Drink")}>Punch</li>
        <li onClick={() => onHandleClick("Coffee / Tea")}>Coffee</li>
        <li onClick={() => onHandleClick("Other / Unknown")}>Other</li>
      </SecondList>
    </HeroWrapper>
  );
};

export default Hero;

//   <div className={styles.Hero}>
//     <h1>Cocktail by Edgemony</h1>
//     <ul className={styles.firstList}>
//       <li>Alcolico</li>
//       <li>Analcolico</li>
//       <li>Vini</li>
//       <li>Dessert</li>
//     </ul>
//     <hr />
//     <ul className={styles.secondList}>
//       <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
//       <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
//       <li onClick={() => onHandleClick("Shot")}>Shot</li>
//       <li onClick={() => onHandleClick("Punch / Party Drink")}>Punch</li>
//       <li onClick={() => onHandleClick("Coffee / Tea")}>Coffee</li>
//       <li onClick={() => onHandleClick("Other / Unknown")}>Other</li>
//     </ul>
//   </div>
// );
