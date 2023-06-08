
import React, { useContext, useEffect, useReducer } from 'react'
const NavigationContext = React.createContext();

export const NavigationProvider = ({children}) => {


const openSidebar = () => {

}

const closeSidebar = () => {

}

return (
  <NavigationContext.Provider value={{openSidebar, closeSidebar}}>
{children}
  </NavigationContext.Provider>
)
}

export const useNavigationContext = () => {
  return useContext(NavigationContext)
}