import React, {useState, useEffect} from 'react';
import {View} from 'react-native-ui-lib';
import PosterCarousel from './PosterCarousel.jsx';
import {getPopular} from '../../services/serve';
import Loading from '../Loading.jsx';

const MovieBanner = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopular()
      .then(data => {
        data.length = 10;
        setMovies(data);
      })
      .catch(err => console.log(err));
    setLoading(false);
  }, []);
  return (
    <View flex-0>
      {loading && <Loading />}
      <PosterCarousel movies={movies} />
    </View>
  );
};
export default MovieBanner;
