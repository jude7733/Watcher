import React, {useEffect, useState} from 'react';
import {View, useColorScheme, StyleSheet} from 'react-native';
import {getMovies, getPopular} from '../services/serve';
import Loading from '../components/Loading';
import MovieBanner from '../components/MovieBanner';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchNow, setSearchNow] = useState(false);

  useEffect(() => {
    setLoading(true);
    searchNow
      ? getMovies(searchTerm)
      : getPopular()
          .then(data => {
            console.log('fetching');
            setMovies(data);
            console.log(movies[0]);
            setLoading(false);
          })
          .catch(err => console.log(err));
  }, [searchNow]);

  const isDarkMode = useColorScheme() === 'dark';

  const themeStyle = {
    backgroundStyle: {
      backgroundColor: isDarkMode ? '#000000' : '#DDDDDA',
    },
    fontColor: {
      color: isDarkMode ? '#CCCCCC' : '#36454F',
    },
  };
  return loading ? (
    <Loading />
  ) : (
    <View style={[styles.AppContainer, themeStyle.backgroundStyle]}>
      <MovieBanner movie={movies[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});
