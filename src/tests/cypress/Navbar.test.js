import React, { Children } from "react";
import { mount } from "@cypress/react";
import Navbar from "../../components/layout/Navbar";

describe("Cypress - Navbar Component", () => {
  it("displays Navbar component", () => {
    mount(<Navbar />);

    cy.get(".logo img")
      .should("have.attr", "alt")
      .and("match", /MCA's Spider Solitaire/);
  });
});
