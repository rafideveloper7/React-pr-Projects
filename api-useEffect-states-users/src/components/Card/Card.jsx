import React from "react";
import "./card.css";

function Card({ children }) {
  return <div className="user-card">{children}</div>;
}

export default Card;
