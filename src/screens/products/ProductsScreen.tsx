import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const ProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Products Screen</Text>
      <Button
        title="Go to Product Details"
        onPress={() => navigation.navigate('Product Details')}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
