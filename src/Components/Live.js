import React from "react";
import "../CssFiles/Live.css";

function Live({ src, title }) {
  return (
    <div>
      <div className="live__card">
        <img src={src} alt=""></img>
      </div>
      <div className="title">
        <h3>{title} </h3>
      </div>
    </div>
  );
}

export default Live;
