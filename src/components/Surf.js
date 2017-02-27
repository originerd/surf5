import moment from 'moment';
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const propTypes = {
  name: PropTypes.string.isRequired,
  surf: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'darkgray',
    padding: 10,
  },
  infoContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    color: 'black',
    fontSize: 15,
    marginBottom: 5,
  },
  surf: {
    color: 'darkslategray',
    fontSize: 20,
    marginBottom: 5,
  },
  timestamp: {
    color: 'gray',
    fontSize: 11,
    textAlign: 'right',
  },
});

const Surf = ({ name, surf, timestamp }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.surf}>{surf.split('').join('\t')}</Text>
    <Text style={styles.timestamp}>{moment(timestamp).format('YYYY-MM-DD hh:mm A')}</Text>
  </View>
);

Surf.propTypes = propTypes;

export default Surf;
