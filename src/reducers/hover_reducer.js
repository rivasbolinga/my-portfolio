import { HOVER_IN, HOVER_OUT } from '../actions';

const HoverReducer = (state, action) => {
  if (action.type === HOVER_IN) {
    const { payload } = action;
    const updatedLinks = state.links.map((link) => {
      if (link.id === payload) {
        return { ...link, isHovered: true };
      }
      return link;
    });
    return { ...state, links: updatedLinks };
  }
  if (action.type === HOVER_OUT) {
    const { payload } = action;
    const updatedLinks = state.links.map((link) => {
      if (link.id === payload) {
        return { ...link, isHovered: false };
      }
      return link;
    });
    return { ...state, links: updatedLinks };
  }
  return state;
};

export default HoverReducer;
