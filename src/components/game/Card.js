import React from "react";
import { formatCardText } from "../../helpers";

const Card = ({ card, cardIndex, pickCards, style }) => {
  return (
    <div
      data-card-text={card.cardText}
      className={`card card-face-${card.faceUp ? "up" : "down"}`}
      style={style}
      onClick={() => {
        pickCards(card, cardIndex);
      }}
    >
      <div className="card-back"></div>
      <div className="card-front">{formatCardText(card.cardText)}</div>
    </div>
  );
};

export default Card;
