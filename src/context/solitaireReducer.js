import {
  CREATE_CARDS,
  SET_LOADING,
  SET_STARTED,
  CREATE_STOCK_AND_TABLEAU,
  SET_SELECTED,
  CLEAR_SELECTED,
  MOVE_CARDS,
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
    case MOVE_CARDS:
      const { selected, card } = payload;

      // Get pile IDs
      const fromPileId = selected[0].pileId;
      const toPileId = card.pileId;

      // Get piles
      const fromPile = state.tableau[`pile${fromPileId}`];
      const toPile = state.tableau[`pile${toPileId}`];

      // Create updated piles
      // Remove cards from their old pile & turn the last card on this pile
      const updatedFromPile = fromPile.filter(
        (card) => selected.includes(card) === false
      );

      updatedFromPile[updatedFromPile.length - 1].faceUp = true;

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
    default:
      return state;
  }
};

export default reducer;
