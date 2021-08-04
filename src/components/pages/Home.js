import React, { useEffect, useContext } from "react";
import SolitaireContext from "../../context/solitaireContext";
import Start from "../layout/Start";
import Board from "../game/Board";

const Home = () => {
  const solitaireContext = useContext(SolitaireContext);
  const { createCards, isStarted } = solitaireContext;

  useEffect(() => {
    createCards();

    // eslint-disable-next-line
  }, []);

  return <main className="home-page">{isStarted ? <Board /> : <Start />}</main>;
};

export default Home;
