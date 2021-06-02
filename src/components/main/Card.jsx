import React from "react";
import CardStyle from "./style/CardStyle";
import cd from "./cd.jpg";

const Card = () => {
  return (
    <CardStyle>
      <div className="imgContenair">
        <img src={cd} alt="" />
      </div>
      <div className="details">
        <h3>Movie Title</h3>
        <p>
          1h30" <span>Action, Drama</span>
        </p>
      </div>
    </CardStyle>
  );
};

export default Card;
