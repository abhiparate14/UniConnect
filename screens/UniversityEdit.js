import * as React from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";
import { app } from '../components/firebase_config';
import { getFirestore, getDoc, doc,updateDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { getStorage, ref ,uploadBytes,getDownloadURL } from "firebase/storage";
import { Ionicons } from '@expo/vector-icons';

const UniversityEdit = (p) => {
  const navigation = useNavigation();
  const id=p.route.params.id;
  const [ image, setImage ] = React.useState(null);
  const [ tempImage, setTempImage ] = React.useState(null);
  const [ imageStatus, setImageStatus ] = React.useState(false);
  const [ address, setAddress ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [ city, setCity ] = React.useState('');
  const [ contact, setContact ] = React.useState('');
  const [ username,setUsername ] = React.useState('');
  const [ pic, setPic ] = React.useState('');
  const db = getFirestore(app);
  const storage = getStorage(app);


      //firebase code to retrive information starts
      React.useEffect(
        () => {
          console.log('i was called')
          async function getUserData(){
            const docRef = doc(db, "university", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
              setUsername(docSnap.data().username);
              setAddress(docSnap.data().address);
              setEmail(docSnap.data().email);
              setCity(docSnap.data().city);
              setContact(docSnap.data().contact);
              setTempImage(docSnap.data().photo)
              // alert(`Your name is ${docSnap.data().email}`);
            } else {
              // doc.data() will be undefined in this case
              console.log("Invalid User !!!");
              alert("Invalid User !!!");
            }
          }
          getUserData();
        },[]);

  const pickImage = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });
    if(!result.canceled) {
      setImage(result.assets[0].uri);
      console.log("image is: " + image);
    }
    else{
      setImageStatus(false)
    }
  };


  const uploadMedia = async() => {
    // setUploading(true);
    
    try {
      const { uri } = await FileSystem.getInfoAsync(image);
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function(){
          resolve(xhr.response);
        };
        xhr.onerror = (e) => {
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
      })
      const filename = id;
      console.log(filename);
      const photoRef = ref(storage, filename);
      // await photoRef.put(blob);
      await uploadBytes(photoRef, blob).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
      // setUploading(false);
      alert('Photo Uploaded!!!');
      setImage(null);

    } catch(error) {
      console.error(error);
      // setUploading(false);
    }
  }

  async function updateData(){
    const docRef = doc(db, "university", id);
    console.log("id:",id);
  await updateDoc(docRef, {
    username: username,
    address: address,
    email: email,
    city: city,
    contact: contact,
    "photo":pic,
  });
  }
  const gsReference = ref(storage, 'gs://notes-app-44.appspot.com/'+id);
  getDownloadURL(ref(storage, gsReference))
  .then((url) => {
  console.log("epic:" + url);
  setPic(url);
  })
  const beforeNavigation = () => {
    uploadMedia().then(()=>{
      updateData().then(()=>{
        setImageStatus(false);
        navigation.navigate("UniversityDetails",{id: id});
      });
    })
    // console.log('pic:',pic)
  }

  const test = () => {
    setImageStatus(true);
    pickImage();
    console.log("Test pass !!!");
  }

  return (
    <View style={styles.container}>
        <View style={styles.bgcolor}>
          <TouchableOpacity 
              style={styles.back}
              onPress={() => navigation.navigate('UniversityDetails', {id: id})}
          >
                  <Ionicons name="arrow-back-sharp" size={24} color="#fefbe7" />
                  <Text style={styles.backTxt}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.uniconnect}>UniConnect</Text>
        </View>
      <View >
        <TouchableOpacity 
          style={styles.photoBtn}
          onPress={() => test()}
        >
          {imageStatus ? 
            <Image
              source={{uri: image}}
              style={styles.photoIcon}
            />
            :
            <Image
              source={{uri: tempImage}}
              style={styles.photoIcon}
            />
          }
        </TouchableOpacity>
        <Text style={styles.changePhoto}>Change Image</Text>
      </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.usernamebox}>
            <Text style={styles.emailtxt}>USERNAME</Text>
            <View style={styles.box}>
              <TextInput
                style={styles.innertxt}
                placeholder="Username"
                value={username}
                onChangeText={(txt) => setUsername(txt)}
                autoCapitalize="none"
                placeholderTextColor="#454545"
              />
            </View>
          </View>
          <View style={styles.usernamebox}>
            <Text style={styles.emailtxt}>Address</Text>
            <View style={styles.box}>
              <TextInput
                style={styles.innertxt}
                placeholder="Address"
                value={address}
                onChangeText={(txt) => setAddress(txt)}
                autoCapitalize="none"
                placeholderTextColor="#454545"
              />
            </View>
          </View>
          <View style={styles.usernamebox}>
            <Text style={styles.emailtxt}>Contact Email</Text>
            <View style={styles.box}>
              <TextInput
                style={styles.innertxt}
                placeholder="Conatct Email"
                value={email}
                onChangeText={(txt) => setEmail(txt)}
                autoCapitalize="none"
                placeholderTextColor="#454545"
              />
            </View>
          </View>
          <View style={styles.usernamebox}>
            <Text style={styles.emailtxt}>City</Text>
            <View style={styles.box}>
              <TextInput
                style={styles.innertxt}
                placeholder="City"
                value={city}
                onChangeText={(txt) => setCity(txt)}
                autoCapitalize="none"
                placeholderTextColor="#454545"
              />
            </View>
          </View>
          <View style={styles.usernamebox}>
            <Text style={styles.emailtxt}>Contact Number</Text>
            <View style={styles.box}>
              <TextInput
                style={styles.innertxt}
                placeholder="Contact Number"
                value={contact}
                onChangeText={(txt) => setContact(txt)}
                autoCapitalize="none"
                placeholderTextColor="#454545"
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
        style={styles.edit}
        onPress={() => beforeNavigation()}
      >
        <Text style={styles.updatetxt}>UPDATE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefbe7',
    width: '100%',
    height:'100%',
    flex: 1,
  },
  back: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  backTxt: {
    fontSize: 18,
    marginLeft: 10,
    color: '#fefbe7'
  },
  studentLayout: {
    width: 59,
    backgroundColor: Color.gainsboro,
    top: 5,
    height: 40,
    position: "absolute",
  },
  bgcolor: {
    backgroundColor: '#ff8d76',
    marginTop: 40,
    height: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  photoIcon: {
    width: '100%',
    aspectRatio: 16 / 9,
    alignSelf: 'center',
  },
  changePhoto: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    color: '#454545'
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
    width: '100%',
    height: '100%',
    color: 'grey'
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
  uniconnect: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fefbe7',
    marginRight: 20
  },
  scroll: {
    width: '100%',
    // height: '70%', // Remove or comment out this line
    marginBottom: 80,
  },
});

export default UniversityEdit;
