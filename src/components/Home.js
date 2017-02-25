import React, { PropTypes } from 'react';
import { TabNavigator } from 'react-navigation';

import colors from '../lib/colors';
import MyTab from './MyTab';
import SurfsTab from './SurfsTab';
import TimelineTab from './TimelineTab';

const Tabs = {
  Timeline: { screen: TimelineTab },
  Surfs: { screen: SurfsTab },
  My: { screen: MyTab },
};

const Navigator = (
  TabNavigator(
    Tabs,
    {
      lazyLoad: true,
      swipeEnabled: true,
      tabBarOptions: {
        activeTintColor: colors.nerd,
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
