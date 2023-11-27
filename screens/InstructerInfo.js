import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import app from "../components/firebase_config";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const InstructerInfo = (p) => {
  const navigation = useNavigation();
  const id=p.route.params.id;
  // console.log(id);
  const [educationDetails, setEducationDetails] = React.useState('');
  const [contactNo, setContactNo] = React.useState('');
  const [branch, setBranch] = React.useState('');

  const sendData = async() => {
    try {
      const db = getFirestore(app); // Import firestore from firebase_config.js
      const intructerData = {
        educationDetails: educationDetails,
        contactNo: contactNo,
        branch: branch,
      };
      // Update document in intructer collection
      const docRef = doc(db, 'instructor', id);
      await updateDoc(docRef, intructerData);
      console.log('updated');
      navigation.navigate("InstructorLogin");
    } catch (error) {
      console.error("Error updating document:", error);
    }
    // navigation.navigate("InstructerHome",{id:id})
  }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome User</Text>
      <View style={styles.box}>
        <Text style={styles.moreInfo}>
          More Infomaton about Instructor
        </Text>
        <TextInput
          style={styles.infotxt}
          placeholder="Education details"
          placeholderTextColor="#000"
          onChangeText={(text)=>setEducationDetails(text)}
        />
        <TextInput
          style={styles.other}
          placeholder="Contact No"
          autoCapitalize="none"
          placeholderTextColor="#000"
          onChangeText={(text)=>setContactNo(text)}
        />
        <TextInput
          style={styles.other}
          placeholder="Branch"
          autoCapitalize="none"
          placeholderTextColor="#000"
          onChangeText={(text)=>setBranch(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.btnBox}
        onPress={() => sendData()}
      >
        <Text style={styles.btnTxt}>Next</Text>
      </TouchableOpacity>
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
    top: '-10%'
  },
  box: {
    backgroundColor: '#f9ebc8',
    width: '90%',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 20
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
    bottom: '-10%'
  },
  btnTxt: {
    fontSize: 20
  }
});

export default InstructerInfo;
