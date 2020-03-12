import React from "react";
import WhoList from "./WhoList"


const WhoWeHelp = () => {

    
const handleFund = () => {
    console.log("fund")
}

const handleOrg = () => {
    console.log("org")
}

const handleLocal = () => {
    console.log("local")
}

return (
    <>
        <div className="who-we-help-container" id="fundation">
            <div className="who-we-help__title">Komu pomagamy?</div>
            <div className="who-we-help__decoration"></div>
            <div className="who-we-help__entities">
                <div onClick={handleFund}>Fundacjom</div>
                <div onClick={handleOrg}>Organizacjom pozarządowym</div>
                <div onClick={handleLocal}>Lokalnym zbiórkom</div>
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