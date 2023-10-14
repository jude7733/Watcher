import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
require('react-native-ui-lib/config').setConfig({appScheme: 'default'});
import {Colors} from 'react-native-ui-lib';

import Home from './screens/Home';
import MovieScreen from './screens/MovieScreen';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Movie" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
