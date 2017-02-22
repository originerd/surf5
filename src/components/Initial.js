import React, {
  Component,
  PropTypes,
} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

import colors from '../lib/colors';

const propTypes = {
  resetToFirstScreen: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.nerd,
    flex: 1,
    justifyContent: 'center',
  },
});

class Initial extends Component {
  componentDidMount() {
    this.props.resetToFirstScreen();
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="white" />
      </View>
    );
  }
}

Initial.propTypes = propTypes;

export default Initial;
