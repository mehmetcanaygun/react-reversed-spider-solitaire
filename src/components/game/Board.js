import React, { useContext, useEffect } from "react";
import SolitaireContext from "../../context/solitaireContext";
import Stock from "./Stock";
import Tableau from "./Tableau";
import Foundations from "./Foundations";
import End from "../layout/End";
import Alert from "../layout/Alert";
import startSound from "../../assets/start.wav";
import { playSound } from "../../utils/helpers";

const Board = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { cards, createStockAndTableau, stock, tableau, isEnded } =
    solitaireContext;

  useEffect(() => {
    createStockAndTableau(cards);

    playSound(startSound);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="board">
      {isEnded ? (
        <End />
      ) : (
        <>
          <Alert />

          <div className="board-top">
            <Stock stock={stock} />
            <Foundations />
          </div>

          <div className="board-bottom">
            <Tableau tableau={tableau} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
