import * as React from 'react';
import BottomNav from './components/bottomNav'
import { Provider as PaperProvider } from 'react-native-paper';
import AppNav from './components/appNav'

const App = () => {
  return (
    <PaperProvider>
      <AppNav/>
      <BottomNav/>
    </PaperProvider>
  )
};

export default App;