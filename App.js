// Author: Sunidhi 🌸
// Description: Stack-based navigation setup for restaurant and menu screens
// Date: [Optional - you can add the current date here]
// Notes: Built using React Navigation with centered header titles and customized back button

// Import core React functionality
import React from 'react';

// Import navigation container to manage navigation tree
import { NavigationContainer } from '@react-navigation/native';

// Import method to create a stack-based navigation flow
import { createStackNavigator } from '@react-navigation/stack';

// Import screens to be used in navigation
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';

// Create an instance of the Stack Navigator
const Stack = createStackNavigator();

// Define the main App component
export default function App() {
  return (
    // Wrap navigation inside NavigationContainer to enable navigation features
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // Center-align the header title across all screens
          headerTitleAlign: 'center',
        }}
      >
        {/* Register the Home screen (Restaurants listing) */}
        <Stack.Screen
          name="Restaurants"
          component={HomeScreen}
        />

        {/* Register the Menu screen with customized back button label */}
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ headerBackTitle: 'Restaurants' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
