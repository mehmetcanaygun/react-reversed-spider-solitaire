import React, { useContext, useState, useEffect } from "react";
import SolitaireContext from "../../context/solitaireContext";

import { RUN_SCORE } from "../../utils/gameFeatures";
import { formatTime } from "../../utils/helpers";

const ScoreBoard = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { createCards, foundations, reset } = solitaireContext;

  const [time, setTime] = useState(0);
  let initialTime = 0;

  useEffect(() => {
    setInterval(() => {
      initialTime++;
      setTime(initialTime);
    }, 1000);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="score-board">
      <button
        className="reset-btn"
        onClick={() => {
          reset();
          createCards();
        }}
      >
        <img src="/assets/icon-reset.svg" alt="Left Chevron" /> Reset
      </button>

      <p className="score">
        Score: <span>{foundations * RUN_SCORE}</span>
      </p>

      <p className="time">
        Time: <span>{formatTime(time)}</span>
      </p>
    </div>
  );
};

export default ScoreBoard;
