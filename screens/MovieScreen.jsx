import React from 'react';
import {View, Colors} from 'react-native-ui-lib';
import {Dimensions, ImageBackground} from 'react-native';
import {MoviePoster} from '../components/Details/MoviePoster';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MovieScreen({route}) {
  const {data} = route.params;
  return (
    <View flex paddingT-30 backgroundColor={Colors.$backgroundDefault}>
      <View abs width={windowWidth} height={windowHeight}>
        <ImageBackground
          blurRadius={10}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${data?.backdrop_path}`,
          }}
          style={{width: windowWidth, height: windowHeight}}
        />
      </View>
      <MoviePoster data={data} />
    </View>
  );
}
