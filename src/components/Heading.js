import { LOGO_cdn } from "../utils/constant";
import { useState } from "react";
const Heading = () => {

  const[loginbtn,setloginbtn]=useState("Login")
    return (
      <div className="header">
        <div className="logo-container"> 
          <img className="logo" src={LOGO_cdn}/>
          
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cards</li>
            <button className="btn-l"onClick={()=>{
                  loginbtn==="Login"?setloginbtn("Logout"):setloginbtn("Login");
            }}>{loginbtn}</button>
          </ul>
        </div>
      </div>
    );
  };


  export default Heading;