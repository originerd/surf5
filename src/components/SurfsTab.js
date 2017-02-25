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

      return <Icon name="search" size={18} color={color} />;
    },
  },
  title: '둘러보기',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    flex: 1,
    justifyContent: 'center',
  },
});

const SurfsTab = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      둘러보기
    </Text>
  </View>
);

SurfsTab.navigationOptions = navigationOptions;

export default SurfsTab;
