import React, { PropTypes } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import colors from '../lib/colors';

const propTypes = {
  backgroundColor: PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  indicator: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
};

const defaultProps = {
  backgroundColor: 'gray',
  block: false,
  color: 'black',
  disabled: false,
  indicator: false,
  onPress: () => {},
  style: null,
};

const styles = StyleSheet.create({
  blockWidth: {
    alignSelf: 'stretch',
  },
  buttonContainer: {
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    margin: 5,
  },
  defaultBackground: {
    backgroundColor: colors.nerd,
  },
  defaultText: {
    color: 'white',
    fontWeight: 'bold',
  },
  defaultWidth: {
    width: 180,
  },
  disabledText: {
    color: 'gray',
  },
  disabledBackground: {
    backgroundColor: 'darkgray',
  },
});

const renderContent = (color, disabled, indicator, text) => {
  if (indicator) {
    return (
      <ActivityIndicator
        color={colors.white}
        style={[styles.centering]}
      />
    );
  }

  return (
    <Text
      style={[
        styles.defaultText,
        (color ? { color } : null),
        (disabled ? styles.disabledText : null),
      ]}
    >
      {text}
    </Text>
  );
};

const Button = ({ backgroundColor, block, color, disabled, indicator, onPress, text }) => {
  const isDisabled = disabled || indicator;

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.buttonContainer,
        styles.defaultBackground,
        (block ? styles.blockWidth : styles.defaultWidth),
        (backgroundColor ? { backgroundColor } : null),
        (isDisabled ? styles.disabledBackground : null),
      ]}
    >
      {renderContent(color, disabled, indicator, text)}
    </TouchableOpacity>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
