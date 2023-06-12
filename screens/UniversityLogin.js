import * as React from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Padding, Color } from "../GlobalStyles";

const UniversityLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.universityLogin}>
      <View style={[styles.universityLoginChild, styles.signInLayout]} />
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
        onPress={() => navigation.navigate("UniversityDetails")}
      >
        <Text style={[styles.signIn1, styles.signIn1Clr]}>Sign In</Text>
      </Pressable>
      <View style={styles.outerText}>
        <Text style={[styles.university, styles.signIn1Clr]}>University</Text>
        <Pressable
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("UniversityHome")}
        >
          <Text style={[styles.forgotPassword1, styles.signIn1Typo]}>
            Forgot Password
          </Text>
        </Pressable>
      </View>
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
  universityLoginChild: {
    top: 184,
    left: 35,
    backgroundColor: Color.blanchedalmond_100,
    width: 290,
    height: 345,
  },
  username: {
    top: 238,
  },
  password: {
    top: 336,
  },
  signIn1: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  signIn: {
    top: 434,
    left: 71,
    backgroundColor: Color.silver,
    width: 218,
    height: 51,
    paddingHorizontal: Padding.p_57xl,
    paddingVertical: Padding.p_smi,
    justifyContent: "flex-end",
  },
  university: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
  },
  forgotPassword1: {
    // textDecoration: "underline",
    color: Color.red,
    width: 160,
    textAlign: "left",
  },
  forgotPassword: {
    marginTop: 508,
  },
  outerText: {
    top: 97,
    left: 100,
    height: 561,
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    position: "absolute",
  },
  universityLogin: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default UniversityLogin;
