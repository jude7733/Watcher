import React, {useState, useEffect} from 'react';
import {View, Chip} from 'react-native-ui-lib';
import {FlatList} from 'react-native';
import {Grid} from './Grid';
import Loading from '../Loading';
import {getByGenre} from '../../services/serve';
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
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getByGenre(genre)
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [genre]);
  return loading ? (
    <Loading />
  ) : (
    <View flex-1>
      <View flex-0>
        <FlatList
          data={genres}
          horizontal
          renderItem={({item}) => (
            <Chip
              label={item}
              margin-5
              marginB-10
              onPress={() => setGenre(item)}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
      <View flex-1>
        <Grid genre={genre} movies={movies} />
      </View>
    </View>
  );
};
export default MovieList;
