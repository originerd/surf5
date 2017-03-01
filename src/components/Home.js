import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import SurfsTab from '../containers/SurfsTab';
import TimelineTab from '../containers/TimelineTab';
import colors from '../lib/colors';
import firebase from '../lib/firebase';
import MeTab from './MeTab';
import WriteButton from './WriteButton';

const propTypes = {
  followers: PropTypes.object.isRequired,
  followersSet: PropTypes.func.isRequired,
  navigateToWrite: PropTypes.func.isRequired,
  tab: PropTypes.object.isRequired,
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

class Home extends Component {
  componentDidMount() {
    this.loadFollowers();
  }

  loadFollowers() {
    const { followersSet } = this.props;
    const uid = firebase.auth().currentUser.uid;

    firebase.database().ref(`followers/${uid}`).on('value', (snapshot) => {
      const followers = { ...snapshot.val() };
      followers[uid] = true;

      followersSet(followers);
    });
  }

  render() {
    const { followers, navigateToWrite, tab } = this.props;

    return (
      <View style={styles.container}>
        <Navigator
          navigation={{
            navigate: () => {},
            state: tab,
          }}
        />
        <WriteButton followers={followers} navigateToWrite={navigateToWrite} />
      </View>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
export { Tabs };
