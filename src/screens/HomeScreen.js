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
            rating="4.6 ★"
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
            rating="4.6 ★"
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
          <HomeScreenCell
            title="Luca’s Pizzeria"
            tagline="Pizza, Italian, £10"
            eta="15-40"
            rating="4.6 ★"
            imgUri={require('../../src/assets/images/lucas-pizzeria-header.jpeg')}
            action={() =>
              navigation.navigate('Menu', {
                items: [
                  {
                    title: 'Classic',
                    contents: [
                      {
                        title: 'Margherita Pizza',
                        image: require('../../src/assets/images/margherita-pizza.jpeg'),
                        inStock:true,
                      },
                      {
                        title: 'Pepperoni Pizza',
                        image: require('../../src/assets/images/peporoni-pizza.jpeg'),
                        inStock:true,
                      },
                      {
                        title: 'BBQ Chicken Pizza',
                        image: require('../../src/assets/images/BBQ-chicken-pizza.jpeg'),
                        inStock: false,
                      },
                    ],
                  },
                  {
                    title: 'Indian',
                    contents: [
                      {
                        title: 'Paneer Tikka Pizza',
                        image: require('../../src/assets/images/Paneer-pizza.jpeg'),
                        inStock: false,
                      },
                      {
                        title: 'Tandoori Chicken',
                        image: require('../../src/assets/images/tandoori-chicken.jpeg'),
                        inStock: false,
                      },
                    ],
                  },
                  {
                    title: 'Sides',
                    contents: [
                      {
                        title: 'Garlic Bread Sticks',
                        image: require('../../src/assets/images/garlic-bread.jpeg'),
                        inStock: false,
                      },
                      { title: 'Salad',
                        image: require('../../src/assets/images/salad.jpeg'),
                        inStock: false,
                      },
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
