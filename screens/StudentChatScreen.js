import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where, getFirestore, doc, getDoc} from 'firebase/firestore';
import  app  from '../components/firebase_config';
import { StatusBar } from 'expo-status-bar';
import Topbar from '../components/Topbar'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Chatcard from '../components/Chatcard';

const StudentChatScreen = (p) => {
  const navigation = useNavigation();
  const StudentEmail = p.route.params.StudentEmail;
  const InstructorEmail = p.route.params.InstructorEmail;
  const InstructorName = p.route.params.InstructorName;
  const [studentName,setStudentName] = useState('');
  const roomname = StudentEmail+InstructorEmail;
  // console.log('roomname: ' + roomname);
  // console.log('instructor email: ' + InstructorEmail);
  const db = getFirestore(app);

  // experimental
  const [newmsg, setNewmsg] = useState('');
    // console.log(username, roomname,newmsg);
    const [chat,setChat] = useState([]);
    const d=new Date();

    useEffect(
      () => {
        async function getUserData(){
          const db = getFirestore(app);
          const docRef = doc(db, "student", StudentEmail);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            // StudentName = docSnap.data().username
            setStudentName(docSnap.data().username);
            // alert(`Your name is ${docSnap.data().email}`);
          } else {
            // doc.data() will be undefined in this case
            console.log("Invalid User !!!");
            alert("Invalid User !!!");
          }
        }
        getUserData();
  },[])


// ye msg laane ke liye hai
    useEffect(() => {
        const docRef = collection(db, "Msg");
        const q = query(docRef, 
            where("roomname", "==", roomname),
            orderBy("createdAt", "asc")
            );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const msgs = [];
            querySnapshot.forEach((doc) => {
                msgs.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setChat(msgs);
        });
        return () => {
            unsubscribe();
        }
    }
    ,[]);



    const handlebtn = async() => {
        // console.log('btn clicked');
        if(newmsg === '') {
            alert('Please enter a message');
            return;
        }
        await addDoc(collection(db, "Msg"), 
        {
            username: studentName,
            roomname: roomname,
            message: newmsg,
            createdAt: serverTimestamp(),
            profile_pic: 'https://images.pexels.com/photos/1036642/pexels-photo-1036642.jpeg?auto=compress&cs=tinysrgb&w=600'
        });
        setNewmsg('');
    }
  // experimental


  return (
    <View style={styles.container}>
      <StatusBar/>
      <Topbar page={InstructorName}/>
      <ScrollView style={styles.scroll}>
     {
        chat.map((message) => {
            return <Chatcard key={d.getTime} message={message} username={studentName}/>
        })
      }
     </ScrollView>
     <View style={styles.bottom}>
        <View style={styles.bg}>
            <TextInput
                style={styles.txtbox}
                placeholder='Type a message'
                value={newmsg}
                onChangeText={(e) => setNewmsg(e)}
                // value={newmsg}
            />
            <TouchableOpacity style={styles.send}
            onPress={() => handlebtn()}
            >
                <Text>Send</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default StudentChatScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
},
bottom: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: '90%',
    overflow: 'hidden',
    opacity: 1,
},
txtbox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '70%',
    margin: 10,
    borderRadius: 10,
    paddingLeft: 10,
},
send: {
    height: 40,
    width: '100%',
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#00ff00',
    justifyContent: 'center',
    alignItems: 'center',
},
bg: {
    backgroundColor: '#fff',
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
},
scroll: {
    width: '100%',
    marginBottom: 90,
    flexDirection: 'column',
}
})