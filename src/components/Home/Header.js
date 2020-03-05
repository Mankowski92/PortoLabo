import React from "react";


const Header = () => {
    
return (

  <>
    <div className="header">
      <div className="header__image"></div>
      <div className="header__login-nav-content-container">
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
        <div className="header__content-container">
          <div className="header__sloganbox">
            <span>Zacznij pomagać!</span>
            <span>Oddaj niechciane rzeczy w zaufane ręce</span>
          </div>
          <div className="header__decorationbox">
          <img src="../../assets/Decoration.svg" alt="decoration"/>
          </div>
          <div className="header__buttons-section">
            <div>
              <span>ODDAJ</span> <span>RZECZY</span>
            </div>
            <div>
              <span>ZORGANIZUJ</span> <span>ZBIÓRKĘ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Header