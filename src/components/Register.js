import React, {
  Component,
  PropTypes,
} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

import Button from '../components/Button';
import colors from '../lib/colors';
import firebase from '../lib/firebase';
import navigationHeader from '../lib/navigationHeader';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  buttonContent: {
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'stretch',
    backgroundColor: 'whitesmoke',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 60,
  },
  formContainer: {
    alignItems: 'center',
  },
  full: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
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
  },
  inputContainer: {
    alignItems: 'stretch',
    alignSelf: 'stretch',
  },
  loginButton: {
    backgroundColor: colors.deepNerd,
  },
  main: {
    color: colors.nerd,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notice: {
    color: colors.nerd,
    fontSize: 12,
  },
  registerButton: {
    backgroundColor: colors.darkNerd,
  },
  subTitle: {
    color: 'slategray',
    fontSize: 13.5,
    lineHeight: 20,
    textAlign: 'center',
  },
  title: {
    color: 'slategray',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      isLoading: false,
      password: '',
    };

    this.name = props.name;

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.register = this.register.bind(this);
  }

  setIsLoading(isLoading) {
    this.setState({ isLoading });
  }

  setPasswordInput(element) {
    this.passwordInput = element;
  }

  focusPasswordInput() {
    this.passwordInput.focus();
  }

  handleEmailChange(email) {
    this.setState({ email });
  }

  handlePasswordChange(password) {
    this.setState({ password });
  }

  get areNotFilled() {
    const { email, password } = this.state;

    return !(email && password);
  }

  async register() {
    const { email, password } = this.state;

    this.setIsLoading(true);

    try {
      await firebase.auth()
        .createUserWithEmailAndPassword(email, password);

      const currentUser = firebase.auth().currentUser;

      firebase.database().ref(`users/${currentUser.uid}`).set({ email, name: this.name });
    } catch (error) {
      console.warn(error.message);
      this.setIsLoading(false);
    }
  }

  renderNotice() {
    if (!this.areNotFilled) {
      return null;
    }

    const { email, password } = this.state;

    const emailNotice = email ? null : '이메일';
    const passwordNotice = password ? null : '비밀번호';
    const notice = [emailNotice, passwordNotice].filter(e => e).join('과 ');
    const postfix = notice[notice.length - 1] === '호' ? '를' : '을';

    return (
      <Text style={styles.notice}>
        {`${notice}${postfix} 입력해주세요`}
      </Text>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={60}
        style={styles.full}
      >
        <TouchableWithoutFeedback
          onPress={dismissKeyboard}
          style={styles.full}
        >
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>
                다섯 글자로 나누는 이야기
              </Text>
              <Text style={styles.subTitle}>
                {this.name}님 안녕하세요
                {'\n'}
                곧 이야기를 나눌 수 있겠네요
              </Text>
            </View>
            <Text style={styles.main}>
              어서오세요!
            </Text>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  blurOnSubmit={false}
                  keyboardType="email-address"
                  onChangeText={this.handleEmailChange}
                  onSubmitEditing={this.focusPasswordInput}
                  placeholder="이메일"
                  ref={this.setEmailInput}
                  returnKeyType="next"
                  style={styles.input}
                />
                <TextInput
                  onChangeText={this.handlePasswordChange}
                  placeholder="비밀번호"
                  ref={this.setPasswordInput}
                  secureTextEntry
                  style={styles.input}
                />
              </View>
              {this.renderNotice()}
              <Button
                backgroundColor={colors.nerd}
                block
                color="whitesmoke"
                disabled={this.areNotFilled}
                indicator={this.state.isLoading}
                onPress={this.register}
                style={styles.registerButton}
                text="회원가입"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

Register.navigationOptions = {
  header: {
    ...navigationHeader,
    title: '회원가입',
  },
};

Register.propTypes = propTypes;

export default Register;
