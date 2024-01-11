import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Colors from './Colors';

const Buttons = ({text}) => {
  return (
    <View style={{justifyContent: 'center'}}>
    <TouchableOpacity style={styles.Btn}>
      <Text style={styles.BtnTxt}>{text || 'LOGIN'}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  BtnTxt: {
    fontSize: 15,
    letterSpacing: 1.5,
    textAlign: 'center',
    position: 'relative',
    fontFamily: 'OpenSans-SemiBold',
    color: Colors.white,
  },

  Btn: {
    justifyContent: 'center',
    width: '95%',
    backgroundColor: Colors.green,
    height: 50,
    marginTop: 120,
    borderRadius: 10,
  },
});

export default Buttons;
