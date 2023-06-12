import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const InstructorContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <Pressable
        style={[styles.instructor, styles.studentLayout]}
        onPress={() => navigation.navigate("InstructorLogin")}
      >
        <Image
          style={styles.dashiconsadminUsers}
          contentFit="cover"
          source={require("../assets/dashiconsadminusers.png")}
        />
        <Text style={[styles.instructor1, styles.student1Typo]}>
          Instructor
        </Text>
      </Pressable>
      <Pressable
        style={styles.university}
        onPress={() => navigation.navigate("UniversityLogin")}
      >
        <Image
          style={styles.launiversityIcon}
          contentFit="cover"
          source={require("../assets/launiversity.png")}
        />
        <Text style={[styles.university1, styles.student1Typo]}>
          University
        </Text>
      </Pressable>
      <Pressable
        style={[styles.student, styles.studentLayout]}
        onPress={() => navigation.navigate("StudentLogin")}
      >
        <Image
          style={styles.dashiconsadminUsers}
          contentFit="cover"
          source={require("../assets/phstudent.png")}
        />
        <Text style={[styles.student1, styles.student1Typo]}>Student</Text>
      </Pressable>
      <Text style={[styles.signInAs, styles.student1Typo]}>Sign-In As:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  studentLayout: {
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_2xl,
    flexDirection: "row",
    height: 60,
    width: 250,
    backgroundColor: Color.beige,
    left: 20,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  student1Typo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  dashiconsadminUsers: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  instructor1: {
    marginLeft: 35,
  },
  instructor: {
    top: 53,
  },
  launiversityIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  university1: {
    marginLeft: 33,
  },
  university: {
    top: 153,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_smi,
    paddingHorizontal: Padding.p_2xl,
    flexDirection: "row",
    height: 60,
    width: 250,
    backgroundColor: Color.beige,
    left: 20,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  student1: {
    marginLeft: 43,
  },
  student: {
    top: 253,
  },
  signInAs: {
    top: 11,
    left: 44,
    position: "absolute",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  signIn: {
    backgroundColor: Color.blanchedalmond_100,
    width: 290,
    height: 344,
    borderRadius: Border.br_xl,
  },
});

export default InstructorContainer;
