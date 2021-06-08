import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  ArrowLeft,
  CenterBoxColumnBetween,
  Title,
  RecipeListUL,
} from "../Styles/Styles";

function RecipePage(props) {
  useEffect(() => {
    return localStorage.removeItem("activeRecipe");
  }, []);
  let history = useHistory();
  return (
    <CenterBoxColumnBetween>
      <Title>{JSON.parse(localStorage.getItem("activeRecipe")).nazwa}</Title>
      <ArrowLeft onClick={() => history.goBack()}></ArrowLeft>
      <RecipeListUL>
        {
          <>
            <li style={{ flexDirection: "column", textAlign: "center" }}>
              {JSON.parse(localStorage.getItem("activeRecipe")).skladniki.map(
                (skladnik) => {
                  return (
                    <div>
                      {skladnik.nazwa} {skladnik.ilosc} {skladnik.jednostka}
                    </div>
                  );
                }
              )}
            </li>
            <li style={{ textAlign: "center" }}>
              {JSON.parse(localStorage.getItem("activeRecipe")).instrukcje}
            </li>
          </>
        }
      </RecipeListUL>
    </CenterBoxColumnBetween>
  );
}

export default RecipePage;
