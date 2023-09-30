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
    poster: item.poster_path,
    title: item.title,
    release_date: item.release_date,
  }));
  const poster = items.map(item => item.poster);
  poster.length = 5;
  console.log(poster);
  // console.log(items);
  return (
    <View flex-0 spread backgroundColor={Colors.$backgroundDark} br20>
      <View
        flex-0
        abs
        zIndex={1}
        backgroundColor={Colors.$backgroundDefault}
        marginT-10
        br40>
        <Text marginL-40 marginR-20 marginV-5 text60 $textMajor>
          Good {greet}
        </Text>
      </View>
      <View flex-0 center backgroundColor={Colors.$backgroundDark} br50>
        <PosterCarousel poster={poster} />

        {/* <View>
          <Text>{items[i]?.title}</Text>
          <Text>{items?.release_date}</Text>
        </View> */}
      </View>
    </View>
  );
};
export default MovieBanner;
