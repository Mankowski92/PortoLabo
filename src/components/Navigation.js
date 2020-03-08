import React from "react";
// import Header from "../Home/Header";

const Navigation = () => {
    
return (
    <div className="Navigation-component-container">
        <div className="header__login-nav-container">
            <div className="header__login-section">
                <span>Zaloguj</span>
                <span className="login-section__button--make-account">Załóż konto</span>
            </div>
            <div className="header__nav">
                <span>Start</span>
                <span>O co chodzi?</span>
                <span>O nas</span>
                <span>Fundacja i organizacje</span>
                <span>Kontakt</span>
            </div>   
        </div> 
    </div>       
  );
}

export default Navigation