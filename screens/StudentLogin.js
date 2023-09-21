import * as React from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Padding, Color } from "../GlobalStyles";
import { initializeApp } from 'firebase/app';
// import { getFirestore} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

const StudentLogin = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isError, setError] = React.useState(false);

  // start of firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBcbuLJaODarVj-wngx47X3D2vlsiETTdY",
    authDomain: "notes-app-44.firebaseapp.com",
    databaseURL: "https://notes-app-44-default-rtdb.firebaseio.com",
    projectId: "notes-app-44",
    storageBucket: "notes-app-44.appspot.com",
    messagingSenderId: "70213484242",
    appId: "1:70213484242:web:ec0208ffd06279a4ee770b",
    measurementId: "G-VV2PSYYYFV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function signInUser(email, password){
    const auth = getAuth(app);
    if(email === '' || password === ''){
      alert("Please enter email and password");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error code:", errorCode);
      console.log("error message:", errorMessage);
      alert(errorMessage);
      setError(true);
    });
    if(!isError){
      navigation.navigate("StudentHome");
    }
    
  }
  // end of firebase

  const usernameTextHandler = (username) => {
    setUsername(username);
  }

  const passwordTextHandler = (password) => {
    setPassword(password);
  }

  const printDetails = () => {
    console.log("Username: "+username+"\n"+"Password:"+password);
  }

  const beforeNavigation = () => {
    // printDetails();
    signInUser(username, password);
    // navigation.navigate("StudentHome");
  }

  return (
    <View style={styles.studentLogin}>
      <View style={[styles.studentLoginChild, styles.signInLayout]} />
      <TextInput
        style={[styles.username, styles.usernameLayout]}
        placeholder="Username"
        keyboardType="default"
        placeholderTextColor="#000"
        value={username}
        onChangeText={usernameTextHandler}
      />
      <TextInput
        style={[styles.password, styles.usernameLayout]}
        placeholder="Password"
        keyboardType="default"
        placeholderTextColor="#000"
        value={password}
        onChangeText={passwordTextHandler}
      />
      <Pressable
        style={[styles.signIn, styles.signInLayout]}
        onPress={() => beforeNavigation()}
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
