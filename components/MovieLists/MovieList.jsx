import React, {useEffect, useState} from 'react';
import {View, Chip} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import {Grid} from './Grid';
const genres = [28, 12, 16, 35, 88];
const MovieList = () => {
  const [genre, setGenre] = useState(16);
  useEffect(() => {
    console.log(genre);
  }, [genre]);
  return (
    <View>
      <FlatList
        data={genres}
        horizontal
        renderItem={({item}) => (
          <Chip label={item} margin-5 onPress={() => setGenre(item)} />
        )}
        keyExtractor={item => item}
      />
      <View marginV-20>
        <Grid genre={genre} />
      </View>
    </View>
  );
};
export default MovieList;
