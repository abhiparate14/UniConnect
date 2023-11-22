import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const InstructorContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
    <Text style={styles.signInText}>Sign-In As:</Text>
      <Pressable
        style={styles.buttonCover}
        onPress={() => navigation.navigate("InstructorLogin")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/dashiconsadminusers.png")}
        />
        <Text style={styles.txt1}>
          Instructor
        </Text>
      </Pressable>
      <Pressable
        style={styles.buttonCover}
        onPress={() => navigation.navigate("UniversityLogin")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/launiversity.png")}
        />
        <Text style={styles.txt1}>
          University
        </Text>
      </Pressable>
      <Pressable
        style={styles.buttonCover}
        onPress={() => navigation.navigate("StudentLogin")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/phstudent.png")}
          />
        <Text style={styles.txt1}>Student</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  signIn: {
    backgroundColor: Color.blanchedalmond_100,
    width: '80%',
    borderRadius: Border.br_xl,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  buttonCover: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.beige,
    height: 60,
    width: '80%',
    borderRadius: Border.br_xl,
    marginVertical: 20,
    paddingHorizontal: Padding.p_2xl,
  },
  icon: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  txt1: {
    marginLeft: 33,
    textAlign: 'left',
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  signInText: {
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
});

export default InstructorContainer;
