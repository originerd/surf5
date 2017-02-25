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

      return <Icon name="newspaper-o" size={18} color={color} />;
    },
  },
  title: '새 소식',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    flex: 1,
    justifyContent: 'center',
  },
});

const TimelineTab = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      새 소식
    </Text>
  </View>
);

TimelineTab.navigationOptions = navigationOptions;

export default TimelineTab;
