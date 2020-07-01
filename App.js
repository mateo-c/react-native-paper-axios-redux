import * as React from 'react';
import { BottomNavigation, Text, Button } from 'react-native-paper';
import BottomNav from './components/bottomNav'
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <BottomNav/>      
    </PaperProvider>
  )
};

export default App;