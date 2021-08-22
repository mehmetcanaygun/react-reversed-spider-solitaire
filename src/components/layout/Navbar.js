import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/assets/navbar-logo-small.png"
          />
          <img src="/assets/navbar-logo.png" alt="MCA's Spider Solitaire" />
        </picture>
      </a>
    </nav>
  );
};

export default Navbar;
