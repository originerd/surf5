import {
  TIMELINE_APPEND,
  TIMELINE_PREPEND,
  TIMELINE_RESET,
} from '../actions/actionTypes';

const defaultState = {
  surfs: [],
};

const timeline = (state = defaultState, action = {}) => {
  switch (action.type) {
    case TIMELINE_APPEND:
      return {
        surfs: [...state.surfs, ...action.surfs],
      };
    case TIMELINE_PREPEND:
      return {
        surfs: [...action.surfs, ...state.surfs],
      };
    case TIMELINE_RESET:
      return {
        surfs: action.surfs,
      };
    default:
      return state;
  }
};

export default timeline;
