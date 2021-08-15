import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";
import { formatTime } from "../../utils/helpers";

const End = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { reset, time } = solitaireContext;

  return (
    <div className="end">
      <div className="img-container">
        <img src="/assets/spider-end.png" alt="Spider" />
      </div>

      <p className="end-msg">Congratulations</p>

      <p className="end-score">You've got 1000 points in {formatTime(time)}</p>

      <button className="again-btn" onClick={reset}>
        Again
      </button>
    </div>
  );
};

export default End;
