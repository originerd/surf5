import { combineReducers } from 'redux';

import navigation from './navigation';
import tab from './tab';

const reducers = combineReducers({
  navigation,
  tab,
});

export default reducers;
