import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import ExploreCard from "../components/ExploreCard";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";
import {app} from '../components/firebase_config';
import { getFirestore ,getDoc ,doc} from 'firebase/firestore';
import BottomBarStudent from "../components/BottomBarStudent";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";


const StudentHome = (p) => {
  const navigation = useNavigation();
  const db = getFirestore(app);
  const id=p.route.params.id;
  // const id = 'viral@gmail.com';

  //start of firebase
  const [username, setUsername] = React.useState('');
  // console.log(id);
  const [university_data,setUniversityData] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "university"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setUniversityData(data);
    };
    
    fetchData();
  }, []);
  
  console.log('university data: ', university_data)

  React.useEffect(
    () => {
      async function getUserData(){
        const db = getFirestore(app);
        const docRef = doc(db, "student", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUsername(docSnap.data().username);
        } else {
          console.log("Invalid User !!!");
          alert("Invalid User !!!");
        }
      }
      getUserData();
},[])
  //end of firebase


  return (
    <View style={styles.studentHome}>
      <View style={styles.welcomeBox}>
        <Text style={styles.welcomeTxt}>WELCOME !</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <ScrollView style={styles.scrollview}>
      {
        university_data.map((uni) => {
          return (
            <ExploreCard
              // key={uni.id}
              universityImage={uni.photo}
              universityName={uni.username}
              universityLocation={uni.address}
            />
          );
        })
      }
      </ScrollView>
      {/* <ExploreCard/> */}
      <BottomBarStudent page={'StudentHome'} id={id}/>
    </View>
  );
};

const styles = StyleSheet.create({
  studentHome: {
    // display: 'flex',
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
