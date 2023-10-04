import {Card} from 'react-native-ui-lib';
import React from 'react';
export const MovieCard = ({data}) => {
  //   console.log(data);
  return (
    <Card>
      <Card.Image
        height={200}
        width={100}
        source={{
          uri: `https://image.tmdb.org/t/p/w185${data?.item?.poster_path}`,
        }}
      />
      <Card.Section
        content={[
          {
            text: data.item?.original_title,
            text90: true,
            $textPrimary: true,
          },
        ]}
        // eslint-disable-next-line react-native/no-inline-styles
        contentStyle={{
          padding: 3,
          alignItems: 'left',
        }}
      />
    </Card>
  );
};
