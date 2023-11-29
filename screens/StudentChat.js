import * as React from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import app from '../components/firebase_config';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Chat_Card from '../components/Chat_Card';
import BottomBarStudent from "../components/BottomBarStudent";

const StudentChat = (p) => {
  const navigation = useNavigation();
  const id = p.route.params.id;
  const [chats, setChats] = React.useState([]);
  const [keyword, setKeyword] = React.useState('');
  const [instructorData, setInstructorData] = React.useState([]);
  const db = getFirestore(app);

  React.useEffect(() => {
    async function getUserData() {
      const docRef = doc(db, "student", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setChats(docSnap.data().chatwith);
      } else {
        console.log("Invalid User !!!");
        alert("Invalid User !!!");
      }
    }
    getUserData();
  }, []);
  React.useEffect(() => {
    async function getInstructorData(email) {
      const docRef = doc(db, "instructor", email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setInstructorData((prevData) => [...prevData, docSnap.data()]);
      } else {
        console.log(`Invalid User ${email} !!!`);
      }
    }

    // Reset the instructor data when chats change
    setInstructorData([]);

    // Fetch instructor data for each email in chats
    chats.forEach((email) => {
      getInstructorData(email);
    });
  }, [chats]);

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
      <ScrollView style={styles.container}>
        {
          instructorData.filter((instructor) => {
            if (keyword === "") {
              return true;
            } else if (instructor.username.toLowerCase().includes(keyword.toLowerCase())) {
              return true;
            }
            return false;
          }).map((instructor) => (
            <Chat_Card
              studentEmail={id}
              chat={instructor.email}
            />
          ))
        }
      </ScrollView>
      <BottomBarStudent page={'StudentChat'} id={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    flex: 1,
    backgroundColor: '#fefbe7',
  },
  container: {
    flex: 1,
    backgroundColor: '#fefbe7',
    marginBottom: 90
  },
  gohomeicon: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 10,
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
  },
  formHead2: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default StudentChat;
