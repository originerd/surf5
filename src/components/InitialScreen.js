import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

import colors from '../lib/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.nerd,
    flex: 1,
    justifyContent: 'center',
  },
});

const InitialScreen = () => (
  <View style={styles.container}>
    <ActivityIndicator color="white" />
  </View>
);

export default InitialScreen;
