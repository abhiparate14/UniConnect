import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const ExploreCard = ({ universityImage, universityName, universityLocation, id, universityID}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image 
        style={styles.location} 
        source={{uri: universityImage}}  
      />
      <View style={styles.bottomBox}>
        <View style={styles.text}>
          <Text style={styles.uniTxt}>{universityName}</Text>
          <Text style={styles.locTxt}>{universityLocation}</Text>
        </View>
        <TouchableOpacity 
          onPress={()=> navigation.navigate('InstructorViewUni', {id:universityID, sid: id, type:'student'})}>
          <View style={styles.exploreBox}>
            <Text style={styles.exploretxt}>Explore</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ExploreCard

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
  location: {
    height: 150,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  bottomBox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between', // Added this line
  },
  text: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginBottom: 10,
  },
  uniTxt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locTxt: {
    fontSize: 14,
  },
  exploreBox: {
    backgroundColor: '#a0bcc2',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  exploretxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})