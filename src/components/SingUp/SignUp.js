import React from "react";
import Navigation from "../Navigation";

const Login = () => {
    
return (

  <div  className="Sing-up-container">
    <Navigation />
    <div className="Sing-up-container__login-section">
      <div className="Sing-up-section__login-text">Zaloguj się</div>
      <div className="Sing-up-section__decoration-box"></div>
      <div className="Sing-up-section__email-password-container">
        <div className="Sing-up__email-password-container__email">Email</div>
        <div className="Sing-up__email-password-container__password">Hasło</div>
        <div className="Sing-up__email-password-container__password-repeat">Powtórz hasło</div>
      </div>  
      <div className="Sing-up-section__buttons-section">
        <span>Załóż konto</span>
        <span>Zaloguj się</span>
      </div>
    </div>
  </div>
  );
}

export default Login