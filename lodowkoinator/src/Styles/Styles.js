import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  background-color: #C7F3CE;
}
`;

export const LightLink = styled.button`
  width: 75%;
  height: 3rem;
  height: fit-content;
  background-color: #358743;
  margin: 0.3rem;
`;

export const CenterBoxColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const CenterBoxRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
