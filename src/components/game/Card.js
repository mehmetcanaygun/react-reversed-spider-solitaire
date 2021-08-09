import React from "react";
import { formatCardText } from "../../utils/helpers";

const Card = ({ card, cardIndex, pickCards, style }) => {
  return (
    <div
      data-card-text={card.cardText}
      className={`card card-face-${card.faceUp ? "up" : "down"}`}
      style={style}
      onClick={() => {
        if (card.faceUp) {
          pickCards(card, cardIndex);
        } else {
          console.log("You cannot pick faced down cards");
        }
      }}
    >
      <div className="card-back"></div>
      <div className="card-front">{formatCardText(card.cardText)}</div>
    </div>
  );
};

export default Card;
