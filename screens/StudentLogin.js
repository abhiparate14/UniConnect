import * as React from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Padding, Color } from "../GlobalStyles";
// import { initializeApp } from 'firebase/app';
import {app} from '../components/firebase_config';
// import { getFirestore ,getDoc ,doc} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import { StatusBar } from "expo-status-bar";

const StudentLogin = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const auth = getAuth(app);

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


  const usernameTextHandler = (username) => {
    setUsername(username);
  }

  const passwordTextHandler = (password) => {
    setPassword(password);
  }



  const beforeNavigation = () => {
    // printDetails();
    signInUser(username, password);

  }

  function forgetPassword() {
    console.log("inside forgot password");
    sendPasswordResetEmail(auth, username)
    .then(() => {
      alert("Password Reset Mail Sent !!");
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorMessage = error.message);
      console.log(errorCode);
    });
  }
  
  return (
    <View style={styles.studentLogin}>
      <StatusBar/>
      <Text style={styles.header}>STUDENT</Text>
      <View style={styles.midddleBox} >
        <TextInput
          style={styles.inputbox}
          placeholder="Username"
          keyboardType='email-address'
          placeholderTextColor="#000"
          value={username}
          onChangeText={usernameTextHandler}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputbox}
          placeholder="Password"
          keyboardType="default"
          placeholderTextColor="#000"
          value={password}
          onChangeText={passwordTextHandler}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <Pressable
          style={styles.signIn}
          onPress={() => beforeNavigation()}
        >
          <Text style={styles.signintxt}>Sign In</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.forgetPasswordBox}
        onPress={() => forgetPassword()}
      >
        <Text style={styles.forgotPassword}>
          Forgot Password
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  studentLogin: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.black,
    textAlign: "left",
    top: '15%',
    position: 'absolute'
  },
  midddleBox: {
    backgroundColor: Color.blanchedalmond_100,
    borderRadius: Border.br_xl,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    paddingVertical: 30,
    marginVertical: 10,
  },
  inputbox: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_18xl,
    height: 60,
    width: '85%',
    backgroundColor: Color.beige,
    borderRadius: Border.br_xl,
    marginVertical: 10,
  },
  signIn: {
    marginTop: 20,
    backgroundColor: Color.silver,
    paddingHorizontal: Padding.p_57xl,
    paddingVertical: Padding.p_smi,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: Border.br_xl,
  },
  signintxt: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: "left",
    fontWeight: 'bold',
  },
  forgetPasswordBox: {
    position: 'absolute',
    zIndex: 1,
    justifyContent: "flex-end",
    top: '90%'
  },
  forgotPassword: {
    textDecorationLine: "underline",
    color: Color.red,
    textAlign: "left",
    zIndex: 2,
    fontSize: FontSize.size_xl,
  },
});

export default StudentLogin;
