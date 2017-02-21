import {
  NAVIGATION_GOBACK,
  NAVIGATION_NAVIGATE,
  NAVIGATION_RESET,
} from '../actions/actionTypes';

const defaultState = {
  index: 0,
  routes: [{
    key: 'Initial_0',
    routeName: 'Initial',
  }],
};

const route = (state, action) => {
  const { index } = state;
  const { params, routeName } = action;

  switch (action.type) {
    case NAVIGATION_NAVIGATE:
      return {
        key: `${routeName}_${index + 1}`,
        params,
        routeName,
      };
    default:
      return state;
  }
};

const navigation = (state = defaultState, action) => {
  switch (action.type) {
    case NAVIGATION_GOBACK:
      return {
        index: state.index - 1,
        routes: [...state.routes.slice(0, -1)],
      };
    case NAVIGATION_NAVIGATE:
      return {
        index: state.index + 1,
        routes: [...state.routes, route(state, action)],
      };
    case NAVIGATION_RESET:
      return {
        index: action.index,
        routes: action.routes,
      };
    default:
      return state;
  }
};

export default navigation;
