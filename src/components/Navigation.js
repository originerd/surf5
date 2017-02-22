import React, { PropTypes } from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../components/Home';
import InitialScreen from '../containers/InitialScreen';
import SessionsScreen from '../containers/SessionsScreen';
import colors from '../lib/colors';
import navigationHeader from '../lib/navigationHeader';

const propTypes = {
  goBack: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

const Navigator = (
  StackNavigator({
    Home: { screen: Home },
    Initial: { screen: InitialScreen },
    Sessions: { screen: SessionsScreen },
  }, {
    navigationOptions: {
      header: navigationHeader,
    },
  })
);

Platform.select({
  android: () => {
    StatusBar.setBackgroundColor(colors.nerd);
  },
  ios: () => {
    StatusBar.setBarStyle('light-content');
  },
})();

const Navigation = ({ goBack, state }) => (
  <Navigator
    navigation={{
      dispatch: () => {},
      goBack,
      state,
    }}
  />
);

Navigation.propTypes = propTypes;

export default Navigation;
