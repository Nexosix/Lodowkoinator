import React from "react";
import { useHistory } from "react-router-dom";
import { CenterBoxColumnHomePage, LightLink } from "../Styles/Styles";
import GoTo from "../Helpers/GoTo";

function HomePage(props) {
  let history = useHistory();

  return (
    <CenterBoxColumnHomePage>
      <LightLink onClick={() => GoTo(history, "/menu")}>Zaloguj</LightLink>
      <LightLink onClick={() => GoTo(history, "/register")}>
        Zarejestruj
      </LightLink>
    </CenterBoxColumnHomePage>
  );
}

export default HomePage;
