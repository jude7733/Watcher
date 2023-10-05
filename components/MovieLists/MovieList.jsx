import React, {useEffect, useState} from 'react';
import {View, Chip} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import {Grid} from './Grid';
import {getByGenre} from '../../services/serve';
const genres = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Romance',
];
const MovieList = () => {
  const [genre, setGenre] = useState('Animation');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getByGenre(genre).then(info => {
      setMovies(info);
    });
  }, [genre]);
  return (
    <View>
      <FlatList
        data={genres}
        horizontal
        renderItem={({item}) => (
          <Chip
            label={item}
            margin-5
            onPress={() => {
              setGenre(item);
              console.log(item);
              getByGenre(item).then(info => {
                setMovies(info);
              });
            }}
          />
        )}
        keyExtractor={item => item}
      />
      <Grid data={movies} />
    </View>
  );
};
export default MovieList;
