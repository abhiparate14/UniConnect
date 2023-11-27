import * as React from "react";
import { StyleSheet, View, Image, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import BottomBarUniversity from "../components/BottomBarUniversity";
import UniversityProfileTopbar from "../components/UniversityProfileTopbar";
import app from '../components/firebase_config';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const UniversityDetails = (p) => {
  const navigation = useNavigation();
  const id = p.route.params.id;
  const db = getFirestore(app);
  const [data, setData] = React.useState([]);

  // fetch data
  React.useEffect(() => {
    console.log("hello love");
    async function getUserData() {
      const docRef = doc(db, "university", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData(docSnap.data());
      } else {
        console.log("Invalid User !!!");
        alert("Invalid User !!!");
      }
    }
    getUserData();
  }, []);
  console.log('universityData:', data);

  return (
    <View style={styles.container}>
      <StatusBar />
      <UniversityProfileTopbar id={id} />
      {/* Image at the top after the UniversityProfileTopbar */}
      <Image source={{ uri: data.photo }} style={styles.logo} />
      {/* Other components go here */}
      <ScrollView style={styles.scroll}>
        <View style={styles.usernamebox}>
          <Text style={styles.emailtxt}>USERNAME</Text>
          <View style={styles.box}>
            <AntDesign name="user" size={24} color="black" />
            <Text style={styles.innertxt}>{data.username}</Text>
          </View>
        </View>
        <View style={styles.usernamebox}>
          <Text style={styles.emailtxt}>Contact Email</Text>
          <View style={styles.box}>
            <MaterialCommunityIcons name="email" size={24} color="black" />
            <Text style={styles.innertxt}>{data.email}</Text>
          </View>
        </View>
        <View style={styles.usernamebox}>
          <Text style={styles.emailtxt}>Address</Text>
          <View style={styles.box}>
            <FontAwesome5 name="address-card" size={24} color="black" />
            <Text style={styles.innertxt}>{data.address}</Text>
          </View>
        </View>
        <View style={styles.usernamebox}>
          <Text style={styles.emailtxt}>CITY</Text>
          <View style={styles.box}>
          <FontAwesome5 name="city" size={24} color="black" />
            <Text style={styles.innertxt}>{data.city}</Text>
          </View>
        </View>
        <View style={styles.usernamebox}>
          <Text style={styles.emailtxt}>Contact</Text>
          <View style={styles.box}>
          <Feather name="phone" size={24} color="black" />
            <Text style={styles.innertxt}>{data.contact}</Text>
          </View>
        </View>
        {/* Add more fields as needed */}
      </ScrollView>
      <BottomBarUniversity page={'UniversityDetails'} id={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefbe7',
    width: '100%',
    height: '100%',
    flexDirection: 'column', // Ensure child components are arranged in a column
  },
  logo: {
    width: '100%', // Take 100% width of the container
    aspectRatio: 16 / 9, // Maintain the aspect ratio (adjust as needed)
    resizeMode: 'cover', // or 'contain' based on your preference
  },
  box: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
  },
  usernamebox: {
    marginTop: 10,
    alignItems: 'center'
  },
  emailtxt: {
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  innertxt: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  scroll: {
    marginTop: 5,
    marginBottom: 85
  },
});

export default UniversityDetails;
