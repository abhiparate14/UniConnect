import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {app} from '../components/firebase_config';
import { getFirestore ,getDoc ,doc, updateDoc, arrayUnion} from 'firebase/firestore';
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native';
import { ActivityIndicator } from 'react-native';

const InstructorInsideStHome = ({ id,sid }) => {
    const navigation = useNavigation();
    const [ instPhoto,setInstPhoto ] = useState('');
    const [ instName,setInstName ] = useState('');
    const db = getFirestore(app);

    React.useEffect(
        () => {
          async function getUserData(){
            const docRef = doc(db, "instructor", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              setInstPhoto(docSnap.data().photo);
              setInstName(docSnap.data().username);
            } 
            else {
              // doc.data() will be undefined in this case
              console.log("Invalid User !!!");
              alert("Invalid User !!!");
            }
          }
          getUserData();
    },[]);
    
    const addstudentnameininstructor = async () => {
        try {
            // const db = getFirestore(app);
            const docRef = doc(db, "instructor", id);
            await updateDoc(docRef, {
                chatwith: arrayUnion(sid),
            });
            console.log("instructor updated!");
        } catch (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        }
    };
    
    const addinstructornameinstudent = async () =>{
        try {
            // const db = getFirestore(app);
            const docRef = doc(db, "student", sid);
            await updateDoc(docRef, {
                chatwith: arrayUnion(id),
            });
            console.log("student updated!");
        } catch (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        }
        
    }
    const startChat = () => {
        addinstructornameinstudent().then(()=>{
            addstudentnameininstructor().then(()=>{
                navigation.navigate('StudentChatScreen', {InstructorEmail: id, StudentEmail : sid, InstructorName: instName});
            });
        });
    };
    
    return (
        <View style={styles.container}>
        {
            instName ?
            <View style={styles.leftBox}>
                <Image source={{uri: instPhoto}} style={styles.imageStyle}/>
                <Text style={styles.txt}>{instName}</Text>
            </View>
            :
            <ActivityIndicator size={50} color="#0000ff" />
        }
        <TouchableOpacity style={styles.rightbox} onPress={() => startChat()}>
            <Text style={styles.txt1}>Chat</Text>
        </TouchableOpacity>
    </View>
  )
}

export default InstructorInsideStHome

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '90%',
        backgroundColor: '#ff8d76',
        marginLeft: 20,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    imageStyle:{
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 5,
    },
    txt:{
        marginLeft: 20,
        fontSize: 20,
        // fontWeight: 'bold',
        color: 'black'
    },
    leftBox:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightbox:{
        marginRight: 10,
        backgroundColor: '#ff8d76',
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        alignSelf: 'flex-end',
        backgroundColor: '#89bd53',
    },
    txt1:{
        fontSize: 16,
        color: 'black',
    }
})