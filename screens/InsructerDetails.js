import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";
import app from "../components/firebase_config";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import InstructorBottomBar from "../components/InstructorBottomBar";


const InsructerDetails = (p) => {
  const navigation = useNavigation();
  const iid = p.route.params.id;
  React.useEffect(
    () => {
      async function getUserData(){
        const db = getFirestore(app);
        const docRef = doc(db, "instructor", iid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          // console.log(docSnap.data());
          
        } else {
          // doc.data() will be undefined in this case
          console.log("Invalid User !!!");
          // alert("Invalid User !!!");
        }
      }
      getUserData();
},[])

  return (
    <View style={styles.insructerDetails}>
      <InstructorBottomBar page={'InsructerDetails'} id={iid}/>
    </View>
  );
};

const styles = StyleSheet.create({
  insructerDetails: {
    backgroundColor: Color.ivory,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default InsructerDetails;
