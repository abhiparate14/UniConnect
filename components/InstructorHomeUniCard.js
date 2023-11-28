import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const InstructorHomeUniCard = ({ myid, image, username, address, id }) => {
    const navigation = useNavigation();
    console.log('myid:'+ myid);
  return (
    <View style={styles.container}>
        <View style={styles.usercard}>
            <View style={styles.userimage}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.userinfo}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </View>
        <View style={styles.userbutton}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('InstructorViewUni', {id:id, iid:myid, type:'instructor'})}
            >
                <Text style={styles.buttontext}>View</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default InstructorHomeUniCard

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 10,
  },
  usercard: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3,
  },
  userimage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userinfo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 15,
    color: 'grey',
  },
  userbutton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3F51B5',
    padding: 10,
    borderRadius: 10,
  },
  buttontext: {
    color: '#fff',
    fontSize: 15,
  },
})