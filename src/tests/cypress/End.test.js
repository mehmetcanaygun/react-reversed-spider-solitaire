import React from "react";
import { mount } from "@cypress/react";
import SolitaireContext from "../../context/solitaireContext";
import End from "../../components/layout/End";

describe("Cypress - End Component", () => {
  beforeEach(() => {
    const reset = () => console.log("Reset");
    const time = 1000;

    mount(
      <SolitaireContext.Provider value={{ reset, time }}>
        <End />
      </SolitaireContext.Provider>
    );
  });

  it("renders ending message in End component", () => {
    cy.get(".end-msg").contains("Congratulations");
  });
});
