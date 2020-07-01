import * as React from 'react';
import { List } from 'react-native-paper';

const ListAccordion = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Filtros">
      <List.Accordion
        title="Razas"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="Bulldog Ingles" />
        <List.Item title="Bulldog Frances" />
        <List.Item title="Labrador" />
        <List.Item title="Golden Retriver" />
      </List.Accordion>
      <List.Accordion
        title="Sexo"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="Hembra" />
        <List.Item title="Macho" />
      </List.Accordion>
    </List.Section>
  );
};

export default ListAccordion;