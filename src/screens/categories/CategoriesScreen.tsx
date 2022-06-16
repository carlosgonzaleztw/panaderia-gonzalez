import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/MainNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Categories'>;

const CategoriesScreen = ({ navigation }: Props) => {
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
