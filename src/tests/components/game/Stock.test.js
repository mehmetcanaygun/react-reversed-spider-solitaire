import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../../context/solitaireContext";

import Stock from "../../../components/game/Stock";
import userEvent from "@testing-library/user-event";

describe("Stock Component", () => {
  const addCards = () => console.log("Add Cards");
  const setAlert = () => console.log("Set Alert");

  it("should render Stock component", () => {
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

  it("should call addCards when Stock component is clicked and there is no empty pile", () => {
    const tableau = {
      pile0: [{ cardId: 5, cardText: "10", faceUp: true, pileId: 0 }],
      pile1: [{ cardId: 6, cardText: "10", faceUp: true, pileId: 1 }],
      pile2: [{ cardId: 7, cardText: "10", faceUp: true, pileId: 2 }],
      pile3: [{ cardId: 8, cardText: "10", faceUp: true, pileId: 3 }],
      pile4: [{ cardId: 9, cardText: "10", faceUp: true, pileId: 4 }],
      pile5: [{ cardId: 10, cardText: "10", faceUp: true, pileId: 5 }],
      pile6: [{ cardId: 11, cardText: "10", faceUp: true, pileId: 6 }],
      pile7: [{ cardId: 12, cardText: "10", faceUp: true, pileId: 7 }],
      pile8: [{ cardId: 13, cardText: "10", faceUp: true, pileId: 8 }],
      pile9: [{ cardId: 14, cardText: "10", faceUp: true, pileId: 9 }],
    };

    const stockProp = [[{ cardId: 0, cardText: "1", faceUp: true, pileId: 0 }]];

    render(
      <SolitaireContext.Provider value={{ addCards, setAlert, tableau }}>
        <Stock stock={stockProp} />
      </SolitaireContext.Provider>
    );

    // There should be "Add Cards" on the console since there's no empty pile
    userEvent.click(screen.getByTestId("stock"));
  });

  it("should call setAlert when Stock component is clicked and there are empty piles", () => {
    const tableau = {
      pile0: [{ cardId: 5, cardText: "10", faceUp: true, pileId: 0 }],
      pile1: [],
      pile2: [],
      pile3: [{ cardId: 8, cardText: "10", faceUp: true, pileId: 3 }],
      pile4: [],
      pile5: [{ cardId: 10, cardText: "10", faceUp: true, pileId: 5 }],
      pile6: [{ cardId: 11, cardText: "10", faceUp: true, pileId: 6 }],
      pile7: [],
      pile8: [],
      pile9: [{ cardId: 14, cardText: "10", faceUp: true, pileId: 9 }],
    };

    const stockProp = [[{ cardId: 0, cardText: "1", faceUp: true, pileId: 0 }]];

    render(
      <SolitaireContext.Provider value={{ addCards, setAlert, tableau }}>
        <Stock stock={stockProp} />
      </SolitaireContext.Provider>
    );

    // There should be "Set Alert" on the console since there are empty piles
    userEvent.click(screen.getByTestId("stock"));
  });
});
