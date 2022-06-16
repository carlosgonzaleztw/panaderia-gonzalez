import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Products Screen</Text>
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
