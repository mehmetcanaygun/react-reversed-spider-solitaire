import {
  CREATE_CARDS,
  SET_LOADING,
  SET_STARTED,
  CREATE_STOCK_AND_TABLEAU,
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
    default:
      return state;
  }
};

export default reducer;
