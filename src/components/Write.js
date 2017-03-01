import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import colors from '../lib/colors';
import firebase from '../lib/firebase';
import Button from './Button';

const propTypes = {
  followers: PropTypes.object.isRequired,
  navigationGoBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    padding: 20,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'lightgray',
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    fontSize: 14.5,
    height: 45,
    margin: 5,
    padding: 10,
    textAlign: 'center',
  },
  notice: {
    color: colors.nerd,
    fontSize: 12,
    textAlign: 'center',
  },
});

class Write extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      surf: '',
    };

    this.handleSurfChange = this.handleSurfChange.bind(this);
    this.write = this.write.bind(this);
  }

  handleSurfChange(surf) {
    this.setState({ surf });
  }

  get isAvailable() {
    return /^[가-힣]{5}$/.test(this.state.surf);
  }

  write() {
    this.setState({ isLoading: true });

    const { followers, navigationGoBack } = this.props;
    const uid = firebase.auth().currentUser.uid;
    const surf = {
      surf: this.state.surf,
      timestamp: Date.now(),
      uid,
    };
    const sid = firebase.database().ref().child('surfs').push().key;
    const updates = {};

    updates[`allSurfs/${sid}`] = surf;
    updates[`likeCount/${sid}`] = 0;
    updates[`surfs/${uid}/${sid}`] = surf;
    Object.keys(followers).forEach((followerUID) => {
      updates[`timeline/${followerUID}/${sid}`] = surf;
    });

    try {
      firebase.database().ref().update(updates);
      navigationGoBack();
    } catch (e) {
      console.log(e);
      this.setState({ isLoading: false });
    }
  }

  renderNotice() {
    if (this.isAvailable) {
      return null;
    }

    return <Text style={styles.notice}>한글 다섯 글자만 입력할 수 있습니다.</Text>;
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoFocus
          blurOnSubmit={false}
          placeholder="다섯 글자로 이야기를 전해보세요"
          onChangeText={this.handleSurfChange}
          style={styles.input}
        />
        {this.renderNotice()}
        <Button
          backgroundColor={colors.nerd}
          block
          color="whitesmoke"
          disabled={!this.isAvailable}
          indicator={this.state.isLoading}
          onPress={this.write}
          text="올리기"
        />
      </View>
    );
  }
}

Write.propTypes = propTypes;

export default Write;
