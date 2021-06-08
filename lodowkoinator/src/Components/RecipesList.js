import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  CenterBoxColumnBetween,
  Title,
  IngredientListUL,
  DarkLink,
} from "../Styles/Styles";
import { useHistory } from "react-router-dom";
import GoTo from "../Helpers/GoTo";

function RecipesList(props) {
  let history = useHistory();
  let [lista, setLista] = useState(null);

  useEffect(() => {
    //   TODO AJAX recipes
    const getRecipes = async () => {
      const result = await fetch("http://localhost:5000/recipes", {
        method: "POST",
        body: localStorage.getItem("skladniki"),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      setLista(
        result.map((przepis) => {
          return (
            <li key={przepis.nazwa}>
              <div>{przepis.nazwa}</div>
              <div>
                <DarkLink
                  onClick={() => {
                    localStorage.setItem(
                      "activeRecipe",
                      JSON.stringify(przepis)
                    );
                    GoTo(history, "/recipepage");
                  }}
                >
                  Zobacz
                </DarkLink>
              </div>
            </li>
          );
        })
      );
    };

    getRecipes();
    // eslint-disable-next-line
  }, []);

  return (
    <CenterBoxColumnBetween>
      <Title>Lista Przepisów</Title>
      <ArrowLeft onClick={() => history.goBack()}></ArrowLeft>
      <IngredientListUL>{lista}</IngredientListUL>
    </CenterBoxColumnBetween>
  );
}

export default RecipesList;
