import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import app from "../components/firebase_config";
import { getFirestore ,getDocs ,doc, collection, updateDoc, arrayUnion} from 'firebase/firestore';
import BottomBarStudent from "../components/BottomBarStudent";

const StudentSearch = (p) => {
  const navigation = useNavigation();
  const id = p.route.params.id;
  console.log('id: ' + id)
  const [instructor, setInstructor] = React.useState([]);
  const [university,setUniversity]=React.useState([]);
  
  // const instructor = [];
  
  React.useEffect(() => {
    async function getUserData() {
      try {
        const db = getFirestore(app);
        const collectionRef = collection(db, "instructor");
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
          console.log("Document data:", doc.data());
          setInstructor(doc.data());
          // instructor(doc.data());
        });
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    }
    getUserData();
  }, []);
  const InstructorEmail = instructor.email;
  // console.log('my data ' + instructor.username)
  console.log('instructor data: ' + InstructorEmail);

  const addstudentnameininstructor = async () => {
    try {
      const db = getFirestore(app);
      const docRef = doc(db, "instructor", InstructorEmail);
      await updateDoc(docRef, {
        chatwith: arrayUnion(id),
      });
      console.log("Document successfully updated!");
    } catch (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    }
  };

  const addinstructornameinstudent = async () =>{
    try {
      const db = getFirestore(app);
      const docRef = doc(db, "student", id);
      await updateDoc(docRef, {
        chatwith: arrayUnion(InstructorEmail),
      });
      console.log("Document successfully updated!");
    } catch (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    }
    
  }

  const beforeNavigation = () => {
    addstudentnameininstructor();
    addinstructornameinstudent();
    navigation.navigate('StudentChatScreen', {InstructorEmail: InstructorEmail, StudentEmail : id, InstructorName: instructor.username});
  }


  //univercity
  React.useEffect(() => {
    async function getUserData() {
      const db = getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "university"));
      const universitys = [];
      querySnapshot.forEach((doc) => {
        universitys.push(doc.data());
      });
      if (universitys.length > 0) {
        console.log("universitys:", universitys);
        setUniversity(universitys);
      } else {
        console.log("Invalid User !!!");
        alert("Invalid User !!!");
      }
    }
    getUserData();
  }, []);
  console.log('univercity:::',university);
  //end of univercity
  
  return (
    <View style={styles.studentSearch}>
      <Pressable
        style={styles.searchBar}
        onPress={() => navigation.navigate("StudentSearchResult")}
      >
        <Image
          style={styles.stroke2searchIcon}
          contentFit="cover"
          source={require("../assets/stroke-2search.png")}
        />
        <Text style={[styles.whatUniversityAre, styles.universityFlexBox]}>
          What University are you looking?
        </Text>
      </Pressable>
      <Text style={[styles.search, styles.searchPosition]}>Search</Text>
      {/* <View style={styles.scroll}>
        <Text style={styles.instructor}>
          Instructors:
        </Text>
        <TouchableOpacity
          onPress={() => beforeNavigation()}
        >
          <Text style={styles.chikable}>{university.username}</Text>
          
        </TouchableOpacity>
          {
            university.map((item)=>{
              console.log('item:',item.username);
              <Text style={styles.chikable}>{item.username}</Text>
            })
          }
        <ScrollView>
        </ScrollView>
      </View> */}

<View style={styles.scroll}>
  <Text style={styles.instructor}>
    Instructors:
  </Text>
  <ScrollView>
  {
    university.map((item, index) => (
      <TouchableOpacity key={index} onPress={() => beforeNavigation()}>
        <Text style={styles.chikable}>{item.username}</Text>
      </TouchableOpacity>
    ))
  }
    {/* Additional content goes here */}
  </ScrollView>
</View>


      <BottomBarStudent page={'StudentSearch'} id={id}/>
    </View>
  );
};

const styles = StyleSheet.create({
  studentLayout1: {
    width: 339,
    left: 21,
    height: 160,
    position: "absolute",
  },
  card1ParentPosition: {
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    height: 160,
    position: "absolute",
  },
  universityFlexBox: {
    textAlign: "left",
    lineHeight: 34,
    color: Color.black,
  },
  zhouGuanyuTypo: {
    top: 104,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 34,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  searchPosition: {
    left: 43,
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  instructorsTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  studentLayout: {
    height: 40,
    width: 59,
    backgroundColor: Color.beige,
    top: 5,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bxschatPosition: {
    width: "7.6%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
  },
  universities: {
    top: 217,
  },
  instructors: {
    top: 445,
    left: 43,
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
    position: "absolute",
  },
  studentNavigationBarChild: {
    left: 17,
  },
  studentNavigationBarItem: {
    left: 91,
  },
  studentNavigationBarInner: {
    left: 174,
  },
  rectanglePressable: {
    left: 248,
  },
  rectangleView: {
    borderRadius: Border.br_6xl,
    left: "0%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    height: "100%",
    backgroundColor: Color.beige,
    position: "absolute",
    width: "100%",
  },
  seperationIcon: {
    height: "80%",
    width: "50.15%",
    top: "10%",
    right: "25.23%",
    bottom: "10%",
    left: "24.62%",
    position: "absolute",
  },
  icon: {
    opacity: 0.5,
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  teenyiconshomeSolid: {
    right: "92.4%",
    left: "0%",
  },
  icon1: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  zondiconssearch: {
    left: "30.8%",
    right: "61.6%",
  },
  bxschat: {
    left: "61.6%",
    right: "30.8%",
  },
  iconamoonprofileFill: {
    left: "92.4%",
    right: "0%",
    width: "7.6%",
  },
  icons: {
    height: "40%",
    width: "80.92%",
    top: "30%",
    right: "10.15%",
    bottom: "30%",
    left: "8.92%",
    position: "absolute",
  },
  studentNavigationBar: {
    top: 726,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 325,
    height: 50,
    left: 17,
    position: "absolute",
  },
  stroke2searchIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  whatUniversityAre: {
    fontSize: FontSize.size_mid,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    opacity: 0.7,
    marginLeft: 14,
  },
  searchBar: {
    top: 133,
    left: 14,
    width: 331,
    height: 55,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_2xs,
    paddingBottom: Padding.p_3xs,
    backgroundColor: Color.blanchedalmond_100,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  search: {
    top: 69,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  studentSearch: {
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.ivory,
  },
  instructor:{
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_mid,
  },
  scroll: {
    flex: 1,
    top: 250,
    left: 1,
    width: '100%',
    height: '100%',
    // backgroundColor: 'black'
  },
  name: {
    color: 'black',
    fontSize: FontSize.size_mid,
    backgroundColor: 'blue',
  },
  chikable:{
    color: 'blue',
    fontSize: 30,
    backgroundColor: 'red',
    alignSelf: 'center'
  },
});

export default StudentSearch;
