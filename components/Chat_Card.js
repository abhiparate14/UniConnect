import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import app from './firebase_config';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const Chat_Card = ({studentEmail,chat}) => {
    const navigation = useNavigation();
    const instructerEmail=chat;
    const [instructerName,setInstructerName] = useState('');

    React.useEffect(
        () => {
          async function getUserData(){
            const db = getFirestore(app);
            const docRef = doc(db, "instructor", instructerEmail);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              // console.log("Document data:", docSnap.data());
              // StudentName = docSnap.data().username
              setInstructerName(docSnap.data().username);
              // alert(`Your name is ${docSnap.data().email}`);
            } else {
              // doc.data() will be undefined in this case
              console.log("Invalid User !!!");
              alert("Invalid User !!!");
            }
          }
          getUserData();
    },[])

    // console.log(instructerName);
    
  return (
    <View style={styles.chatacard}>
      
      <TouchableOpacity 
        style={styles.to}
        onPress={() =>navigation.navigate('StudentChatScreen',{StudentEmail:studentEmail,InstructorEmail:instructerEmail,InstructorName:instructerName})}
      >
        {
          instructerName ?
          <Text style={styles.username}>{instructerName}</Text>
          :
          <ActivityIndicator size={50} color="#0000ff" />

        }
      </TouchableOpacity>
    </View>
  )
}

export default Chat_Card

const styles = StyleSheet.create({
    chatacard   : {
        width: '90%',
        marginTop: 10,
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    c1: {
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    username: {
        // color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    lastmessage: {
        color: 'grey',
        fontSize: 18,
    },
    to: {
        borderWidth: 1,
        width: "100%",
        height: 60,
        borderColor: 'black',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})