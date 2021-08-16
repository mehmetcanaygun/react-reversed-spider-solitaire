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
  MOVE_CARDS,
  ADD_CARDS,
  RESET,
  SET_TIME,
  SET_ALERT,
  CLEAR_ALERT,
} from "./types";

import {
  CARD_DECK,
  STOCK_RULE,
  PILE_RULE,
  ALERT_COUNTDOWN,
} from "../utils/gameFeatures";

import {
  refactorCards,
  splitIntoChunks,
  mergeChunks,
  refactorStock,
  refactorTableau,
  isMatch,
} from "../utils/helpers";

const SolitaireState = (props) => {
  const initialState = {
    cards: [],
    stock: [],
    foundations: 0,
    tableau: {},
    selected: [],
    time: 0,
    alert: null,
    loading: false,
    isStarted: false,
  };

  const [state, dispatch] = useReducer(SolitaireReducer, initialState);

  // Create shuffled deck of cards
  const createCards = () => {
    // Set loading
    setLoading();

    // Firstly, create an array of 8 cardDeck arrays
    // Then, merge cardDeck arrays into one big array of 104 cards
    // Lastly, refactor them so that each item can have cardId attribute
    const cards = refactorCards(mergeChunks(Array(8).fill(CARD_DECK)));

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
    // Then, refactor the array so that it can tell pile info and faceUp info
    const stock = refactorStock(
      splitIntoChunks(cards.slice(0, 50), STOCK_RULE)
    );

    // Put the last 54 cards in an array as chunks of whatever pileRule says
    // Then, refactor the array so that it can tell pile info and faceUp info
    const tableau = refactorTableau(
      splitIntoChunks(cards.slice(50, 104), PILE_RULE)
    );

    // Dispatch stock and tableau arrays
    dispatch({
      type: CREATE_STOCK_AND_TABLEAU,
      payload: { stock, tableau },
    });
  };

  // Set selected array to determine which card or cards will be going under which card
  const setSelected = (cards) => {
    dispatch({
      type: SET_SELECTED,
      payload: cards,
    });
  };

  // Clear Selected
  const clearSelected = () => {
    dispatch({
      type: CLEAR_SELECTED,
    });
  };

  // Move Cards
  const moveCards = (selected, card) => {
    // Get pile IDs
    const fromPileId = selected[0].pileId;
    const toPileId = card.pileId;

    // Get piles
    const fromPile = state.tableau[`pile${fromPileId}`];
    const toPile = state.tableau[`pile${toPileId}`];

    // Create updated piles
    // Remove cards from their old pile
    const updatedFromPile = fromPile.filter(
      (card) => selected.includes(card) === false
    );

    // Turn the last card on this pile only if there are more than 1 cards left
    if (updatedFromPile.length > 0) {
      updatedFromPile[updatedFromPile.length - 1].faceUp = true;
    }

    // Add cards to their new pile
    const updatedToPile = [...toPile];

    selected.forEach(({ cardText, cardId }) => {
      updatedToPile.push({
        cardText,
        faceUp: true,
        pileId: card.pileId,
        cardId,
      });
    });

    // Create an updated tableau and then return it
    const updatedTab = { ...state.tableau };
    updatedTab[`pile${fromPileId}`] = updatedFromPile;

    // Check if there's a match in the pile
    if (isMatch(updatedToPile)) {
      // Remove matched part from the pile
      updatedTab[`pile${toPileId}`] = updatedToPile.slice(
        0,
        updatedToPile.length - 13
      );

      // Turn the last card if the pile's length is more than zero
      if (updatedTab[`pile${toPileId}`].length > 0) {
        updatedTab[`pile${toPileId}`][
          updatedTab[`pile${toPileId}`].length - 1
        ].faceUp = true;
      }

      // Dispatch updated tableau, clear selected, and increase foundations by one
      dispatch({
        type: MOVE_CARDS,
        payload: {
          updatedTab,
          selected: [],
          foundations: state.foundations + 1,
        },
      });
    } else {
      updatedTab[`pile${toPileId}`] = updatedToPile;

      dispatch({
        type: MOVE_CARDS,
        payload: { updatedTab, selected: [], foundations: state.foundations },
      });
    }
  };

  // Add Cards - Add a card to each pile (10 in total)
  const addCards = (cards) => {
    // Create a copy of tableau
    const updatedTab = { ...state.tableau };

    // Add a card to each pile
    for (let i = 0; i < cards.length; i++) {
      updatedTab[`pile${i}`] = [...updatedTab[`pile${i}`], cards[i]];
    }

    // Remove 10 cards from the stock
    const updatedStock = state.stock.filter(
      (stockPile, index) => index !== state.stock.length - 1
    );

    dispatch({
      type: ADD_CARDS,
      payload: { updatedTab, updatedStock },
    });
  };

  // Reset
  const reset = () => {
    dispatch({
      type: RESET,
    });
  };

  // Set Time Score - Set time to the global state so that it can be used in other components
  const setTimeScore = (time) => {
    dispatch({
      type: SET_TIME,
      payload: time,
    });
  };

  // Set Alert
  const setAlert = (alertType, alertMsg) => {
    dispatch({
      type: SET_ALERT,
      payload: { alertType, alertMsg },
    });

    setTimeout(() => {
      clearAlert();
    }, ALERT_COUNTDOWN);
  };

  // Clear Alert
  const clearAlert = () => {
    dispatch({
      type: CLEAR_ALERT,
    });
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
        time: state.time,
        alert: state.alert,
        createCards,
        setLoading,
        setStarted,
        createStockAndTableau,
        setSelected,
        clearSelected,
        moveCards,
        addCards,
        reset,
        setTimeScore,
        setAlert,
        clearAlert,
      }}
    >
      {props.children}
    </SolitaireContext.Provider>
  );
};

export default SolitaireState;
