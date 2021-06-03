import React from "react";
import { useHistory } from "react-router-dom";
import {
  Title,
  CenterBoxColumnBetween,
  LightLink,
  DarkLink,
} from "../Styles/Styles";
import GoTo from "../Helpers/GoTo";

function MenuPage(props) {
  let history = useHistory();
  return (
    <CenterBoxColumnBetween>
      <Title>Menu</Title>
      <LightLink onClick={() => GoTo(history, "/addingredient")}>
        Dodaj składnik
      </LightLink>
      <LightLink onClick={() => GoTo(history, "/listingredient")}>
        Lista składników
      </LightLink>
      <LightLink onClick={() => GoTo(history, "/recipes")}>Przepisy</LightLink>
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <DarkLink onClick={() => GoTo(history, "/")}>Wyloguj</DarkLink>
      </div>
    </CenterBoxColumnBetween>
  );
}

export default MenuPage;
