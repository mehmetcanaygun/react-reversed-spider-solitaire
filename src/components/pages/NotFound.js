import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SolitaireContext from "../../context/solitaireContext";

const NotFound = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { reset } = solitaireContext;

  useEffect(() => {
    window.scrollTo(0, 0);
    reset();

    // eslint-disable-next-line
  }, []);

  return (
    <main className="not-found-page">
      <div className="not-found-container">
        <p className="code">404</p>
        <p className="text">The page you're looking for could not be found.</p>
        <Link to="/" className="back-to-home-link">
          Crawl Back To Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
