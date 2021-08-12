import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SolitaireContext from "../../context/solitaireContext";

const Navbar = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { isStarted, setStarted, createCards } = solitaireContext;

  return (
    <header className="navbar">
      <div className="container">
        <div className="btn-container">
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
        </div>

        <a href="/" className="logo">
          <img src="/assets/navbar-logo.svg" alt="MCA's Spider Solitaire" />
        </a>

        <nav className="navbar-nav">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Game
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
