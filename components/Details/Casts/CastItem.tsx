import { View, Card } from "react-native-ui-lib";

export const CastItem = ({ item }) => {
  return (
    <View marginT-5 paddingL-5>
      {item?.profile_path && (
        <Card width={140}>
          <Card.Image
            height={170}
            source={{
              uri: `http://image.tmdb.org/t/p/w185${item?.profile_path}`,
            }}
          />
          <Card.Section
            content={[
              { text: item?.name, text80: true, $textPrimary: true },
              { text: item?.character, text80: true, $textMajor: true },
              {
                text:
                  item?.known_for_department === "Acting"
                    ? "Actor"
                    : item?.known_for_department === "Directing"
                      ? "Director"
                      : "Producer",
                text90: true,
                $textNeutral: true,
              },
            ]}
            // eslint-disable-next-line react-native/no-inline-styles
            contentStyle={{ padding: 5 }}
          />
        </Card>
      )}
    </View>
  );
};
