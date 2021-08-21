import React from "react";
import { mount } from "@cypress/react";
import SolitaireContext from "../../context/solitaireContext";
import Start from "../../components/layout/Start";

describe("Cypress - Start Component", () => {
  beforeEach(() => {
    const setStarted = false;

    mount(
      <SolitaireContext.Provider value={{ setStarted }}>
        <Start />
      </SolitaireContext.Provider>
    );
  });

  it("renders welcome message in Start component", () => {
    cy.get("h1").contains("Welcome to");
  });

  it("renders play button in Start component", () => {
    cy.get("button").contains("Play");
  });

  it("shows loading animation when play button is clicked", () => {
    cy.get("button").click();
    cy.get(".container").should("have.class", "started");
  });
});
