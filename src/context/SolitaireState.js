import React, { useReducer } from "react";
import SolitaireContext from "./solitaireContext";
import SolitaireReducer from "./solitaireReducer";
import {
  CREATE_CARDS,
  SET_LOADING,
  SET_STARTED,
  CREATE_STOCK_AND_TABLEAU,
  SET_SELECTED,
  CLEAR_SELECTED,
} from "./types";

import { cardDeck, stockRule, pileRule } from "../gameFeatures";
import {
  shuffleArray,
  splitIntoChunks,
  mergeChunks,
  refactorTableau,
} from "../helpers";

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

    // Firstly, create an array of 8 cardDeck arrays
    // Then, merge cardDeck arrays into one big array of 104 cards
    // Lastly, shuffle them like there's no tomorrow
    const cards = shuffleArray(mergeChunks(Array(8).fill(cardDeck)));

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

    // Put the last 54 cards in an array as chunks of whatever pileRule says
    // Then, refactor the array so that it can tell pile info and faceUp info
    const tableau = refactorTableau(
      splitIntoChunks(cards.slice(50, 104), pileRule)
    );

    // Dispatch stock and tableau arrays
    dispatch({
      type: CREATE_STOCK_AND_TABLEAU,
      payload: { stock, tableau },
    });
  };

  // Set selected array to determine which card or cards will be going under which card
  const moveCards = (selected, card) => {
    console.log(selected, card);
    if (selected.length < 2) {
      if (card.faceUp) {
        // Put the card into selected array
        dispatch({
          type: SET_SELECTED,
          payload: card,
        });
      }
    } else {
      // Check if cards can be moved
      // If not, clear the selected array
      if (selected[0].card === selected[1].card - 1) {
        console.log("move the card");
      } else {
        dispatch({
          type: CLEAR_SELECTED,
          payload: card,
        });
      }
    }
  };

  return (
    <SolitaireContext.Provider
      value={{
        cards: state.cards,
        foundations: state.foundations,
        loading: state.loading,
        isStarted: state.isStarted,
        stock: state.stock,
        tableau: state.tableau,
        selected: state.selected,
        createCards,
        setLoading,
        setStarted,
        createStockAndTableau,
        moveCards,
      }}
    >
      {props.children}
    </SolitaireContext.Provider>
  );
};

export default SolitaireState;
