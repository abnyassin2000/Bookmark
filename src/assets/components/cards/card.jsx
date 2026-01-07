import React from "react";
import "./card.css";
import dots from "../../images/bg-dots.svg";

const Card = ({ iconOne, header, title }) => {
  return (
    <div className="card">
      <img src={iconOne} alt="" />
      <h3>{header}</h3>
      <p>{title}</p>
      <img src={dots} alt="" />
      <button>Add & Install Extension</button>
    </div>
  );
};

export default Card;
