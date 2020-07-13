import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import MiniaturaPerro from '../components/miniaturaPerro';
import axios from 'axios';

class HomeScreen extends React.Component {
  state = {
    DATA: []
  }

  componentDidMount() {
    axios.get(`http://www.hotdogort.ml/api/pets`)
      .then(res => {
        const DATA = res.data.map(item => {
          let objeto = {
            nombre: item.dogNick,
            image: item.dogPic
          }
          return objeto
        })
        this.setState({ DATA });
      })
  }

  render() {

    function Item({ nombre, image }) {
      return (
        <MiniaturaPerro nombre={nombre} image={image} />
      );
    }

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
          data={this.state.DATA}
          renderItem={({ item }) => <Item nombre={item.nombre} image={item.image} />}
        />
      </SafeAreaView>
    )

  }
}
export default HomeScreen;



