import React from "react";

const Card = ({ card, faceUp, top, zIndex }) => {
  return (
    <div
      className={`card card-face-${faceUp ? "up" : "down"}`}
      style={{ top, zIndex }}
    >
      <div className="card-back">BACK</div>
      <div className="card-front">{card}</div>
    </div>
  );
};

export default Card;
