import React, {useContext} from 'react';

const initialState = {
  isHovered: false,
}

const HoverContext = React.createContext();

export const HoverProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const hoverIn = () => {
    dispatch({})
  }
  return (
    <HoverContext.Provider value={{...state}}>
      {children}
    </HoverContext.Provider>
  )
}

export const useHoverContext = () => useContext(HoverContext) 