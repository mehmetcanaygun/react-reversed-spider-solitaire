import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../../context/solitaireContext";

import Board from "../../../components/game/Board";

describe("Board Component", () => {
  const cards = [];
  const createStockAndTableau = () => console.log("Create Stock and Tableau");
  const stock = [];
  const tableau = {};
  let isEnded = false;

  it("should render Board component", () => {
    render(
      <SolitaireContext.Provider
        value={{ cards, createStockAndTableau, stock, tableau, isEnded }}
      >
        <Board />
      </SolitaireContext.Provider>
    );
  });
});
