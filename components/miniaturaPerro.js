import * as React from 'react';
import { Card, Title} from 'react-native-paper';


export default function MiniaturaPerro (props) {
  return (
    <Card>
      <Card.Content>
        <Title> {props.nombre} </Title>
      </Card.Content>
      <Card.Cover source={{ uri: props.image }} />
    </Card>
  )
};
