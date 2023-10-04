import {GridList, Spacings, Text} from 'react-native-ui-lib';
import React from 'react';
import {MovieCard} from '../MovieCard';

export const Grid = ({data}) => {
  data.length = 6;
  return (
    <GridList
      data={data}
      ListHeaderComponent={<Text text60>Popular</Text>}
      ListHeaderComponentStyle={{padding: Spacings.s2}}
      numColumns={3}
      listPadding={Spacings.s3}
      itemSpacing={Spacings.s2}
      renderItem={item => <MovieCard data={item} />}
    />
  );
};
