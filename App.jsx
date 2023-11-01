import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
require('react-native-ui-lib/config').setConfig({appScheme: 'default'});
import {Colors, Text} from 'react-native-ui-lib';
import Home from './screens/Home';
import MovieScreen from './screens/MovieScreen';
import Greetings from './components/Banner/Greetings';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: Colors.$backgroundDefault,
            },
            headerLeft: () => {
              return <Greetings />;
            },

            headerTintColor: Colors.$textDanger,
            headerTitle: '',
            headerSearchBarOptions: {
              tintColor: Colors.$textDanger,
              placeholderTextColor: Colors.$textDanger,
              iconColor: Colors.$textDanger,
              placement: 'left',
            },
          }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieScreen}
          options={{
            headerTintColor: Colors.$textDanger,
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => {
              <Text>Back</Text>;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
