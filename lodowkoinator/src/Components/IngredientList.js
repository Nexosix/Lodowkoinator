import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ArrowLeft,
  CenterBoxColumnBetween,
  DarkLink,
  Title,
  IngredientListUL,
} from "../Styles/Styles";
import GoTo from "../Helpers/GoTo";

function IngredientList(props) {
  let [lista, setLista] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("skladniki") === null) {
    } else {
      setLista(
        JSON.parse(localStorage.getItem("skladniki")).map((item) => {
          return (
            <li>
              <div>{item.name}</div>
              <div>
                {item.ilosc}
                {item.jednostka}
              </div>
            </li>
          );
        })
      );
    }
  }, []);

  let history = useHistory();
  return (
    <CenterBoxColumnBetween>
      <Title>Lista Składników</Title>
      <ArrowLeft onClick={() => history.goBack()}></ArrowLeft>

      <IngredientListUL>{lista}</IngredientListUL>

      <div style={{ position: "fixed", bottom: 0, width: "100%", left: 0 }}>
        <DarkLink
          onClick={() => {
            GoTo(history, "/addingredient");
          }}
        >
          Dodaj Składnik
        </DarkLink>
      </div>
    </CenterBoxColumnBetween>
  );
}

export default IngredientList;
