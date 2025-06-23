import React from 'react';
import { ScrollView } from 'react-native';
import { TableView, Section, Cell } from 'react-native-tableview-simple';

export default function MenuScreen({ route }) {
  const { items } = route.params;

  return (
    <ScrollView>
      <TableView>
        {items.map((section, index) => (
          <Section key={index} header={section.title}>
            {section.contents.map((item, idx) => (
              <Cell key={idx} title={item.title} />
            ))}
          </Section>
        ))}
      </TableView>
    </ScrollView>
  );
}
