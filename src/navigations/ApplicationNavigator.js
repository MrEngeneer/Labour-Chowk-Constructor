import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PublicNavigator from './PublicNavigator';
import UserNavigator from './UserNavigator';

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserNavigator" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="PublicNavigator" component={PublicNavigator} /> */}
        <Stack.Screen name="UserNavigator" component={UserNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
