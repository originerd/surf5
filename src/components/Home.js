import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import TimelineTab from '../containers/TimelineTab';
import colors from '../lib/colors';
import MeTab from './MeTab';
import SurfsTab from './SurfsTab';
import WriteButton from './WriteButton';

const propTypes = {
  navigateToWrite: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Tabs = {
  Timeline: { screen: TimelineTab },
  Surfs: { screen: SurfsTab },
  Me: { screen: MeTab },
};

const Navigator = (
  TabNavigator(
    Tabs,
    {
      lazyLoad: true,
      swipeEnabled: true,
      tabBarOptions: {
        activeTintColor: colors.nerd,
        inactiveTintColor: 'gray',
      },
    },
  )
);

const Home = ({ navigateToWrite, state }) => (
  <View style={styles.container}>
    <Navigator
      navigation={{
        navigate: () => {},
        state,
      }}
    />
    <WriteButton navigateToWrite={navigateToWrite} />
  </View>
);

Home.propTypes = propTypes;

export default Home;
export { Tabs };
