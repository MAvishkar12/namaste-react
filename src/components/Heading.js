import { LOGO_cdn } from "../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = () => {
  const [loginbtn, setloginbtn] = useState("Login");
  useEffect(() => {
    console.log("Login /Logout ");
  }, [loginbtn]);
  const Online = useOnlineStatus();

  return (
    <div className="header" >
      <div className="logo">
        <img className="logo" src={LOGO_cdn} />
      </div>
      <div className="nav-items">
        <ul>
          <li className="text-cyan-50 border-red-800" >Online Status:{Online ? "Online" : "Offline"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
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
