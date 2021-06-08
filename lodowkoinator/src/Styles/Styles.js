import styled, { createGlobalStyle, keyframes } from "styled-components";
import ArrowIcon from "../Icons/arrowLeft.svg";

const colors = {
  tlo: "#C7F3CE",
  title: "#396140",
  lightGreen: "#5DA369",
  green: "#358743",
  darkGreen: "#26472C",
  textLightColor: "#71C780",
  liColor: "#A1D1AA",
};

export const GlobalStyle = createGlobalStyle`
body, #root{
  background-color: ${colors.tlo};
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
*{
  font-family:'Lato', sans-serif;
  letter-spacing: 0.12rem;
  box-sizing: border-box;
}
`;

export const LightLink = styled.button`
  width: 100%;
  height: 3rem;
  height: fit-content;
  background-color: ${colors.lightGreen};
  border: none;
  padding: 1rem;
  margin: 0.5rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.tlo};
  box-shadow: 0 0.1rem 0.9rem #00000099, 0 0.1rem 0.6rem #00000066 inset;
`;

export const DarkLink = styled.button`
  width: 100%;
  height: 3rem;
  height: fit-content;
  background-color: ${colors.darkGreen};
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.tlo};
  box-shadow: 0 0.1rem 0.9rem #00000099, 0 0.1rem 0.6rem #00000066 inset;
`;

export const Title = styled.div`
  position: absolute;
  font-weight: bold;
  color: ${colors.title};
  font-size: 2rem;
  top: 1.5rem;
`;

// export const CenterBoxColumn = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   flex-wrap: wrap;
// `;

const Fade = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;

export const CenterBoxColumnBetween = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  & > * {
    animation: 250ms ease-in-out 1 both ${Fade};
  }
`;

export const CenterBoxColumnHomePage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  & ${LightLink} {
    width: 75%;
    border-radius: 0.4rem;
    background-color: ${colors.green};
  }

  & > * {
    animation: 250ms ease-in-out 1 both ${Fade};
  }
`;

export const CenterBoxRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ArrowLeft = styled.div`
  background: url(${ArrowIcon}) no-repeat;
  background-size: cover;
  width: 3rem;
  height: 3rem;
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
`;

export const Input = styled.input`
  width: 75%;
  height: 5rem;
  padding: 1rem;
  margin: 1rem;
  font-size: 1.5rem;
  text-align: center;
  color: ${colors.tlo};
  background-color: ${colors.green};
  border: none;
  box-shadow: 0 0.1rem 0.9rem #00000099, 0 0.1rem 0.6rem #00000066 inset;
  border-radius: 0.4rem;
  transition: transform 250ms;

  &:focus {
    outline: none;
    transform: scale(1.1);
  }

  &::placeholder {
    color: ${colors.textLightColor};
  }
`;

export const Select = styled.select`
  width: 75%;
  height: 5rem;
  padding: 1rem;
  margin: 1rem;
  font-size: 1.5rem;
  text-align: center;
  color: ${colors.tlo};
  background-color: ${colors.green};
  border: none;
  box-shadow: 0 0.1rem 0.9rem #00000099, 0 0.1rem 0.6rem #00000066 inset;
  border-radius: 0.4rem;
  transition: transform 250ms;
  text-align-last: center;

  &:focus {
    outline: none;
    transform: scale(1.1);
  }

  &::placeholder {
    color: ${colors.textLightColor};
  }
`;

export const IngredientListUL = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0;
  font-size: 2rem;
  overflow-x: hidden;
  margin-top: 7rem;

  & li {
    padding: 1.4rem 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 75%;
    background-color: ${colors.liColor};
    list-style: none;
  }
`;

export const RecipeListUL = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0;
  font-size: 2rem;
  overflow-x: hidden;
  margin-top: 7rem;

  & li {
    padding: 1.4rem 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 75%;
    background-color: ${colors.liColor};
    list-style: none;
  }
`;
