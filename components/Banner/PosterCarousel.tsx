import { Carousel, Text, Card, Colors, View } from "react-native-ui-lib";
import { Link } from "expo-router";

const PosterCarousel = ({ movies }) => {
  return (
    <Carousel
      pageControlPosition={"under"}
      pageControlProps={{
        size: 8,
        spacing: 8,
        color: Colors.$iconDefault,
        inactiveColor: Colors.$iconDisabled,
        //limitShownPages: 4,
        enlargeActive: true,
      }}
      loop
      autoplay
      autoplayInterval={4000}
      showCounter
    >
      {movies?.map((item, index: number) => (
        <Link
          href={{
            pathname: `/details/${item.id}`,
            params: { id: item.id },
          }}
          asChild
          key={index}
        >
          <Card br100>
            <Card.Image
              aspectRatio={1.78}
              height={240}
              customOverlayContent={
                <View paddingL-10 padding-5 absB>
                  <Text $textSuccess text70M>
                    {item.title}
                  </Text>
                  <Text $textDangerLight text80BO>
                    {item?.vote_average.toFixed(1)}
                  </Text>
                </View>
              }
              overlayIntensity="medium"
              overlayType="bottom"
              cover
              source={{
                uri: `https://image.tmdb.org/t/p/w780${item?.backdrop_path}`,
              }}
            />
          </Card>
        </Link>
      ))}
    </Carousel>
  );
};
export default PosterCarousel;
