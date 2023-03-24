import { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const ButtonStyle = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => (props.green ? "green" : "palevioletred")};
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  transition: all 0.35s;
  animation: ${fadeIn} 1s ease infinite alternate-reverse;

  &:hover {
    background: palevioletred;
    color: white;
  }

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const TomatoButton = styled(ButtonStyle)`
  color: tomato;
  border-color: tomato;
`;

const Button = ({ value, green }) => {
  const [buttonState, setButtonState] = useState("");

  const onHandleClick = () => console.log("Tada!");

  useEffect(() => {
    // ...
  }, []);

  return (
    <ButtonStyle green={green} onClick={onHandleClick}>
      {value}
    </ButtonStyle>
  );
};

export default Button;
