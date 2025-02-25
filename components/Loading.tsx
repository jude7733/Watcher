import React from 'react';
import {Colors, LoaderScreen} from 'react-native-ui-lib';
const Loading = () => {
  return (
    <LoaderScreen
      message={'Fetching Movie info...'}
      overlay
      messageStyle={{color: Colors.$textDanger}}
      containerStyle={{backgroundColor: Colors.$backgroundElevated}}
    />
  );
};

export default Loading;
