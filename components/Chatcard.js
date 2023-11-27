import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Chatcard = ({message, username}) => {
  const currentUser = username;
  return (
    <View style={styles.master}>
      {
        (message.username == currentUser)? 
        <View style={styles.left_align}>
            <Image source={{uri: message.profile_pic}} style={styles.logo_left} />
            <View style={styles.user}>
              <Text style={styles.txt1}>{message.username}</Text>
              <Text style={styles.txt2}>{message.message}</Text>
            </View>
          </View>
        :
          <View style={styles.left_align}>
            <Image source={{uri: message.profile_pic}} style={styles.logo_left} />
            <View style={styles.nonuser}>
              <Text style={styles.txt1}>{message.username}</Text>
              <Text style={styles.txt2}>{message.message}</Text>
            </View>
          </View>
      }
    </View>
  )
}

export default Chatcard

const styles = StyleSheet.create({
  master: {
    flexDirection: 'column',
    width: '90%',
    marginVertical: 10,
  },
  left_align: {
    // width: '90%',
    flexDirection: 'row',
  },
  right_align:{
    // width: '90%',
    flexDirection: 'row',
    backgroundColor: 'pink',
    left: 100,
  },
  user: {
    // marginTop: 10,
    padding: 10,
    backgroundColor: '#b1ed8b',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 20,
    // width: '90%',
  },
  nonuser:{
    padding: 10,
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 20,
    // marginTop: 10,
    width: '90%',
  },
  logo_left: {
    height: 35,
    borderRadius: 50,
    width: 35,
  },
  logo_right: {
    height: 35,
    borderRadius: 50,
    width: 35,
  },
  txt1: {
    fontSize: 15,
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginHorizontal: 7,
  },
  txt2: {
    left: 0,
    fontSize: 18,
    color: '#252A34',
    marginLeft: 12,
    alignSelf: 'flex-start', 
  },
})