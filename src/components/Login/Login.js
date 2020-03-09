import React from "react";
import Navigation from "../Navigation";
// import {Link} from "react-router-dom";

const Login = () => {
    
return (

  <div  className="login-container">
    <Navigation />
    <div className="login-container__login-section">
      <div className="login-section__login-text">Zaloguj się</div>
      <div className="login-section__decoration-box"></div>
      <div className="login-section__email-password-container">
        <div className="email-password-container__email">Email</div>
        <div className="email-password-container__password">Hasło</div>
      </div>  
      <div className="login-section__buttons-section">
        <span>Załóż konto</span>
        <span>Zaloguj się</span>
      </div>
    </div>
  </div>
  );
}

export default Login