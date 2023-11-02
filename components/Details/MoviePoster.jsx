import {View, Card, Colors} from 'react-native-ui-lib';
import React from 'react';
export const MoviePoster = ({data}) => {
  return (
    <View center paddingV-15>
      <Card
        padding-5
        backgroundColor={Colors.$backgroundDark}
        width={200}
        height={300}>
        <Card.Image
          height={300}
          width={100}
          source={{
            uri: `https://image.tmdb.org/t/p/w185${data?.poster_path}`,
          }}
        />
      </Card>
    </View>
  );
};
