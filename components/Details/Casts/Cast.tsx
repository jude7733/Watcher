import { FlatList } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { CastItem } from "./CastItem";

export const Cast = ({ crew }) => {
  return (
    <View margin-10>
      <Text text60 $textSuccess>
        Cast
      </Text>
      <FlatList
        horizontal
        data={[
          crew?.director || [],
          ...(crew?.actors || []),
          crew?.producer || [],
        ]}
        renderItem={({ item }) => <CastItem {...item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
