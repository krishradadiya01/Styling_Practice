import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../components/Colors';

const CTextInput = ({textInput}) => {
  return (
    <View>
      <TextInput
        placeholder="Type Something"
        style={[styles.TxtInpStyle, textInput]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TxtInpStyle: {
    backgroundColor: Colors.yellow,
    borderWidth: 2,
  },
});

export default CTextInput;
