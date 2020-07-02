import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen'
import MatchScreen from '../screens/MatchScreen'
import UserScreen from '../screens/UserScreen'
import colores from '../shared/colores';

const HomeRoute = () => <HomeScreen/>;

const MatchRoute = () => <MatchScreen/>;

const UserRoute = () => <UserScreen/>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', icon: 'home', color: colores.primary },
    { key: 'match', icon: 'magnify', color: colores.primary },
    { key: 'user', icon: 'account', color: colores.primary },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    match: MatchRoute,
    user: UserRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
    />
  );
};

export default BottomNav;