import React from "react";
import Navigation from "../Navigation";
import { Link as LinkTo } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="log-out-main-div">
      <Navigation />
      <div className="log-out-container">
        <div className="log-out-container__content-container">
          <div className="content-container__title">
            Wylogowanie nastąpiło pomyślnie!
          </div>
          <div className="content-container__decoration"></div>
          <LinkTo to="/">
            <div className="content-container__button">Strona główna</div>
          </LinkTo>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
