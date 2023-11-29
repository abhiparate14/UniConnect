import * as React from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";
import { app } from '../components/firebase_config';
import { getFirestore, getDoc, doc,updateDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { getStorage, ref ,uploadBytes,getDownloadURL } from "firebase/storage";
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const StudentProfileEdit = (p) => {
  const navigation = useNavigation();
  const id=p.route.params.id;
  const [ username, setUsername ] = React.useState('Email');
  const [ age, setAge ] = React.useState('Age');
  const [ dob, setDob ] = React.useState('Date of Birth');
  const [ image, setImage ] = React.useState(null);
  const [ tempImage, setTempImage ] = React.useState(null);
  const [ imageStatus, setImageStatus ] = React.useState(false);
  // const [ uploading, setUploading ] = React.useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const storage = getStorage(app);
  const gsReference = ref(storage, 'gs://notes-app-44.appspot.com/'+id);

  const db = getFirestore(app);

  getDownloadURL(ref(storage, gsReference))
  .then((url) => {
  console.log("Profilepic:" + url);
  setTempImage(url);
  })

  const usernameTextHandler = (username) => {
    if (username != ''){
      setUsername(username);
    }
  };

  const ageTextHandler = (age) => {
    if (!isNaN(+age)) {
      setAge(age);
    }
  }
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dt = new Date(date);
    const temp_date  = dt.toISOString().split('T');
    const actual_date = temp_date[0].split('-');
    setDob(actual_date[2] + '/' + actual_date[1] + '/' + actual_date[0]);
    hideDatePicker();
  };

  const dobHandler = (date) => {
    handleConfirm()
  }

    //firebase code to retrive information starts
    React.useEffect(
      () => {
        async function getUserData(){
          const docRef = doc(db, "student", id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setUsername(docSnap.data().username);
            setAge(docSnap.data().age);
            setDob(docSnap.data().dob);
            setTempImage(docSnap.data().photo)
          } else {
            console.log("Invalid User !!!");
            alert("Invalid User !!!");
          }
        }
        getUserData();
      },[]);

  async function updateData(){
    const docRef = doc(db, "student", id);
    console.log("id:",id);
  await updateDoc(docRef, {
    "age": age,
    "username": username,
    "dob": dob,
    "photo":tempImage,
  });
  }

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
    setUploading(true);
    
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
      const storage = getStorage(app);
      const photoRef = ref(storage, filename);
      await uploadBytes(photoRef, blob).then((snapshot) => {
      });
      setUploading(false);
      alert('Photo Uploaded!!!');
      setImage(null);

    } catch(error) {
      console.error(error);
      setUploading(false);
    }
  }


  const test = () => {
    setImageStatus(true);
    pickImage();
    console.log("Test pass !!!");
  }


  //send data to firabase ends

  const beforeNavigation = async() => {
    await updateData().then(()=>{
      uploadMedia().then(()=>{
        navigation.navigate("StudentProfile",{id: id});
      });
    });
    setImageStatus(false);
  }
  // console.log('image: ' + image)



  return (
    <View style={styles.studentProfileEdit}>
      <View style={styles.bgcolor}>
        <TouchableOpacity 
            style={styles.back}
            onPress={() => navigation.navigate('StudentProfile', {id: id})}
        >
                <Ionicons name="arrow-back-sharp" size={24} color="#fefbe7" />
                <Text style={styles.backTxt}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainBody}>
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
        <View style={styles.usernamebox}>
          <Text style={styles.emailtxt}>USERNAME</Text>
          <View style={styles.box}>
            <TextInput
              style={styles.innertxt}
              placeholder="Username"
              value={username}
              onChangeText={usernameTextHandler}
              autoCapitalize="none"
              placeholderTextColor="#454545"
            />
          </View>
        </View>
        <View style={styles.usernamebox}>
          <Text style={styles.emailtxt}>Date Of Birth</Text>
          <TouchableOpacity 
            style={styles.box}
            onPress={() => {showDatePicker()}}
          >
            <Text
              style={styles.innertxt}
            >{dob}</Text>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.usernamebox}>
          <Text style={styles.emailtxt}>AGE</Text>
          <View style={styles.box}>
          <TextInput
          style={styles.innertxt}
          placeholder="Age"
          value={age}
          onChangeText={ageTextHandler}
          autoCapitalize="none"
          placeholderTextColor="#454545"
        />
          </View>
        </View>
      </View>
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
  studentProfileEdit: {
    backgroundColor: '#fefbe7',
    width: '100%',
    height:'100%'
  },
  bgcolor: {
    backgroundColor: '#ff8d76',
    marginTop: 40,
    height: '20%'
  },
  photoIcon: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: -100,
    borderWidth: 5,
    borderColor: '#fefbe7',
    borderRadius: 100
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
    height: '10%',
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
});

export default StudentProfileEdit;
