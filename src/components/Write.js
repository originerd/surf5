import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import colors from '../lib/colors';
import Button from './Button';

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

const Write = () => (
  <View style={styles.container}>
    <TextInput
      autoCapitalize="none"
      autoFocus
      blurOnSubmit={false}
      placeholder="다섯 글자로 이야기를 전해보세요"
      style={styles.input}
    />
    <Text style={styles.notice}>다섯 글자만 입력할 수 있습니다.</Text>
    <Button
      backgroundColor={colors.nerd}
      block
      color="whitesmoke"
      text="올리기"
    />
  </View>
);

export default Write;
