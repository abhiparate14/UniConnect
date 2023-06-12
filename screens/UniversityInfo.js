import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const UniversityInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.universityInfo}>
      <View style={styles.universityInfoChild} />
      <Text style={[styles.welcomeUser, styles.welcomeUserTypo]}>
        Welcome user
      </Text>
      <Text style={[styles.moreInfomatonAbout, styles.welcomeUserTypo]}>
        More Infomaton about University
      </Text>
      <View style={styles.universityInfoItem} />
      <Text style={[styles.address, styles.contactTypo]}>Address</Text>
      <View style={[styles.universityInfoInner, styles.universityLayout]} />
      <View style={[styles.rectangleView, styles.universityLayout]} />
      <View style={[styles.universityInfoChild1, styles.universityLayout]} />
      <Text style={[styles.contactNo, styles.contactTypo]}>Contact No</Text>
      <Text style={[styles.contactEmail, styles.contactTypo]}>
        Contact Email
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("UniversityDetails")}
      />
      <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
      <Pressable
        style={[styles.universityInfoChild2, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("UniversityExtraInfo")}
      />
      <Text style={[styles.next, styles.skipTypo]}>Next</Text>
      <Text style={[styles.city, styles.contactTypo]}>City</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeUserTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  contactTypo: {
    opacity: 0.6,
    left: 96,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  universityLayout: {
    height: 44,
    width: 264,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
    left: 48,
    position: "absolute",
  },
  rectanglePressableLayout: {
    height: 40,
    backgroundColor: Color.silver,
    top: 710,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  skipTypo: {
    top: 717,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  universityInfoChild: {
    top: 137,
    left: 35,
    borderRadius: Border.br_xl,
    backgroundColor: Color.blanchedalmond_100,
    width: 291,
    height: 458,
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
  universityInfoItem: {
    top: 236,
    height: 117,
    width: 264,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
    left: 48,
    position: "absolute",
  },
  address: {
    top: 287,
    width: 141,
    height: 16,
  },
  universityInfoInner: {
    top: 377,
  },
  rectangleView: {
    top: 445,
  },
  universityInfoChild1: {
    top: 513,
  },
  contactNo: {
    top: 387,
    width: 148,
    height: 25,
  },
  contactEmail: {
    top: 454,
    width: 136,
    height: 25,
  },
  rectanglePressable: {
    left: 15,
    width: 102,
  },
  skip: {
    left: 40,
    width: 77,
    height: 25,
  },
  universityInfoChild2: {
    left: 247,
    width: 98,
  },
  next: {
    left: 277,
    width: 63,
    height: 13,
  },
  city: {
    top: 525,
    width: 83,
    height: 20,
  },
  universityInfo: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default UniversityInfo;
