import * as React                         from "react";
import {  StyleSheet, View, Text }        from "react-native";
import { Image }                          from "expo-image";
import { useNavigation }                  from "@react-navigation/native";
import { getFirestore ,getDoc ,doc}       from 'firebase/firestore';
import { ref ,getStorage,getDownloadURL}  from "firebase/storage";
import { StatusBar }                      from "expo-status-bar";
import { ActivityIndicator }              from "react-native";
import { MaterialCommunityIcons }         from '@expo/vector-icons';
import { AntDesign }                      from '@expo/vector-icons';
import { MaterialIcons }                  from '@expo/vector-icons';
import { Fontisto }                       from '@expo/vector-icons';
import { app }                            from '../components/firebase_config';
import StudentProfileTopbar               from "../components/StudentProfileTopbar";
import BottomBarStudent                   from "../components/BottomBarStudent";


const StudentProfile = (p) => {
  const navigation = useNavigation();
  const id=p.route.params.id;
  const [ username, setUsername ] = React.useState('Email');
  const [ age, setAge ] = React.useState('Age');
  const [ dob, setDob ] = React.useState('Date of Birth');
  const [profilepic,setProfilepic]=React.useState('');
  const storage = getStorage(app);
  const gsReference = ref(storage, 'gs://notes-app-44.appspot.com/'+id);
  
  getDownloadURL(ref(storage, gsReference))
  .then((url) => {
  setProfilepic(url)
  })
  //firebase code to retrive information starts
  React.useEffect(
    () => {
      async function getUserData(){
        const db = getFirestore(app);
        const docRef = doc(db, "student", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUsername(docSnap.data().username);
          setAge(docSnap.data().age);
          setDob(docSnap.data().dob);
          setProfilepic(docSnap.data().profilepic);
        } 
        else {
          // doc.data() will be undefined in this case
          console.log("Invalid User !!!");
          alert("Invalid User !!!");
        }
      }
      getUserData();
// firebase code ends
  },[]);
//firebase code to retrive information ends

  return (
    <View style={styles.studentProfile}>
      <StatusBar/>
      <StudentProfileTopbar id={id}/>
        <Image 
          source={{uri: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D'}} 
          style={{width: '100%', height: '20%'}}
        />
        <View style={styles.mybox}>
          { profilepic? <Image
              source={{uri: profilepic}}
              style={styles.photoIcon}
              />
              :
              <ActivityIndicator size={50} color="#0000ff" />
            }
          <View style={styles.usernamebox}>
            <Text style={styles.emailtxt}>USERNAME</Text>
            <View style={styles.box}>
            <AntDesign name="user" size={24} color="black" />
              <Text style={styles.innertxt}>{username}</Text>
            </View>
          </View>
          <View style={styles.usernamebox}>
            <Text style={styles.emailtxt}>Email</Text>
            <View style={styles.box}>
              <MaterialCommunityIcons name="email-multiple-outline" size={24} color="black" />
              <Text style={styles.innertxt}>{id}</Text>
            </View>
          </View>
          <View style={styles.usernamebox}>
            <Text style={styles.emailtxt}>Date Of Birth</Text>
            <View style={styles.box}>
            <MaterialIcons name="date-range" size={24} color="black" />
              <Text style={styles.innertxt}>{dob}</Text>
            </View>
          </View>
          <View style={styles.usernamebox}>
            <Text style={styles.emailtxt}>AGE</Text>
            <View style={styles.box}>
            <Fontisto name="persons" size={24} color="black" />
              {
                age ?
                <Text style={styles.innertxt}>{age}</Text>
                :
                <ActivityIndicator/>

              }
            </View>
          </View>
        </View>
      <BottomBarStudent page={"StudentProfile"} id={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  studentProfile: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fefbe7',
    flexDirection: 'column'
  },
  photoIcon: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 7,
    borderColor: 'white',
    marginTop: 50,
    alignSelf: 'center',
  },
  mybox:{
    top: -150
  },
  bgcolor: {
    width: '100%',
    height: '35%',
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
});

export default StudentProfile;
