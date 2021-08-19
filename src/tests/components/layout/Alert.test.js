import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../../context/solitaireContext";

import Alert from "../../../components/layout/Alert";

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

it("should not render Alert component if alert state is null", () => {
  const alert = null;

  render(
    <SolitaireContext.Provider value={{ alert }}>
      <Alert />
    </SolitaireContext.Provider>
  );

  expect(screen.queryByAltText("Info")).not.toBeInTheDocument();
});
