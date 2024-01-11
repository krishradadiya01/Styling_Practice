import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Login from './src/Screen/Login';
import About from './src/Screen/About';
import Buttons from './src/components/Buttons';
import HomePage from './src/Screen/HomePage';
import SignUp from './src/Testing/SignUp';
import CTextInput from './src/common/CTextInput';

const App = () => {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};

export default App;
