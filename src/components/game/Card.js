import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";
import { formatCardText, playSound } from "../../utils/helpers";
import cardPickSound from "../../assets/card-pick.wav";
import PropTypes from "prop-types";

const Card = ({ card, cardIndex, pickCards, style }) => {
  const solitaireContext = useContext(SolitaireContext);
  const { selected, setAlert } = solitaireContext;

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
      data-testid="card"
      className={createClassName()}
      style={style}
      onClick={() => {
        if (card.faceUp) {
          pickCards(card, cardIndex);
          playSound(cardPickSound);
        } else {
          setAlert("warning", "You cannot pick faced down cards");
        }
      }}
    >
      <div className="card-back">
        <img src="/assets/spider-color-primary.png" alt="Card Back" />
      </div>

      <div className="card-front">
        <div className="top-left-text">{formatCardText(card.cardText)}</div>

        <div className="card-front-img">
          <img src="/assets/spider-color-tertiary.png" alt="Spider" />
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
