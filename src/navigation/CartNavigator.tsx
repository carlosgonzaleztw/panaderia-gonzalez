import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { colors } from '../constants/themes/colors';
import OrdersScreen from '../screens/order/OrderScreen';
import CartScreen from '../screens/cart/CartScreen';

export type RootStackParamList = {
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const isIOS = Platform.OS === 'ios';

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.white : colors.primary,
        },
        headerTintColor: isIOS ? colors.primary : colors.white,
        headerTitleStyle: { fontFamily: 'Mukta-Bold' },
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
