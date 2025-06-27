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
                    title: 'Gelato',
                    contents: [
                      {
                        title: 'Vanilla',
                        image: require('../../src/assets/images/vanilla.jpeg'),
                        inStock:true,
                        type: 'veg',
                        price: 2.00,
                      },
                      {
                        title: 'Chocolate',
                        image: require('../../src/assets/images/chocolate.jpeg'),
                        inStock:true,
                        type: 'veg',
                        price: 2.00,
                      },
                      {
                        title: 'Mint',
                        image: require('../../src/assets/images/mint.jpeg'),
                        inStock:true,
                        type: 'veg',
                        price: 2.00,
                      }],
                  },
                  {
                    title: 'Coffee',
                    contents: [
                      {
                        title: 'Flat white',
                        image: require('../../src/assets/images/flat-white.jpeg'),
                        inStock:true,
                        type: 'veg',
                        price: 1.98,
                      },
                      {
                        title: 'Latte',
                        image: require('../../src/assets/images/latte.jpeg'),
                        inStock:true,
                        type: 'veg',
                        price: 1.75,
                      },
                      {
                        title: 'Caffe Americano',
                        image: require('../../src/assets/images/caffe-americano.jpeg'),
                        inStock:false,
                        type: 'veg',
                        price: 1.85,
                      }],
                  },
                  {
                    title: 'Add-ons',
                    contents: [
                      { title: 'Choco Chips',
                        image: require('../../src/assets/images/choco-chips.jpeg'),
                        inStock:false,
                        type: 'veg',
                        price: 2.00,
                      },
                      {
                        title: 'Honey Drizzle',
                        image: require('../../src/assets/images/honey-drizzle.jpeg'),
                        inStock:true,
                        type: 'veg',
                        price: 2.00,
                      },
                    ],
                  },
                ],
              })
            }
          />
          <HomeScreenCell
            title="Joe's Diner"
            tagline="American, burgers, ££"
            eta="50+"
            rating="5.0 ★"
            imgUri={require('../../src/assets/images/joes-diner-header.jpeg')}
            action={() =>
              navigation.navigate('Menu', {
                items: [
                  {
                    title: 'Main Dishes',
                    contents: [
                      {
                        title: 'Mushroom Risotto',
                        image: require('../../src/assets/images/mushroom.jpeg'),
                        inStock:true,
                        type: 'veg',
                        price: 7.20,
                      },
                      {
                        title: 'Spaghetti Bolognese',
                        image: require('../../src/assets/images/spagetti.jpeg'),
                        inStock:true,
                        type: 'nonveg',
                        price: 8.50,
                      },
                    ],
                  },
                  {
                    title: 'Burgers',
                    contents: [
                      {
                        title: 'Classic Burger',
                        image: require('../../src/assets/images/classic-burger.jpeg'),
                        inStock:true,
                        type: 'veg',
                        price: 2.00,
                      },
                      {
                        title: 'Veggie Burger',
                        image: require('../../src/assets/images/veg-burger.jpeg'),
                        inStock:false,
                        type: 'veg',
                        price: 2.60,
                      },
                    ],
                  },
                  {
                    title: 'Sides',
                    contents: [
                      {
                        title: 'Patato Wedges',
                        image: require('../../src/assets/images/potato-wedges.jpeg'),
                        inStock: false,
                        type: 'veg',
                        price: 0.80,
                      },
                      { title: 'Chicken Nuggests',
                        image: require('../../src/assets/images/chicken-nuggets.jpeg'),
                        inStock: true,
                        type: 'nonveg',
                        price: 1.00,
                      },
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
            rating="3.2 ★"
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
                        type: 'veg',
                        price: 10.00,
                      },
                      {
                        title: 'Pepperoni Pizza',
                        image: require('../../src/assets/images/peporoni-pizza.jpeg'),
                        inStock:true,
                        type: 'nonveg',
                        price: 12.00,
                      },
                      {
                        title: 'BBQ Chicken Pizza',
                        image: require('../../src/assets/images/bbq-chicken-pizza.jpeg'),
                        inStock: false,
                        type: 'nonveg',
                        price: 15.00,
                      },
                    ],
                  },
                  {
                    title: 'Indian',
                    contents: [
                      {
                        title: 'Paneer Tikka Pizza',
                        image: require('../../src/assets/images/paneer-pizza.jpeg'),
                        inStock: false,
                        type: 'veg',
                        price: 9.50,
                      },
                      {
                        title: 'Tandoori Chicken',
                        image: require('../../src/assets/images/tandoori-chicken.jpeg'),
                        inStock: true,
                        type: 'nonveg',
                        price: 10.50,
                      },
                    ],
                  },
                  {
                    title: 'Sides',
                    contents: [
                      {
                        title: 'Garlic Bread Sticks',
                        image: require('../../src/assets/images/garlic-bread.jpeg'),
                        inStock: true,
                        type: 'veg',
                        price: 1.25,
                      },
                      { title: 'Salad',
                        image: require('../../src/assets/images/salad.jpeg'),
                        inStock: true,
                        type: 'veg',
                        price: 1.00,
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
