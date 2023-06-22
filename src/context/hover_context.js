import React, { createContext, useReducer } from 'react';
import { HOVER_IN, HOVER_OUT } from '../actions';
import reducer from '../reducers/hover_reducer';
import links from '../utils/data';

const initialState = {
  links,
};

const HoverContext = createContext();
// eslint-disable-next-line
const HoverProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const hoverIn = (id) => {
    dispatch({ type: HOVER_IN, payload: id });
  };
  const hoverOut = (id) => {
    dispatch({ type: HOVER_OUT, payload: id });
  };
  return (
    <HoverContext.Provider value={{ ...state, hoverIn, hoverOut }}>
      {children}
    </HoverContext.Provider>
  );
};

export { HoverContext, HoverProvider };
