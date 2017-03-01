import { combineReducers } from 'redux';

import followers from './followers';
import me from './me';
import navigation from './navigation';
import surfs from './surfs';
import tab from './tab';
import timeline from './timeline';
import users from './users';

const reducers = combineReducers({
  followers,
  me,
  navigation,
  surfs,
  tab,
  timeline,
  users,
});

export default reducers;
