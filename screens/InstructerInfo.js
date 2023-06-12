import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const InstructerInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.instructerInfo}>
      <View style={styles.instructerInfoChild} />
      <Text style={[styles.welcomeUser, styles.welcomeUserTypo]}>
        Welcome user
      </Text>
      <Text style={[styles.moreInfomatonAbout, styles.welcomeUserTypo]}>
        More Infomaton about intructer
      </Text>
      <View style={styles.instructerInfoItem} />
      <Text style={[styles.educationDetails, styles.contactTypo]}>
        Education details
      </Text>
      <View style={[styles.instructerInfoInner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.contactNo, styles.contactTypo]}>Contact No</Text>
      <Text style={[styles.contactEmail, styles.contactTypo]}>
        Contact Email
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("InsructerHome")}
      />
      <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
      <Pressable
        style={[styles.instructerInfoChild1, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("InstructerExtraInfo")}
      />
      <Text style={[styles.next, styles.skipTypo]}>Next</Text>
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
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 44,
    width: 264,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
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
  instructerInfoChild: {
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
  instructerInfoItem: {
    top: 236,
    height: 117,
    width: 264,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
    left: 48,
    position: "absolute",
  },
  educationDetails: {
    top: 287,
    width: 181,
    height: 16,
    left: 96,
    opacity: 0.6,
  },
  instructerInfoInner: {
    top: 401,
    left: 49,
  },
  rectangleView: {
    top: 485,
    left: 48,
    height: 44,
  },
  contactNo: {
    top: 411,
    left: 97,
    width: 148,
    height: 25,
  },
  contactEmail: {
    top: 494,
    width: 136,
    height: 25,
    left: 96,
    opacity: 0.6,
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
  instructerInfoChild1: {
    left: 247,
    width: 98,
  },
  next: {
    left: 277,
    width: 63,
    height: 13,
  },
  instructerInfo: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default InstructerInfo;
