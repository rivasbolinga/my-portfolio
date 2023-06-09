import React, { useContext, useReducer } from 'react';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions';
import reducer from '../reducers/navigation_reducer';

const initialState = {
  isSidebarOpen: false,
};

const NavigationContext = React.createContext();
// eslint-disable-next-line
export const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <NavigationContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => useContext(NavigationContext);
