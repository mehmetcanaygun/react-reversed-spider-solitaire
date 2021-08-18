import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../../context/solitaireContext";

import Tableau from "../../../components/game/Tableau";

it("should render Tableau component", () => {
  const selected = [];
  const setSelected = () => console.log("Set Selected");
  const clearSelected = () => console.log("Clear Selected");
  const moveCards = () => console.log("Move Cards");

  const tableauProp = {
    pile0: [
      { cardId: 0, cardText: "1", faceUp: false, pileId: 0 },
      { cardId: 1, cardText: "2", faceUp: false, pileId: 0 },
    ],
    pile1: [
      { cardId: 2, cardText: "3", faceUp: false, pileId: 3 },
      { cardId: 1, cardText: "4", faceUp: false, pileId: 0 },
    ],
    pile2: [
      { cardId: 4, cardText: "5", faceUp: false, pileId: 5 },
      { cardId: 1, cardText: "6", faceUp: false, pileId: 0 },
    ],
    pile3: [
      { cardId: 6, cardText: "7", faceUp: false, pileId: 7 },
      { cardId: 1, cardText: "8", faceUp: false, pileId: 0 },
    ],
    pile4: [
      { cardId: 8, cardText: "9", faceUp: false, pileId: 0 },
      { cardId: 9, cardText: "10", faceUp: false, pileId: 0 },
    ],
    pile5: [
      { cardId: 10, cardText: "11", faceUp: false, pileId: 0 },
      { cardId: 11, cardText: "12", faceUp: false, pileId: 0 },
    ],
    pile6: [
      { cardId: 12, cardText: "13", faceUp: false, pileId: 0 },
      { cardId: 13, cardText: "1", faceUp: false, pileId: 0 },
    ],
    pile7: [
      { cardId: 14, cardText: "2", faceUp: false, pileId: 0 },
      { cardId: 15, cardText: "3", faceUp: false, pileId: 0 },
    ],
    pile8: [
      { cardId: 16, cardText: "4", faceUp: false, pileId: 0 },
      { cardId: 17, cardText: "5", faceUp: false, pileId: 0 },
    ],
    pile9: [
      { cardId: 18, cardText: "6", faceUp: false, pileId: 0 },
      { cardId: 19, cardText: "7", faceUp: false, pileId: 0 },
    ],
  };

  render(
    <SolitaireContext.Provider
      value={{ selected, setSelected, clearSelected, moveCards }}
    >
      <Tableau tableau={tableauProp} />
    </SolitaireContext.Provider>
  );

  expect(screen.getAllByAltText("Spider")).toHaveLength(20);
});
