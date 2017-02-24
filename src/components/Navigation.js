import React, {
  Component,
  PropTypes,
} from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../components/Home';
import LoginScreen from '../containers/LoginScreen';
import NameScreen from '../containers/NameScreen';
import RegisterScreen from '../containers/RegisterScreen';
import SessionsScreen from '../containers/SessionsScreen';
import colors from '../lib/colors';
import navigationHeader from '../lib/navigationHeader';
import InitialScreen from './InitialScreen';

const propTypes = {
  goBack: PropTypes.func.isRequired,
  sessionManage: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

const Navigator = (
  StackNavigator({
    Home: { screen: Home },
    Initial: { screen: InitialScreen },
    Login: { screen: LoginScreen },
    Name: { screen: NameScreen },
    Register: { screen: RegisterScreen },
    Sessions: { screen: SessionsScreen },
  }, {
    navigationOptions: {
      header: navigationHeader,
    },
  })
);

class Navigation extends Component {
  componentWillMount() {
    Platform.select({
      android: () => {
        StatusBar.setBackgroundColor(colors.nerd);
      },
      ios: () => {
        StatusBar.setBarStyle('light-content');
      },
    })();
  }

  componentDidMount() {
    const { sessionManage } = this.props;

    sessionManage();
  }

  render() {
    const { goBack, state } = this.props;

    return (
      <Navigator
        navigation={{
          dispatch: () => {},
          goBack,
          state,
        }}
      />
    );
  }
}

Navigation.propTypes = propTypes;

export default Navigation;
