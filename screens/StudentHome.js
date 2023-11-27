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
  // alert(id);
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
          // console.log("Document data:", docSnap.data());
          setUsername(docSnap.data().username);
          // alert(`Your name is ${docSnap.data().email}`);
        } else {
          // doc.data() will be undefined in this case
          console.log("Invalid User !!!");
          alert("Invalid User !!!");
        }
      }
      getUserData();
},[])
  //end of firebase
  const demo_data = [{
    id: 1,
    universityImage: 'https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg',
    universityName: "Nirma University",
    universityLocation: "Ahmedabad,Gujarat",
  },
  {
    id: 2,
    universityImage: 'https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg',
    universityName: "L. D. College",
    universityLocation: "Ahmedabad, Gujarat",
  },
  {
    id: 3,
    universityImage: 'https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg',
    universityName: "Gujarat University",
    universityLocation: "Ahmedabad, Gujarat",
  },
  {
    id: 4,
    universityImage: 'https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg',
    universityName: "Ganpat University",
    universityLocation: "Ahmedabad, Gujarat",
  }]

  return (
    <View style={styles.studentHome}>
      {/* <ScrollView
        style={styles.card1Parent}
        contentContainerStyle={styles.frameScrollViewContent}
        scrollEnabled={true}
        height={600}
      >
        <ExploreContainer />
        <ExploreCard
          universityName={require("../assets/rectangle-585.png")}
          universityLocation="Nirma University"
          collegeName="Ahmedabad,Gujarat"
        />
        <ExploreCard
          universityName={require("../assets/rectangle-586.png")}
          universityLocation="L. D. College"
          collegeName="Ahmedabad, Gujarat"
          propWidth={144}
        />
        <ExploreCard
          universityName={require("../assets/rectangle-587.png")}
          universityLocation="Gujarat University"
          collegeName="Ahmedabad, Gujarat"
          propWidth={172}
        />
        <Text style={[styles.loadMore, styles.welcomeTypo]}>Load More</Text>
      </ScrollView> */}
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
