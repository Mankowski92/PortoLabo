import React from "react";
import {Link} from "react-scroll";

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
                <Link
                    activeClass="active"
                    to="start"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Start</Link>

                <Link
                    activeClass="active"
                    to="steps"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >O co chodzi?
                </Link>

                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >o nas
                </Link>

                <Link
                    activeClass="active"
                    to="fundation"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Fundacja i organizacje
                </Link>

                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Kontakt
                </Link>   
            </div>   
        </div> 
    </div>       
  );
}

export default Navigation




// {/* BACKUP */}

// {/* import React from "react";
// import {Link} from "react-scroll";

// const Navigation = () => {
    
// return (
//     <div className="Navigation-component-container">
//         <div className="Navigation__section-div"></div>
//         <div className="header__login-nav-container">
//             <div className="header__login-section">
//                 <Link to="/login"><span>Zaloguj</span></Link>
//                 <span className="login-section__button--make-account">Załóż konto</span>
//             </div>
//             <div className="header__nav">
                
//                 <span>Start</span>
//                 <span>O co chodzi?</span>
//                 <span>O nas</span>
//                 <span>Fundacja i organizacje</span>
//                 <span>Kontakt</span>
//             </div>   
//         </div> 
//     </div>       
//   );
// }

// export default Navigation */}