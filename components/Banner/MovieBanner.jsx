import React, {useState, useEffect} from 'react';
import {View} from 'react-native-ui-lib';
import PosterCarousel from './PosterCarousel.jsx';
import {getPopular} from '../../services/serve';
import Loading from '../Loading.jsx';
import Greetings from './Greetings.jsx';

const MovieBanner = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPopular()
      .then(data => {
        data.length = 8;
        setMovies(data);
      })
      .catch(err => console.log(err));
    setLoading(false);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <View flex-0>
      <Greetings />
      <View flex-0>
        <PosterCarousel movies={movies} />
      </View>
    </View>
  );
};
export default MovieBanner;
