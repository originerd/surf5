import { combineReducers } from 'redux';

import navigation from './navigation';
import tab from './tab';
import timeline from './timeline';

const reducers = combineReducers({
  navigation,
  tab,
  timeline,
});

export default reducers;
