import HomePage from "./Components/HomePage";
import LoginForm from "./Components/LoginForm";
import MenuPage from "./Components/MenuPage";
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
      </Switch>
    </Router>
  );
}

export default App;
