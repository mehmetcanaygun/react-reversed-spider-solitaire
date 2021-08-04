import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";

const Start = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { setStarted } = solitaireContext;

  return (
    <div className="start">
      <h1>Game Start Container</h1>
      <button onClick={() => setStarted(true)}>Start</button>
    </div>
  );
};

export default Start;
