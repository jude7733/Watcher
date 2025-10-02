import { View } from "react-native-ui-lib";
import MovieBanner from "@/components/Banner/MovieBanner";
import MovieList from "@/components/MovieLists/MovieList";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View flex>
        <MovieBanner />
        <MovieList />
      </View>
    </SafeAreaView>
  );
}
