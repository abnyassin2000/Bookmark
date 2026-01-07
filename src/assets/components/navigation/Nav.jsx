import logo from "../../images/logo-bookmark.svg";
import "./nav.css";
import menu from "../../images/icon-hamburger.svg";
import xmark from "../../images/icon-close - Copy.svg";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-bar">
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="icons" onClick={()=> setIsOpen(!isOpen)}>
          <img src={menu} className={!isOpen ? "active" : ""} />
          <img src={xmark} className={isOpen ? "active" : ""} />
        </div>
        <div className={`nav ${isOpen ? "active" : ""}`}>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li className="btn">Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
