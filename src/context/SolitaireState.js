import React, { useReducer } from "react";
import SolitaireContext from "./solitaireContext";
import SolitaireReducer from "./solitaireReducer";
import {
  CREATE_CARDS,
  SET_LOADING,
  SET_STARTED,
  CREATE_STOCK_AND_TABLEAU,
} from "./types";

import { cardDeck, stockRule, pileRule } from "../gameFeatures";
import { shuffleArray, splitIntoChunks } from "../utilities";

const SolitaireState = (props) => {
  const initialState = {
    cards: [],
    stock: [],
    foundations: 0,
    tableau: [],
    selected: [],
    loading: false,
    isFinished: false,
    isStarted: false,
  };

  const [state, dispatch] = useReducer(SolitaireReducer, initialState);

  // Create shuffled deck of cards
  const createCards = () => {
    // Set loading
    setLoading();

    // Initial empty cards array
    let cards = [];

    // Add cardDeck array 8 times
    for (let i = 0; i <= 7; i++) {
      cards.push(cardDeck);
    }

    // Merge 8 decks into one big array
    cards = [].concat.apply([], cards);

    // Shuffle cards array
    cards = shuffleArray(cards);

    // Dispatch shuffled final array of cards
    dispatch({
      type: CREATE_CARDS,
      payload: cards,
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  // Set Started
  const setStarted = (condition) => {
    dispatch({
      type: SET_STARTED,
      payload: condition,
    });
  };

  // Create stock and tableau from shuffled cards
  const createStockAndTableau = (cards) => {
    // Set loading
    setLoading();

    // Put the first 50 cards in stock array as chunks of 10
    const stock = splitIntoChunks(cards.slice(0, 50), stockRule);

    // Create tableau array with the last 54 cards
    const tableau = splitIntoChunks(cards.slice(50, 104), pileRule);

    // Dispatch stock and tableau arrays
    dispatch({
      type: CREATE_STOCK_AND_TABLEAU,
      payload: { stock, tableau },
    });
  };

  return (
    <SolitaireContext.Provider
      value={{
        cards: state.cards,
        loading: state.loading,
        isStarted: state.isStarted,
        stock: state.stock,
        tableau: state.tableau,
        createCards,
        setLoading,
        setStarted,
        createStockAndTableau,
      }}
    >
      {props.children}
    </SolitaireContext.Provider>
  );
};

export default SolitaireState;
