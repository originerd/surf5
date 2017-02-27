/* eslint import/prefer-default-export: "off" */

import { USERS_ADD } from './actionTypes';

export const usersAdd = user => ({
  user,
  type: USERS_ADD,
});
