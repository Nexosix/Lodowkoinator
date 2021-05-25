import HomePage from "./Components/HomePage";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./Styles/Styles";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/login" component={LoginForm}></Route>
      </Switch>
    </Router>
  );
}

export default App;
