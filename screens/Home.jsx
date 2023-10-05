import React, {useEffect, useState} from 'react';
import {Colors, View} from 'react-native-ui-lib';
import {getMovies, getPopular} from '../services/serve';
import Loading from '../components/Loading';
import MovieBanner from '../components/Banner/MovieBanner';
import MovieList from '../components/MovieLists/MovieList';
export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchNow, setSearchNow] = useState(false);

  useEffect(() => {
    setLoading(true);
    searchNow
      ? getMovies(searchTerm)
      : getPopular().then(data => {
          setMovies(data);
          setLoading(false);
        });
  }, [searchNow]);
  return loading ? (
    <Loading />
  ) : (
    <View flex backgroundColor={Colors.$backgroundDefault} useSafeArea>
      <MovieBanner movie={movies} />
      <MovieList />
    </View>
  );
}
