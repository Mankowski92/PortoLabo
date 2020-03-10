import React from "react";
import Navigation from "../Navigation";
// import {Link, animateScroll as scroll} from "react-scroll";

const Header = () => {
    
return (

  <>
    <div className="header">
      <div className="header__image"></div>
      <div className="header__login-nav-content-container">
      <Navigation />
        <div className="header__content-container">
          <div className="header__sloganbox">
            <span>Zacznij pomagać!</span>
            <span>Oddaj niechciane rzeczy w zaufane ręce</span>
          </div>
          <div className="header__decorationbox">
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