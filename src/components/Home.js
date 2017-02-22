import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import navigationHeader from '../lib/navigationHeader';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    flex: 1,
    justifyContent: 'center',
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      It is home screen.
    </Text>
  </View>
);

HomeScreen.navigationOptions = {
  header: {
    ...navigationHeader,
    title: 'Surf5',
  },
};

export default HomeScreen;
