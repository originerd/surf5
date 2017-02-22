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
import navigationHeader from '../lib/navigationHeader';

const propTypes = {
  navigateToRegister: PropTypes.func.isRequired,
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

class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      name: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.navigateToRegister = this.navigateToRegister.bind(this);
  }

  setIsLoading(isLoading) {
    this.setState({ isLoading });
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  get isNotFilled() {
    const { name } = this.state;

    return !name;
  }

  navigateToRegister() {
    const { navigateToRegister } = this.props;
    const { name } = this.state;

    navigateToRegister(name);
  }

  renderNotice() {
    if (!this.isNotFilled) {
      return null;
    }

    return (
      <Text style={styles.notice}>
        이름을 입력해주세요
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
                “처음뵙네요” “반갑습니다”
                {'\n'}
                당신의 이름을 알려주시겠어요?
              </Text>
            </View>
            <Text style={styles.main}>
              환영합니다!
            </Text>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  autoCorrect={false}
                  onChangeText={this.handleNameChange}
                  placeholder="이름"
                  style={styles.input}
                />
              </View>
              {this.renderNotice()}
              <Button
                backgroundColor={colors.nerd}
                block
                color="whitesmoke"
                disabled={this.isNotFilled}
                indicator={this.state.isLoading}
                onPress={this.navigateToRegister}
                style={styles.registerButton}
                text="계속"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

Name.navigationOptions = {
  header: {
    ...navigationHeader,
    title: '회원가입',
  },
};

Name.propTypes = propTypes;

export default Name;
