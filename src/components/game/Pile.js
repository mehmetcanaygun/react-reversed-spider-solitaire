import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";
import Card from "./Card";
import { isLinedUp } from "../../utils/helpers";

const Pile = ({ pile, pileIndex }) => {
  const solitaireContext = useContext(SolitaireContext);
  const {
    tableau,
    selected,
    setSelected,
    clearSelected,
    moveCards,
    checkMatch,
  } = solitaireContext;

  // Pick Cards - Handle picking cards to move on the tableau
  const pickCards = (card, cardIndex) => {
    // Pick only faced up cards
    if (card.faceUp) {
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
          checkMatch(tableau);
        } else {
          clearSelected();
        }
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
            style={{ top: `${index * 30}px`, zIndex: index + 1 }}
          />
        ))}
    </div>
  );
};

export default Pile;

// Check Sequence
/* const checkSequence = () => {
  // Loop through piles to find a facedUp 'King' that is followed by 12 more card in correct order
  pile &&
    pile.forEach(({ cardText, pileId, faceUp }, index) => {
      if (cardText === "13" && faceUp && pile[index + 12]) {
        if (isLinedUp(pile.slice(index, index + 12))) {
          addFoundation(pileId, index);
        }
      }
    });
};

checkSequence(); */
