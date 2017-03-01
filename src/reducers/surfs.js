import {
  SURFS_PREPEND,
  SURFS_SET_LIKE_COUNT,
  SURFS_SET_LIKES,
} from '../actions/actionTypes';

const surfs = (state = [], action = {}) => {
  switch (action.type) {
    case SURFS_PREPEND:
      return [...action.surfs, ...state];
    case SURFS_SET_LIKE_COUNT: {
      const index = state.findIndex(surf => surf.sid === action.sid);

      return [
        ...state.slice(0, index),
        { ...state[index], likeCount: action.likeCount },
        ...state.slice(index + 1),
      ];
    }
    case SURFS_SET_LIKES: {
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

export default surfs;
