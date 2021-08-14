import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";

const End = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { reset } = solitaireContext;

  return (
    <div className="end">
      <div className="img-container">
        <img src="/assets/end-spider.svg" alt="Spider" />
      </div>

      <p className="end-msg">Congratulations</p>

      <p className="end-score">You've got 1000 points in 05:32</p>

      <button className="again-btn" onClick={reset}>
        Again
      </button>
    </div>
  );
};

export default End;
