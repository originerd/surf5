import { combineReducers } from 'redux';

import navigation from './navigation';
import tab from './tab';
import timeline from './timeline';
import users from './users';

const reducers = combineReducers({
  navigation,
  tab,
  timeline,
  users,
});

export default reducers;
