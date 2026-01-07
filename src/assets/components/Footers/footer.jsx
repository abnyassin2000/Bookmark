import React from "react";
import logo from "../../images/logo-bookmark - Copy.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <img src={logo} alt="" className="logo" />
          <ul className="list">
            <li>FEATURE</li>
            <li>PRICEING</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="right">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-twitter"></i>
        </div>
      </div>
    </div>
  );
};
export default Footer;
