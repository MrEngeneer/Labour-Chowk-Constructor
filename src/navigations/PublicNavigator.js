import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/public/LoginScreen';
import ForgotPassword from '../screens/public/forgotPassword/ForgotPassword';
import ForgotOtpVerify from '../screens/public/forgotPassword/ForgotOTPverify';
import ForgotComplete from '../screens/public/forgotPassword/ForgotComplete';

const Stack = createStackNavigator();

const PublicNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ForgotOtpVerify" component={ForgotOtpVerify} />
      <Stack.Screen name="ForgotComplete" component={ForgotComplete} />
    </Stack.Navigator>
  );
};

export default PublicNavigator;
