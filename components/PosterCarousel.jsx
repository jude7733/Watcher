import {Carousel, Card, Colors, View} from 'react-native-ui-lib';
import React from 'react';

const PosterCarousel = ({poster}) => {
  poster.length = 10;
  return (
    <View paddingH-2>
      <Carousel
        pageControlPosition={'under'}
        pageControlProps={{
          size: 8,
          spacing: 8,
          color: Colors.$primary,
          inactiveColor: Colors.$primary,
        }}
        loop
        autoplay
        autoplayInterval={4000}
        showCounter
        containerStyle={({height: 'auto'}, {width: 'auto'})}
        pageHeight={400}>
        {poster.map((item, index) => (
          <Card key={index} br100>
            <Card.Image
              height={250}
              width={'100%'}
              source={{
                uri: `https://image.tmdb.org/t/p/original${item.poster}`,
              }}
            />
            <Card.Section
              content={[
                {
                  text: item.release_date.slice(0, 4),
                  text80: true,
                  $textGeneral: true,
                },
                {
                  text: item.title,
                  text60M: true,
                  $textSuccess: true,
                },
                {text: item.vote, text80BO: true, $textDangerLight: true},
              ]}
              contentStyle={{
                alignItems: 'left',
                justifyContent: 'space-between',
                padding: 10,
                flexDirection: 'row',
                paddingLeft: 20,
                paddingRight: 20,
              }}
            />
          </Card>
        ))}
      </Carousel>
    </View>
  );
};
export default PosterCarousel;
