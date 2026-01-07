import React, { useState } from "react";
import "./quesion.css";
const Quesions = ({ quesions }) => {
  const [isOepn, setIsOpen] = useState(false);
  return (
    <div className="quesion">
      <div className="header" onClick={() => setIsOpen(!isOepn === true)}>
        <h4>{quesions.quesion}</h4>
        <div className="icons">
          <i class={`fa-solid fa-arrow-down ${isOepn ? "" : "active"}`}></i>
          <i class={`fa-solid fa-arrow-up ${isOepn ? "active" : ""}`}></i>
        </div>
      </div>
      <div className={`answer ${isOepn ? "active" : ""}`}>
        <p>{quesions.answer}</p>
      </div>
    </div>
  );
};

export default Quesions;
