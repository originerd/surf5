import moment from 'moment';
import React, {
  Component,
  PropTypes,
} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../lib/colors';
import firebase from '../lib/firebase';

const defaultProps = {
  likeCount: undefined,
  likes: undefined,
};

const propTypes = {
  likeCount: PropTypes.number,
  likes: PropTypes.object,
  name: PropTypes.string.isRequired,
  setLikeCount: PropTypes.func.isRequired,
  setLikes: PropTypes.func.isRequired,
  sid: PropTypes.string.isRequired,
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

class Surf extends Component {
  constructor(props) {
    super(props);

    this.toggleLike = this.toggleLike.bind(this);
  }

  componentDidMount() {
    this.loadLikes();
  }

  loadLikes() {
    const { sid, setLikeCount, setLikes } = this.props;

    firebase
      .database()
      .ref(`likeCount/${sid}`)
      .on('value', (snapshot) => { setLikeCount(sid, snapshot.val()); });
    firebase
      .database()
      .ref(`likes/${sid}`)
      .on('value', (snapshot) => { setLikes(sid, snapshot.val()); });
  }

  toggleLike() {
    const { likes, sid, uid } = this.props;

    const liked = !!(likes && likes[uid]);

    firebase
      .database()
      .ref(`likeCount/${sid}`)
      .transaction((likeCount) => {
        try {
          firebase.database().ref(`likes/${sid}/${uid}`).set(liked ? null : true);
        } catch (e) {
          return likeCount;
        }

        return likeCount + (liked ? -1 : 1);
      });
  }

  renderLikes() {
    const { likeCount, likes, uid } = this.props;

    if (likeCount === undefined || likes === undefined) {
      return <ActivityIndicator color={colors.nerd} />;
    }

    const iconName = `thumbs${likes && likes[uid] ? '' : '-o'}-up`;

    return (
      <TouchableOpacity onPress={this.toggleLike}>
        <Text style={styles.smallText}>
          <Icon name={iconName} color={colors.nerd} />
          {' '}
          {likeCount}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { name, surf, timestamp } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.surf}>{surf.split('').join('\t')}</Text>
        <View style={styles.footerContainer}>
          <Text style={styles.smallText}>
            {moment(timestamp).format('YYYY-MM-DD hh:mm A')}
          </Text>
          {this.renderLikes()}
        </View>
      </View>
    );
  }
}

Surf.defaultProps = defaultProps;
Surf.propTypes = propTypes;

export default Surf;
