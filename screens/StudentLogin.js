import * as React from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Padding, Color } from "../GlobalStyles";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFx_aqbn7z-7oRTCXw0y6GX644fpXNgHU",
  authDomain: "uniconnect-44.firebaseapp.com",
  projectId: "uniconnect-44",
  storageBucket: "uniconnect-44.appspot.com",
  messagingSenderId: "924017155867",
  appId: "1:924017155867:web:a7a4f5ece4c010c2ab7dbe",
  measurementId: "G-N217FSBXTF"
};

// Initialize Firebase



const StudentLogin = () => {
  // const navigation = useNavigation();
  function navigateToStudentHome() {
    // check the username and password
    // if correct then navigate to student home
    // else show error message

    // navigation.navigate("StudentHome");
    // console.log(analytics);
    // console.log(firebase);

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    console.log(analytics);
  }

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
        onPress={navigateToStudentHome}
      >
        <Text style={[styles.signIn1, styles.signIn1Clr]}>Sign In</Text>
      </Pressable>
      <View style={[styles.outerText, styles.outerTextLayout]}>
        <Text style={[styles.student, styles.signIn1Clr]}>STUDENT</Text>
        <Text style={[styles.forgotPassword, styles.outerTextLayout]}>
          Forgot Password
        </Text>
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
  outerTextLayout: {
    width: 160,
    position: "absolute",
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
    top: 0,
    left: 27,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    position: "absolute",
    color: Color.black,
  },
  forgotPassword: {
    top: 606,
    left: 0,
    // textDecoration: "underline",
    color: Color.red,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  outerText: {
    top: 98,
    left: 95,
    height: 630,
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
