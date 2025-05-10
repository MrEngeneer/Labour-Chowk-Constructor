import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigationState } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Active from '../../screens/user/manager/activity/active/Active';
import Completed from '../../screens/user/manager/activity/completed/Completed';

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');

const TabLabel = ({ focused, label }) => (
  <View
    style={[
      focused ? styles.tabActive : styles.tabNotActive,
      {
        width: width / 2,
        paddingTop: Platform.OS === 'ios' ? Responsive.height(14) : Responsive.height(14),
        paddingBottom: Platform.OS === 'ios' ? Responsive.height(4) : Responsive.height(4)
      }
    ]}
  >
    <Text
      style={[
        commonStyles.fourteenGilroy700,
        {
          color: focused ? '#3D8BFD' : COLORS.lightBlack,
          textAlign: 'center',
          lineHeight: Platform.OS === 'ios' ? 20 : 18
        }
      ]}
    >
      {label}
    </Text>
  </View>
);

const ManagerTopTabNavigator = () => {
  const [currentTab, setCurrentTab] = useState('Active');
  const state = useNavigationState((state) => state);

  return (
    <View style={[styles.container, { paddingTop: Responsive.width(45) }]}>
      <Text style={styles.containerBox}>Trucking</Text>

      <Tab.Navigator
        initialRouteName="Active"
        screenOptions={({ route }) => {
          const label = route.name === 'Active' ? 'Active' : 'Completed';
          return {
            lazy: true,
            lazyPreloadDistance: 1,
            tabBarIndicatorStyle: {
              width: width / 2,
              borderBottomColor: 'rgba(61, 139, 253, 1)',
              borderBottomWidth: 2
            },
            tabBarStyle: {
              width: width,
              backgroundColor: COLORS.white
            },
            tabBarItemStyle: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.white,
              marginBottom: 2
            },
            tabBarLabel: ({ focused }) => {
              return <TabLabel key={route.name} focused={focused} label={label} />;
            }
          };
        }}
      >
        <Tab.Screen name="Active" component={Active} />
        <Tab.Screen name="Completed" component={Completed} />
      </Tab.Navigator>
    </View>
  );
};

export default ManagerTopTabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  tabActive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 2
  },
  tabNotActive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 2
  },
  containerBox: {
    ...commonStyles.twentyGilroy700,
    color: '#181C32',
    paddingLeft: Responsive.width(20)
  }
});
