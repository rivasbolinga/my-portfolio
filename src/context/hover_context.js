import React, { createContext, useReducer } from 'react';
import { HOVER_IN, HOVER_OUT } from '../actions';
import reducer from '../reducers/hover_reducer';

const initialState = {
  isHovered: false,
};

const HoverContext = createContext();
// eslint-disable-next-line
const HoverProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const hoverIn = () => {
    dispatch({ type: HOVER_IN });
  };
  const hoverOut = () => {
    dispatch({ type: HOVER_OUT });
  };
  return (
    <HoverContext.Provider value={{ ...state, hoverIn, hoverOut }}>
      {children}
    </HoverContext.Provider>
  );
};

export { HoverContext, HoverProvider };
