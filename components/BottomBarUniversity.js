import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const BottomBarUniversity = ({ page, id }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        {
            page == 'UniversityHome' ?
            <Entypo name="home" 
                size={24} 
                style={styles.activeIcon} 
                onPress={() => navigation.navigate('UniversityHome', {id:id})}
            />
            :
            <Entypo 
                name="home" 
                size={24} 
                style={styles.icon1}
                onPress={() => navigation.navigate('UniversityHome', {id:id})}
            />
        }
        {
            page == 'UniversityDetails' ?
            <MaterialIcons 
                name="account-box" 
                size={24} 
                style={styles.activeIcon}
                onPress={() => navigation.navigate('UniversityDetails', {id:id})}
            />
            :
            <MaterialIcons 
                name="account-box" 
                size={24} 
                style={styles.icon1}
                onPress={() => navigation.navigate('UniversityDetails', {id:id})}
            />
        }
    </View>
  )
}

export default BottomBarUniversity

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // backgroundColor: '#111111',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bottom: '1%',
        width: '100%',
        zIndex: 100,
        borderTopWidth: 1,
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
      },
      icon1: {
        borderRadius: 50,
        fontSize: 30,
        padding: 10,
        color: 'black'
      },
      activeIcon: {
        backgroundColor: 'black',
        borderRadius: 50,
        fontSize: 30,
        padding: 10,
        color: 'white'
      },
})