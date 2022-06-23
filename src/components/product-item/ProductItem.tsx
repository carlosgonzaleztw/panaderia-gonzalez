import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../../constants/themes/colors';

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerTouchable}
        onPress={() => onSelected()}
      >
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.detail}>${item.price.toFixed(2)}</Text>
          <Text style={styles.detail}>{item.weight}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    height: 180,
  },
  containerTouchable: {
    flex: 1,
    borderRadius: 10,
    shadowColor: colors.shadow,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  name: {
    fontFamily: 'Mukta-Bold',
    fontSize: 16,
  },
  detail: {
    fontFamily: 'Mukta-Regular',
    fontSize: 14,
  },
});
