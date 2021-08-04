import React, { useReducer } from "react";
import SolitaireContext from "./solitaireContext";
import SolitaireReducer from "./solitaireReducer";
import { CREATE_CARDS, SET_LOADING, SET_STARTED } from "./types";

import { cardDeck } from "../gameFeatures";
import { shuffleArray } from "../utility";

const SolitaireState = (props) => {
  const initialState = {
    cards: [],
    stock: 5,
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

  return (
    <SolitaireContext.Provider
      value={{
        cards: state.cards,
        loading: state.loading,
        isStarted: state.isStarted,
        createCards,
        setLoading,
        setStarted,
      }}
    >
      {props.children}
    </SolitaireContext.Provider>
  );
};

export default SolitaireState;
