import {
  TIMELINE_APPEND,
  TIMELINE_SET_LIKE_COUNT,
  TIMELINE_SET_LIKES,
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
    case TIMELINE_SET_LIKE_COUNT: {
      const index = state.surfs.findIndex(surf => surf.sid === action.sid);

      return {
        surfs: [
          ...state.surfs.slice(0, index),
          { ...state.surfs[index], likeCount: action.likeCount },
          ...state.surfs.slice(index + 1),
        ],
      };
    }
    case TIMELINE_SET_LIKES: {
      const index = state.surfs.findIndex(surf => surf.sid === action.sid);

      return {
        surfs: [
          ...state.surfs.slice(0, index),
          { ...state.surfs[index], likes: action.likes },
          ...state.surfs.slice(index + 1),
        ],
      };
    }
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
