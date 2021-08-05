import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";
import { formatCardText } from "../../helpers";

const Card = ({ pileId, card, faceUp, top, zIndex }) => {
  const solitaireContext = useContext(SolitaireContext);
  const { selected, moveCards } = solitaireContext;

  return (
    <div
      className={`card card-face-${faceUp ? "up" : "down"}`}
      style={{ top, zIndex }}
      onClick={() => moveCards(selected, { pileId, card, faceUp })}
    >
      <div className="card-back"></div>
      <div className="card-front">{formatCardText(card)}</div>
    </div>
  );
};

export default Card;
