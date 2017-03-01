import { FOLLOWERS_SET } from '../actions/actionTypes';

const followers = (state = {}, action = {}) => {
  switch (action.type) {
    case FOLLOWERS_SET:
      return action.followers || {};
    default:
      return state;
  }
};

export default followers;
