import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import app from '../components/firebase_config'
import { addDoc, collection, doc, getDocs, getFirestore, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where} from 'firebase/firestore';
import { StatusBar } from "react-native";
import BottomBarUniversity from "../components/BottomBarUniversity";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { log } from "react-native-reanimated";

const UniversityHome = (p) => {
  const navigation = useNavigation();
  const db=getFirestore(app);
  const id=p.route.params.id;
  const [ eventText, setEventText ] = React.useState('');
  const [ eventList, setEventList ] = React.useState([]);

  React.useEffect(() => {
    geteventdatafrommsg();
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
        })
    }
  }

  const eventaddmsg=async()=>{
    await addDoc(collection(db,'Events'),{
      event:eventText,
      email:id,
      createAt:serverTimestamp()
    }).then(()=>{
      console.log('event added to msg');
    });
  }

  const geteventdatafrommsg = async () => {
    const docRef = collection(db, "Events");
    const q = query(
      docRef,
      where("email", "==", id),
      orderBy("createAt", "asc")
    );
    const querySnapshot = await getDocs(q);
    const msgs = [];
    querySnapshot.forEach((doc) => {
      msgs.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setEventList(msgs);
  };
  console.log('eventlist:', eventList);
  
  const buttonHandler = () => {
    addEvent();
    eventaddmsg();
    geteventdatafrommsg();
  }
  console.log('list: ', eventList);
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.welcomeUser}>Welcome</Text>
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
      <Text style={styles.previous}>Previous Events: </Text>
      <ScrollView style={styles.scrollView}>
        {
            eventList.length === 0 ?
            <Text style={styles.noevent}>No events yet</Text>
            :
            eventList.reverse().map((item, index) => (
              <View key={index} style={styles.scrollitems}>
                <Text style={styles.addtxt}>Event {eventList.length - index}</Text>
                <Text style={styles.txtbox}>{item.event}</Text>
              </View>
            ))
        }
      </ScrollView>
      <BottomBarUniversity page={'UniversityHome'} id={id} />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefbe7',
    flex: 1, // Use flex: 1 to make the container take the entire height
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeUser: {
    marginTop: 25, // Adjusted marginTop value
    fontFamily: FontFamily.primaryFontFamily,
    fontSize: 25,
  },
  box: {
    marginTop: 20, // Adjusted marginTop value
    backgroundColor: '#f9ebc8',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 15,
    padding: 10,
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
    marginBottom: 10,
  },
  btntxt: {
    fontSize: 20,
  },
  scrollView: {
    flex: 1, // Allow the ScrollView to take the remaining space
    width: '100%',
    marginBottom: 85,
    marginTop: 5
  },
  scrollitems: {
    marginLeft: 20,
    marginTop: 5,
  },
  previous: {
    marginTop: 5,
    fontSize: 18
  },
  noevent: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10
  }
});

export default UniversityHome;
