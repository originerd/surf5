import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../lib/colors';

const navigationOptions = {
  tabBar: {
    icon(state) {
      const color = state.focused ? colors.nerd : 'gray';

      return <Icon name="user" size={18} color={color} />;
    },
  },
  title: '나',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    flex: 1,
    justifyContent: 'center',
  },
});

const MeTab = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      나
    </Text>
  </View>
);

MeTab.navigationOptions = navigationOptions;

export default MeTab;
