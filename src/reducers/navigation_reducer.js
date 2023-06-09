import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
} from '../actions';

const NavigationReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  return { ...state };
};

export default NavigationReducer;
