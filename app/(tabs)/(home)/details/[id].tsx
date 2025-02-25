import { AboutMovie } from "@/components/Details/AboutMovie";
import { MoviePoster } from "@/components/Details/MoviePoster";
import { getMovieDetails } from "@/services/serve";
import { MovieDetailsType } from "@/services/types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Dimensions, ImageBackground, StyleSheet } from "react-native";
import { Colors } from "react-native-ui-lib";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const [details, setDetails] = useState<MovieDetailsType | null>();

  useEffect(() => {
    getMovieDetails(id).then((res: MovieDetailsType) => {
      setDetails(res);
    });
  }, [id]);

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={2}
        source={{
          uri: `https://image.tmdb.org/t/p/w780${details?.backdrop_path}`,
        }}
        style={styles.backgroundImage}
      />
      <MoviePoster imageSrc={details?.backdrop_path} />
      <AboutMovie id={id} details={details} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: Colors.$backgroundDefault,
  },
  backgroundImage: {
    position: "absolute",
    width: windowWidth,
    height: windowHeight,
    zIndex: -1,
  },
});
