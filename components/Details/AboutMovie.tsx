import { useEffect, useState } from "react";
import { View, Text, Colors, Chip, Badge } from "react-native-ui-lib";
import { FlatList, ScrollView } from "react-native";
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
  const [crew, setCrew] = useState<CrewDetailsType>();
  useEffect(() => {
    fetchCredits(id).then((res) => {
      setCrew(res);
    });
  }, [id]);

  return (
    <View
      flex-1
      padding-16
      br40
      backgroundColor={Colors.$backgroundElevated}
      style={{ shadowColor: Colors.$shadow, shadowOpacity: 0.12, shadowRadius: 16, elevation: 8 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          backgroundColor={Colors.$backgroundNeutral}
          br30
          padding-16
          marginB-18
        >
          <Text text40BL $textMajor marginB-8>{details?.original_title}</Text>
          <View row spread marginB-8>
            <Text text70L color={Colors.$textGeneral}>
              {details?.release_date?.split("-").reverse().join(" / ")}
            </Text>
            <View row centerV>
              <Badge
                label={details?.vote_average?.toFixed(1) || '-'}
                labelStyle={{ fontWeight: "700", fontSize: 15 }}
                size={28}
                backgroundColor={Colors.$backgroundSuccess}
              />
              <Text text80L $textSuccess marginL-8>
                {details?.vote_count} votes
              </Text>
            </View>
          </View>
        </View>
        <FlatList
          horizontal
          data={details?.genres || []}
          renderItem={({ item }) => (
            <Chip
              key={item.id}
              label={item.name}
              marginR-8
              backgroundColor={Colors.$backgroundPrimaryMedium}
              labelStyle={{ color: Colors.$textMajor }}
              size={24}
              borderRadius={12}
              paddingH-12
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
          style={{ marginBottom: 12 }}
        />
        <View marginB-18 padding-10>
          <Text text70L $textSuccess marginB-4>
            Overview
          </Text>
          <Text text80L $textNeutral>
            {details?.overview}
          </Text>
        </View>
        <Cast crew={crew} />
      </ScrollView>
    </View>
  );
};
