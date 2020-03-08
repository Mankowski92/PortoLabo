import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    
return (
    <div className="Navigation-component-container">
        <div className="Navigation__section-div"></div>
        <div className="header__login-nav-container">
            <div className="header__login-section">
                <Link to="/login"><span>Zaloguj</span></Link>
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