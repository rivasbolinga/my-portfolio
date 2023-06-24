import {
  TOGGLE_SIDEBAR,
  SIDEBAR_CLOSE,
} from '../actions';

const NavigationReducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  return { ...state };
};

export default NavigationReducer;
