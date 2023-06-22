import { HOVER_IN, HOVER_OUT } from '../actions';

const HoverReducer = (state, action) => {
  if (action.type === HOVER_IN) {
    return { ...state, isHovered: true };
  } if (action.type === HOVER_OUT) {
    return { ...state, isHovered: false };
  }
  return { ...state };
};

export default HoverReducer;
