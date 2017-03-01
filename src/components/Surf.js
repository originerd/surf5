import moment from 'moment';
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../lib/colors';

const defaultProps = {
  likes: {},
};

const propTypes = {
  likeCount: PropTypes.number.isRequired,
  likes: PropTypes.object,
  name: PropTypes.string.isRequired,
  surf: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  uid: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'darkgray',
    padding: 10,
  },
  footerContainer: {
    flexDirection: 'row',
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
  smallText: {
    color: 'gray',
    fontSize: 11,
    marginHorizontal: 2,
    textAlign: 'right',
  },
  surf: {
    color: 'darkslategray',
    fontSize: 20,
    marginBottom: 5,
  },
});

const Surf = ({ likeCount, likes, name, surf, timestamp, uid }) => {
  const iconName = `thumbs${likes[uid] ? '' : '-o'}-up`;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.surf}>{surf.split('').join('\t')}</Text>
      <View style={styles.footerContainer}>
        <Text style={styles.smallText}>
          {moment(timestamp).format('YYYY-MM-DD hh:mm A')}
        </Text>
        <Text style={styles.smallText}>
          <Icon name={iconName} color={colors.nerd} />
          {' '}
          {likeCount}
        </Text>
      </View>
    </View>
  );
};

Surf.defaultProps = defaultProps;
Surf.propTypes = propTypes;

export default Surf;
