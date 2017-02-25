import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const navigationOptions = {
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
