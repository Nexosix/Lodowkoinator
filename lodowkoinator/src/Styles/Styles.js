import styled, { createGlobalStyle } from "styled-components";

const colors = {
  tlo: "#C7F3CE",
  title: "#396140",
  lightGreen: "#5DA369",
  green: "#358743",
  darkGreen: "#26472C",
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

export const CenterBoxColumnBetween = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
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
`;

export const CenterBoxRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
