import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen name="Restaurants" component={HomeScreen} />
    <Stack.Screen name="Menu" component={MenuScreen} options={{ headerBackTitle: 'Restaurants'}} />
  </Stack.Navigator>
</NavigationContainer>

  );
}
