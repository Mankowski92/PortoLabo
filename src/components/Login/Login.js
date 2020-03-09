import React from "react";
import Navigation from "../Navigation";
import {Link} from "react-router-dom";

const Login = () => {
    
return (

  <div  className="login-container">
    <Navigation />
    <Link to="/"><span>DUPSKO</span></Link>
  </div>
  );
}

export default Login