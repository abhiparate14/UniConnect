import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";
import { app } from '../components/firebase_config';
import { getFirestore ,getDoc ,doc} from 'firebase/firestore';
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";
import BottomBarStudent from "../components/BottomBarStudent";
import StudentHomeUniCard from "../components/StudentHomeUniCard";


const StudentHome = (p) => {
  const navigation = useNavigation();
  const db = getFirestore(app);
  const id = p.route.params.id;
  const [ mypref,setMypref ] = React.useState([]);
  const [ username,setUsername ] = React.useState('');
  
  async function getUserData(){
    const docRef = doc(db, "student", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setMypref(docSnap.data().MyPreference)
      setUsername(docSnap.data().username)
    } 
    else {
      console.log("Invalid User !!!");
    }
  }

  useEffect(
    () => {
      getUserData();
  },[]);



  return (
    <View style={styles.studentHome}>
      <View style={styles.welcomeBox}>
        <Text style={styles.welcomeTxt}>WELCOME !</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <ScrollView style={styles.scrollview}>
      {
        mypref.map((uni) => {
          return (
            <StudentHomeUniCard uni_id={uni} sid={id}/>
          );
        })
      }
      </ScrollView>
      <BottomBarStudent page={'StudentHome'} id={id}/>
    </View>
  );
};

const styles = StyleSheet.create({
  studentHome: {
    height: '100%',
    width: "100%",
    backgroundColor: Color.ivory,
  },
  welcomeBox: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '10%',
    width: "100%",
    left: 1,
    marginLeft: 25,
    marginTop: 25
  },
  welcomeTxt: {
    fontSize: 25,
  },
  username: {
    fontSize: 23,
  },
  scrollview: {
    width: "100%",
    marginBottom: 90
  },
});

export default StudentHome;
