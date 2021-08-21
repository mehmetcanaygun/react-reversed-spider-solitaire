import React from "react";
import { mount } from "@cypress/react";
import SolitaireContext from "../../context/solitaireContext";
import Alert from "../../components/layout/Alert";

describe("Cypress - Alert Component", () => {
  it("displays alert message", () => {
    const alert = { type: "warning", msg: "Cypress Test" };

    mount(
      <SolitaireContext.Provider value={{ alert }}>
        <Alert />
      </SolitaireContext.Provider>
    );

    cy.get(".msg").contains(alert.msg);
  });
});
