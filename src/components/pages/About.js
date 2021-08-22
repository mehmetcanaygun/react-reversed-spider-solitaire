import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SolitaireContext from "../../context/solitaireContext";

const About = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { reset } = solitaireContext;

  useEffect(() => {
    window.scrollTo(0, 0);
    reset();

    // eslint-disable-next-line
  }, []);

  return (
    <main className="about-page">
      <Link to="/" className="back-to-home-link">
        <img src="/assets/icon-left-chevron.svg" alt="Left Chevron" /> Back To
        Home
      </Link>

      <section>
        <div className="info">
          <h2>About MCA's Spider Solitaire</h2>

          <ul className="about-list">
            <li>
              This Spider Solitaire game was built as the final assignment of
              the 112. Trendyol Front-End Bootcamp.
            </li>
            <li>
              In addition to being an ordinary Spider Solitaire game, it
              contains a minor rule change.
            </li>
            <li>
              Cards are required to be lined up from the "Ace" to the "King".
            </li>
            <li>
              This project was mainly built with{" "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              , and{" "}
              <a
                href="https://sass-lang.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scss
              </a>
              .
            </li>
          </ul>

          <h2>Author</h2>

          <ul className="contact-list">
            <li className="github">
              <a
                href="https://github.com/mehmetcanaygun"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub: <span>@mehmetcanaygun</span>
              </a>
            </li>
            <li className="linkedin">
              <a
                href="https://www.linkedin.com/in/mehmetcanaygun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn: <span>@mehmetcanaygun</span>
              </a>
            </li>
            <li className="instagram">
              <a
                href="https://www.instagram.com/mehmetcnaygun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram: <span>@mehmetcnaygun</span>
              </a>
            </li>
            <li className="email">
              <a href="mailto:mehmetcanaygun@gmail.com">
                Email: <span>mehmetcanaygun@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="img">
          <img src="/assets/about-img.png" alt="Spider" />
        </div>
      </section>
    </main>
  );
};

export default About;
