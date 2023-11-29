import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {app} from '../components/firebase_config';
import { getFirestore ,getDoc ,doc} from 'firebase/firestore';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import InstructorInsideStHome from './InstructorInsideStHome';
import { ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Foundation } from '@expo/vector-icons';

const StudentHomeUniCard = ({ uni_id ,sid}) => {
    const navigation = useNavigation();
    const [ uniPhoto,setUniPhoto ] = useState('');
    const [ uniName,setUniName ] = useState('');
    const [ uniLocation,setUniLocation ] = useState('');
    const [ uniInstructors,setUniInstructors ] = useState([]);
    const [ btnPress,setBtnPress ] = useState(false);
    const [ events,setEvents ] = useState('');

    React.useEffect(
        () => {
          async function getUserData(){
            const db = getFirestore(app);
            const docRef = doc(db, "university", uni_id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              setUniPhoto(docSnap.data().photo);
              setUniName(docSnap.data().username);
              setUniLocation(docSnap.data().address);
              setUniInstructors(docSnap.data().MyInstructors);
              setEvents(docSnap.data().events);
            } 
            else {
              console.log("Invalid User !!!");
              alert("Invalid User !!!");
            }
          }
          getUserData();
    },[]);

  return (
    <View style={styles.container}>
        {
            uniPhoto ?
            <View>
                <Image source={{uri: uniPhoto}} style={styles.image} />
                <View style={styles.bottomBox}>
                    <View style={styles.text}>
                        <Text style={styles.uniTxt}>{uniName}</Text>
                        <Text style={styles.locTxt}>{uniLocation}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setBtnPress(!btnPress)}>
                        <View style={styles.exploreBox}>
                            <Text style={styles.exploretxt}>Instructors</Text>
                            {
                                btnPress ? 
                                <AntDesign name="caretup" size={24} color="black" /> 
                                :
                                <AntDesign name="caretdown" size={24} color="black" />
                            }
                        </View>
                    </TouchableOpacity>
                </View>
                {
                    events == '' ?
                    null
                    :
                    <View style={styles.events}>
                        <Foundation name="alert" size={24} color="black" />
                        <Text style={styles.eventtxt}>{events}</Text>
                    </View>
                }
                {
                    btnPress ?
                    <ScrollView>
                        {
                            uniInstructors.map((items) => {
                                return <InstructorInsideStHome id={items} sid={sid}/>
                            })
                        }
                    </ScrollView>
                    :
                    null
                }
            </View>
            :
            <ActivityIndicator size={50} color="#0000ff" />
        }
    </View>
  )
}

export default StudentHomeUniCard

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '90%',
        backgroundColor: '#f9ebc8',
        marginLeft: 20,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 5,
    },
    image: {
        height: 150,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
    },
    bottomBox: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    text: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginBottom: 10,
    },
    uniTxt: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    locTxt: {
        fontSize: 15,
        color: 'grey',
    },
    exploreBox: {
        backgroundColor: '#f9ebc8',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        padding: 10
    },
    exploretxt: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 5
    },
    scroll: {
        width: '100%',
        backgroundColor: '#f9ebc8',
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        padding: 10
    },
    events:{
        backgroundColor: '#f9ebc8',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        padding: 10,
        width: '90%',
        marginHorizontal: 15,

    },
    eventtxt: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 5
    }
})