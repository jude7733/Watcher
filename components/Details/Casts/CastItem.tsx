import { View, Card, Text } from "react-native-ui-lib";

export const CastItem = ({ item }) => {
  if (!item?.profile_path) return null;

  return (
    <View marginR-12 width={140}>
      <Card>
        <Card.Image
          height={140}
          source={{
            uri: `https://image.tmdb.org/t/p/w185${item.profile_path}`,
          }}
          style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        />
        <View>
          <Text text70 $textPrimary numberOfLines={2} marginB-2>
            {item.name}
          </Text>
          {item.character && (
            <Text text80 $textNeutral numberOfLines={2} marginB-2>
              {item.character}
            </Text>
          )}
          <Text text90 $textGeneral>
            {item.role ||
              (item.known_for_department === "Acting" ? "Actor" :
                item.known_for_department === "Directing" ? "Director" :
                  item.known_for_department === "Producing" ? "Producer" :
                    "Crew")}
          </Text>
        </View>
      </Card>
    </View>
  );
};
