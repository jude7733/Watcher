import React, {useEffect, useState} from 'react';
import {View, Text, Colors} from 'react-native-ui-lib';
import {ScrollView} from 'react-native';
import {genreId, fetchCredits} from '../../services/serve';
import {Cast} from './Casts/Cast';

export const AboutMovie = ({data}) => {
  const [crew, setCrew] = useState();
  useEffect(() => {
    fetchCredits(data.id).then(res => {
      setCrew(res);
    });
  }, [data.id]);

  return (
    <View
      flex-1
      padding-10
      backgroundColor={Colors.$backgroundElevated}
      br50
      spread
      marginH-10>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          marginV-10
          br50
          padding-10
          backgroundColor={Colors.$backgroundNeutral}>
          <View marginV-10>
            <Text $textMajor text50>
              {data?.original_title}
            </Text>
          </View>
          <View left>
            <Text $textMinor text70>
              {data?.release_date.split('-').reverse().join(' / ')}
            </Text>
            <Text marginV-10 text70BL $textGeneral>
              {data.genre_ids.map(
                id =>
                  Object.keys(genreId).find(key => genreId[key] === id) + '  ',
              )}
            </Text>
          </View>
          <View right>
            <Text $textDanger text60>
              {data?.vote_average.toFixed(1)}
            </Text>
            <Text $textMinor text70>
              {data?.vote_count} votes
            </Text>
          </View>
        </View>
        <View margin-10>
          <Text $textSuccess text60>
            Overview
          </Text>
          <Text $textNeutral text70>
            {data?.overview}
          </Text>
        </View>
        <Cast crew={crew} />
      </ScrollView>
    </View>
  );
};
