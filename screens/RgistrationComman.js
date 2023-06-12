import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Padding, Color } from "../GlobalStyles";

const RgistrationComman = () => {
  const [dobBtnDatePicker, setDobBtnDatePicker] = useState(undefined);
  const [whoIsRegisteringBtnOpen, setWhoIsRegisteringBtnOpen] = useState(false);
  const [whoIsRegisteringBtnValue, setWhoIsRegisteringBtnValue] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.rgistrationComman}>
      <View style={[styles.rgistrationCommanChild, styles.passwordBtnLayout]} />
      <View style={[styles.rgistrationCommanChild, styles.passwordBtnLayout]} />
      <TextInput
        style={[styles.nameBtn, styles.btnTypo]}
        placeholder="User Name"
        placeholderTextColor="#000"
      />
      <TextInput
        style={[styles.emailBtn, styles.btnTypo]}
        placeholder="Email"
        placeholderTextColor="#000"
      />
      {/* <RNKDatepicker
        placeholder={() => (
          <Text style={styles.dobBtnDatePickerPlaceHolder}>Date of birth</Text>
        )}
        date={dobBtnDatePicker}
        onSelect={setDobBtnDatePicker}
        controlStyle={styles.dobBtnDatePickerValue}
      /> */}
      <TextInput
        style={[styles.ageBtn, styles.btnSpaceBlock]}
        placeholder="Age"
        placeholderTextColor="#000"
      />
      <TextInput
        style={[styles.passwordBtn, styles.btnTypo]}
        placeholder="Password"
        placeholderTextColor="#000"
      />
      <View style={[styles.outer, styles.outerLayout]}>
        <Text style={[styles.registerAccount, styles.registerFlexBox]}>
          Register Account
        </Text>
        <Pressable
          style={[styles.registerBtn, styles.btnSpaceBlock]}
          onPress={() => navigation.navigate("LANDINGPAGE")}
        >
          <Text style={[styles.register, styles.registerFlexBox]}>
            Register
          </Text>
        </Pressable>
      </View>
      <View style={styles.whoIsRegisteringBtn}>
        {/* <DropDownPicker
          open={whoIsRegisteringBtnOpen}
          setOpen={setWhoIsRegisteringBtnOpen}
          value={whoIsRegisteringBtnValue}
          setValue={setWhoIsRegisteringBtnValue}
          placeholder="Register As A"
          labelStyle={styles.whoIsRegisteringBtnValue}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dobBtnDatePickerPlaceHolder: {
    fontFamily: "Inter_regular",
    color: "#000",
    fontSize: 20,
  },
  dobBtnDatePickerValue: {
    position: "absolute",
    top: 368,
    left: 46,
    borderRadius: 20,
    width: 256,
    height: 45,
    flexDirection: "column",
    paddingHorizontal: 36,
    paddingVertical: 11,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#dae5d0",
  },
  whoIsRegisteringBtnValue: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Inter_regular",
  },
  passwordBtnLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  btnTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  btnSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  outerLayout: {
    width: 206,
    position: "absolute",
  },
  registerFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  rgistrationCommanChild: {
    top: 194,
    left: 29,
    backgroundColor: Color.blanchedalmond_100,
    width: 290,
    height: 469,
  },
  nameBtn: {
    top: 218,
    justifyContent: "center",
    paddingVertical: 0,
    fontFamily: FontFamily.interRegular,
    paddingHorizontal: Padding.p_17xl,
    height: 45,
    width: 256,
    backgroundColor: Color.beige,
    left: 46,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  emailBtn: {
    top: 289,
    justifyContent: "center",
    paddingVertical: 0,
    fontFamily: FontFamily.interRegular,
    paddingHorizontal: Padding.p_17xl,
    height: 45,
    width: 256,
    backgroundColor: Color.beige,
    left: 46,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  ageBtn: {
    top: 447,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    paddingHorizontal: Padding.p_17xl,
    height: 45,
    backgroundColor: Color.beige,
    width: 256,
    left: 46,
  },
  passwordBtn: {
    top: 526,
    paddingVertical: 5,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_17xl,
    height: 45,
    backgroundColor: Color.beige,
    fontFamily: FontFamily.interRegular,
    width: 256,
    left: 46,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  registerAccount: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    height: 41,
    width: 206,
    position: "absolute",
  },
  register: {
    width: 115,
    height: 20,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  registerBtn: {
    top: 578,
    left: 14,
    backgroundColor: Color.silver,
    width: 165,
    height: 49,
    paddingHorizontal: 6,
    alignItems: "flex-end",
  },
  outer: {
    top: 109,
    left: 77,
    height: 627,
  },
  whoIsRegisteringBtn: {
    top: 597,
    height: 167,
    width: 256,
    left: 46,
    position: "absolute",
  },
  rgistrationComman: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default RgistrationComman;
