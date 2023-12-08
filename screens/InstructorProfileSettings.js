import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import app from '../components/firebase_config';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore ,getDoc ,doc}       from 'firebase/firestore';

const InstructorProfileSettings = (p) => {
    const navigation = useNavigation();
    const id=p.route.params.id;
    const [ showUniversity,setShowUniversity ] = useState(false);
    const [ myUni,setMyUni ] = useState([]);

    useEffect(
        () => {
          async function getUserData(){
            const db = getFirestore(app);
            const docRef = doc(db, "instructor", id.id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              setMyUni(docSnap.data().MyUniversitys);
            } else {
              console.log("Invalid User !!!");
            }
          }
          getUserData();
    },[])


    const beforeLogOut = () => {
        const auth = getAuth(app)
        signOut(auth).then(
            alert('bye!!'),
            navigation.navigate('LANDINGPAGE')
        )
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.back}
            onPress={() => navigation.navigate('InsructerDetails', {id: id.id})}
        >
                <Ionicons name="arrow-back-sharp" size={24} color="black" />
                <Text style={styles.backTxt}>Back</Text>
        </TouchableOpacity>
        <View style={styles.menuItems}>
            <TouchableOpacity 
                style={styles.menuItem1} 
                onPress={() => navigation.navigate("InsructerEdit", {id: id.id})}
            >
                <Text style={styles.menuTxt}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.menuItem1} 
                onPress={() => setShowUniversity(!showUniversity)}
            >
                <Text style={styles.menuTxt}>Give Rating</Text>
                {
                    showUniversity?
                    myUni.map((uni) => {
                        return (
                            <TouchableOpacity 
                                style={styles.menuItem1} 
                                onPress={() => navigation.navigate("InstructerRating", {id: id.id, uni: uni})}
                            >
                                <Text style={styles.menuTxt}>{uni}</Text>
                            </TouchableOpacity>
                        )
                    
                    })
                    :
                    null
                }
            </TouchableOpacity>



            <TouchableOpacity style={styles.menuItem1} onPress={() => beforeLogOut()}>
                <Text style={styles.menuTxt}>Signout</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default InstructorProfileSettings

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fefbe7',
        width: '100%',
        height: '100%',
    },
    menuItems: {
        marginTop: 10,
    },
    menuItem1: {
        paddingVertical: 10,
        borderColor: 'black',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingLeft: 10,
        fontSize: 14
    },
    menuTxt: {
        fontSize: 22,
        marginLeft: 10
    },
    back: {
        marginTop: 50,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    backTxt: {
        fontSize: 18,
        marginLeft: 10
    }
})