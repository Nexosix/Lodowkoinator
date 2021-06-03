import HomePage from "./Components/HomePage";
import LoginForm from "./Components/LoginForm";
import MenuPage from "./Components/MenuPage";
import AddIngredient from "./Components/AddIngredient";
import IngredientList from "./Components/IngredientList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./Styles/Styles";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/menu" component={MenuPage}></Route>
        <Route path="/addingredient" component={AddIngredient}></Route>
        <Route path="/listingredient" component={IngredientList}></Route>
      </Switch>
    </Router>
  );
}

export default App;
