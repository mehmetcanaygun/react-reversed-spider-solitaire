import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";
import { formatCardText } from "../../utils/helpers";
import PropTypes from "prop-types";

const Card = ({ card, cardIndex, pickCards, style }) => {
  const solitaireContext = useContext(SolitaireContext);
  const { selected } = solitaireContext;

  const createClassName = () => {
    let classes = ["card"];

    // Face up or down
    if (card.faceUp) {
      classes.push("face-up");
    }

    // Selected or not
    if (selected.length > 0) {
      selected[0].forEach((selectedCard) => {
        if (selectedCard.cardId === card.cardId) {
          classes.push("selected");
        }
      });
    }

    return classes.join(" ");
  };

  return (
    <div
      className={createClassName()}
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

Card.propTypes = {
  card: PropTypes.object.isRequired,
  cardIndex: PropTypes.number.isRequired,
  pickCards: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

export default Card;
