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

      return <Icon name="search" size={18} color={color} />;
    },
  },
  title: '둘러보기',
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

class Surfs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };

    this.loadSurfs = this.loadSurfs.bind(this);
  }

  componentDidMount() {
    this.loadSurfs();
  }

  loadSurfs() {
    const { surfsPrepend } = this.props;
    const surfsRef = firebase.database().ref('allSurfs').orderByChild('timestamp').limitToLast(40);

    this.setState({ isLoading: true });

    surfsRef.on('child_added', (snapshot) => {
      const surf = { ...snapshot.val(), sid: snapshot.key };

      if (this.state.isLoading) {
        this.setState({ isLoading: false });
      }

      surfsPrepend(surf);
    });
  }

  renderSurfs() {
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
    if (this.state.isLoading) {
      return (
        <View style={[styles.container, styles.nonIdealState]}>
          <ActivityIndicator color={colors.nerd} />
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

Surfs.navigationOptions = navigationOptions;
Surfs.propTypes = propTypes;

export default Surfs;
