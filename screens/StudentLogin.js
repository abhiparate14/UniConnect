import * as React from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Padding, Color } from "../GlobalStyles";
// import { initializeApp } from 'firebase/app';
import {app} from '../components/firebase_config';
import { getFirestore ,getDoc ,doc} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";

const StudentLogin = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const auth = getAuth(app);
  // const [isError, setError] = React.useState(false);

  // start of firebase

  function signInUser(email, password){
    if(email === '' || password === ''){
      alert("Please enter email and password");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
      navigation.navigate("StudentHome", {id: username});
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error code:", errorCode);
      console.log("error message:", errorMessage);
      alert(errorMessage);
    });
    
  }

  // get the data from firebase
  async function getUserData(username,password){
    const db = getFirestore(app);
    const docRef = doc(db, "student", username);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      signInUser(username,password);
      
      // alert(`Your name is ${docSnap.data().email}`);
    } else {
      // doc.data() will be undefined in this case
      console.log("Invalid User !!!");
      alert("Invalid User !!!");
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
    // signInUser(username, password);
    getUserData(username,password);
    // navigation.navigate("StudentHome");
  }

  function forgetPassword() {
    console.log("inside forgot password");
    sendPasswordResetEmail(auth, username)
    .then(() => {
      // Password reset email sent!
      alert("Password Reset Mail Sent !!");
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorMessage = error.message);
      console.log(errorCode);
    });
  }

  return (
    <View style={styles.studentLogin}>
      <View style={[styles.studentLoginChild, styles.signInLayout]} />
      <TextInput
        style={[styles.username, styles.usernameLayout]}
        placeholder="Username"
        keyboardType='email-address'
        placeholderTextColor="#000"
        value={username}
        onChangeText={usernameTextHandler}
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.password, styles.usernameLayout]}
        placeholder="Password"
        keyboardType="default"
        placeholderTextColor="#000"
        value={password}
        onChangeText={passwordTextHandler}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <Pressable
        style={[styles.signIn, styles.signInLayout]}
        onPress={() => beforeNavigation()}
      >
        <Text style={[styles.signIn1, styles.signIn1Clr]}>Sign In</Text>
      </Pressable>
      <Text style={[styles.student, styles.signIn1Clr]}>STUDENT</Text>

      <Pressable
        style={[styles.forgetPasswordBox]}
        onPress={() => forgetPassword()}
      >
        <Text style={[styles.forgotPassword, styles.signIn1Typo]}>
          Forgot Password
        </Text>
      </Pressable>
      {/* <Text style={[styles.forgotPassword, styles.signIn1Typo]}>
        Forgot Password
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  forgetPasswordBox: {
    borderRadius: Border.br_xl,
    position: "relative",
    top: 700,
    left: 71,
    zIndex: 1,
    backgroundColor: Color.beige,
    width: 218,
    height: 51,
    paddingHorizontal: Padding.p_57xl,
    paddingVertical: Padding.p_smi,
    justifyContent: "flex-end",
  },
  forgotPassword: {
    top: 0,
    left: -40,
    textDecorationLine: "underline",
    color: Color.red,
    height: 27,
    width: 160,
    textAlign: "left",
    // position: "relative",
    zIndex: 2,
  },
  signInLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
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
  signIn1: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
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
  student: {
    top: 98,
    left: 122,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
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
