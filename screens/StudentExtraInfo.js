import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const StudentExtraInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.studentExtraInfo}>
      <View style={styles.studentExtraInfoChild} />
      <Text style={[styles.welcomeUser, styles.nextTypo]}>Welcome user</Text>
      <Text style={styles.moreInfomatonAbout}>
        More Infomaton about Student
      </Text>
      <Pressable
        style={styles.studentExtraInfoItem}
        onPress={() => navigation.navigate("StudentHome")}
      />
      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      <View style={[styles.studentExtraInfoInner, styles.studentChildLayout]} />
      <View style={[styles.rectangleView, styles.studentChildLayout]} />
      <View
        style={[styles.studentExtraInfoChild1, styles.studentChildLayout]}
      />
      <View
        style={[styles.studentExtraInfoChild2, styles.studentChildLayout]}
      />
      <View
        style={[styles.studentExtraInfoChild3, styles.studentChildLayout]}
      />
      <Text style={[styles.option1, styles.optionTypo]}>Option 1</Text>
      <Text style={[styles.option2, styles.optionTypo]}>Option 2</Text>
      <Text style={[styles.option3, styles.optionTypo]}>Option 3</Text>
      <Text style={[styles.option4, styles.optionTypo]}>Option 4</Text>
      <Text style={[styles.option5, styles.optionTypo]}>Option 5</Text>
      <Text style={[styles.choicesOfUniversity, styles.nextTypo]}>
        Choices of University
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
  studentChildLayout: {
    width: 170,
    backgroundColor: Color.beige,
    left: 95,
    borderRadius: Border.br_3xs,
    height: 34,
    position: "absolute",
  },
  optionTypo: {
    opacity: 0.6,
    height: 17,
    width: 91,
    left: 139,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  studentExtraInfoChild: {
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
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  studentExtraInfoItem: {
    top: 710,
    left: 247,
    backgroundColor: Color.silver,
    width: 98,
    height: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  next: {
    top: 717,
    left: 277,
    width: 63,
    height: 13,
  },
  studentExtraInfoInner: {
    top: 254,
  },
  rectangleView: {
    top: 314,
  },
  studentExtraInfoChild1: {
    top: 374,
  },
  studentExtraInfoChild2: {
    top: 434,
  },
  studentExtraInfoChild3: {
    top: 494,
  },
  option1: {
    top: 259,
  },
  option2: {
    top: 319,
  },
  option3: {
    top: 379,
  },
  option4: {
    top: 439,
  },
  option5: {
    top: 499,
  },
  choicesOfUniversity: {
    top: 554,
    left: 88,
    width: 252,
    height: 36,
  },
  studentExtraInfo: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default StudentExtraInfo;
