import React from "react";
import Navigation from "../Navigation";

const SignIn = () => {
    
return (

  <div  className="log-out-container">
    <Navigation />
    <div className="log-out-container__login-section">
      <div className="log-out-section__login-text">Załóż konto</div>
      <div className="log-out-section__decoration-box"></div>
      <div className="log-out-section__email-password-container">
        <div className="log-out__email-password-container__email">Email</div>
        <div className="log-out__email-password-container__password">Hasło</div>
        <div className="log-out__email-password-container__password-repeat">Powtórz hasło</div>
      </div>  
      <div className="log-out-section__buttons-section">
        <span>Załóż konto</span>
        <span>Zaloguj się</span>
      </div>
    </div>
  </div>
  );
}

export default SignIn