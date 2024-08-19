import { LOGO_cdn } from "../utils/constant";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import WifiIcon from "@mui/icons-material/Wifi";
import WifiOffIcon from "@mui/icons-material/WifiOff";

const Heading = () => {
  const [loginbtn, setloginbtn] = useState("Login");
  useEffect(() => {}, [loginbtn]);
  const Online = useOnlineStatus();

  const { logneedUser } = useContext(UserContext);
  const cards = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={LOGO_cdn} />
      </div>
      <div className="nav-items">
        <ul>
          <li className="text-cyan-50 border-red-800">
            Online Status:{Online ? <WifiIcon /> : <WifiOffIcon />}
          </li>
          <li>
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="link" to={"/contact"}>
              Contact
            </Link>
          </li>
          <li>
            <Link className="link" to={"/grocery"}>
              Grocery
            </Link>
          </li>
          <li>
            <Link className="link" to={"/cart"}>
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
              ({cards.length})
            </Link>
          </li>
          <Button
            className="btn-l"
            variant="outlined"
            href="#outlined-buttons"
            onClick={() => {
              loginbtn === "Login"
                ? setloginbtn("Logout")
                : setloginbtn("Login");
            }}
          >
            {loginbtn}
          </Button>
          <li>User : {logneedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
