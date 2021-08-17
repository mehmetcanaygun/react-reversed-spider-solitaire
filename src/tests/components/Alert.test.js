import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../context/solitaireContext";

import Alert from "../../components/layout/Alert";

it("should render Alert component", () => {
  const alert = { type: "warning", msg: "Example Alert" };

  render(
    <SolitaireContext.Provider value={{ alert }}>
      <Alert />
    </SolitaireContext.Provider>
  );

  expect(screen.getByText("Example Alert")).toBeInTheDocument();
  expect(screen.getByAltText("Info")).toBeInTheDocument();
});
