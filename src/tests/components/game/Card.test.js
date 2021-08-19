import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import SolitaireContext from "../../../context/solitaireContext";

import Card from "../../../components/game/Card";

describe("Card Component", () => {
  it("should render Card component", () => {
    const selected = [];
    const setAlert = () => {
      console.log("Set Alert");
    };

    render(
      <SolitaireContext.Provider value={{ selected, setAlert }}>
        <Card
          card={{ cardId: 0, cardText: "1", faceUp: true, pileId: 0 }}
          cardIndex={0}
          pickCards={() => console.log("Pick Cards")}
          style={{ top: "24px" }}
        />
      </SolitaireContext.Provider>
    );

    userEvent.click(screen.getByAltText("Spider"));

    expect(screen.getByAltText("Card Back")).toBeInTheDocument();

    expect(screen.getByAltText("Spider")).toBeInTheDocument();

    expect(screen.getAllByText("A")).toHaveLength(2);
  });

  it("should have className 'selected' and be hightlighted when card is in the selected state", async () => {
    const selected = [[{ cardId: 0, cardText: "1", faceUp: true, pileId: 0 }]];
    const setAlert = () => {
      console.log("Set Alert");
    };

    // Render the component
    const { container } = render(
      <SolitaireContext.Provider value={{ selected, setAlert }}>
        <Card
          card={{ cardId: 0, cardText: "1", faceUp: true, pileId: 0 }}
          cardIndex={0}
          pickCards={() => console.log("Pick Cards")}
          style={{ top: "24px" }}
        />
      </SolitaireContext.Provider>
    );

    expect(
      container.firstElementChild.className.includes("selected")
    ).toBeTruthy();
  });

  it("should set and alert when user clicks on a faced down card", () => {
    const selected = [];
    const setAlert = () => {
      console.log("Set Alert");
    };

    // Render the component
    render(
      <SolitaireContext.Provider value={{ selected, setAlert }}>
        <Card
          card={{ cardId: 0, cardText: "1", faceUp: false, pileId: 0 }}
          cardIndex={0}
          pickCards={() => console.log("Pick Cards")}
          style={{ top: "24px" }}
        />
      </SolitaireContext.Provider>
    );

    // There should be 'Set Alert' on the console when the faced down card is clicked. Which means alert is set successfully
    userEvent.click(screen.getByTestId("card"));
  });
});
