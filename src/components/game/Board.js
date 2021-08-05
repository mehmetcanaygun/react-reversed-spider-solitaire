import React, { useContext, useEffect } from "react";
import SolitaireContext from "../../context/solitaireContext";
import Stock from "./Stock";
import Foundations from "./Foundations";
import Tableau from "./Tableau";

const Board = () => {
  const solitaireContext = useContext(SolitaireContext);
  const {
    cards,
    createCards,
    setStarted,
    createStockAndTableau,
    stock,
    tableau,
  } = solitaireContext;

  useEffect(() => {
    createStockAndTableau(cards);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="board">
      <div className="board-top">
        <Stock stock={stock} />
        <Foundations />
      </div>

      <div className="board-bottom">
        <Tableau tableau={tableau} />
      </div>
    </div>
  );
};

export default Board;
