import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../../context/solitaireContext";

import ScoreBoard from "../../../components/game/ScoreBoard";
import userEvent from "@testing-library/user-event";

describe("ScoreBoard Component", () => {
  const isStarted = true;
  const createCards = () => console.log("Create Cards");
  const foundations = 0;
  const reset = () => console.log("Reset");
  const setTimeScore = () => console.log("Set Time Score");
  const isEnded = false;
  const trophy = 0;

  it("should render ScoreBoard component", () => {
    render(
      <SolitaireContext.Provider
        value={{
          isStarted,
          createCards,
          foundations,
          reset,
          setTimeScore,
          isEnded,
          trophy,
        }}
      >
        <ScoreBoard />
      </SolitaireContext.Provider>
    );

    expect(screen.getByAltText("Reset")).toBeInTheDocument();
    expect(screen.getByText(/Score/)).toBeInTheDocument();
    expect(screen.getByText(/Time/)).toBeInTheDocument();
  });

  it("should call setTimeScore if isEnded is true", () => {
    const ended = true;

    // There should be Set Time Score on the console since isEnded state is true
    render(
      <SolitaireContext.Provider
        value={{
          isStarted,
          createCards,
          foundations,
          reset,
          setTimeScore,
          isEnded: ended,
          trophy,
        }}
      >
        <ScoreBoard />
      </SolitaireContext.Provider>
    );
  });

  it("should call reset and createCards when reset button is clicked", () => {
    render(
      <SolitaireContext.Provider
        value={{
          isStarted,
          createCards,
          foundations,
          reset,
          setTimeScore,
          isEnded,
          trophy,
        }}
      >
        <ScoreBoard />
      </SolitaireContext.Provider>
    );

    // There should be 'Reset' and 'Create Cards' on the console
    userEvent.click(screen.getByTestId("reset-btn"));
  });
});
