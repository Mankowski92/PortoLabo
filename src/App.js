import React from 'react';
import './scss/main.scss';
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import SignUp from './components/SingUp/Index';
// import SignUp from "./components/SignUp"

function App() {
  return (
    <Router>

      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/registration" component={SignUp}/>
      </Switch>

    </Router>
  );
}

export default App;