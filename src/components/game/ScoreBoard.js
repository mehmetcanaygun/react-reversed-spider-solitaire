import React, { useContext, useRef, useState, useEffect } from "react";
import SolitaireContext from "../../context/solitaireContext";
import { RUN_SCORE } from "../../utils/gameFeatures";
import { formatTime } from "../../utils/helpers";

const ScoreBoard = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { isStarted, createCards, foundations, reset, setTimeScore } =
    solitaireContext;

  const timerRef = useRef(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Start timer only if game is started
    if (isStarted) {
      if (timerRef.current) return;
      timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    }

    // Set time to the global state when the game ends, so that it can be shown on End component
    if (foundations === 8) {
      setTimeScore(time);
    }

    // Clear the interval when component dismounts
    return () => {
      clearInterval(timerRef.current);
      timerRef.current = 0;
      setTime(0);
    };

    // eslint-disable-next-line
  }, [isStarted, foundations]);

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
