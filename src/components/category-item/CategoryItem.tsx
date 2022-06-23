import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { colors } from '../../constants/themes/colors';

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: item.color }}
        onPress={() => onSelected()}
      >
        <View>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;

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
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  text: {
    fontFamily: 'Mukta-Bold',
    fontSize: 16,
    color: 'white',
    textShadowColor: 'grey',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
