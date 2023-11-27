import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import app from '../components/firebase_config'
import { addDoc, collection, doc, getDocs, getFirestore, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where} from 'firebase/firestore';
import { StatusBar } from "react-native";
import BottomBarUniversity from "../components/BottomBarUniversity";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

const UniversityHome = (p) => {
  const navigation = useNavigation();
  const db=getFirestore(app);
  const id=p.route.params.id;
  const [ eventText, setEventText ] = React.useState('')

  React.useEffect(() => {
    // geteventdatafrommsg;
  }
  ,[]);

  const addEvent = async() => {
    // console.log(eventText);
    if(eventText === ''){
      alert("Please enter event");
      return;
    }
    else{
        const updatedData = {
            events: eventText
        };
        const docRef = doc(db, 'university', id);
        await updateDoc(docRef, updatedData).then(()=>{
          console.log('updated');
          eventaddmsg();
        })
    }
  }

  const eventaddmsg=async()=>{
    await addDoc(collection(db,'Events'),{
      event:eventText,
      name:id,
      createAt:serverTimestamp()
    }).then(()=>{
      console.log('event added to msg');
    });
  }

  const geteventdatafrommsg=async()=>{
    const docRef = collection(db, "Events");
        const q = query(docRef, 
            where("name", "==", id),
            orderBy("createAt", "asc")
            );
            const arr = [];
        const querySnapshot = onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
          arr.push(doc.data().event);
          })
        });
        console.log('arr:',arr);
        console.log('qs'+querySnapshot);
  }
  
  const buttonHandler = () => {
    addEvent();
    eventaddmsg();
    geteventdatafrommsg();
  }

  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.welcomeUser}>Welcome user</Text>
      <View style={styles.box}>
        <Text style={styles.addtxt}>Add New Event</Text>
        <TextInput
          placeholder="write here"
          style={styles.txtbox}
          onChangeText={(txt) => setEventText(txt)}
        />
        <TouchableOpacity style={styles.btnbox} onPress={() => buttonHandler()}>
          <Text style={styles.btntxt}>Add Event</Text>
        </TouchableOpacity>
      </View>
      <BottomBarUniversity page={'UniversityHome'} id={id}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefbe7',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  welcomeUser: {
    top: '5%',
    fontFamily: FontFamily.primaryFontFamily,
    fontSize: 25,
  },
  box: {
    marginTop: '20%',
    backgroundColor: '#f9ebc8',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 15,
    padding: 10
  },
  addtxt: {
    fontSize: 20,
  },
  txtbox: {
    marginTop: 15,
    width: '90%',
    backgroundColor: '#dae5d0',
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
  },
  btnbox: {
    marginTop: 15,
    backgroundColor: '#a0bcc2',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  btntxt: {
    fontSize: 20,
  }
});

export default UniversityHome;
