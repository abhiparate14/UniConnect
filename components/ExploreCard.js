import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ExploreCard = ({
  universityName,
  universityLocation,
  collegeName,
  propWidth,
}) => {
  const uniTextStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.card2, styles.card2Layout]}>
      <View style={styles.exploreBtn}>
        <Text style={styles.explore}>Explore</Text>
      </View>
      <Image
        style={[styles.card2Child, styles.card2Layout]}
        contentFit="cover"
        source={universityName}
      />
      <View style={[styles.uniText, uniTextStyle]}>
        <Text style={[styles.nirmaUniversity, styles.nirmaUniversityTypo]}>
          {universityLocation}
        </Text>
        <Text style={[styles.ahmedabadgujarat, styles.nirmaUniversityTypo]}>
          {collegeName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card2Layout: {
    width: 325,
    borderRadius: Border.br_3xs,
  },
  nirmaUniversityTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
  },
  explore: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
    fontSize: FontSize.size_xl,
  },
  exploreBtn: {
    top: 182,
    left: 219,
    borderRadius: Border.br_xl,
    backgroundColor: Color.silver,
    width: 100,
    height: 42,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: 0,
    justifyContent: "center",
    position: "absolute",
  },
  card2Child: {
    top: 0,
    left: 0,
    height: 154,
    position: "absolute",
  },
  nirmaUniversity: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  ahmedabadgujarat: {
    fontSize: FontSize.size_sm,
    width: 141,
    height: 27,
    marginTop: -10,
  },
  uniText: {
    top: 154,
    left: 7,
    width: 159,
    height: 51,
    position: "absolute",
  },
  card2: {
    backgroundColor: Color.blanchedalmond_100,
    height: 232,
    marginTop: 14,
  },
});

export default ExploreCard;
