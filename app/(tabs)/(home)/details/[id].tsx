import { getMovieDetails } from "@/services/serve";
import { MovieDetailsType } from "@/services/types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Dimensions, ImageBackground, StyleSheet, Image } from "react-native";
import { Colors } from "react-native-ui-lib";
import { AboutMovie } from "@/components/Details/AboutMovie";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const [details, setDetails] = useState<MovieDetailsType | null>(null);

  useEffect(() => {
    getMovieDetails(id).then((res: MovieDetailsType) => {
      setDetails(res);
    });
  }, [id]);

  if (!details) return null;

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={8}
        source={{ uri: `https://image.tmdb.org/t/p/w780${details.backdrop_path}` }}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.card}>
          <View style={styles.posterWrap}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w342${details.poster_path}` }}
              style={styles.poster}
            />
          </View>
          <AboutMovie details={details} id={Number(id)} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.$backgroundDefault,
  },
  backgroundImage: {
    flex: 1,
    width: windowWidth,
    alignItems: "center",
  },
  card: {
    height: windowHeight * 0.88,
    width: windowWidth * 0.93,
    borderRadius: 26,
    backgroundColor: Colors.$backgroundElevated,
    paddingTop: 35,
    marginTop: 40,
    shadowColor: Colors.$shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.11,
    shadowRadius: 18,
    elevation: 12,
    alignItems: "center",
  },
  posterWrap: {
    alignItems: "center",
    marginTop: -60,
    marginBottom: 10,
    shadowColor: Colors.$shadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.14,
    shadowRadius: 14,
    elevation: 8,
  },
  poster: {
    width: 200,
    height: 250,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.$backgroundDefault,
    resizeMode: "cover",
  },
});
