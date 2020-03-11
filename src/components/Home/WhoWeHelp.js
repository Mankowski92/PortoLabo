import React from "react";
import WhoList from "./WhoList"


const WhoWeHelp = () => {
    
return (
    <>
        <div className="who-we-help-container" id="fundation">
            <div className="who-we-help__title">Komu pomagamy?</div>
            <div className="who-we-help__decoration"></div>
            <div className="who-we-help__entities">
                <div>Fundacjom</div>
                <div>Organizacjom pozarządowym</div>
                <div>Lokalnym zbiórkom</div>
            </div>
            <div className="who-we-help__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
            <div className="who-we-help__main-content">
                <WhoList />
            </div>
        </div>
    </>
);
}

export default WhoWeHelp