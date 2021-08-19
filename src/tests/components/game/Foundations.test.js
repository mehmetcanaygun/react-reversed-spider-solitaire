import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../../context/solitaireContext";

import Foundations from "../../../components/game/Foundations";

it("should render Foundations component", () => {
  const foundations = 0;
  const setEnded = () => console.log("Set Ended");

  render(
    <SolitaireContext.Provider value={{ foundations, setEnded }}>
      <Foundations />
    </SolitaireContext.Provider>
  );

  expect(screen.getAllByAltText("Empty Foundation")).toHaveLength(8);
});

it("should call setEnded if foundations state is 8", () => {
  const foundations = 8;
  const setEnded = () => console.log("Set Ended");

  render(
    <SolitaireContext.Provider value={{ foundations, setEnded }}>
      <Foundations />
    </SolitaireContext.Provider>
  );
});
