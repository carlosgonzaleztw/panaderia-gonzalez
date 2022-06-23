import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { products } from '../../data/breads';

const ProductDetailsScreen = ({ route }) => {
  const { productId } = route.params;
  const product = products.find((product) => product.id === productId);

  console.log(product);

  return (
    <View style={styles.container}>
      <Text>id: {product.id}</Text>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>{product.weight}</Text>
      <Text>${product?.price.toFixed(2)}</Text>
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
