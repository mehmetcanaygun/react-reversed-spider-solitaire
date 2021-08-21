import React from "react";
import { mount } from "@cypress/react";
import SolitaireContext from "../../context/solitaireContext";
import Stock from "../../components/game/Stock";

describe("Cypress - Stock Component", () => {
  it("displays Stock component", () => {
    const stock = [
      [{ cardId: 0, cardText: "1" }],
      [{ cardId: 1, cardText: "1" }],
      [{ cardId: 2, cardText: "1" }],
      [{ cardId: 3, cardText: "1" }],
      [{ cardId: 4, cardText: "1" }],
    ];

    const addCards = () => console.log("Add Cards");
    const tableau = {};
    const setAlert = () => console.log("Set Alert");

    mount(
      <SolitaireContext.Provider value={{ addCards, tableau, setAlert }}>
        <Stock stock={stock} />
      </SolitaireContext.Provider>
    );

    cy.get(".stock-pile").should("have.length", 5);
  });
});
