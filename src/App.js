import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import Navigation from './containers/Navigation';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(reduxThunk));

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
