import React, { useState, useEffect } from "react";
import { View } from "react-native-ui-lib";
import { getPopular } from "../../services/serve";
import PosterCarousel from "./PosterCarousel";
import Loading from "../Loading";

const MovieBanner = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopular()
      .then((data) => {
        data = data.slice(0, 10);
        setMovies(data);
      })
      .catch((err) => console.log(err));
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
