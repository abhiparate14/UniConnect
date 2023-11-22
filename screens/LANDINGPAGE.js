import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import InstructorContainer from "../components/InstructorContainer";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
import Topbar1 from "../components/Topbar1";

const LANDINGPAGE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.landingPage}>
      {/* <Topbar1/> */}
      <InstructorContainer />
      <View style={styles.downContent}>
        <Text style={styles.txt1}>
            Are you new here?
          </Text>
      </View>
      <View style={styles.login}>
        <Pressable
          style={styles.box}
          onPress={() => navigation.navigate("RgistrationComman")}
          >
            <Text style={styles.txt2}>
              Create a account
            </Text>
          </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  landingPage: {
    flex: 1,
    backgroundColor: Color.ivory,
    height: '100%',
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  downContent: {
    padding: 20,
    marginTop: 20,
  },
  txt1: {
    textAlign: "left",
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: "#525f7f",
  },
  box: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    width: "100%",
    paddingHorizontal: 45,
    paddingVertical: 15,
  },
  txt2: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.black,
    textAlign: "center",
  },
});

export default LANDINGPAGE;
