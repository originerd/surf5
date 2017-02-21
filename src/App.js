import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Navigation from './containers/Navigation';
import reducers from './reducers';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
