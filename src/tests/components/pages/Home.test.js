import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../../context/solitaireContext";

import Home from "../../../components/pages/Home";

it("should render Home component", () => {
  const createCards = () => {
    console.log("Create cards");
  };
  const isStarted = false;

  render(
    <SolitaireContext.Provider value={{ createCards, isStarted }}>
      <Home />
    </SolitaireContext.Provider>
  );
});
