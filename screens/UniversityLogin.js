import * as React from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Padding, Color } from "../GlobalStyles";
import {app} from '../components/firebase_config';
import { getFirestore ,getDoc ,doc} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { StatusBar } from "expo-status-bar";

const UniversityLogin = () => {
  const navigation = useNavigation();const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isError, setError] = React.useState(false);

  // start of firebase

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
      // notification();
      navigation.navigate("UniversityHome");
    }
    
  }
  // get the data from firebase
  async function getUserData(username,password){
    const db = getFirestore(app);
    const docRef = doc(db, "university", username);
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
    // navigation.navigate("UniversityDetails");
    getUserData(username,password);
  }
  
  return (
    <View style={styles.studentLogin}>
      <Text style={styles.header}>University</Text>
      <StatusBar/>
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
        onPress={() => navigation.navigate("UniversityHome")}
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
  // signInLayout: {
  //   borderRadius: Border.br_xl,
  //   position: "absolute",
  // },
  // usernameLayout: {
  //   fontSize: FontSize.size_lg,
  //   fontFamily: FontFamily.interRegular,
  //   paddingVertical: Padding.p_lg,
  //   paddingHorizontal: Padding.p_18xl,
  //   height: 60,
  //   width: 250,
  //   backgroundColor: Color.beige,
  //   left: 55,
  //   borderRadius: Border.br_xl,
  //   position: "absolute",
  // },
  // signIn1Clr: {
  //   color: Color.black,
  //   textAlign: "left",
  // },
  // signIn1Typo: {
  //   fontSize: FontSize.size_xl,
  //   fontFamily: FontFamily.interRegular,
  // },
  // universityLoginChild: {
  //   top: 184,
  //   left: 35,
  //   backgroundColor: Color.blanchedalmond_100,
  //   width: 290,
  //   height: 345,
  // },
  // username: {
  //   top: 238,
  // },
  // password: {
  //   top: 336,
  // },
  // signIn1: {
  //   textAlign: "left",
  //   fontSize: FontSize.size_xl,
  //   fontFamily: FontFamily.interRegular,
  // },
  // signIn: {
  //   top: 434,
  //   left: 71,
  //   backgroundColor: Color.silver,
  //   width: 218,
  //   height: 51,
  //   paddingHorizontal: Padding.p_57xl,
  //   paddingVertical: Padding.p_smi,
  //   justifyContent: "flex-end",
  // },
  // university: {
  //   top: 97,
  //   left: 120,
  //   fontSize: FontSize.size_5xl,
  //   fontWeight: "700",
  //   fontFamily: FontFamily.interBold,
  //   textAlign: "left",
  //   position: "absolute",
  // },
  // forgotPassword1: {
  //   textDecorationLine: "underline",
  //   color: Color.red,
  //   width: 160,
  //   textAlign: "left",
  // },
  // forgotPassword: {
  //   left: 100,
  //   top: 634,
  //   position: "absolute",
  // },
  // universityLogin: {
  //   backgroundColor: Color.ivory,
  //   flex: 1,
  //   width: "100%",
  //   height: 800,
  //   overflow: "hidden",
  // },
});

export default UniversityLogin;
