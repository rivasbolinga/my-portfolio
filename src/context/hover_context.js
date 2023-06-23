import React, { createContext, useReducer } from 'react';
import {
  HOVER_IN, HOVER_OUT, HOVER_IN_ID, HOVER_OUT_ID,
} from '../actions';
import reducer from '../reducers/hover_reducer';
import links from '../utils/data';

const initialState = {
  links,
  isHovered: false,
};

const HoverContext = createContext();
// eslint-disable-next-line
const HoverProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const hoverInId = (id) => {
    dispatch({ type: HOVER_IN_ID, payload: id });
  };
  const hoverOutId = (id) => {
    dispatch({ type: HOVER_OUT_ID, payload: id });
  };
  const hoverIn = () => {
    dispatch({ type: HOVER_IN });
  };
  const hoverOut = () => {
    dispatch({ type: HOVER_OUT });
  };
  return (
    <HoverContext.Provider value={{
      ...state, hoverInId, hoverOutId, hoverIn, hoverOut,
    }}
    >
      {children}
    </HoverContext.Provider>
  );
};

export { HoverContext, HoverProvider };
