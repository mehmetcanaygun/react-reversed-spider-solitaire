import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "@cypress/react";
import App from "../../App";

describe("Cypress - App", () => {
  it("goes to /about route correctly", () => {
    mount(
      <Router>
        <App />
      </Router>
    );

    cy.intercept({
      method: "GET",
      url: "/about",
      hostname: "localhost",
    });
  });
});
