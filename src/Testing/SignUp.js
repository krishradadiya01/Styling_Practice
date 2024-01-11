import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CTextInput from '../common/CTextInput';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../components/Colors';

const SignUp = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  return (
    <SafeAreaView
      style={{
        height: screenHeight,
        width: screenWidth,
        backgroundColor: 'grey',
        justifyContent: 'center',
      }}>
      <Image
        style={{
          width: responsiveWidth(70),
          height: responsiveHeight(50),
          position: 'absolute',
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80',
        }}
      />
      <CTextInput textInput={styles.extStyle} />
      <Text
        style={{
          fontSize: responsiveFontSize(3.5),
          marginLeft: responsiveWidth(5),
          marginRight: responsiveWidth(5),
          textAlign: 'justify',
        }}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has rootsrem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
        Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
        written in 45 BC. This book is a treatise on the theory of ethics, very
        popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
        ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </Text>
      <TouchableOpacity
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(10),
          backgroundColor: Colors.green,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: responsiveWidth(5),
          borderRadius: responsiveWidth(7),
        }}>
        <Text style={{fontSize: 20}}>HELLO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  extStyle: {
    backgroundColor: 'red',
  },
});

export default SignUp;
