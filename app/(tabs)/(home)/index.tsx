import { View } from "react-native-ui-lib";
import MovieBanner from "../../../components/Banner/MovieBanner";
import MovieList from "../../../components/MovieLists/MovieList";

export default function Home() {
  return (
    <View flex>
      <MovieBanner />
      <MovieList />
    </View>
  );
}
