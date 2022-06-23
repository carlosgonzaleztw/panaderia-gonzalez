import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { colors } from '../constants/themes/colors';
import OrdersScreen from '../screens/order/OrdersScreen';

export type RootStackParamList = {
  Orders: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const isIOS = Platform.OS === 'ios';

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.white : colors.primary,
        },
        headerTintColor: isIOS ? colors.primary : colors.white,
        headerTitleStyle: { fontFamily: 'Mukta-Bold' },
      }}
    >
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
