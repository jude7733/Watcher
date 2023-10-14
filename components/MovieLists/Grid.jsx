import React from 'react';
import {View, GridList, Spacings, Text} from 'react-native-ui-lib';
import {MovieCard} from './MovieCard';

export const Grid = ({genre, movies}) => {
  return (
    <View>
      <GridList
        // keyExtractor={(item, index) => index.toString()}
        data={movies}
        ListHeaderComponent={<Text text60>{genre}</Text>}
        ListHeaderComponentStyle={{padding: Spacings.s2}}
        numColumns={3}
        keepItemSize
        listPadding={Spacings.s2}
        itemSpacing={Spacings.s2}
        renderItem={item => <MovieCard data={item} />}
      />
    </View>
  );
};
