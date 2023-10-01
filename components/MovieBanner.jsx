import React from 'react';
import {View, Text, Colors} from 'react-native-ui-lib';
import PosterCarousel from './PosterCarousel.jsx';
const hour = new Date().getHours();
const greet =
  hour < 2
    ? 'night'
    : hour < 12
    ? 'morning'
    : hour < 16
    ? 'afternoon'
    : hour < 20
    ? 'evening'
    : 'night';
const MovieBanner = ({movie}) => {
  const items = movie.map((item, i) => ({
    key: i,
    poster: item.backdrop_path,
    title: item.title,
    release_date: item.release_date,
    vote: item.vote_average,
  }));
  // console.log(items);
  return (
    <View flex-0 spread br20>
      <View
        flex-0
        abs
        zIndex={1}
        backgroundColor={Colors.$backgroundDefault}
        br40>
        <Text marginL-20 marginR-10 marginV-5 text60 $textMajor>
          Good {greet}
        </Text>
      </View>
      <View flex-0>
        <PosterCarousel poster={items} />
      </View>
    </View>
  );
};
export default MovieBanner;
