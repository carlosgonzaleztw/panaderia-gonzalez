import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { colors } from '../constants/themes/colors';
import CategoriesScreen from '../screens/categories/CategoriesScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import ProductDetailsScreen from '../screens/product-details/ProductDetailsScreen';

export type RootStackParamList = {
  Categories: undefined;
  Products: undefined;
  ProductDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const isIOS = Platform.OS === 'ios';

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.white : colors.primary,
        },
        headerTintColor: isIOS ? colors.primary : colors.white,
        headerTitleStyle: { fontFamily: 'Mukta-Bold' },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
