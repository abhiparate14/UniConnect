import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const UniversityExtraInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.universityExtraInfo}>
      <View style={styles.universityExtraInfoChild} />
      <Text style={[styles.welcomeUser, styles.nextTypo]}>Welcome user</Text>
      <Text style={[styles.moreInfomatonAbout, styles.nextTypo]}>
        More Infomaton about University
      </Text>
      <Pressable
        style={[styles.universityExtraInfoItem, styles.universityBg]}
        onPress={() => navigation.navigate("UniversityDetails")}
      />
      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      <View style={[styles.universityExtraInfoInner, styles.universityBg]} />
      <Text style={[styles.text, styles.nextTypo]}>+</Text>
      <Text style={styles.about}>About</Text>
      <View style={[styles.rectangleView, styles.universityChildLayout]} />
      <Text style={[styles.description, styles.descriptionTypo]}>
        Description
      </Text>
      <View
        style={[styles.universityExtraInfoChild1, styles.universityChildLayout]}
      />
      <Text style={[styles.title, styles.descriptionTypo]}>Title</Text>
      <View
        style={[styles.universityExtraInfoChild2, styles.description1Position]}
      />
      <Text style={[styles.description1, styles.description1Position]}>
        Description
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nextTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  universityBg: {
    backgroundColor: Color.silver,
    position: "absolute",
  },
  universityChildLayout: {
    width: 187,
    backgroundColor: Color.beige,
    left: 87,
  },
  descriptionTypo: {
    opacity: 0.6,
    left: 124,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  description1Position: {
    top: 457,
    position: "absolute",
  },
  universityExtraInfoChild: {
    top: 135,
    left: 34,
    borderRadius: Border.br_xl,
    backgroundColor: Color.blanchedalmond_100,
    width: 290,
    height: 406,
    position: "absolute",
  },
  welcomeUser: {
    top: 74,
    left: 27,
    width: 180,
    height: 22,
  },
  moreInfomatonAbout: {
    top: 147,
    left: 111,
    width: 163,
    height: 34,
  },
  universityExtraInfoItem: {
    top: 710,
    left: 247,
    width: 98,
    height: 40,
    borderRadius: Border.br_3xs,
  },
  next: {
    top: 717,
    left: 277,
    width: 63,
    height: 13,
  },
  universityExtraInfoInner: {
    top: 364,
    left: 274,
    width: 36,
    height: 26,
  },
  text: {
    top: 365,
    left: 285,
    width: 19,
    height: 23,
  },
  about: {
    top: 223,
    width: 135,
    height: 18,
    left: 87,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangleView: {
    top: 268,
    height: 76,
    position: "absolute",
  },
  description: {
    top: 295,
    width: 122,
    height: 32,
    position: "absolute",
  },
  universityExtraInfoChild1: {
    top: 400,
    height: 28,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  title: {
    top: 404,
    width: 114,
    height: 20,
    position: "absolute",
  },
  universityExtraInfoChild2: {
    height: 29,
    width: 187,
    backgroundColor: Color.beige,
    left: 87,
    borderRadius: Border.br_3xs,
  },
  description1: {
    width: 120,
    height: 15,
    opacity: 0.6,
    left: 124,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  universityExtraInfo: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default UniversityExtraInfo;
