import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

import CounterContainer from './CounterContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class HomeScreenContainer extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const foo = () => {
      this.props.navigation.dispatch(NavigationActions.navigate({routeName: 'Settings'}));
    };

    return (
      <View style={styles.container}>
        <Text>Changes you make will automatically reload.</Text>
        <CounterContainer />
        <Button
          raised
          icon={{name: 'settings'}}
          onPress={ foo }
          title={'Settings'}/>
      </View>
    );
  }
}
