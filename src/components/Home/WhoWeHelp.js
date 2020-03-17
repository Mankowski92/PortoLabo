import WhoList from "./WhoList";
import React, {useState} from "react";
import classnames from 'classnames'

const WhoWeHelp = () => {

const [fundation, setFundation] = useState(1);


const handleFund = (e) => {
    console.log(e.target.id)
    setFundation(e.target.id)
}

return (
    <>
        <div className="who-we-help-container" id="fundation">
        <div className="who-we-help__title">Komu pomagamy?</div>
            <div className="who-we-help__decoration"></div>
            <div className="who-we-help__entities">

                <div 
                className={classnames("btn-fund", {active: fundation==1})}
                id="1"
                onClick={handleFund}>Fundacjom</div>
                <div 
                className={classnames("btn-fund", {active: fundation==2})}
                id="2"
                onClick={handleFund}>Organizacjom</div>
                <div 
                className={classnames("btn-fund", {active: fundation==3})}
                id="3"
                onClick={handleFund}>Local</div>
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
