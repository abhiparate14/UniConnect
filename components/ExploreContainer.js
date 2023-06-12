import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const ExploreContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.card1, styles.card1Layout]}>
      <Pressable
        style={styles.exploreBtn}
        onPress={() => navigation.navigate("StGanpatUniversity")}
      >
        <Text style={styles.explore}>Explore</Text>
      </Pressable>
      <Image
        style={[styles.card1Child, styles.card1Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-584.png")}
      />
      <View style={styles.uniText}>
        <Text style={[styles.ganpatUniversity, styles.khervaGujaratTypo]}>
          Ganpat University
        </Text>
        <Text style={[styles.khervaGujarat, styles.khervaGujaratTypo]}>
          Kherva, Gujarat
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card1Layout: {
    width: 325,
    borderRadius: Border.br_3xs,
  },
  khervaGujaratTypo: {
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
  card1Child: {
    top: 0,
    left: 0,
    height: 154,
    position: "absolute",
  },
  ganpatUniversity: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
  },
  khervaGujarat: {
    fontSize: FontSize.size_sm,
    width: 104,
    height: 27,
    marginTop: -10,
  },
  uniText: {
    top: 154,
    left: 7,
    width: 172,
    height: 51,
    position: "absolute",
  },
  card1: {
    backgroundColor: Color.blanchedalmond_100,
    height: 232,
  },
});

export default ExploreContainer;
