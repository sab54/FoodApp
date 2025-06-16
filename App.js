import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View, Text, Image } from 'react-native';
import { TableView, Section, Cell } from 'react-native-tableview-simple';

const Stack = createStackNavigator();
const HomeScreenCell = ({ title, tagline, eta, imgUri }) => (
  <Cell>
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8 }}>
      <Image
        source={imgUri}
        style={{ width: 60, height: 60, borderRadius: 8, marginRight: 10 }}
      />
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
        <Text style={{ color: '#555' }}>{tagline}</Text>
        <Text style={{ color: '#888', fontSize: 12 }}>{eta} mins</Text>
      </View>
    </View>
  </Cell>
);

const RestaurantsScreen = () => (
  <ScrollView>
    <TableView>
      <Section hideSeparator separatorTintColor="#ccc">
        <HomeScreenCell
          title="Joe's Gelato"
          tagline="Dessert, Ice cream, £££"
          eta="10-30"
          imgUri={require('./assets/images/ice-cream-header.jpeg')}
        />
        <HomeScreenCell
          title="Mama's Pizza"
          tagline="Italian, Pizza, ££"
          eta="20-40"
          // imgUri={require('./images/pizza-header.jpg')}
        />
      </Section>
    </TableView>
  </ScrollView>
);

const MenuScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Menu will go here!</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
