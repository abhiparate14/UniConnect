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
        email: email,
        city: city,
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
    <View style={styles.universityInfo}>
      <View style={styles.universityInfoChild} />
      <Text style={[styles.welcomeUser, styles.welcomeUserTypo]}>
        Welcome user
      </Text>
      <Text style={[styles.moreInfomatonAbout, styles.welcomeUserTypo]}>
        More Infomaton about University
      </Text>
      <View style={styles.universityInfoItem} />
      <TextInput 
      style={[styles.address, styles.contactTypo]}
      onChangeText={(text)=>setAddress(text)}
      >address
      </TextInput>
      <View style={[styles.universityInfoInner, styles.universityLayout]} />
      <View style={[styles.rectangleView, styles.universityLayout]} />
      <View style={[styles.universityInfoChild1, styles.universityLayout]} />
      <TextInput 
      style={[styles.contactNo, styles.contactTypo]}
      onChangeText={(text)=>setContact(text)}
      >Contact No</TextInput>
      <TextInput style={[styles.contactEmail, styles.contactTypo]}
      onChangeText={(text)=>setEmail(text)}
      >
        Contact Email
      </TextInput>
      {/* <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("UniversityDetails")}
      /> */}
      {/* <Text style={[styles.skip, styles.skipTypo]}>Skip</Text> */}
      <TouchableOpacity
        style={[styles.universityInfoChild2, styles.rectanglePressableLayout]}
        onPress={()=>beforeNavigation()}
      />
      <TextInput style={[styles.city, styles.contactTypo]}
      onChangeText={(text)=>setCity(text)}
      >City</TextInput>
      <Text style={[styles.next, styles.skipTypo]}>Finish</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeUserTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  contactTypo: {
    opacity: 0.6,
    left: 96,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  universityLayout: {
    height: 44,
    width: 264,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
    left: 48,
    position: "absolute",
  },
  rectanglePressableLayout: {
    height: 40,
    backgroundColor: Color.silver,
    top: 710,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  skipTypo: {
    top: 717,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  universityInfoChild: {
    top: 137,
    left: 35,
    borderRadius: Border.br_xl,
    backgroundColor: Color.blanchedalmond_100,
    width: 291,
    height: 458,
    position: "absolute",
  },
  welcomeUser: {
    top: 74,
    left: 27,
    width: 180,
    height: 22,
  },
  moreInfomatonAbout: {
    top: 147,
    left: 111,
    width: 163,
    height: 34,
  },
  universityInfoItem: {
    top: 236,
    height: 117,
    width: 264,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
    left: 48,
    position: "absolute",
  },
  address: {
    top: 287,
    width: 141,
    height: 16,
  },
  universityInfoInner: {
    top: 377,
  },
  rectangleView: {
    top: 445,
  },
  universityInfoChild1: {
    top: 513,
  },
  contactNo: {
    top: 387,
    width: 148,
    height: 25,
  },
  contactEmail: {
    top: 454,
    width: 136,
    height: 25,
  },
  rectanglePressable: {
    left: 15,
    width: 102,
  },
  skip: {
    left: 40,
    width: 77,
    height: 25,
  },
  universityInfoChild2: {
    left: 247,
    width: 98,
  },
  next: {
    left: 277,
    width: 63,
    height: 13,
  },
  city: {
    top: 525,
    width: 83,
    height: 20,
  },
  universityInfo: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default UniversityInfo;
