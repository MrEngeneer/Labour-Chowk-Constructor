import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/user/Home';
import ManagerBottomTabNavigator from './managerNavigator/ManagerBottomTabNavigator';
import Profile from '../screens/user/manager/home/profile/Profile';
import ChangePassword from '../screens/user/manager/home/profile/ChangePassword';
import EditProfile from '../screens/user/manager/home/profile/EditProfile';
import AddTeamMember from '../screens/user/manager/team/AddTeamMember';
import BookingDetails from '../screens/user/manager/home/BookingDetails';

const Stack = createStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ManagerBottomTabNavigator" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ManagerBottomTabNavigator" component={ManagerBottomTabNavigator} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="AddTeamMember" component={AddTeamMember} />
      <Stack.Screen name="BookingDetails" component={BookingDetails} />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
};

export default UserNavigator;
