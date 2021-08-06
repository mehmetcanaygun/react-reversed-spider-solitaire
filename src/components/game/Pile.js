import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";
import Card from "./Card";
import { isPickable } from "../../helpers";

const Pile = ({ pile, pileIndex }) => {
  const solitaireContext = useContext(SolitaireContext);
  const { selected, setSelected, clearSelected, moveCards } = solitaireContext;

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
        if (isPickable(toBePickedCards)) {
          setSelected(toBePickedCards);
        }
      } else if (selected.length === 1 && cardIndex === pile.length - 1) {
        // Make sure the second selection is suitable to have first selection under it
        // Else, clear all selections
        if (+selected[0][0].cardText === +card.cardText - 1) {
          moveCards(selected[0], card);
        } else {
          clearSelected();
        }
      }
    }
  };

  // Move To Empty Pile -
  const moveToEmptyPile = (index) => {
    console.log("move to empty pile " + index);
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
