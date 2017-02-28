import firebase from '../lib/firebase';
import { USERS_ADD } from './actionTypes';

export const usersAdd = user => ({
  user,
  type: USERS_ADD,
});

export const usersLoad = uid =>
  (dispatch, getState) => {
    const { users } = getState();

    if (!uid || users[uid]) {
      return;
    }

    firebase.database().ref(`users/${uid}`).once('value').then((snapshot) => {
      const user = {};
      user[uid] = snapshot.val();

      dispatch(usersAdd(user));
    });
  };
