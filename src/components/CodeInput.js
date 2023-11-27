import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Fonts from '../theme/Fonts';

const CodeInput = ({ value, onChange }) => {
  return <TextInput maxLength={1} style={styles.codeInput} value={value} onChangeText={onChange} />;
};

const styles = StyleSheet.create({
  codeInput: {
    width: 45,
    height: 45,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 15,
    fontFamily: Fonts.NexaBook,
    backgroundColor: '#f4f3f3',
    borderRadius: 5,
  },
});

export default CodeInput;
