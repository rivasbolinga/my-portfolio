import React, { useContext, useReducer } from 'react';
import { TOGGLE_SIDEBAR, SIDEBAR_CLOSE } from '../actions';
import reducer from '../reducers/navigation_reducer';

const initialState = {
  isSidebarOpen: false,
};

const NavigationContext = React.createContext();
// eslint-disable-next-line
export const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <NavigationContext.Provider value={{ ...state, toggleSidebar, closeSidebar }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => useContext(NavigationContext);
