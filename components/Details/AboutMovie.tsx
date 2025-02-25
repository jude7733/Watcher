import { useEffect, useState } from "react";
import { View, Text, Colors } from "react-native-ui-lib";
import { ScrollView } from "react-native";
import { fetchCredits } from "../../services/serve";
import { Cast } from "./Casts/Cast";
import { CrewDetailsType, MovieDetailsType } from "@/services/types";

export const AboutMovie = ({
  details,
  id,
}: {
  details: MovieDetailsType;
  id: number;
}) => {
  const [crew, setCrew] = useState();
  useEffect(() => {
    fetchCredits(id).then((res) => {
      setCrew(res);
    });
  }, [id]);

  return (
    <View
      flex-1
      padding-10
      backgroundColor={Colors.$backgroundElevated}
      br50
      spread
      marginH-10
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          marginV-10
          br50
          padding-10
          backgroundColor={Colors.$backgroundNeutral}
        >
          <View marginV-10>
            <Text $textMajor text50>
              {details?.original_title}
            </Text>
            <Text $textMajor text50>
              {details?.id}
            </Text>
          </View>
          <View left>
            <Text $textMinor text70>
              {details?.release_date?.split("-").reverse().join(" / ")}
            </Text>
          </View>
          <View right>
            <Text $textDanger text60>
              {details?.vote_average}
            </Text>
            <Text $textMinor text70>
              {details?.vote_count} votes
            </Text>
          </View>
        </View>
        <View margin-10>
          {details?.genres.map((genre) => (
            <Text key={genre.id} marginV-10 text70BL $textGeneral>
              {genre.name}
            </Text>
          ))}
          <Text $textSuccess text60>
            Overview
          </Text>
          <Text $textNeutral text70>
            {details?.overview}
          </Text>
        </View>
        <Cast crew={crew} />
      </ScrollView>
    </View>
  );
};
