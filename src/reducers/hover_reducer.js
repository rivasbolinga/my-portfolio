import {
  HOVER_IN, HOVER_OUT, HOVER_IN_ID, HOVER_OUT_ID,
} from '../actions';

const HoverReducer = (state, action) => {
  if (action.type === HOVER_IN_ID) {
    const { payload } = action;
    const updatedLinks = state.links.map((link) => {
      if (link.id === payload) {
        return { ...link, isHovered: true };
      }
      return link;
    });
    return { ...state, links: updatedLinks };
  }
  if (action.type === HOVER_OUT_ID) {
    const { payload } = action;
    const updatedLinks = state.links.map((link) => {
      if (link.id === payload) {
        return { ...link, isHovered: false };
      }
      return link;
    });
    return { ...state, links: updatedLinks };
  } if (action.type === HOVER_IN) {
    return { ...state, isHovered: true };
  } if (action.type === HOVER_OUT) {
    return { ...state, isHovered: false };
  }
  return state;
};

export default HoverReducer;
