import { FlatList } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { CastItem } from "./CastItem";

export const Cast = ({ crew }) => {
  // Properly flatten and combine all cast data
  const getAllCastData = () => {
    if (!crew) return [];

    const castData = [];

    // Add director(s)
    if (crew.director) {
      if (Array.isArray(crew.director)) {
        castData.push(...crew.director.map(person => ({
          ...person,
          role: 'Director',
          known_for_department: 'Directing'
        })));
      } else {
        castData.push({
          ...crew.director,
          role: 'Director',
          known_for_department: 'Directing'
        });
      }
    }

    // Add actors
    if (crew.actors && Array.isArray(crew.actors)) {
      castData.push(...crew.actors.map(person => ({
        ...person,
        role: 'Actor',
        known_for_department: 'Acting'
      })));
    }

    // Add producer(s)
    if (crew.producer) {
      if (Array.isArray(crew.producer)) {
        castData.push(...crew.producer.map(person => ({
          ...person,
          role: 'Producer',
          known_for_department: 'Producing'
        })));
      } else {
        castData.push({
          ...crew.producer,
          role: 'Producer',
          known_for_department: 'Producing'
        });
      }
    }

    // Filter out items without profile_path to avoid empty cards
    return castData.filter(person => person.profile_path);
  };

  const castData = getAllCastData();

  if (!castData.length) {
    return (
      <View margin-10>
        <Text text70L $textSuccess marginB-4>
          Cast
        </Text>
        <Text text80 $textNeutral marginT-8>
          No cast information available
        </Text>
      </View>
    );
  }

  return (
    <View margin-10>
      <Text text70L $textSuccess marginB-4>
        Cast
      </Text>
      <FlatList
        horizontal
        data={castData}
        renderItem={({ item }) => <CastItem item={item} />}
        keyExtractor={(item, index) => `${item.id || item.name || index}`}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
