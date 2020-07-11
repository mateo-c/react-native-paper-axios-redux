import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import MiniaturaPerro from '../components/miniaturaPerro';

//import newApi from '../apis/pets'


var axios = require('axios');
var data = JSON.stringify({"dogNick":"Silver","dogSex":"female","dogBreed":"Boyero"});

var config = {
  method: 'get',
  url: 'http://www.hotdogort.ml/api/pets',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


const DATA = [ //deberia llegar desde la db
  {
    nombre: 'Pipo',
    image: 'https://i.imgur.com/TUQvrsV.jpg'
  },
  {
    nombre: 'Tiago',
    image:'https://i.imgur.com/69SUs49g.jpg'
  },
  {
    nombre: 'Chichi',
    image: 'https://i.imgur.com/k1yVI.jpg'
  },
];

function Item({ nombre, image }) {
  return (
    <MiniaturaPerro nombre={nombre} image={image}/>
  );
}

export default function HomeScreen() {
  return (

    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item nombre={item.nombre} image={item.image} />} 
      />
    </SafeAreaView>
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

function mostrar (){
    const arr = []
    for (let i = 0; i<10; i++){
        arr.push(<MiniaturaPerro/>);
    }
    return arr;
}