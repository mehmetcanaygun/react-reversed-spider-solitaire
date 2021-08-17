import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../context/solitaireContext";

import Navbar from "../../components/layout/Navbar";

it("should render Navbar component", () => {
  const isStarted = true;

  render(
    <SolitaireContext.Provider value={isStarted}>
      <Navbar />
    </SolitaireContext.Provider>
  );

  expect(screen.getByAltText("MCA's Spider Solitaire")).toBeInTheDocument();
});
