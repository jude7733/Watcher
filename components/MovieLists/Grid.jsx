import {GridList, Spacings} from 'react-native-ui-lib';
import React, {useEffect, useState} from 'react';
import {MovieCard} from '../MovieCard';
import Loading from '../Loading';
import {getByGenre} from '../../services/serve';

export const Grid = ({genre}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getByGenre(genre).then(data => {
      data.length = 9;
      setMovies(data);
      setLoading(false);
    });
  }, [genre]);
  return loading ? (
    <Loading />
  ) : (
    <GridList
      // keyExtractor={(item, index) => index.toString()}
      data={movies}
      // ListHeaderComponent={<Text text60>Popular</Text>}
      // ListHeaderComponentStyle={{padding: Spacings.s2}}
      numColumns={3}
      listPadding={Spacings.s3}
      itemSpacing={Spacings.s2}
      renderItem={item => <MovieCard data={item} />}
    />
  );
};
