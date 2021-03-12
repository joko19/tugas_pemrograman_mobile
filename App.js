import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from './src/Menu';
import AboutMe from './src/Aboutme';
import Tugas2 from './src/Tugas2';
import Tugas3 from './src/Tugas3';
import Tugas5 from './src/Tugas5';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerVisible: false,
        }}>
        <Stack.Screen name="menu" component={Menu} />
        <Stack.Screen name="Aboutme" component={AboutMe} />
        <Stack.Screen name="Tugas2" component={Tugas2} />
        <Stack.Screen name="Tugas3" component={Tugas3} />
        <Stack.Screen name="Tugas5" component={Tugas5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
