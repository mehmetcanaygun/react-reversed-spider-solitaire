import {
  CREATE_CARDS,
  SET_LOADING,
  SET_STARTED,
  CREATE_STOCK_AND_TABLEAU,
  SET_SELECTED,
  CLEAR_SELECTED,
  MOVE_CARDS,
  ADD_CARDS,
  // INC_FOUNDATION,
} from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_CARDS:
      return {
        ...state,
        cards: payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_STARTED:
      return {
        ...state,
        isStarted: payload,
      };
    case CREATE_STOCK_AND_TABLEAU:
      return {
        ...state,
        stock: payload.stock,
        tableau: payload.tableau,
        loading: false,
      };
    case SET_SELECTED:
      return {
        ...state,
        selected: [...state.selected, payload],
      };
    case CLEAR_SELECTED:
      return {
        ...state,
        selected: [],
      };
    case MOVE_CARDS: {
      const { selected, card } = payload;

      // Get pile IDs
      const fromPileId = selected[0].pileId;
      const toPileId = card.pileId;

      // Get piles
      const fromPile = state.tableau[`pile${fromPileId}`];
      const toPile = state.tableau[`pile${toPileId}`];

      // Create updated piles
      // Remove cards from their old pile & turn the last card on this pile only if there are more than 1 cards left
      const updatedFromPile = fromPile.filter(
        (card) => selected.includes(card) === false
      );

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

      return {
        ...state,
        tableau: updatedTab,
        selected: [],
      };
    }
    case ADD_CARDS: {
      const updatedTab = { ...state.tableau };

      for (let i = 0; i < payload.length; i++) {
        updatedTab[`pile${i}`] = [...updatedTab[`pile${i}`], payload[i]];
      }

      return {
        ...state,
        tableau: updatedTab,
        stock: state.stock.filter(
          (stockPile, index) => index !== state.stock.length - 1
        ),
      };
    }
    /* case INC_FOUNDATION: {
      return {
        ...state,
        foundations: state.foundations + 1,
      };
    } */
    default:
      return state;
  }
};

export default reducer;
