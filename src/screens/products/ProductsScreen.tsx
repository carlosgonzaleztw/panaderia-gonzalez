import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/MainNavigator';
import { products } from '../../data/breads';
import ProductItem from '../../components/product-item/ProductItem';

type Props = NativeStackScreenProps<RootStackParamList, 'Products'>;

const ProductsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const filteredProducts = products.filter(
    (product) => product.categoryId === categoryId
  );

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={() => onSelected(item)} />
  );

  const onSelected = (item) => {
    navigation.navigate('ProductDetails', {
      productId: item.id,
      name: item.name,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
