import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import InstructorContainer from "../components/InstructorContainer";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const LANDINGPAGE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.landingPage}>
      <InstructorContainer />
      <View>
        <Text style={[styles.areYouNew, styles.areYouNewFlexBox]}>
            Are you new here?
          </Text>
      </View>
      <View style={styles.login}>
        <Text style={[styles.dopeStudioWith, styles.areYouNewFlexBox]}>
          Create a account
        </Text>
        <Pressable
          style={styles.loginChild}
          onPress={() => navigation.navigate("RgistrationComman")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  areYouNewFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  loginChild: {
    height: "40.98%",
    top: "59.02%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    position: "absolute",
    width: "100%",
  },
  dopeStudioWith: {
    top: "69.67%",
    left: "28.35%",
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.black,
  },
  areYouNew: {
    top: 140,
    left: -105,
    fontSize: FontSize.size_6xl,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: "#525f7f",
  },
  login: {
    width: 328,
    height: 122,
    marginTop: 116,
  },
  landingPage: {
    backgroundColor: Color.ivory,
    flex: 1,
    height: 800,
    overflow: "hidden",
    paddingLeft: Padding.p_lg,
    paddingTop: Padding.p_69xl,
    paddingRight: Padding.p_sm,
    paddingBottom: Padding.p_69xl,
    alignItems: "center",
    width: "100%",
  },
});

export default LANDINGPAGE;
