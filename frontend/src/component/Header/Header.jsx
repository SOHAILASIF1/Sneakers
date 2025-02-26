import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
     
        
          <div className="header-logo">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="header-links">
              <li>
                <Link to={"/collection"}>Collections</Link>
              </li>

              <li>
                <Link to={"/mens"}>Mens</Link>
              </li>
              <li>
                <Link to={"/women"}>Womens</Link>
              </li>

              <li>
                <Link to={"/all"}>All</Link>
              </li>
            </div>
          </div>
        
        <div className="header-button">
            <div className="cart-button">
                <FaCartShopping/>
            </div>
            <div className="cart-button">
                <FaUser/>
            </div>
            <Link to={'/login'} className="btn">Login</Link>

        </div>
      
    </div>
  );
}

export default Header;
