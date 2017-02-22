import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from '../components/Button';
import colors from '../lib/colors';

const propTypes = {
  navigate: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: colors.nerd,
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 60,
  },
  logo: {
    color: 'whitesmoke',
    fontSize: 21,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'whitesmoke',
    fontSize: 18,
    lineHeight: 24,
  },
  title: {
    color: 'whitesmoke',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

class Sessions extends Component {
  constructor(props) {
    super(props);

    this.navigateToLogin = this.navigateToLogin.bind(this);
    this.navigateToRegister = this.navigateToRegister.bind(this);
  }

  navigateToLogin() {
    this.props.navigate('Login');
  }

  navigateToRegister() {
    this.props.navigate('Name');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            다섯 글자로 나누는 이야기
          </Text>
          <Text style={styles.subTitle}>
            센스있는 다섯 글자로 당신의 이야기를 들려주세요
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            backgroundColor="whitesmoke"
            block
            color={colors.nerd}
            onPress={this.navigateToRegister}
            text="회원가입"
          />
          <Button
            backgroundColor={colors.nerd}
            block
            color="whitesmoke"
            onPress={this.navigateToLogin}
            text="로그인"
          />
        </View>
      </View>
    );
  }
}

Sessions.propTypes = propTypes;

export default Sessions;
