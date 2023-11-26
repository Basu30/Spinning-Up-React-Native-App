
import React from 'react';




import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from './src/screens/AboutScreen';
import HomeScreen from './src/screens/HomeScreen';

function App() {
  
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}

export default App;
