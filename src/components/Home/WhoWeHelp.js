import WhoList from "./WhoList";
import React, {useState} from "react";


const WhoWeHelp = () => {

const [border1, setBorder1] = useState("");
const [border2, setBorder2] = useState("");
const [border3, setBorder3] = useState("");

const styles1 = {
        border: border1,
        padding: "2rem"
      };    
const styles2 = {
        border: border2,
        padding: "2rem"
      };  
const styles3 = {
        border: border3,
        padding: "2rem"
      };  
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

                <div 
                style={styles1} 
                onMouseEnter={() => setBorder1("0.75px solid #3C3C3C")}
                onMouseLeave={() => setBorder1("")}
                onClick={handleFund}>Fundacjom</div>
                <div className="who-we-help__middle_entiti_div"
                style={styles2} 
                onMouseEnter={() => setBorder2("0.75px solid #3C3C3C")}
                onMouseLeave={() => setBorder2("")} 
                onClick={handleOrg}>Organizacjom pozarządowym</div>
                <div 
                style={styles3} 
                onMouseEnter={() => setBorder3("0.75px solid #3C3C3C")}
                onMouseLeave={() => setBorder3("")} 
                onClick={handleLocal}>Lokalnym zbiórkom</div>
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


// function App() {
//     const [color, setColor] = React.useState("");
//     const styles = {
//       "text-align": "center",
//       padding: "30px",
//       color: color
//     };
  
//     return (
//       <div className="middle">
//         <div
//           id="cspace"
//           style={styles}
//           onMouseEnter={() => setColor("green")}
//           onMouseLeave={() => setColor("")}
//         >
//           <h1>Hello World</h1>
//         </div>
//       </div>
//     );