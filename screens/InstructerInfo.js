import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const InstructerInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.instructerInfo}>
      <View style={styles.instructerInfoChild} />
      <Text style={[styles.welcomeUser, styles.skipTypo]}>Welcome user</Text>
      <Text style={[styles.moreInfomatonAbout, styles.skipTypo]}>
        More Infomaton about intructer
      </Text>
      <View style={[styles.eductionalDetails, styles.eductionalLayout]}>
        <View style={[styles.eductionalDetailsChild, styles.childBg]} />
        <TextInput
          style={[styles.educationDetails, styles.branch1Typo]}
          placeholder="Education details"
          placeholderTextColor="#000"
        />
      </View>
      <View style={[styles.contactNo, styles.contactLayout]}>
        <View style={[styles.contactNoChild, styles.contactLayout]} />
        <TextInput
          style={[styles.contactNo1, styles.branch1Typo]}
          placeholder="Contact No"
          autoCapitalize="none"
          placeholderTextColor="#000"
        />
      </View>
      <View style={[styles.branch, styles.contactLayout]}>
        <TextInput
          style={styles.branch1Typo}
          placeholder="Branch"
          autoCapitalize="none"
          placeholderTextColor="#000"
        />
      </View>
      <TouchableOpacity
        style={[styles.skipButton, styles.skipButtonPosition]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("InsructerHome")}
      >
        <Pressable
          style={[styles.skipButtonChild, styles.buttonChildBg]}
          onPress={() => navigation.navigate("InsructerHome")}
        />
        <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.nextButton, styles.nextLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("InstructerExtraInfo")}
      >
        <Pressable
          style={[styles.nextButtonChild, styles.nextLayout]}
          onPress={() => navigation.navigate("InstructerExtraInfo")}
        />
        <Text style={[styles.next, styles.skipTypo]}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  skipTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  eductionalLayout: {
    height: 117,
    width: 264,
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
  },
  branch1Typo: {
    opacity: 0.6,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  contactLayout: {
    height: 44,
    width: 264,
    position: "absolute",
  },
  skipButtonPosition: {
    left: 27,
    position: "absolute",
  },
  buttonChildBg: {
    backgroundColor: Color.silver,
    borderRadius: Border.br_3xs,
  },
  nextLayout: {
    width: 98,
    height: 40,
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
    width: 180,
    height: 22,
    left: 27,
    position: "absolute",
  },
  moreInfomatonAbout: {
    top: 147,
    left: 111,
    width: 163,
    height: 34,
    position: "absolute",
  },
  eductionalDetailsChild: {
    left: 0,
    top: 0,
    height: 117,
    width: 264,
    position: "absolute",
  },
  educationDetails: {
    top: 51,
    left: 83,
    position: "absolute",
  },
  eductionalDetails: {
    top: 236,
    left: 48,
  },
  contactNoChild: {
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  contactNo1: {
    top: 10,
    left: 116,
    position: "absolute",
  },
  contactNo: {
    top: 401,
    left: 49,
  },
  branch: {
    top: 485,
    paddingHorizontal: 48,
    paddingVertical: Padding.p_4xs,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
    left: 48,
  },
  skipButtonChild: {
    width: 102,
    height: 40,
  },
  skip: {
    width: 77,
    height: 25,
    marginLeft: -74,
  },
  skipButton: {
    width: 105,
    flexDirection: "row",
    paddingRight: Padding.p_10xs,
    alignItems: "center",
    justifyContent: "flex-end",
    height: 40,
    top: 684,
  },
  nextButtonChild: {
    backgroundColor: Color.silver,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  next: {
    top: 7,
    left: 30,
    width: 63,
    height: 13,
    position: "absolute",
  },
  nextButton: {
    left: 245,
    top: 684,
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
