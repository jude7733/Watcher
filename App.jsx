import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';
import Home from './screens/Home';
import MovieScreen from './screens/MovieScreen';

const Stack = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : 'white',
  };
  console.log('starting app');
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={backgroundStyle}> */}
      <StatusBar
        barStyle={backgroundStyle.backgroundColor}
        backgroundColor={backgroundStyle.backgroundColor}
        hidden={true}
      />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Movie" component={MovieScreen} />
      </Stack.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

export default App;
