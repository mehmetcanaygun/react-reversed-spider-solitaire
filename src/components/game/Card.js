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
      <div className="card-back">
        <img src="/assets/card-back.svg" alt="Card Back" />
      </div>
      <div className="card-front">
        <div className="top-left-text">{formatCardText(card.cardText)}</div>

        <div className="card-front-img">
          <img src="/assets/spider-red.svg" alt="Spider" />
        </div>

        <div className="bottom-right-text">{formatCardText(card.cardText)}</div>
      </div>
    </div>
  );
};

export default Card;
