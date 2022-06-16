import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categories Screen</Text>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Mukta-ExtraBold',
    fontSize: 20,
  },
});
