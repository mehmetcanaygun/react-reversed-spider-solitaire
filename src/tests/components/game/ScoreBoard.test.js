import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../../context/solitaireContext";

import ScoreBoard from "../../../components/game/ScoreBoard";

it("should render ScoreBoard component", () => {
  const isStarted = true;
  const createCards = () => console.log("Create Cards");
  const foundations = 0;
  const reset = () => console.log("Reset");
  const setTimeScore = () => console.log("Set Time Score");
  const isEnded = false;

  render(
    <SolitaireContext.Provider
      value={{
        isStarted,
        createCards,
        foundations,
        reset,
        setTimeScore,
        isEnded,
      }}
    >
      <ScoreBoard />
    </SolitaireContext.Provider>
  );

  expect(screen.getByAltText("Left Chevron")).toBeInTheDocument();
  expect(screen.getByText(/Score/)).toBeInTheDocument();
  expect(screen.getByText(/Time/)).toBeInTheDocument();
});
