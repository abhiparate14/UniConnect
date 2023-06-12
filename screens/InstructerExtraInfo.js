import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const InstructerExtraInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.instructerExtraInfo}>
      <View style={styles.instructerExtraInfoChild} />
      <Text style={[styles.welcomeUser, styles.nextTypo]}>Welcome user</Text>
      <Text style={[styles.moreInfomatonAbout, styles.nextTypo]}>
        More Infomaton about intructer
      </Text>
      <Pressable
        style={styles.instructerExtraInfoItem}
        onPress={() => navigation.navigate("InsructerHome")}
      />
      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      <Text style={[styles.selectOnly2, styles.nextTypo]}>
        Select Only 2 University
      </Text>
      <View
        style={[styles.instructerExtraInfoInner, styles.rectangleViewLayout]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.option1, styles.optionTypo]}>Option 1</Text>
      <Text style={[styles.option2, styles.optionTypo]}>Option 2</Text>
      <Text style={styles.beInstructerOf}>
        Be Instructer of this 2 University
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
  rectangleViewLayout: {
    height: 41,
    width: 201,
    backgroundColor: Color.beige,
    left: 76,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  optionTypo: {
    opacity: 0.6,
    height: 19,
    width: 132,
    left: 142,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  instructerExtraInfoChild: {
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
  instructerExtraInfoItem: {
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
  selectOnly2: {
    top: 249,
    left: 70,
    width: 239,
    height: 30,
  },
  instructerExtraInfoInner: {
    top: 325,
  },
  rectangleView: {
    top: 414,
  },
  option1: {
    top: 336,
  },
  option2: {
    top: 425,
  },
  beInstructerOf: {
    top: 522,
    width: 214,
    height: 37,
    left: 76,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  instructerExtraInfo: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default InstructerExtraInfo;
