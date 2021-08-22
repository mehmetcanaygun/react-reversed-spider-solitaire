import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src="/assets/footer-logo.png" alt="MCA's Spider Solitaire" />
        <Link to="/about">About The Project</Link>
      </div>
      <p className="footer-msg">
        Made with <img src="/assets/icon-heart.svg" alt="Heart" /> by{" "}
        <a
          href="https://github.com/mehmetcanaygun"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mehmet Can Aygün
        </a>
      </p>
    </footer>
  );
};

export default Footer;
