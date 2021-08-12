import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";
import Card from "./Card";
import { isLinedUp } from "../../utils/helpers";
import { CARD_HEIGHT, CARD_TOP } from "../../utils/gameFeatures";

const Pile = ({ pile, pileIndex }) => {
  const solitaireContext = useContext(SolitaireContext);
  const { selected, setSelected, clearSelected, moveCards } = solitaireContext;

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
    }
  };

  return (
    <div
      className="pile"
      style={{ height: `${(pile.length - 1) * CARD_TOP + CARD_HEIGHT}px` }}
      onClick={() => {
        if (pile.length === 0) moveToEmptyPile(pileIndex);
      }}
    >
      {pile &&
        pile.map((card, index) => (
          <Card
            key={index}
            card={card}
            cardIndex={index}
            pickCards={pickCards}
            style={{ top: `${index * CARD_TOP}px`, zIndex: index + 1 }}
          />
        ))}
    </div>
  );
};

export default Pile;
