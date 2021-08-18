import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../../context/solitaireContext";

import Stock from "../../../components/game/Stock";

it("should render Stock component", () => {
  const addCards = () => console.log("Add Cards");
  const setAlert = () => console.log("Set Alert");
  const tableau = {};

  const stockProp = [
    [{ cardId: 0, cardText: "1", faceUp: true, pileId: 0 }],
    [{ cardId: 1, cardText: "4", faceUp: true, pileId: 0 }],
    [{ cardId: 2, cardText: "5", faceUp: true, pileId: 0 }],
    [{ cardId: 3, cardText: "11", faceUp: true, pileId: 0 }],
    [{ cardId: 4, cardText: "13", faceUp: true, pileId: 0 }],
  ];

  render(
    <SolitaireContext.Provider value={{ addCards, setAlert, tableau }}>
      <Stock stock={stockProp} />
    </SolitaireContext.Provider>
  );

  expect(screen.getAllByAltText("Card Back")).toHaveLength(5);
});
