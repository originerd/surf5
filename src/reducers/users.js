import { USERS_ADD } from '../actions/actionTypes';

const users = (state = {}, action = {}) => {
  switch (action.type) {
    case USERS_ADD:
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
};

export default users;
