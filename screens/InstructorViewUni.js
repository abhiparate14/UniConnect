import * as React from "react";
import { StyleSheet, View, Image, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { arrayUnion, doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import app from '../components/firebase_config';

const InstructorViewUni = (p) => {
  const navigation = useNavigation();
  const university_id = p.route.params.id;
  const instructor_id = p.route.params.iid;
  const student_id = p.route.params.sid;
  const type = p.route.params.type;
  const db = getFirestore(app);
  const [data, setData] = React.useState([]);

  console.log('uni id: '+ university_id + ' student id: ' + student_id);

  // fetch data
  React.useEffect(() => {
    async function getUserData() {
      const docRef = doc(db, "university", university_id);
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

  const whereTypeIsInstructor = async() => {
    const docRef1 = doc(db, "university", university_id);
    await updateDoc(docRef1, {
      MyInstructors: arrayUnion(instructor_id),
    }).then(()=>{
      console.log("university updated!");
    })

    const docRef2=doc(db,'instructor',instructor_id);
      await updateDoc(docRef2,{
        MyUniversitys:arrayUnion(university_id),
      }).then(()=>{
        console.log("instructor updated!");
      })
  }
  const myPrefer = async()=>{
    const docRef1 = doc(db, "student", student_id);
    await updateDoc(docRef1, {
      MyPreference: arrayUnion(university_id),
    }).then(()=>{
      console.log("university added to student data!");
    })
  }

  const beforeNavigation = () => {
    if (type == 'instructor'){
      whereTypeIsInstructor();
    }
    if (type == 'student'){
      myPrefer();
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.topbar}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: data.photo }} style={styles.logo} />
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
            <Text style={styles.innertxt}>{data.contact_email}</Text>
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
      <TouchableOpacity
        style={styles.edit}
        onPress={() => beforeNavigation()}
      >
        <Text style={styles.updatetxt}>ADD</Text>
      </TouchableOpacity>
    </View>
  )
}

export default InstructorViewUni

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefbe7',
    width: '100%',
    height: '100%',
    flexDirection: 'column', // Ensure child components are arranged in a column
  },
  logo: {
    marginTop: 40,
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
  edit: {
    width: '100%',
    height: '8%',
    backgroundColor: '#ff8d76',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0
  },
  updatetxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fefbe7'
  },
  topbar: {
    width: '100%',
    height: '5%',
    backgroundColor: '#ff8d76',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  back: {
    position: 'absolute',
    left: 10,
  }
})