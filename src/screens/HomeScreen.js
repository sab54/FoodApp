import React from 'react';
import { ScrollView, View } from 'react-native';
import { TableView, Section } from 'react-native-tableview-simple';

import HomeScreenCell from '../components/HomeScreenCell';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
      <TableView>
        <Section
          header=""
          hideSeparator={true}
          separatorTintColor="#ccc"
        >
          <HomeScreenCell
            title="Joe's Gelato"
            tagline="Desert, Ice cream, £££"
            eta="10-30"
            imgUri={require('../../src/assets/images/joes-gelato-header.jpeg')}
            action={() =>
              navigation.navigate('Menu', {
                items: [
                  {
                    title: 'Classic Flavors',
                    contents: [{ title: 'Vanilla' }, { title: 'Chocolate' }, { title: 'Mint' }],
                  },
                  {
                    title: 'Coffee',
                    contents: [{ title: 'Flat white' }, { title: 'Latte' }, { title: 'Caffe Americano' }],
                  },
                  {
                    title: 'Add-ons',
                    contents: [{ title: 'Choco Chips' }, { title: 'Almond Crumble' }, { title: 'Honey Drizzle' } , { title: 'Fresh Mint' }],
                  },
                ],
              })
            }
          />
          <HomeScreenCell
            title="Joe's Diner"
            tagline="American, burgers, ££"
            eta="50+"
            imgUri={require('../../src/assets/images/joes-diner-header.jpeg')}
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
  );
}
