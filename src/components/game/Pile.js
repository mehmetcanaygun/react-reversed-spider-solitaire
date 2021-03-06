import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";
import Card from "./Card";
import { isLinedUp, playSound } from "../../utils/helpers";
import { CARD_TOP } from "../../utils/gameFeatures";
import PropTypes from "prop-types";
import cardPickSound from "../../assets/card-pick.mp3";

const Pile = ({ pile = [], pileIndex }) => {
  const solitaireContext = useContext(SolitaireContext);
  const { selected, setSelected, clearSelected, moveCards, setAlert } =
    solitaireContext;

  // Pick Cards - Handle picking cards to move on the tableau
  const pickCards = (card, cardIndex) => {
    // Make sure a line of cards will only be selected on the first selection
    // First selection means that you're picking cards to be carried
    // Second selection will consist of only a single card which is the undermost card on its pile
    if (selected.length === 0) {
      const toBePickedCards = pile.slice(cardIndex, pile.length);

      // Use helper function to make sure all cards are lined up correctly
      if (isLinedUp(toBePickedCards)) {
        setSelected(toBePickedCards);
      } else {
        setAlert("warning", "Cards are not lined up");
      }
    } else if (selected.length === 1 && cardIndex === pile.length - 1) {
      // Make sure the second selection is suitable to have first selection under it
      // Else, clear all selections
      if (+selected[0][0].cardText === +card.cardText + 1) {
        moveCards(selected[0], card);
      } else {
        clearSelected();
      }
    }
  };

  // Move To Empty Pile - Firstly, check if cards to be picked were selected. If so, move cards to the empty pile
  // Provide an object with the correct pile id so that moveCards function can work properly
  const moveToEmptyPile = (index) => {
    if (selected.length === 1) {
      moveCards(selected[0], { pileId: index });
      playSound(cardPickSound);
    }
  };

  // Set Pile Height - Since pile height depends on pile length, make sure to set it right in accordance with the browser width
  const setPileHeight = () => {
    let cardHeight;

    if (window.innerWidth > 1300) {
      cardHeight = 148;
    } else if (window.innerWidth < 1300 && window.innerWidth >= 940) {
      cardHeight = 127;
    } else if (window.innerWidth < 940 && window.innerWidth >= 768) {
      cardHeight = 101;
    } else {
      cardHeight = 53;
    }

    return {
      height: `${(pile.length - 1) * CARD_TOP + cardHeight}px`,
    };
  };

  if (pile) {
    return (
      <div
        data-testid="pile"
        className="pile"
        style={setPileHeight()}
        onClick={() => {
          if (pile.length === 0) moveToEmptyPile(pileIndex);
        }}
      >
        {pile.map((card, index) => (
          <Card
            key={index}
            card={card}
            cardIndex={index}
            pickCards={pickCards}
            style={{ top: `${index * CARD_TOP}px` }}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

Pile.propTypes = {
  pile: PropTypes.array,
  pileIndex: PropTypes.number.isRequired,
};

export default Pile;
