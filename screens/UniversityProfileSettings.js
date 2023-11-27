import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import app from '../components/firebase_config';
import { getAuth, signOut } from 'firebase/auth'

const UniversityProfileSettings = (p) => {
  const navigation = useNavigation();
    const id=p.route.params.id;
    console.log('id', id)

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
            onPress={() => navigation.navigate('UniversityDetails', {id: id.id})}
        >
                <Ionicons name="arrow-back-sharp" size={24} color="black" />
                <Text style={styles.backTxt}>Back</Text>
        </TouchableOpacity>
        <View style={styles.menuItems}>
            <TouchableOpacity 
                style={styles.menuItem1} 
                onPress={() => navigation.navigate("UniversityEdit", {id: id.id})}
            >
                <Text style={styles.menuTxt}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem1} onPress={() => beforeLogOut()}>
                <Text style={styles.menuTxt}>Signout</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default UniversityProfileSettings

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