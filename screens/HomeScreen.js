import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import MiniaturaPerro from '../components/miniaturaPerro';

class HomeScreen extends React.Component {

  
  render() {

    function Item({ nombre, image }) {
      return (
        <MiniaturaPerro nombre={nombre} image={image} />
      );
    }

    const DATA = [ //deberia llegar desde la db
      {
        nombre: 'Pipo',
        image: 'https://i.imgur.com/TUQvrsV.jpg'
      },
      {
        nombre: 'Tiago',
        image: 'https://i.imgur.com/69SUs49g.jpg'
      },
      {
        nombre: 'Chichi',
        image: 'https://i.imgur.com/k1yVI.jpg'
      },
    ];

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    });

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item nombre={item.nombre} image={item.image} />}
        />
      </SafeAreaView>
    )

  }
}
export default HomeScreen;



