import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
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
  console.log(movie);
  return (
    <View style={styles.banner}>
      <View style={styles.greetingsContainer}>
        <Text style={[styles.greetings]}>Good {greet}</Text>
      </View>

      <View style={styles.movieCard}>
        <Image
          style={styles.moviePoster}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
        />
        <View style={styles.movieInfo}>
          <Text style={styles.movieTitle}>{movie?.title}</Text>
          <Text style={styles.movieReleaseDate}>{movie?.release_date}</Text>
        </View>
      </View>
    </View>
  );
};
export default MovieBanner;
const styles = StyleSheet.create({
  movieCard: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#111111',
    width: '100%',
    height: '100%',
    shadowColor: '#FFF',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  greetingsContainer: {
    flex: 0,
    position: 'absolute',
    zIndex: 1,
    left: 40,
    backgroundColor: '#333333',
    alignItems: 'flex-start',
    borderRadius: 20,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
  greetings: {
    padding: 10,
    fontSize: 25,
    fontWeight: '700',
  },
  banner: {
    flex: 0,
    backgroundColor: '#000000',
    width: '100%',
    height: '50%',
    borderRadius: 20,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
  moviePoster: {
    width: '80%',
    height: '80%',
    borderRadius: 20,
    shadowColor: '#FFF',
    backgroundColor: '#555555',
  },
  movieInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'space-evenly',
    justifyContent: 'space-evenly',
    margin: 20,
    width: '100%',
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#DDDDDD',
  },
  movieReleaseDate: {
    fontSize: 15,
    fontWeight: '700',
    color: '#DDDDDD',
  },
});
