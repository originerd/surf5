/* eslint import/prefer-default-export: "off" */

import { FOLLOWERS_SET } from './actionTypes';

export const followersSet = followers => ({
  followers,
  type: FOLLOWERS_SET,
});
