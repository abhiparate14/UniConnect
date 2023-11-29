import * as React                         from "react";
import {  StyleSheet, View, Text }        from "react-native";
import { Image }                          from "expo-image";
import { useNavigation }                  from "@react-navigation/native";
import { getFirestore ,getDoc ,doc}       from 'firebase/firestore';
import { ref ,getStorage,getDownloadURL}  from "firebase/storage";
import { StatusBar }                      from "expo-status-bar";
import { ActivityIndicator }              from "react-native";
import { MaterialCommunityIcons }         from '@expo/vector-icons';
import { AntDesign }                      from '@expo/vector-icons';
import { MaterialIcons }                  from '@expo/vector-icons';
import { Fontisto }                       from '@expo/vector-icons';
import { app }                            from '../components/firebase_config';
import InstructorBottomBar from "../components/InstructorBottomBar";
import InstructorTopBar from "../components/InstructorTopBar";


const InsructerDetails = (p) => {
  const navigation = useNavigation();
  const iid = p.route.params.id;
  React.useEffect(
    () => {
      async function getUserData(){
        const db = getFirestore(app);
        const docRef = doc(db, "instructor", iid);
        const docSnap = await getDoc(docRef);
        const [ username, setUsername ] = React.useState('Email');
        const [ age, setAge ] = React.useState('Age');
        const [ dob, setDob ] = React.useState('Date of Birth');
        const [profilepic,setProfilepic]=React.useState('');

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
      <InstructorTopBar id={iid}/>
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
