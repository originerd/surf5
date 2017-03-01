import React, { PropTypes } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../lib/colors';

const propTypes = {
  navigateToWrite: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.nerd,
    borderRadius: 20,
    bottom: 60,
    height: 40,
    justifyContent: 'center',
    position: 'absolute',
    right: 15,
    width: 40,
  },
});

const WriteButton = ({ navigateToWrite }) => (
  <TouchableOpacity onPress={navigateToWrite} style={styles.container}>
    <Icon color="whitesmoke" name="pencil" size={20} />
  </TouchableOpacity>
);

WriteButton.propTypes = propTypes;

export default WriteButton;
