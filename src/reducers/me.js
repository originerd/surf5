import {
  ME_PREPEND,
  ME_SET_LIKE_COUNT,
  ME_SET_LIKES,
} from '../actions/actionTypes';

const me = (state = [], action = {}) => {
  switch (action.type) {
    case ME_PREPEND:
      return [...action.surfs, ...state];
    case ME_SET_LIKE_COUNT: {
      const index = state.findIndex(surf => surf.sid === action.sid);

      return [
        ...state.slice(0, index),
        { ...state[index], likeCount: action.likeCount },
        ...state.slice(index + 1),
      ];
    }
    case ME_SET_LIKES: {
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

export default me;
