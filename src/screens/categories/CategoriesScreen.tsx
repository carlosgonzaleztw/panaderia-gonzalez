import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categories Screen</Text>
      <Button
        title="Go to Products Screen"
        onPress={() => {
          navigation.navigate('Products');
        }}
      />
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
