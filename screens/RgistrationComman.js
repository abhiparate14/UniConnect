import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text, Pressable, TouchableOpacity } from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Padding, Color } from "../GlobalStyles";
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
    setUsernameText(username);
  }

  const emailTextHandler = (email) => {
    setEmailText(email);
  }

  const ageTextHandler = (age) => {
    setAgeText(age);
  }

  const passwordTextHandler = (password) => {
    setPasswordText(password);
  }

  const navigatetoanotherpage = (x) => {
    // printDetails();
    if (valueDropDown == 'student') {
      myPageName = 'StudentHome';
      navigation.navigate(myPageName);
    } else if (valueDropDown == 'instructor') {
      myPageName = 'InstructerInfo';
      navigation.navigate(myPageName);
    } else if (valueDropDown == 'university') {
      myPageName = 'UniversityInfo';
      navigation.navigate(myPageName);
    } else {
      myPageName = 'LANDINGPAGE';
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

  return (
    <View style={styles.registrationCommon}>
      <View style={[styles.registrationCommonChild, styles.passwordBtnLayout]} />
      <TextInput
        style={[styles.nameBtn, styles.btnTypo]}
        placeholder="User Name"
        placeholderTextColor="#000"
        value={usernameText}
        onChangeText={usernameTextHandler}
      />
      <TextInput
        style={[styles.emailBtn, styles.btnTypo]}
        placeholder="Email"
        placeholderTextColor="#000"
        value={emailtext}
        onChangeText={emailTextHandler}
      />
      <View style={[styles.btnTypo]}>
        <TouchableOpacity 
        style={[styles.dobBtnDatePickerPlaceHolder]}
        onPress={() => {showDatePicker()}}
        >
          <Text 
          style={[styles.dobBtnDatePickerValue]} 
          >
            {selectedDate}
            </Text>
        </TouchableOpacity>
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      </View>

      <TextInput
        style={[styles.ageBtn, styles.btnSpaceBlock]}
        placeholder="Age"
        placeholderTextColor="#000"
        value={agetext}
        onChangeText={ageTextHandler}
      />
      <TextInput
        style={[styles.passwordBtn, styles.btnTypo]}
        placeholder="Password"
        placeholderTextColor="#000"
        value={passwordtext}
        onChangeText={passwordTextHandler}
      />
      <Text style={[styles.registerAccount, styles.registerFlexBox]}>
        Register Account
      </Text>
      <Pressable
        style={[styles.registerBtn, styles.btnSpaceBlock]}
        onPress={() => navigatetoanotherpage(valueDropDown)}
      >
        <Text style={[styles.register, styles.registerFlexBox]}>Register</Text>
      </Pressable>
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
  );
};

const styles = StyleSheet.create({
  
  dobBtnDatePickerValue: {
    left: 0,
    top: 10,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    paddingHorizontal: Padding.p_17xl,
  },
  whoIsRegisteringBtnValue: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Inter_regular",
    fontSize: FontSize.size_lg,
    paddingHorizontal: Padding.p_17xl,
  },
  passwordBtnLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  btnTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  btnSpaceBlock: {
    paddingVertical: Padding.p_2xs,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  registerFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  registrationCommonChild: {
    top: 194,
    left: 29,
    backgroundColor: Color.blanchedalmond_100,
    width: 290,
    height: 469,
  },
  nameBtn: {
    top: 218,
    justifyContent: "center",
    paddingVertical: 0,
    fontFamily: FontFamily.interRegular,
    paddingHorizontal: Padding.p_17xl,
    height: 45,
    width: 256,
    backgroundColor: Color.beige,
    left: 46,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  emailBtn: {
    top: 289,
    justifyContent: "center",
    paddingVertical: 0,
    fontFamily: FontFamily.interRegular,
    paddingHorizontal: Padding.p_17xl,
    height: 45,
    width: 256,
    backgroundColor: Color.beige,
    left: 46,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  ageBtn: {
    top: 363, // Adjusted the top position
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    paddingHorizontal: Padding.p_17xl,
    height: 45,
    backgroundColor: Color.beige,
    width: 256,
    left: 46,
  },
  dobBtnDatePickerPlaceHolder: {
    top: 437,
    height: 45,
    width: 256,
    left: 46,
    fontFamily: "Inter_regular",
    backgroundColor: Color.beige,
    fontSize: 20,
    borderRadius: Border.br_xl,
  },
  passwordBtn: {
    top: 526,
    paddingVertical: 5,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_17xl,
    height: 45,
    backgroundColor: Color.beige,
    fontFamily: FontFamily.interRegular,
    width: 256,
    left: 46,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  registerAccount: {
    top: 109,
    left: 77,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 206,
    height: 41,
    position: "absolute",
    color: Color.black,
  },
  register: {
    width: 115,
    height: 20,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  registerBtn: {
    top: 687,
    left: 91,
    backgroundColor: Color.silver,
    width: 165,
    height: 49,
    paddingHorizontal: 6,
    alignItems: "flex-end",
  },
  whoIsRegisteringBtn: {
    top: 597,
    height: 49,
    width: 256,
    left: 46,
    position: "absolute",
  },
  registrationCommon: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default RegistrationCommon;
