import React from "react";
import { Link as LinkTo } from "react-router-dom";

const FourSteps = () => {
    
return (

<div>
    <div className="four-steps" id="steps">
        <div className="four-steps__title">Wystarczą 4 proste kroki</div>
        <div className="four-steps__decorationbox"></div>
            <div className="four-steps__background-for-step-by-step">
            <div className="four-steps__step-by-step-container">
                <div className="step-by-step-container__each-step-container">
                    <div className="each-step-container__graphic each-step-container__graphic--graph1">
                        
                    </div>
                    <div className="each-step-container__action-title">
                        Wybierz rzeczy
                    </div>
                    <div className="each-step-container__action-description">
                        ubrania, zabawki, sprzęt i inne
                    </div>
                </div>
                <div className="step-by-step-container__each-step-container">
                    <div className="each-step-container__graphic each-step-container__graphic--graph2">
                        
                    </div>
                    <div className="each-step-container__action-title">
                        Spakuj je
                    </div>
                    <div className="each-step-container__action-description">
                        skorzystaj z worków na śmieci
                    </div>
                </div>
                <div className="step-by-step-container__each-step-container">
                    <div className="each-step-container__graphic each-step-container__graphic--graph3">
                        
                    </div>
                    <div className="each-step-container__action-title">
                        Zdecyduj komu chcesz pomóc
                    </div>
                    <div className="each-step-container__action-description">
                        wybierz zaufane miejsce
                    </div>
                </div>
                <div className="step-by-step-container__each-step-container">
                    <div className="each-step-container__graphic each-step-container__graphic--graph4">
                        
                    </div>
                    <div className="each-step-container__action-title">
                        Zamów kuriera
                    </div>
                    <div className="each-step-container__action-description">
                        kurier przyjedzie w dogodnym terminie
                    </div>   
                </div>
            </div>
        </div>
        <LinkTo to="/login">
        <div className="four-steps__button">
            <span>ODDAJ</span> <span>RZECZY</span>
        </div>
        </LinkTo>      
    </div>
</div>
  
  );
}



export default FourSteps
