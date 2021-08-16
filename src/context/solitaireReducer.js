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
  SET_ENDED,
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
        foundations: payload.foundations,
      };
    case RESET:
      return {
        ...state,
        stock: [],
        tableau: {},
        foundations: 0,
        selected: [],
        time: 0,
        loading: false,
        isStarted: false,
        isEnded: false,
      };
    case SET_TIME:
      return {
        ...state,
        time: payload,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: { type: payload.alertType, msg: payload.alertMsg },
      };
    case CLEAR_ALERT:
      return {
        ...state,
        alert: null,
      };
    case SET_ENDED:
      return {
        ...state,
        isEnded: true,
      };
    default:
      return state;
  }
};

export default reducer;
