import * as React from 'react';
import { Appbar } from 'react-native-paper';
import colores from '../shared/colores'
import changeDog from './changeDog'
/*
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
*/


const AppNav = ({ navigation }) => {
  const _goBack = () =>  navigation.goBack();

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => changeDog();

  return (
    <Appbar.Header theme={temita}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="HotDog" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const temita = {
  colors: {
    primary: colores.primary,
  },
};

export default AppNav;