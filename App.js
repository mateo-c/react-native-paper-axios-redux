import * as React from 'react';
import BottomNav from './components/bottomNav'
import { Provider as PaperProvider } from 'react-native-paper';
import AppNav from './components/appNav'
import { setearId } from './components/Estado'

export default class App extends React.Component {
  componentDidMount(){
    setearId("5f10fd615f40450017ac0ba0");
  }

  render() {
    return (
      <PaperProvider>
        <AppNav />
        <BottomNav estado={this.state}/>
      </PaperProvider >
    )
  }

};
