import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <a href="/" className="logo">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/assets/navbar-logo-small.png"
            />
            <img src="/assets/navbar-logo.png" alt="MCA's Spider Solitaire" />
          </picture>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
