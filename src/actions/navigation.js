import firebase from '../lib/firebase';
import {
  NAVIGATION_GOBACK,
  NAVIGATION_NAVIGATE,
  NAVIGATION_RESET,
} from './actionTypes';

export const navigationGoBack = () => ({
  type: NAVIGATION_GOBACK,
});

export const navigationNavigate = (routeName, params) => ({
  params,
  routeName,
  type: NAVIGATION_NAVIGATE,
});

export const navigationReset = (index, routes) => ({
  index,
  routes,
  type: NAVIGATION_RESET,
});

export const navigationResetToFirstScreen = () =>
  (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(navigationReset(0, [{ key: 'Home_0', routeName: 'Home' }]));
      } else {
        dispatch(navigationReset(0, [{ key: 'Sessions_0', routeName: 'Sessions' }]));
      }
    });
  };
