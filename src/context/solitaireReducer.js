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
      return {
        ...state,
        tableau: payload.updatedTab,
        selected: payload.selected,
        foundations: payload.foundations,
      };
    case ADD_CARDS:
      return {
        ...state,
        tableau: payload.updatedTab,
        stock: payload.updatedStock,
      };
    case RESET:
      return {
        ...state,
        stock: [],
        tableau: {},
        foundations: 0,
        selected: [],
        loading: false,
        isStarted: false,
      };
    default:
      return state;
  }
};

export default reducer;
