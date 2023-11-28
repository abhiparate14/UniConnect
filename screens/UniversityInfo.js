import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import app from '../components/firebase_config'
import { getFirestore, doc, updateDoc} from 'firebase/firestore';

const UniversityInfo = (p) => {
  const navigation = useNavigation();
  const id = p.route.params.id;
  // console.log(id);
  const [address,setAddress]=React.useState('');
  const [contact,setContact]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [city,setCity]=React.useState('');

  const beforeNavigation = async() => {
    // console.log("before navigation");
    // console.log(address);
    // console.log(contact);
    // console.log(email);
    // console.log(city);
    try {
      const db = getFirestore(app); // Import firestore from firebase_config.js
      const universityData = {
        address: address,
        contact: contact,
        contact_email: email,
        city: city,
        MyInstructors: [],
      };
      // Update document in university collection
      const docRef = doc(db, 'university', id);
      await updateDoc(docRef, universityData);
      console.log('updated');
      navigation.navigate("UniversityLogin");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  }



  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome user</Text>
      <View style={styles.box}>
        <Text style={styles.moreInfo}>
          More Infomaton about University
        </Text>
        <TextInput 
          style={styles.infotxt}
          onChangeText={(text)=>setAddress(text)}
        >
          Address
        </TextInput>
        <TextInput 
          style={styles.other}
          onChangeText={(text)=>setContact(text)}
        >
          Contact No
        </TextInput>
        <TextInput 
          style={styles.other}
          onChangeText={(text)=>setEmail(text)}
        >
          Contact Email
        </TextInput>
        <TextInput 
          style={styles.other}
          onChangeText={(text)=>setCity(text)}
        >
          City
        </TextInput>
        <TouchableOpacity
        style={styles.btnBox}
        onPress={()=>beforeNavigation()}
        >
          <Text style={styles.btnTxt}>Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fefbe7',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    marginTop: 60,
    marginLeft: 30,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    fontWeight: 'bold',
    color: Color.black,
    top: '-5%'
  },
  box: {
    backgroundColor: '#f9ebc8',
    width: '90%',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingTop: 20
  },
  moreInfo: {
    fontSize: 22,
    width: '50%',
    textAlign: 'center',
  },
  infotxt: {
    marginTop: 30,
    backgroundColor: '#dae5d0',
    paddingVertical: 50,
    paddingHorizontal: 80,
    borderRadius: 20,
    fontSize: 20,
  },
  other: {
    marginTop: 20,
    backgroundColor: '#dae5d0',
    paddingVertical: 20,
    paddingHorizontal: 80,
    borderRadius: 20,
    fontSize: 20
  },
  btnBox: {
    backgroundColor: '#a0bcc2',
    padding: 10,
    borderRadius: 15,
    bottom: '-15%'
  },
  btnTxt: {
    fontSize: 20
  }
});

export default UniversityInfo;
