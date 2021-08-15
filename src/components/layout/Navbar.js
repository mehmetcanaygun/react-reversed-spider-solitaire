import React from "react";
import { NavLink } from "react-router-dom";
import ScoreBoard from "../game/ScoreBoard";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <ScoreBoard />

        <a href="/" className="logo">
          <img src="/assets/navbar-logo.png" alt="MCA's Spider Solitaire" />
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
