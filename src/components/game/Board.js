import React, { useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";
import Stock from "./Stock";
import Foundations from "./Foundations";
import Tableau from "./Tableau";

const Board = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { createCards, setStarted } = solitaireContext;

  return (
    <div className="board">
      <h1>Board</h1>
      <button
        onClick={() => {
          setStarted(false);
          createCards();
        }}
      >
        Quit
      </button>
      <div className="board-top">
        <Stock />
        <Foundations />
      </div>
      <div className="board-bottom">
        <Tableau />
      </div>
    </div>
  );
};

export default Board;
