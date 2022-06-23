import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/MainNavigator';
import { categories } from '../../data/categories';
import CategoryItem from '../../components/category-item/CategoryItem';

type Props = NativeStackScreenProps<RootStackParamList, 'Categories'>;

const CategoriesScreen = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate('Products', {
      categoryId: item.id,
      title: item.title,
    });
  };

  const renderItem = ({ item }) => {
    return <CategoryItem item={item} onSelected={() => onSelected(item)} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Mukta-ExtraBold',
    fontSize: 20,
  },
});
