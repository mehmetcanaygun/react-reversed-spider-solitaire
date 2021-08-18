import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import SolitaireContext from "../../../context/solitaireContext";

import Card from "../../../components/game/Card";

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
