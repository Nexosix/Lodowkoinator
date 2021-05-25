import React from "react";
import { useHistory } from "react-router-dom";
import { CenterBoxColumn, LightLink } from "../Styles/Styles";
import GoTo from "../Helpers/GoTo";

function HomePage(props) {
  let history = useHistory();

  return (
    <CenterBoxColumn>
      <LightLink onClick={() => GoTo(history, "/login")}>Zaloguj</LightLink>
      <LightLink onClick={() => GoTo(history, "/register")}>
        Zarejestruj
      </LightLink>
    </CenterBoxColumn>
  );
}

export default HomePage;
