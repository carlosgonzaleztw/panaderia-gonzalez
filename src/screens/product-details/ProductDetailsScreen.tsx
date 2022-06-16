import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ProductDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Product Details Screen</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
