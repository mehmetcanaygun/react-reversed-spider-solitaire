import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import SolitaireContext from "../../../context/solitaireContext";

import Pile from "../../../components/game/Pile";

describe("Pile Component", () => {
  const setSelected = () => console.log("Set Selected");
  const clearSelected = () => console.log("Clear Selected");
  const moveCards = () => console.log("Move Cards");

  it("should render Pile component", () => {
    const selected = [];

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

  it("should not render Alert component if passed pile is null", () => {
    const selected = [];

    const pilePropNull = null;

    const { container } = render(
      <SolitaireContext.Provider
        value={{ selected, setSelected, clearSelected, moveCards }}
      >
        <Pile pile={pilePropNull} pileIndex={0} />
      </SolitaireContext.Provider>
    );

    expect(container.firstElementChild).toBeNull();
  });

  it("should move cards to the empty pile if an empty pile is clicked when there are suitable selected cards", () => {
    const selected = [[{ cardId: 0, cardText: "1", pileId: 5, faceUp: true }]];

    const pileProp = [];

    render(
      <SolitaireContext.Provider
        value={{ selected, setSelected, clearSelected, moveCards }}
      >
        <Pile pile={pileProp} pileIndex={0} />
      </SolitaireContext.Provider>
    );

    // There should be 'Move Cards' on the console
    userEvent.click(screen.getByTestId("pile"));
  });

  it("should select and highlight multiple cards", () => {
    const selected = [];

    // Lined up cards
    const pileProp = [
      { cardId: 0, cardText: "1", faceUp: true, pileId: 0 },
      { cardId: 1, cardText: "2", faceUp: true, pileId: 0 },
      { cardId: 2, cardText: "3", faceUp: true, pileId: 0 },
    ];

    const { container } = render(
      <SolitaireContext.Provider
        value={{ selected, setSelected, clearSelected, moveCards }}
      >
        <Pile pile={pileProp} pileIndex={0} />
      </SolitaireContext.Provider>
    );

    // Make sure to click on the top most card to select the line. There should be 'Set Selected' on the console
    userEvent.click(container.firstElementChild.firstElementChild);
  });

  it("should call moveCards if suitable cards are selected to move", () => {
    const selected = [[{ cardId: 0, cardText: "5", pileId: 0, faceUp: true }]];

    const pileProp = [{ cardId: 1, cardText: "4", faceUp: true, pileId: 1 }];

    const { container } = render(
      <SolitaireContext.Provider
        value={{ selected, setSelected, clearSelected, moveCards }}
      >
        <Pile pile={pileProp} pileIndex={0} />
      </SolitaireContext.Provider>
    );

    // There should be "Move Card" on the console when the card is clicked
    userEvent.click(container.firstElementChild.firstElementChild);
  });

  it("should call clearSelected if the user tries to make an incorrect move", () => {
    const selected = [[{ cardId: 0, cardText: "5", pileId: 0, faceUp: true }]];

    const pilePropNotSuitable = [
      { cardId: 1, cardText: "10", faceUp: true, pileId: 1 },
    ];

    const { container } = render(
      <SolitaireContext.Provider
        value={{ selected, setSelected, clearSelected, moveCards }}
      >
        <Pile pile={pilePropNotSuitable} pileIndex={0} />
      </SolitaireContext.Provider>
    );

    // There should be "Clear Selected" on the console when the card is clicked
    userEvent.click(container.firstElementChild.firstElementChild);
  });
});
