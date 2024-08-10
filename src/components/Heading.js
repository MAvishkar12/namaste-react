import { LOGO_cdn } from "../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
const Heading = () => {
  const [loginbtn, setloginbtn] = useState("Login");
  useEffect(() => {
    console.log("Login /Logout ");
  }, [loginbtn]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_cdn} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>Cards</li>
          <button
            className="btn-l"
            onClick={() => {
              loginbtn === "Login"
                ? setloginbtn("Logout")
                : setloginbtn("Login");
            }}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
