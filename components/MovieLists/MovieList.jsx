import React, {useState} from 'react';
import {View, Chip} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import {Grid} from './Grid';
const genres = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Science Fiction',
  'TV Movie',
  'Thriller',
  'War',
  'Western',
];
const MovieList = () => {
  const [genre, setGenre] = useState('Action');
  return (
    <View flex-1>
      <View flex-0>
        <FlatList
          data={genres}
          horizontal
          renderItem={({item}) => (
            <Chip label={item} margin-5 onPress={() => setGenre(item)} />
          )}
          keyExtractor={item => item}
        />
      </View>
      <View flex-1>
        <Grid genre={genre} />
      </View>
    </View>
  );
};
export default MovieList;
