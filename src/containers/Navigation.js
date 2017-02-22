import React, { PropTypes } from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { navigationGoBack } from '../actions/navigation';
import InitialScreen from '../components/InitialScreen';
import colors from '../lib/colors';
import navigationHeader from '../lib/navigationHeader';

const propTypes = {
  goBack: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

const Navigator = (
  StackNavigator({
    Initial: { screen: InitialScreen },
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

const mapStateToProps = state => ({
  state: state.navigation,
});

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(navigationGoBack()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
