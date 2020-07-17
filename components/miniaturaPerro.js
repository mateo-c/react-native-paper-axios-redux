import * as React from 'react';
import { Card, Title} from 'react-native-paper';
import BotonLike from './BotonLike'
import BotonDislike from './BotonDisLike'
import MatchScreen from '../screens/MatchScreen'


export default function MiniaturaPerro (props) {
  return (
    <Card>
      <Card.Content>
        <Title><BotonLike id={props.id} onPress={() => { MatchScreen.actualizarState() }}/> {props.nombre} <BotonDislike id={props.id}/> </Title>
      </Card.Content>
      <Card.Cover source={{ uri: props.image }} />
    </Card>
  )
};
