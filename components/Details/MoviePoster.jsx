import {View, Card, Colors} from 'react-native-ui-lib';
import React from 'react';
export const MoviePoster = ({data}) => {
  return (
    <View center marginB-20>
      <Card
        padding-5
        backgroundColor={Colors.$backgroundDark}
        height={283}
        width={185}>
        <Card.Image
          height={278}
          width={185}
          source={{
            uri: `https://image.tmdb.org/t/p/w185${data?.poster_path}`,
          }}
        />
      </Card>
    </View>
  );
};
