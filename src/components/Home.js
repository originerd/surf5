import React, { PropTypes } from 'react';
import { TabNavigator } from 'react-navigation';

import colors from '../lib/colors';
import MeTab from './MeTab';
import SurfsTab from './SurfsTab';
import TimelineTab from './TimelineTab';

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

const propTypes = {
  state: PropTypes.object.isRequired,
};

const Home = ({ state }) => (
  <Navigator
    navigation={{
      navigate: () => {},
      state,
    }}
  />
);

Home.propTypes = propTypes;

export default Home;
export { Tabs };
