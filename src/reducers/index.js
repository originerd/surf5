import { combineReducers } from 'redux';

import followers from './followers';
import navigation from './navigation';
import surfs from './surfs';
import tab from './tab';
import timeline from './timeline';
import users from './users';

const reducers = combineReducers({
  followers,
  navigation,
  surfs,
  tab,
  timeline,
  users,
});

export default reducers;
