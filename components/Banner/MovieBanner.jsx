import React, {useState, useEffect} from 'react';
import {View} from 'react-native-ui-lib';
import PosterCarousel from './PosterCarousel.jsx';
import {getPopular} from '../../services/serve';
import Loading from '../Loading.jsx';
import Greetings from './Greetings.jsx';

const MovieBanner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopular()
      .then(data => {
        data.length = 10;
        setMovies(data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <View flex-0>
      <Greetings />
      <View flex-0>
        <PosterCarousel movies={movies} />
      </View>
    </View>
  );
};
export default MovieBanner;
