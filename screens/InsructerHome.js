import * as React from "react";
import { Text, StyleSheet, View, ScrollView, Pressable } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import app from "../components/firebase_config";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import InstructorBottomBar from "../components/InstructorBottomBar";
import InstructorHomeUniCard from "../components/InstructorHomeUniCard";
import { TextInput } from "react-native";

const InsructerHome = (p) => {
  const navigation = useNavigation();
  const [university_data,setUniversityData] = React.useState([]);
  const [keyword, setKeyword] = React.useState("")
  const iid = p.route.params.id;
  const db = getFirestore(app);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "university"));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setUniversityData(data);
  };
  

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
  },[])
  );


  return (
    <View style={styles.instructorHome}>
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeUser}>Welcome user</Text>
    </View>
    <TextInput 
        placeholder='search for university' 
        style={styles.serachinput}
        onChangeText={(text) => setKeyword(text)}
      />
      <ScrollView style={styles.userlist}>
      {
        university_data.filter(
          (user) => {
              if(keyword == ""){
                return user
              }
              else if (user.username.toLowerCase().includes(keyword.toLowerCase())){
                return user
              }
            }
          ).map((item,index) => {
            return <InstructorHomeUniCard 
              image={item.photo} 
              username={item.username}
              address={item.address}
              key={index}
              id={item.email}
              myid={iid}
            />
          })
        }
      </ScrollView>
    <InstructorBottomBar page={'InsructerHome'} id={iid} />
  </View>
  );
};

const styles = StyleSheet.create({
  instructorHome: {
    flex: 1,
    backgroundColor: '#fefbe7',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the top of the screen
  },
  welcomeContainer: {
    marginTop: 50, // Adjust the marginTop as needed
  },
  welcomeUser: {
    fontSize: FontSize.large,
    fontFamily: FontFamily.bold,
    color: Color.black,
  },
  serachinput: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: 18,
    alignSelf: 'center',
  },
  userlist: {
    width: '100%',
    marginTop: 20
  },
});

export default InsructerHome;
