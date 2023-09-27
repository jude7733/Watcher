import React from 'react';
import {Text, View, useColorScheme, StyleSheet} from 'react-native';
const hour = new Date().getHours();
greet =
  hour < 12
    ? 'morning'
    : hour < 16
    ? 'afternoon'
    : hour < 20
    ? 'evening'
    : 'night';
export default function Home() {
  const isDarkMode = useColorScheme() === 'dark';

  const themeStyle = {
    backgroundStyle: {
      backgroundColor: isDarkMode ? '#15202B' : '#DDDDDA',
    },
    fontColor: {
      color: isDarkMode ? '#CCCCCC' : '#36454F',
    },
  };
  return (
    <View style={[styles.AppContainer, themeStyle.backgroundStyle]}>
      <View style={styles.greetingsContainer}>
        <Text style={[themeStyle.fontColor, styles.greetings]}>
          Good {greet}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  greetingsContainer: {
    flex: 0,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#22303c',
    borderRadius: 20,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
  greetings: {
    fontSize: 25,
    fontWeight: '700',
  },
  highlight: {
    fontWeight: '700',
  },
});
