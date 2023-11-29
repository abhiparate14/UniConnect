import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const InstructorTopBar = (id) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.txt}>Uniconnect</Text>
        <MaterialCommunityIcons 
            name="menu" size={24} 
            color="black" 
            onPress={() => navigation.navigate('InstructorProfileSettings', {id: id})}
        />
    </View>
  )
}

export default InstructorTopBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#a0bcc2',
        width: '100%',
        height: '6%',
        marginTop: 40,
        paddingHorizontal: 10,
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    }
})