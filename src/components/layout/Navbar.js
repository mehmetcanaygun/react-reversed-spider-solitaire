import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";

const Navbar = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { setStarted, createCards } = solitaireContext;

  return (
    <header className="navbar">
      <a href="/">MCA'S Spider Solitaire</a>
      <button
        onClick={() => {
          setStarted(false);
          createCards();
        }}
      >
        Quit
      </button>
    </header>
  );
};

export default Navbar;
