import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";

const Navbar = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { isStarted, setStarted, createCards } = solitaireContext;

  return (
    <header className="navbar">
      {isStarted && (
        <button
          className="back-btn"
          onClick={() => {
            setStarted(false);
            createCards();
          }}
        >
          <img src="/assets/left-chevron.svg" alt="Left Chevron" /> Back
        </button>
      )}

      <a href="/" className="logo">
        <img src="/assets/logo.svg" alt="MCA's Spider Solitaire" />
      </a>
    </header>
  );
};

export default Navbar;
