import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {commonStyles} from '../../assets/theme/Styles';
import Images from '../../constants/Images';
import {Responsive} from '../../assets/theme/Layout';
import CommonInput from '../../components/inputs/ApplicationInput';
import ApplicationPasswordInput from '../../components/inputs/ApplicationPasswordInput';
import Icons from '../../constants/Icons';
import Button55W from '../../components/buttons/ApplicationButton';
import { useNavigation } from '@react-navigation/core';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.loginBackground}
        style={styles.backgroundImage}
        resizeMode="cover">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              bounces={false} // disables scroll bounce
            >
              <Image
                source={Images.logoImage}
                style={{
                  width: Responsive.width(100),
                  height: Responsive.height(130),
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={[
                  commonStyles.fourteenGilroy700,
                  {color: '#181C32', paddingTop: Responsive.height(20)},
                ]}>
                Engineering Your Vision with LabourChowk!
              </Text>

              <View style={{paddingTop: Responsive.height(30)}}>
                <CommonInput
                  name="email"
                  label="Email"
                  keyboardType="email-address"
                  InputIcon={Icons.sms}
                  placeholderText="eg. john@gmail.com"
                  capitalize={false}
                />
              </View>

              <View style={{marginTop: Responsive.height(20)}}>
                <ApplicationPasswordInput
                  name="password"
                  label="Password"
                  InputIcon={Icons.keyIcon}
                  placeholderText="Enter your password"
                  returnKeyType="done"
                />
              </View>
              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  width: '100%',
                  marginTop: Responsive.height(10),
                }}>
                  <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text
                  style={[commonStyles.twelveGilroy600, {color: '#F1D221'}]}>
                  Forgot Password?
                </Text>
                  </TouchableOpacity>
               
              </View>
              <View style={{marginTop: Responsive.height(50), width: '100%'}}>
                <Button55W content={'Login'} />
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Responsive.width(20),
    paddingTop: Responsive.height(150),
    paddingBottom: Responsive.height(50),
  },
});

export default LoginScreen;
