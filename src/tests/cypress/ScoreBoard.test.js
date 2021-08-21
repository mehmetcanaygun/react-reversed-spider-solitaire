import React from "react";
import { mount } from "@cypress/react";
import SolitaireContext from "../../context/solitaireContext";
import ScoreBoard from "../../components/game/ScoreBoard";

describe("Cypress - ScoreBoard Component", () => {
  it("displays ScoreBoard component", () => {
    const isStarted = true;
    const createCards = () => console.log("Create Cards");
    const foundations = 0;
    const reset = () => console.log("Reset");
    const setTimeScore = () => console.log("Set Time Score");
    const isEnded = false;
    const trophy = 0;

    mount(
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

    cy.get(".reset-btn").contains("Reset");
    cy.get(".score").contains("0");
    cy.get(".time").contains("00:00");
    cy.get(".trophy").contains("0");
  });
});
