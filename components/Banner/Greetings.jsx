import React from 'react';
import {View, Text, Colors,BorderRadiuses} from 'react-native-ui-lib';
const hour = new Date().getHours();
const greet =
  hour < 2
    ? 'night'
    : hour < 12
    ? 'morning'
    : hour < 16
    ? 'afternoon'
    : hour < 20
    ? 'evening'
    : 'night';
const Greetings = () => {
  return (
    <View
      flex-0
      abs
      zIndex={1}
      backgroundColor={Colors.$backgroundDefault}
      br40>
      <Text marginL-20 marginR-10 marginV-5 text70 $textMajor>
        Good {greet}
      </Text>
    </View>
  );
};
export default Greetings;
