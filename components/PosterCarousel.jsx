import {Carousel, Text, Card, Colors, View} from 'react-native-ui-lib';
import React from 'react';

const PosterCarousel = ({poster}) => {
  console.log(poster);
  return (
    <View marginT-10 flex-0>
      <Carousel
        pageControlPosition={'under'}
        pageControlProps={{
          size: 8,
          spacing: 8,
          color: Colors.$primary,
          inactiveColor: Colors.$primary,
        }}
        loop
        itemSpacings={10}
        autoplay
        autoplayInterval={4000}
        showCounter
        containerStyle={({height: 400}, {width: 300})}
        pageHeight={400}>
        {poster.map((image, index) => (
          <Card key={index} br20 enableShadow>
            <Card.Image
              height={400}
              width={300}
              source={{uri: `https://image.tmdb.org/t/p/original${image}`}}
            />
            <Card.Section
              content={[
                {text: 'Card content here', text70: true, grey40: true},
              ]}
              contentStyle={{
                alignItems: 'left',
                justifyContent: 'center',
                padding: 10,
              }}
            />
          </Card>
        ))}
      </Carousel>
    </View>
  );
};
export default PosterCarousel;
