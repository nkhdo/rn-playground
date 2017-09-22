import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default ({ counter, increment, decrement }) => (
  <View style={{ alignItems: 'center', padding: 5 }}>
    <Text>{counter}</Text>
    <Button
      raised
      icon={{name: 'plus', type: 'entypo'}}
      textStyle={{textAlign: 'center'}}
      title={'INCREMENT'}
      onPress={increment}
    />
    <Button
      raised
      icon={{name: 'minus', type: 'entypo'}}
      textStyle={{textAlign: 'center'}}
      title={'DECREMENT'}
      onPress={decrement}
    />
  </View>
);
