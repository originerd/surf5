import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const navigationOptions = {
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
