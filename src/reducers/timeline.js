import {
  TIMELINE_APPEND,
  TIMELINE_SET_LIKE_COUNT,
  TIMELINE_SET_LIKES,
  TIMELINE_PREPEND,
  TIMELINE_RESET,
} from '../actions/actionTypes';

const timeline = (state = [], action = {}) => {
  switch (action.type) {
    case TIMELINE_APPEND:
      return [...state, ...action.surfs];
    case TIMELINE_PREPEND:
      return [...action.surfs, ...state];
    case TIMELINE_RESET:
      return action.surfs;
    case TIMELINE_SET_LIKE_COUNT: {
      const index = state.findIndex(surf => surf.sid === action.sid);

      return [
        ...state.slice(0, index),
        { ...state[index], likeCount: action.likeCount },
        ...state.slice(index + 1),
      ];
    }
    case TIMELINE_SET_LIKES: {
      const index = state.findIndex(surf => surf.sid === action.sid);

      return [
        ...state.slice(0, index),
        { ...state[index], likes: action.likes },
        ...state.slice(index + 1),
      ];
    }
    default:
      return state;
  }
};

export default timeline;
