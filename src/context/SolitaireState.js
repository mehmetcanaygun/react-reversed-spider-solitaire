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
} from "./types";

import { CARD_DECK, STOCK_RULE, PILE_RULE } from "../utils/gameFeatures";
import {
  shuffleArray,
  splitIntoChunks,
  mergeChunks,
  refactorStock,
  refactorTableau,
  isLinedUp,
} from "../utils/helpers";

const SolitaireState = (props) => {
  const initialState = {
    cards: [],
    stock: [],
    foundations: 0,
    tableau: {},
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
    const cards = shuffleArray(mergeChunks(Array(8).fill(CARD_DECK)));

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
    const updatedFromPile = fromPile.filter(
      (card) => selected.includes(card) === false
    );

    // Remove cards from their old pile & turn the last card on this pile only if there are more than 1 cards left
    if (updatedFromPile.length > 0) {
      updatedFromPile[updatedFromPile.length - 1].faceUp = true;
    }

    // Add cards to their new pile
    const updatedToPile = [...toPile];

    selected.forEach(({ cardText }) => {
      updatedToPile.push({ cardText, faceUp: true, pileId: card.pileId });
    });

    // Create an updated tableau and then return it
    const updatedTab = { ...state.tableau };
    updatedTab[`pile${fromPileId}`] = updatedFromPile;
    updatedTab[`pile${toPileId}`] = updatedToPile;

    dispatch({
      type: MOVE_CARDS,
      payload: { updatedTab, selected: [] },
    });
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

  const checkMatch = (tableau) => {
    // Create a copy of tableau
    const updatedTab = { ...tableau };

    // Iterate piles and find sequence from A to K
    for (const pile in tableau) {
      const currentPile = tableau[pile];

      if (
        currentPile[currentPile.length - 1].cardText === "13" &&
        currentPile.length >= 13
      ) {
        if (
          isLinedUp(
            currentPile.slice(currentPile.length - 13, currentPile.length - 1)
          )
        ) {
          console.log("That's a check!!!");
          // incFoundation();
        }
      }
    }

    // Remove that part from the pile

    // Dispatch updated tableau
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
        setSelected,
        clearSelected,
        moveCards,
        addCards,
        checkMatch,
      }}
    >
      {props.children}
    </SolitaireContext.Provider>
  );
};

export default SolitaireState;
