import React, {
  Component,
  PropTypes,
} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../lib/colors';
import firebase from '../lib/firebase';
import Surf from './Surf';

const navigationOptions = {
  tabBar: {
    icon(state) {
      const color = state.focused ? colors.nerd : 'gray';

      return <Icon name="newspaper-o" size={18} color={color} />;
    },
  },
  title: '새 소식',
};

const propTypes = {
  timeline: PropTypes.object.isRequired,
  timelineSetLikeCount: PropTypes.func.isRequired,
  timelineSetLikes: PropTypes.func.isRequired,
  timelinePrepend: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  usersLoad: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    flex: 1,
  },
  emptyText: {
    color: 'darkgray',
    textAlign: 'center',
  },
  nonIdealState: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };

    this.loadTimeline = this.loadTimeline.bind(this);
  }

  componentDidMount() {
    this.loadTimeline();
  }

  loadTimeline() {
    const { timelinePrepend } = this.props;
    const uid = firebase.auth().currentUser.uid;
    const timelineRef = firebase.database().ref(`timeline/${uid}`).orderByChild('timestamp').limitToLast(25);

    this.setState({ isLoading: true });

    timelineRef.on('child_added', (snapshot) => {
      const surf = Object.assign({}, snapshot.val(), { sid: snapshot.key });

      if (this.state.isLoading) {
        this.setState({ isLoading: false });
      }

      timelinePrepend(surf);
    });
  }

  renderSurfs() {
    const { timeline, timelineSetLikeCount, timelineSetLikes, users, usersLoad } = this.props;

    return (
      timeline.surfs.map((surf) => {
        const name = users[surf.uid] && users[surf.uid].name;

        if (!name) {
          usersLoad(surf.uid);

          return null;
        }

        return (
          <Surf
            key={surf.sid}
            name={name}
            setLikeCount={timelineSetLikeCount}
            setLikes={timelineSetLikes}
            {...surf}
          />
        );
      })
    );
  }

  render() {
    const { timeline } = this.props;

    if (this.state.isLoading) {
      return (
        <View style={[styles.container, styles.nonIdealState]}>
          <ActivityIndicator color={colors.nerd} />
        </View>
      );
    }

    if (timeline.surfs.length === 0) {
      return (
        <View style={[styles.container, styles.nonIdealState]}>
          <Text style={styles.emptyText}>
            타임라인에 글이 없네요.
            {'\n'}
            둘러보기에서 다양한 소식을 확인하세요!
          </Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        {this.renderSurfs()}
      </ScrollView>
    );
  }
}

Timeline.navigationOptions = navigationOptions;
Timeline.propTypes = propTypes;

export default Timeline;
