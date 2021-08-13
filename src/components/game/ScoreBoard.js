import React, { useContext, useState, useEffect } from "react";
import SolitaireContext from "../../context/solitaireContext";

import { RUN_SCORE } from "../../utils/gameFeatures";
import { formatTime } from "../../utils/helpers";

const ScoreBoard = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { isStarted, createCards, foundations, reset } = solitaireContext;

  const [time, setTime] = useState(0);
  let timeInterval;
  let initialTime = 0;

  useEffect(() => {
    // Start timer only if game is started
    if (isStarted) {
      timeInterval = setInterval(() => {
        initialTime++;
        setTime(initialTime);
      }, 1000);
    }

    // Clear the interval when component dismounts
    return () => {
      clearInterval(timeInterval);
      setTime(0);
    };

    // eslint-disable-next-line
  }, [isStarted]);

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