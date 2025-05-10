import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import Icons from '../../constants/Icons';
import Home from '../../screens/user/manager/home/Home';
import Team from '../../screens/user/manager/team/Team';
import { COLORS } from '../../assets/theme/Theme';
import Payments from '../../screens/user/manager/payments/Payments';
import Activity from '../../screens/user/manager/activity/Activity';

const Tab = createBottomTabNavigator();

const renderTabIcon = (route, focused) => {
  switch (route.name) {
    case 'Home':
      return (
        <View style={styles.iconContainer}>
          <Image
            source={focused?Icons.homeActive:Icons.home}
            style={[styles.tabStyle]}
          />
          <Text
            style={[
              commonStyles.twelveGilroy600,
              {
                color: focused ?  '#F1D221' : COLORS.regularBlack,
                padding: Responsive.height(5)
              }
            ]}
          >
            Home
          </Text>
        </View>
      );
    case 'Activity':
      return (
        <View style={styles.iconContainer}>
          <Image
            source={focused?Icons.activityActive:Icons.activity}
            style={[styles.tabStyle]}
          />
          <Text
            style={[
              commonStyles.twelveGilroy600,
              {
                color: focused ?  '#F1D221' : COLORS.regularBlack,
                padding: Responsive.height(5)
              }
            ]}
          >
            Activity
          </Text>
        </View>
      );
      case 'Payments':
        return (
          <View style={styles.iconContainer}>
          <Image
            source={focused?Icons.paymentActive:Icons.payment}
            style={[styles.tabStyle]}
          />
            <Text
              style={[
                commonStyles.twelveGilroy600,
                {
                  color: focused ?  '#F1D221' : COLORS.regularBlack,
                  padding: Responsive.height(5)
                }
              ]}
            >
              Payments
            </Text>
          </View>
        );
      case 'Team':
      return (
        <View style={styles.iconContainer}>
         <Image
            source={focused?Icons.teamActive:Icons.team}
            style={[styles.tabStyle]}
          />
          <Text
            style={[
              commonStyles.twelveGilroy600,
              {
                color: focused ? '#F1D221' : COLORS.regularBlack,
                padding: Responsive.height(5)
              }
            ]}
          >
            Team
          </Text>
        </View>
      );
  }
};

export const ManagerBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      detachInactiveScreens={false}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused }) => renderTabIcon(route, focused),
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Payments" component={Payments} />
      <Tab.Screen name="Team" component={Team} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    resizeMode: 'contain',
    width: Responsive.width(24),
    height: Responsive.height(24)
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Responsive.width(100)
  },
  tabBarStyle: {
    height: Platform.select({
      ios: Responsive.height(70),
      android: Responsive.height(85),
    }),
    paddingTop: Platform.select({
      ios: Responsive.height(15),
      android: Responsive.height(15)
    }),
    borderTopWidth: 1,
    borderColor: COLORS.borderColor,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.04)',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 6,
        shadowColor: 'rgba(0, 0, 0, 0.04)',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: -3 }
      }
    })
  }
});

export default ManagerBottomTabNavigator;
