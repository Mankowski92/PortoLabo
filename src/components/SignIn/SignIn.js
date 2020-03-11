import React from "react";
import Navigation from "../Navigation";

const SignIn = () => {
    
return (

  <div  className="sing-up-container">
    <Navigation />
    <div className="sing-up-container__login-section">
      <div className="sing-up-section__login-text">Załóż konto</div>
      <div className="sing-up-section__decoration-box"></div>
      <div className="sing-up-section__email-password-container">
        <div className="sing-up__email-password-container__email">Email</div>
        <div className="sing-up__email-password-container__password">Hasło</div>
        <div className="sing-up__email-password-container__password-repeat">Powtórz hasło</div>
      </div>  
      <div className="sing-up-section__buttons-section">
        <span>Załóż konto</span>
        <span>Zaloguj się</span>
      </div>
    </div>
  </div>
  );
}

export default SignIn