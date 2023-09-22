import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const InstructerExtraInfo = () => {
  const [option1Open, setOption1Open] = useState(false);
  const [option1Items, setOption1Items] = useState([
    { value: "university1", label: "university1" },
    { value: "university2", label: "university2" },
    { value: "university3", label: "university3" },
  ]);
  const [option2Open, setOption2Open] = useState(false);
  const [option2Items, setOption2Items] = useState([
    { value: "university1", label: "university1" },
    { value: "university2", label: "university2" },
    { value: "university3", label: "university3" },
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.instructerExtraInfo}>
      <View style={styles.instructerExtraInfoChild} />
      <Text style={[styles.welcomeUser, styles.nextTypo]}>Welcome user</Text>
      <Text style={[styles.moreInfomatonAbout, styles.nextTypo]}>
        More Infomaton about intructer
      </Text>
      <TouchableOpacity
        style={styles.nextButton}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("InsructerHome")}
      >
        <Pressable
          style={styles.nextButtonChild}
          onPress={() => navigation.navigate("InsructerHome")}
        />
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </TouchableOpacity>
      <Text style={[styles.selectOnly2, styles.nextTypo]}>
        Select Only 2 University
      </Text>
      <View
        style={[styles.option1, styles.optionLayout]}
        placeholder="Option 1"
      >
        <DropDownPicker
          style={styles.dropdownpicker}
          open={option1Open}
          setOpen={setOption1Open}
          items={option1Items}
          labelStyle={styles.option1Value}
          dropDownContainerStyle={styles.option1dropDownContainer}
        />
      </View>
      <View
        style={[styles.option2, styles.optionLayout]}
        placeholder="Option 2"
      >
        <DropDownPicker
          style={styles.dropdownpicker}
          open={option2Open}
          setOpen={setOption2Open}
          items={option2Items}
          labelStyle={styles.option2Value}
          dropDownContainerStyle={styles.option2dropDownContainer}
        />
      </View>
      <Text style={styles.beInstructerOf}>
        Be Instructer of this 2 University
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  option1Value: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Inter-Regular",
  },
  option1dropDownContainer: {
    backgroundColor: "#dae5d0",
  },
  option2Value: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Inter-Regular",
  },
  option2dropDownContainer: {
    backgroundColor: "#dae5d0",
  },
  nextTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  optionLayout: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_10xs,
    height: 41,
    width: 201,
    left: 76,
    borderRadius: Border.br_3xs,
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
  nextButtonChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.silver,
    borderRadius: Border.br_3xs,
    height: 40,
    width: 98,
    position: "absolute",
  },
  next: {
    top: 7,
    left: 30,
    width: 63,
    height: 13,
  },
  nextButton: {
    top: 710,
    left: 247,
    height: 40,
    width: 98,
    position: "absolute",
  },
  selectOnly2: {
    top: 249,
    left: 70,
    width: 239,
    height: 30,
  },
  dropdownpicker: {
    backgroundColor: Color.beige,
  },
  option1: {
    top: 325,
  },
  option2: {
    top: 414,
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
