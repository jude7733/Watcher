import { Card, Colors } from "react-native-ui-lib";
import { Link } from "expo-router";

export const MovieCard = ({ data }) => {
  return (
    <Link
      href={{ pathname: `details/${data.item.id}`, params: { id: data.id } }}
      asChild
    >
      <Card>
        <Card.Image
          height={200}
          width={100}
          source={{
            uri: `https://image.tmdb.org/t/p/w185${data?.item?.poster_path}`,
          }}
        />
        <Card.Section
          content={[
            {
              text: data.item?.original_title,
              text90: true,
              $textPrimary: true,
            },
          ]}
          contentStyle={{
            padding: 3,
            alignItems: "center",
            backgroundColor: Colors.$backgroundGeneralMedium,
          }}
        />
      </Card>
    </Link>
  );
};
