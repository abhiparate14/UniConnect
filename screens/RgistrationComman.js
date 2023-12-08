import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text, Pressable, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Padding, Color } from "../GlobalStyles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {app} from '../components/firebase_config' 
import { getFirestore, setDoc, doc, getDoc} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { StatusBar } from "expo-status-bar";


const RegistrationCommon = () => {
  const [isDropDownVisible, setDropDownVisible] = useState(false);
  const [valueDropDown, setValueDropDown] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Select Date of Birth');
  const [usernameText, setUsernameText] = useState('');
  const [emailtext, setEmailText] = useState('');
  const [agetext, setAgeText] = useState('');
  const [passwordtext, setPasswordText] = useState('');
  const navigation = useNavigation();
  const [isError, setError] = useState(false);

  //STARTFIREBASE-AUTH
  
  // end firebase section
  
  var myPageName = 'LANDINGPAGE';
  
  const printDetails = () => {
    console.log("username is: " + usernameText);
    console.log("email is: " + emailtext);
    console.log("age is: " + agetext);
    console.log("password is: " + passwordtext);
    console.log("date is: " + selectedDate);
    console.log("type is: " + valueDropDown);
  }
  
  const usernameTextHandler = (username) => {
    if (username != ''){
      setUsernameText(username);
    }
    
  }

  const emailTextHandler = (email) => {
    if (email != ''){
      setEmailText(email);
    }
  }
  
  const ageTextHandler = (age) => {
    if (!isNaN(+age)) {
      setAgeText(age);
    }
    
  }

  const passwordTextHandler = (password) => {
    if (password != ''){
      setPasswordText(password);
    }
    
  }
  
  function createNewUser(email, password) {
    return new Promise((resolve, reject) => {
      const auth = getAuth(app);
      
      if (email === '' || password === '') {
        alert("Please enter email and password");
        reject("Invalid input");
        return;
      }
  
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Success");
          resolve();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error code:", errorCode);
          console.log("error message:", errorMessage);
          alert(errorMessage);
          reject(errorMessage);
        });
    });
  }
  
  const sendData = async () => {
    try {
      const firebase = getFirestore(app);
      const nowId = emailtext;
  
      await setDoc(doc(firebase, valueDropDown, nowId), {
        username: usernameText,
        email: emailtext,
        age: agetext,
        password: passwordtext,
        dob: selectedDate,
        type: valueDropDown,
        photo: "https://firebasestorage.googleapis.com/v0/b/notes-app-44.appspot.com/o/stock_image.png?alt=media&token=905bd8fd-1fae-4728-8069-803c666294b0",
        MyPreference: [],
        chatwith: [],
      });
  
      // console.log('inside send data');
    } catch (error) {
      console.error("Error sending data:", error);
      // You can handle the error here
    }
  };
  
  const navigatetoanotherpage = async () => {
    try {
      await createNewUser(emailtext, passwordtext);
      await sendData();
      // console.log("data sent");
  
      if (valueDropDown == 'student') {
        myPageName = 'StudentLogin';
        navigation.navigate(myPageName, { id: emailtext });
      } else if (valueDropDown == 'instructor') {
        myPageName = 'InstructerInfo';
        navigation.navigate(myPageName, { id: emailtext });
      } else if (valueDropDown == 'university') {
        myPageName = 'UniversityInfo';
        navigation.navigate(myPageName, { id: emailtext });
      } else {
        myPageName = 'LANDINGPAGE';
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error appropriately
    }
  };
  

  const whoIsRegisteringOptions = [
    { label: "Student", value: "student" },
    { label: "Instructor", value: "instructor" },
    { label: "University", value: "university" },
  ];

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dt = new Date(date);
    const temp_date  = dt.toISOString().split('T');
    const actual_date = temp_date[0].split('-');
    setSelectedDate(actual_date[2] + '/' + actual_date[1] + '/' + actual_date[0]);
    hideDatePicker();
  };


// retun components ------------------------------------------------------------------------

  return (
    <View style={styles.registrationCommon}>
      <StatusBar/>
      {/* <topbar/> */}
      <Text style={[styles.registerAccount, styles.registerFlexBox]}>
        Register Account
      </Text>
      <View style={styles.middleBox} >
      <TextInput
        style={styles.butttonBackground}
        placeholder="User Name"
        placeholderTextColor="#000"
        autoCapitalize='none'
        value={usernameText}
        onChangeText={usernameTextHandler}
      />
      <TextInput
        style={styles.butttonBackground}
        placeholder="Email"
        placeholderTextColor="#000"
        keyboardType='email-address'
        autoCapitalize='none'
        value={emailtext}
        onChangeText={emailTextHandler}
      />
      <View style={styles.butttonBackground}>
        <TouchableOpacity 
        style={[styles.dobBtnDatePickerPlaceHolder]}
        onPress={() => {showDatePicker()}}
        >
          <Text style={styles.dateTxt}>
            {selectedDate}
          </Text>
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.butttonBackground}
        placeholder="Age"
        placeholderTextColor="#000"
        value={agetext}
        keyboardType="numeric"
        onChangeText={ageTextHandler}
        
      />
      <TextInput
        style={styles.butttonBackground}
        placeholder="Password"
        placeholderTextColor="#000"
        autoCapitalize='none'
        value={passwordtext}
        onChangeText={passwordTextHandler}
        secureTextEntry={true}
      />
      <View style={styles.dropdown}>
        <View style={styles.whoIsRegisteringBtn}>
          <DropDownPicker
            open={isDropDownVisible}
            value={valueDropDown}
            setOpen={() => setDropDownVisible(!isDropDownVisible)}
            items={whoIsRegisteringOptions}
            labelStyle={styles.whoIsRegisteringBtnValue}
            setValue={(value) => setValueDropDown(value)}
            placeholder="Select Category"
            dropDownDirection="TOP"
            disableBorderRadius={true}
          />
        </View>
      </View>
      </View>
      <View style={styles.registerBtn}>
      <Pressable
          onPress={() => navigatetoanotherpage(valueDropDown)}
        >
        <Text style={styles.registerTxt}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registrationCommon: {
    flex: 1,
    backgroundColor: Color.ivory,
    width: "100%",
    height: '100%',
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  registerAccount: {
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
    marginTop: -50,
    marginBottom: 100
  },
  middleBox: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.blanchedalmond_100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    width: '80%'
  },
  butttonBackground: {
    width: '85%',
    fontSize: 20,
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    alignItems: 'center',
    fontFamily: FontFamily.interRegular,
    paddingHorizontal: 10,
    height: 45,
    backgroundColor: Color.beige,
    borderRadius: Border.br_xl,
    paddingHorizontal: 36,
    marginVertical: 10,
  },
  dateTxt: {
    fontSize: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: 'left',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  dropdown: {
    width: '82%',
    marginVertical: 10,
  },
  registerBtn: {
    backgroundColor: '#A0BCC2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 30,
    borderRadius: 20,
  },
  registerTxt: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: 'center',
    fontSize: 25,
  },

});

export default RegistrationCommon;
