import { StyleSheet } from 'react-native';

import colors from './colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.nerd,
  },
});

export default {
  style: styles.header,
  tintColor: 'white',
  title: 'Surf5',
};
