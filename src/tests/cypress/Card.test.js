import React from "react";
import { mount } from "@cypress/react";
import SolitaireContext from "../../context/solitaireContext";
import Card from "../../components/game/Card";

describe("Cypress - Card Component", () => {
  it("displays Card component", () => {
    const selected = [];
    const setAlert = () => console.log("Set Alert");
    const card = { cardId: 0, cardText: "13", faceUp: true, pileId: 0 };
    const pickCards = () => console.log("Pick Cards");
    const style = { top: "24px" };

    mount(
      <SolitaireContext.Provider value={{ selected, setAlert }}>
        <Card card={card} cardIndex={0} pickCards={pickCards} style={style} />
      </SolitaireContext.Provider>
    );

    cy.get(".top-left-text").contains("K");
    cy.get(".bottom-right-text").contains("K");
    cy.get(".card-back img")
      .should("have.attr", "alt")
      .and("match", /Card Back/);
    cy.get(".card-front-img img")
      .should("have.attr", "alt")
      .and("match", /Spider/);
  });

  it("selects Card", () => {
    const selected = [[{ cardId: 0, cardText: "13", faceUp: true, pileId: 0 }]];
    const setAlert = () => console.log("Set Alert");
    const card = { cardId: 0, cardText: "13", faceUp: true, pileId: 0 };
    const pickCards = () => console.log("Pick Cards");
    const style = { top: "24px" };

    mount(
      <SolitaireContext.Provider value={{ selected, setAlert }}>
        <Card card={card} cardIndex={0} pickCards={pickCards} style={style} />
      </SolitaireContext.Provider>
    );

    cy.get(".card").should("have.class", "selected");
  });
});
