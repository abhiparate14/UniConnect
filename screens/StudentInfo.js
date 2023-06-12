import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const StudentInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.studentInfo}>
      <View style={styles.studentInfoChild} />
      <Text style={[styles.welcomeUser, styles.welcomeUserTypo]}>
        Welcome user
      </Text>
      <Text style={[styles.moreInfomatonAbout, styles.welcomeUserTypo]}>
        More Infomaton about Student
      </Text>
      <View style={styles.studentInfoItem} />
      <Text style={[styles.educationDetails, styles.cityTypo]}>
        Education details
      </Text>
      <View style={[styles.studentInfoInner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.contactNo, styles.cityTypo]}>Contact No</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.studentInfoChild1Layout]}
        onPress={() => navigation.navigate("StudentHome")}
      />
      <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
      <Pressable
        style={[styles.studentInfoChild1, styles.studentInfoChild1Layout]}
        onPress={() => navigation.navigate("StudentExtraInfo")}
      />
      <Text style={[styles.next, styles.skipTypo]}>Next</Text>
      <Text style={[styles.city, styles.cityTypo]}>City</Text>
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
  cityTypo: {
    opacity: 0.6,
    left: 96,
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
    left: 48,
    position: "absolute",
  },
  studentInfoChild1Layout: {
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
  studentInfoChild: {
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
  studentInfoItem: {
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
  },
  studentInfoInner: {
    top: 411,
  },
  rectangleView: {
    top: 501,
  },
  contactNo: {
    top: 421,
    width: 148,
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
  studentInfoChild1: {
    left: 247,
    width: 98,
  },
  next: {
    left: 277,
    width: 63,
    height: 13,
  },
  city: {
    top: 513,
    width: 83,
    height: 20,
  },
  studentInfo: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default StudentInfo;
