import * as React from 'react';
import { Appbar } from 'react-native-paper';
import colores from '../shared/colores'


const AppNav = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

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