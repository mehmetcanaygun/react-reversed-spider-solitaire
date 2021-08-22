import React, { useContext, useEffect } from "react";
import SolitaireContext from "../../context/solitaireContext";
import { formatTime, playSound } from "../../utils/helpers";
import endSound from "../../assets/end.wav";

const End = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { reset, time } = solitaireContext;

  useEffect(() => {
    playSound(endSound);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="end">
      <div className="img-container">
        <img src="/assets/spider-end.png" alt="Spider" />
      </div>

      <p className="end-msg">Congratulations</p>

      <p className="end-score">
        You've got <span>1000</span> points in <span>{formatTime(time)}</span>
      </p>

      <button className="again-btn" onClick={reset}>
        Play Again
      </button>
    </div>
  );
};

export default End;
