import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../../context/solitaireContext";

import Pile from "../../../components/game/Pile";

it("should render Pile component", () => {
  const selected = [];
  const setSelected = () => console.log("Set Selected");
  const clearSelected = () => console.log("Clear Selected");
  const moveCards = () => console.log("Move Cards");

  const pileProp = [
    { cardId: 0, cardText: "1", faceUp: false, pileId: 0 },
    { cardId: 1, cardText: "13", faceUp: false, pileId: 0 },
    { cardId: 2, cardText: "5", faceUp: false, pileId: 0 },
    { cardId: 3, cardText: "10", faceUp: false, pileId: 0 },
    { cardId: 4, cardText: "2", faceUp: false, pileId: 0 },
  ];

  render(
    <SolitaireContext.Provider
      value={{ selected, setSelected, clearSelected, moveCards }}
    >
      <Pile pile={pileProp} pileIndex={0} />
    </SolitaireContext.Provider>
  );

  expect(screen.getAllByAltText("Spider")).toHaveLength(5);
  expect(screen.getAllByText("A")).toHaveLength(2);
  expect(screen.getAllByText("K")).toHaveLength(2);
  expect(screen.getAllByText("5")).toHaveLength(2);
  expect(screen.getAllByText("10")).toHaveLength(2);
  expect(screen.getAllByText("2")).toHaveLength(2);
});
