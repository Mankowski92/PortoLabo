import React from "react";


const Header = () => {
    
return (

  <>
    <div className="header">
      <div className="header__image"></div>
      <div className="header__login-nav-content-container">
        <div className="header__login-nav-container">
          <div className="header__login">
            <span>Zaloguj</span>
            <span>Załóż konto</span>
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
            <span>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</span>
          </div>
          <div className="header__decorationbox">
            <span>Tu będzie ładna dekoracja</span>
          </div>
          <div className="header__buttons-section">
            <div>
              Tu będzie guzik oddaj rzeczy
            </div>
            <div>
              Tu będzie guzik zorganizuj zbiórkę
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Header