import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../../context/solitaireContext";

import Start from "../../../components/layout/Start";

it("should render Start component", () => {
  const setStarted = () => {
    console.log("Set Started");
  };

  render(
    <SolitaireContext.Provider value={setStarted}>
      <Start />
    </SolitaireContext.Provider>
  );

  expect(screen.getByText("MCA's Spider Solitaire")).toBeInTheDocument();
});
