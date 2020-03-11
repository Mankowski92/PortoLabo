import React from 'react';
import './scss/main.scss';
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <Router>

      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/registration" component={SignIn}/>
      </Switch>

    </Router>
  );
}

export default App;