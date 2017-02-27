import React, {
  Component,
  PropTypes,
} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../lib/colors';
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
  users: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    flex: 1,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: 'darkgray',
    textAlign: 'center',
  },
});

class Timeline extends Component {
  renderSurfs() {
    const { timeline, users } = this.props;

    return (
      timeline.surfs.map(surf => (
        <Surf
          key={surf.sid}
          name={users[surf.uid].name}
          {...surf}
        />
      ))
    );
  }

  render() {
    const { timeline } = this.props;

    if (timeline.surfs.length === 0) {
      return (
        <View style={[styles.container, styles.emptyContainer]}>
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
