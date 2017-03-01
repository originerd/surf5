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

      return <Icon name="user" size={18} color={color} />;
    },
  },
  title: '나',
};

const propTypes = {
  surfs: PropTypes.array.isRequired,
  surfsPrepend: PropTypes.func.isRequired,
  surfsSetLikeCount: PropTypes.func.isRequired,
  surfsSetLikes: PropTypes.func.isRequired,
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

class Me extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };

    this.loadMe = this.loadMe.bind(this);
  }

  componentDidMount() {
    this.loadMe();
  }

  loadMe() {
    const { surfsPrepend } = this.props;
    const uid = firebase.auth().currentUser.uid;
    const surfsRef = firebase.database().ref(`surfs/${uid}`).orderByChild('timestamp').limitToLast(40);

    this.setState({ isLoading: true });

    surfsRef.on('child_added', (snapshot) => {
      const surf = { ...snapshot.val(), sid: snapshot.key };

      if (this.state.isLoading) {
        this.setState({ isLoading: false });
      }

      surfsPrepend(surf);
    });
  }

  renderMe() {
    const { surfs, surfsSetLikeCount, surfsSetLikes, users, usersLoad } = this.props;

    return (
      surfs.map((surf) => {
        const name = users[surf.uid] && users[surf.uid].name;

        if (!name) {
          usersLoad(surf.uid);

          return null;
        }

        return (
          <Surf
            key={surf.sid}
            name={name}
            setLikeCount={surfsSetLikeCount}
            setLikes={surfsSetLikes}
            {...surf}
          />
        );
      })
    );
  }

  render() {
    const { surfs } = this.props;

    if (this.state.isLoading) {
      return (
        <View style={[styles.container, styles.nonIdealState]}>
          <ActivityIndicator color={colors.nerd} />
        </View>
      );
    }

    if (surfs.length === 0) {
      return (
        <View style={[styles.container, styles.nonIdealState]}>
          <Text style={styles.emptyText}>
            작성하신 글이 없네요.
            {'\n'}
            둘러보기에서 다양한 소식을 확인하세요!
          </Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        {this.renderMe()}
      </ScrollView>
    );
  }
}

Me.navigationOptions = navigationOptions;
Me.propTypes = propTypes;

export default Me;
