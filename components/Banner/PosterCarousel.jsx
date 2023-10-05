import {Carousel, Card, Colors} from 'react-native-ui-lib';
import React from 'react';

const PosterCarousel = ({poster}) => {
  poster.length = 8;
  return (
    <Carousel
      pageControlPosition={'over'}
      pageControlProps={{
        size: 8,
        spacing: 8,
        color: Colors.$primary,
        inactiveColor: Colors.$primary,
        limitShownPages: 4,
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
            source={{
              uri: `https://image.tmdb.org/t/p/w780${item?.poster}`,
            }}
          />
          <Card.Section
            content={[
              {
                text: item.release_date.slice(0, 4),
                text80: true,
                $textNeutralHeavy: true,
              },
              {
                text: item.title,
                text60M: true,
                $textSuccess: true,
              },
              {text: item.vote, text80BO: true, $textDangerLight: true},
            ]}
            // eslint-disable-next-line react-native/no-inline-styles
            contentStyle={{
              alignItems: 'left',
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 5,
              paddingBottom: 30,
            }}
          />
        </Card>
      ))}
    </Carousel>
  );
};
export default PosterCarousel;
