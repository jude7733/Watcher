import {Card} from 'react-native-ui-lib';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
export const MovieCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <Card
      onPress={() => navigation.navigate('MovieDetails', {data: data?.item})}>
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
          alignItems: 'center',
        }}
      />
    </Card>
  );
};
