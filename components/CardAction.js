import * as React from 'react';
import { Card, Button } from 'react-native-paper';

const CardAction = () => (
  <Card>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default CardAction;