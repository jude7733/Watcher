import { View, Card, Colors } from "react-native-ui-lib";

export const MoviePoster = ({ imageSrc }: { imageSrc: string | undefined }) => {
  return (
    <View center marginB-20>
      <Card
        padding-5
        backgroundColor={Colors.$backgroundDark}
        height={283}
        width={185}
      >
        <Card.Image
          height={278}
          width={185}
          source={{
            uri: `https://image.tmdb.org/t/p/w342${imageSrc}`,
          }}
        />
      </Card>
    </View>
  );
};
