import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/themes/colors';
import CartNavigator from './CartNavigator';
import MainNavigator from './MainNavigator';
import OrdersNavigator from './OrdersNavigator';
import { Text } from 'react-native';

const BottomTabs = createBottomTabNavigator();
const LabelBottomTab = (focused, label) => (
  <Text
    style={{
      color: focused ? colors.primary : colors.gray,
      fontFamily: focused ? 'Mukta-Bold' : 'Mukta-Regular',
    }}
  >
    {label}
  </Text>
);

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
      }}
    >
      <BottomTabs.Screen
        name="ShopTabs"
        component={MainNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab(focused, 'Shop'),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={20}
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab(focused, 'Cart'),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={20}
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: ({ focused }) => LabelBottomTab(focused, 'Orders'),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'file-tray-full' : 'file-tray-full-outline'}
              size={20}
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigator;
