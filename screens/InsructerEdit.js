import * as React from "react";
import { StyleSheet, View, ScrollView, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const InsructerEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.insructerEdit}>
      <View style={styles.studentListView} />
      <View style={styles.insructerEditChild} />
      <ScrollView style={styles.editLogoParent}>
        <Image
          style={[styles.editLogoIcon, styles.editPosition]}
          contentFit="cover"
          source={require("../assets/edit-logo.png")}
        />
        <View style={[styles.name, styles.optionLayout]}>
          <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
        </View>
        <View style={[styles.email, styles.optionLayout]}>
          <Text style={[styles.name1, styles.name1Typo]}>Email</Text>
        </View>
        <View style={[styles.contactNo, styles.optionLayout]}>
          <Text style={[styles.name1, styles.name1Typo]}>Contact No</Text>
        </View>
        <View style={[styles.password, styles.optionLayout]}>
          <Text style={[styles.name1, styles.name1Typo]}>Password</Text>
        </View>
        <View style={styles.eduDetails}>
          <Text style={[styles.educationalDetails, styles.name1Typo]}>
            Educational Details
          </Text>
        </View>
        <View style={[styles.option1, styles.optionLayout]}>
          <Text style={[styles.name1, styles.name1Typo]}>Option 1</Text>
        </View>
        <View style={[styles.option2, styles.optionLayout]}>
          <Text style={[styles.name1, styles.name1Typo]}>Option 2</Text>
        </View>
      </ScrollView>
      <View style={[styles.insructerEditItem, styles.editPosition]} />
      <Text style={styles.edit}>Edit</Text>
      <Pressable
        style={[styles.saveBtn, styles.btnLayout]}
        onPress={() => navigation.navigate("InsructerDetails")}
      >
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </Pressable>
      <Pressable
        style={[styles.cancleBtn, styles.btnLayout]}
        onPress={() => navigation.navigate("InsructerDetails")}
      >
        <Text style={[styles.cancle, styles.saveTypo]}>Cancle</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  editPosition: {
    top: 0,
    position: "absolute",
  },
  optionLayout: {
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_27xl,
    height: 60,
    backgroundColor: Color.beige,
    left: 0,
    width: 242,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  name1Typo: {
    opacity: 0.4,
    fontSize: FontSize.size_xl,
    height: 28,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    lineHeight: 34,
  },
  btnLayout: {
    paddingVertical: Padding.p_4xs,
    height: 51,
    top: 731,
    backgroundColor: Color.beige,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  saveTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
    fontSize: FontSize.size_xl,
  },
  studentListView: {
    top: 119,
    left: 41,
    backgroundColor: Color.blanchedalmond_100,
    width: 280,
    height: 603,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  insructerEditChild: {
    top: 198,
    left: 62,
    backgroundColor: Color.silver,
    width: 140,
    height: 35,
    display: "none",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  editLogoIcon: {
    left: 87,
    height: 68,
    width: 68,
  },
  name1: {
    width: 134,
  },
  name: {
    top: 87,
  },
  email: {
    top: 166,
  },
  contactNo: {
    top: 245,
  },
  password: {
    top: 324,
  },
  educationalDetails: {
    width: 153,
  },
  eduDetails: {
    top: 403,
    height: 102,
    paddingHorizontal: 43,
    paddingVertical: Padding.p_base,
    alignItems: "flex-end",
    backgroundColor: Color.beige,
    left: 0,
    width: 242,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  option1: {
    top: 524,
  },
  option2: {
    top: 603,
  },
  editLogoParent: {
    top: 116,
    left: 59,
    maxWidth: 242,
    width: 242,
    position: "absolute",
    flex: 1,
  },
  insructerEditItem: {
    left: 1,
    width: 360,
    height: 116,
    backgroundColor: Color.ivory,
    top: 0,
  },
  edit: {
    top: 37,
    left: 153,
    fontSize: FontSize.size_5xl,
    width: 109,
    height: 28,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    lineHeight: 34,
    position: "absolute",
  },
  save: {
    width: 61,
    height: 27,
  },
  saveBtn: {
    left: 12,
    width: 131,
    paddingHorizontal: 0,
    alignItems: "center",
  },
  cancle: {
    height: 24,
    width: 68,
  },
  cancleBtn: {
    left: 240,
    paddingHorizontal: Padding.p_lg,
    width: 109,
    alignItems: "flex-end",
  },
  insructerEdit: {
    width: "100%",
    height: 800,
    flex: 1,
    backgroundColor: Color.ivory,
  },
});

export default InsructerEdit;
