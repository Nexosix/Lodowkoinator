import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  ArrowLeft,
  CenterBoxColumnBetween,
  DarkLink,
  Input,
  Title,
  Select,
} from "../Styles/Styles";

function AddIngredient(props) {
  const addIngredientFunction = () => {
    let ingredients = null;

    if (myStorage.getItem("skladniki") === null) {
      ingredients = [];
    } else {
      ingredients = JSON.parse(myStorage.getItem("skladniki"));
    }

    let newIngredient = {
      name: nazwa,
      ilosc: ilosc,
      jednostka: jednostka,
      data: data,
    };

    ingredients.push(newIngredient);

    myStorage.setItem("skladniki", JSON.stringify(ingredients));
    alert("Dodano skladnik");
    textInput.current.value = "";
    iloscInput.current.value = "";
    dataInput.current.value = "";
  };

  let myStorage = localStorage;

  let history = useHistory();

  //   State
  let [nazwa, setNazwa] = useState("");
  let [ilosc, setIlosc] = useState(0);
  let [data, setData] = useState(0);
  let [jednostka, setJednostka] = useState("kg");

  //   Refs
  let textInput = useRef(null);
  let iloscInput = useRef(null);
  let dataInput = useRef(null);
  let jednostkaInput = useRef(null);

  return (
    <CenterBoxColumnBetween>
      <Title>Dodaj Składnik</Title>
      <ArrowLeft onClick={() => history.goBack()}></ArrowLeft>
      <Input
        ref={textInput}
        type="text"
        placeholder="Podaj nazwe skladnika"
        onChange={(e) => {
          setNazwa(e.target.value);
        }}
      ></Input>
      <Input
        ref={iloscInput}
        type="number"
        placeholder="Podaj ilosc skladnika"
        onChange={(e) => {
          setIlosc(e.target.value);
        }}
      ></Input>

      <Select
        ref={jednostkaInput}
        type="text"
        placeholder="Podaj jednostke ilosci"
        onChange={(e) => {
          setJednostka(e.target.value);
        }}
      >
        <option selected value="kg">
          kg
        </option>
        <option value="szt">szt</option>
        <option value="g">g</option>
        <option value="ml">ml</option>
        <option value="l">L</option>
      </Select>

      <Input
        ref={dataInput}
        type="date"
        onChange={(e) => {
          setData(e.target.value);
        }}
      ></Input>

      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <DarkLink
          onClick={() => {
            addIngredientFunction();
          }}
        >
          Dodaj Składnik
        </DarkLink>
      </div>
    </CenterBoxColumnBetween>
  );
}

export default AddIngredient;
