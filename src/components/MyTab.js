import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const navigationOptions = {
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

const MyTab = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      나
    </Text>
  </View>
);

MyTab.navigationOptions = navigationOptions;

export default MyTab;
