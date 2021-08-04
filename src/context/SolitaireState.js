import React, { useReducer } from "react";
import SolitaireContext from "./solitaireContext";
import SolitaireReducer from "./solitaireReducer";
import { SET_LOADING } from "./types";

const SolitaireState = (props) => {
  const initialState = {
    loading: false,
  };

  const [state, dispatch] = useReducer(SolitaireReducer, initialState);

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <SolitaireContext.Provider
      value={{
        loading: state.loading,
        setLoading,
      }}
    >
      {props.children}
    </SolitaireContext.Provider>
  );
};

export default SolitaireState;
