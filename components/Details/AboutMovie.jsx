import React from 'react';
import {View, Text, Colors, Dash} from 'react-native-ui-lib';
import {ScrollView} from 'react-native';
import {Cast} from './Cast';
import {genreId} from '../../services/serve';
export const AboutMovie = ({data}) => {
  return (
    <View
      flex-1
      padding-10
      backgroundColor={Colors.$backgroundElevated}
      br50
      spread
      marginH-10>
      <ScrollView>
        <View
          marginV-10
          br50
          padding-10
          backgroundColor={Colors.$backgroundNeutral}>
          <View marginV-10>
            <Text color={Colors.$textMajor} text50>
              {data?.original_title}
            </Text>
          </View>
          <View left>
            <Text color={Colors.$textMinor} text70>
              {data?.release_date.split('-').reverse().join(' / ')}
            </Text>
            <Text marginV-10 text70BL color={Colors.$textGeneral}>
              {data.genre_ids.map(
                id =>
                  Object.keys(genreId).find(key => genreId[key] === id) + '  ',
              )}
            </Text>
          </View>
          <View right>
            <Text color={Colors.$textDanger} text60>
              {data?.vote_average.toFixed(1)}
            </Text>
            <Text color={Colors.$textMinor} text70>
              {data?.vote_count} votes
            </Text>
          </View>
        </View>
        <View margin-10>
          <Text color={Colors.$textSuccess} text60>
            Overview
          </Text>
          <Text color={Colors.$textNeutral} text70>
            {data?.overview}
          </Text>
        </View>
        <Dash
          dashColor={Colors.$textDanger}
          dashGap={5}
          dashLength={400}
          thickness={3}
        />
        {/* <Cast /> */}
      </ScrollView>
    </View>
  );
};
