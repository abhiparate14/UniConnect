import * as React from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Padding, Color } from "../GlobalStyles";

const StudentLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.studentLogin}>
      <View style={[styles.studentLoginChild, styles.signInLayout]} />
      <TextInput
        style={[styles.username, styles.usernameLayout]}
        placeholder="Username"
        keyboardType="default"
        placeholderTextColor="#000"
      />
      <TextInput
        style={[styles.password, styles.usernameLayout]}
        placeholder="Password"
        keyboardType="default"
        placeholderTextColor="#000"
      />
      <Pressable
        style={[styles.signIn, styles.signInLayout]}
        onPress={() => navigation.navigate("StudentHome")}
      >
        <Text style={[styles.signIn1, styles.signIn1Clr]}>Sign In</Text>
      </Pressable>
      <Text style={[styles.student, styles.signIn1Clr]}>STUDENT</Text>
      <Text style={[styles.forgotPassword, styles.signIn1Typo]}>
        Forgot Password
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signInLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  usernameLayout: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_18xl,
    height: 60,
    width: 250,
    backgroundColor: Color.beige,
    left: 55,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  signIn1Clr: {
    color: Color.black,
    textAlign: "left",
  },
  signIn1Typo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  studentLoginChild: {
    top: 185,
    left: 35,
    backgroundColor: Color.blanchedalmond_100,
    width: 290,
    height: 345,
  },
  username: {
    top: 239,
  },
  password: {
    top: 337,
  },
  signIn1: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  signIn: {
    top: 435,
    left: 71,
    backgroundColor: Color.silver,
    width: 218,
    height: 51,
    paddingHorizontal: Padding.p_57xl,
    paddingVertical: Padding.p_smi,
    justifyContent: "flex-end",
  },
  student: {
    top: 98,
    left: 122,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    position: "absolute",
  },
  forgotPassword: {
    top: 704,
    left: 95,
    textDecorationLine: "underline",
    color: Color.red,
    width: 160,
    textAlign: "left",
    position: "absolute",
  },
  studentLogin: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default StudentLogin;
