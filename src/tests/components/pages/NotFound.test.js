import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import NotFound from "../../../components/pages/NotFound";

it("should render NotFound component", () => {
  render(<NotFound />);

  expect(screen.getByText("Not Found Page")).toBeInTheDocument();
});
