import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Topbar = ({page, id, user}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {
        user == 'student' ?
        <Ionicons 
          name="arrow-back" 
          size={24} 
          color="black" 
          style={styles.logo}
          onPress={() => navigation.navigate('StudentChat', {id: id})}
        />
        :
        <Ionicons 
          name="arrow-back" 
          size={24} 
          color="black" 
          style={styles.logo}
          onPress={() => navigation.navigate('InsructerChat', {id: id})}
        />
      }
      <Text style={styles.txt1}>{page}</Text>
    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 50,
    width: '100%',
    backgroundColor: '#F0DBAF',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center', // Added to center the content horizontally
  },
  txt1: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 20,
  },
  logo: {
    position: 'absolute',
    left: 10,
    alignSelf: 'center',
  },
})