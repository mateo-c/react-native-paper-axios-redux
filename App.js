import * as React from 'react';
import { BottomNavigation, Text, Button } from 'react-native-paper';
import ListAccordion from './components/ListAccordion';


const HomeRoute = () => <Text><ListAccordion></ListAccordion></Text>;

const ChatRoute = () => <Text>Chat</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Home', title: 'Social', icon : require('./assets/home.png')} ,
    { key: 'Chat', title: 'Match', icon: require('./assets/chat-outline.png') },
    { key: 'Profile', title: 'Profile', icon: require('./assets/account.png') },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: HomeRoute,
    Chat: ChatRoute,
    Profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;