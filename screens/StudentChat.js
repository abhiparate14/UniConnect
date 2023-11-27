import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border } from "../GlobalStyles";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import app from '../components/firebase_config';
import { collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore';
import Chat_Card from '../components/Chat_Card'
import BottomBarStudent from "../components/BottomBarStudent";

const StudentChat = (p) => {
  const navigation = useNavigation();
  const id=p.route.params.id;
  console.log("id  "+id);
  const [chats,setChats] = React.useState([]);
  const [instructerName,setInstructerName] = React.useState([]);//get the names of instructer for searching
  const [keyword,setKeyword] = React.useState('')

  // const db=getFirestore(app);
  React.useEffect(
    () => {
      async function getUserData(){
        const db = getFirestore(app);
        const docRef = doc(db, "student", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          // StudentName = docSnap.data().username
          // setStudentName(docSnap.data().chatwith);

          // alert(`chat with ${docSnap.data().chatwith}`);
          setChats(docSnap.data().chatwith);
          
        } else {
          // doc.data() will be undefined in this case
          console.log("Invalid User !!!");
          alert("Invalid User !!!");
        }
      }
      getUserData();
},[])

//new

    React.useEffect(() => {
      async function getUserData() {
        const db = getFirestore(app);
        const querySnapshot = await getDocs(collection(db, "instructor"));
        const instructors = [];
        querySnapshot.forEach((doc) => {
          instructors.push(doc.data());
        });
        if (instructors.length > 0) {
          console.log("Instructors:", instructors);
          setInstructerName(instructors);
        } else {
          console.log("Invalid User !!!");
          alert("Invalid User !!!");
        }
      }
      getUserData();
    }, []);

    console.log('instructors list: ' + chats);
  return (
    <View style={styles.master}>
        <View style={styles.c1}>
          <Text style={styles.formHead2}>Your Chats</Text>
          <TextInput 
            style={styles.searchbar} 
            placeholder='Search'
            onChangeText={(text) => setKeyword(text)}
          />
        </View>
      <ScrollView style={styles.conatiner}>
        {
          chats.map((chat) => {
            return <Chat_Card chat={chat} studentEmail={id} />
          })
        }
      </ScrollView>
      <BottomBarStudent page={'StudentChat'} id={id}/>
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#fefbe7'
  },
  conatiner: {
    width: '100%',
    backgroundColor: '#fefbe7',
    // alignItems: 'center'
  },
  gohomeicon: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 10,
    // color: 'white',
    fontSize: 30,
  },
  c1: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  searchbar: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: 18,
  },
  c2: {
    width: '100%',
    padding: 10,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  formHead2: {
    fontSize: 20,
    // color: 'white',
    textAlign: 'center',
    marginTop: 10
},
});

export default StudentChat;
