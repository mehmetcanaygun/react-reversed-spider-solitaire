import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../../context/solitaireContext";

import End from "../../../components/layout/End";

it("should render End component", () => {
  const reset = () => {
    console.log("Reset");
  };
  const time = 100;

  render(
    <SolitaireContext.Provider value={{ reset, time }}>
      <End />
    </SolitaireContext.Provider>
  );

  expect(screen.getByText("Congratulations")).toBeInTheDocument();
});
