import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src="/assets/footer-logo.png" alt="MCA's Spider Solitaire" />
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
