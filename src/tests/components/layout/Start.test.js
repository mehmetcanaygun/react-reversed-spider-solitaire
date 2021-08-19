import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SolitaireContext from "../../../context/solitaireContext";
import userEvent from "@testing-library/user-event";

import Start from "../../../components/layout/Start";

it("should render Start component", () => {
  const setStarted = () => {
    console.log("Set Started");
  };

  // Render the component
  render(
    <SolitaireContext.Provider value={setStarted}>
      <Start />
    </SolitaireContext.Provider>
  );

  // Check for h1 element's text
  expect(screen.getByText("MCA's Spider Solitaire")).toBeInTheDocument();
});

it("should contain 'started' in its className when play button is clicked", () => {
  const setStarted = () => {
    console.log("Set Started");
  };

  // Render the component and put it in a container div
  const { container } = render(
    <SolitaireContext.Provider value={setStarted}>
      <Start />
    </SolitaireContext.Provider>
  );

  // Click the play button
  userEvent.click(screen.queryByText("Play"));

  // Check for container's child's child. It is the div that turns into an animation when its className changes
  expect(
    container.firstElementChild.firstElementChild.className.includes("started")
  ).toBeTruthy();
});
