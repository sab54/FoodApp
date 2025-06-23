import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { TableView, Section } from 'react-native-tableview-simple';

import HomeScreenCell from '../components/HomeScreenCell';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
    <ScrollView>
      <TableView>
        <Section header="" separatorTintColor="#ccc" hideSeparator={false} sectionTintColor="#f0f0f0">
          <HomeScreenCell
            title="Joe's Gelato"
            tagline="Desert, Ice cream, £££"
            eta="10-30"
            imgUri={require('../../src/assets/images/ice-cream-header.jpeg')}
            action={() =>
              navigation.navigate('Menu', {
                items: [
                  {
                    title: 'Gelato',
                    contents: [{ title: 'Vanilla' }, { title: 'Chocolate' }],
                  },
                ],
              })
            }
          />
          <HomeScreenCell
            title="Joe's Diner"
            tagline="American, burgers, ££"
            eta="50+"
            imgUri={require('../../src/assets/images/pizza-header.jpeg')}
            action={() =>
              navigation.navigate('Menu', {
                items: [
                  {
                    title: 'Burgers',
                    contents: [
                      { title: 'Classic Burger' },
                      { title: 'Veggie Burger' },
                    ],
                  },
                ],
              })
            }
          />
        </Section>
      </TableView>
    </ScrollView>
    </SafeAreaView>
  );
}
