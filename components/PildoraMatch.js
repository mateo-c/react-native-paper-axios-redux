import * as React from 'react';
import { Chip, Avatar, Text  } from 'react-native-paper';

const PildoraMatch = (props) => (
    <Chip mode="outlined" onPress={() => console.log('Pressed')}><Avatar.Image size={64} source={(props.image)} /><Text>{props.nombre}</Text></Chip>
);

export default PildoraMatch ;