import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SolitaireContext from "../../context/solitaireContext";
import { RUN_SCORE } from "../../utils/gameFeatures";

const Navbar = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { createCards, foundations, reset } = solitaireContext;

  return (
    <header className="navbar">
      <div className="container">
        <div className="game-info">
          <button
            className="reset-btn"
            onClick={() => {
              reset();
              createCards();
            }}
          >
            <img src="/assets/icon-reset.svg" alt="Left Chevron" /> Reset
          </button>

          <p className="score">
            Score: <span>{foundations * RUN_SCORE}</span>
          </p>

          <p className="time">
            Time: <span>05:34</span>
          </p>
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
