import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import About from "../../../components/pages/About";

it("should render About component", () => {
  render(<About />);

  expect(screen.getByText("About Page")).toBeInTheDocument();
});
