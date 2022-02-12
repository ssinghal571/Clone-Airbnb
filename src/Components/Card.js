import React from "react";
import "../CssFiles/Card.css";
function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h5>{price}</h5>
      </div>
    </div>
  );
}

export default Card;
