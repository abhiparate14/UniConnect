import * as React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import app from "../components/firebase_config";
import { getFirestore ,getDocs , collection} from 'firebase/firestore';
import BottomBarStudent from "../components/BottomBarStudent";
import ExploreCard from "../components/ExploreCard";
import { TextInput } from "react-native";
import { ActivityIndicator } from "react-native";

const StudentSearch = (p) => {
  const navigation = useNavigation();
  const id = p.route.params.id;
  const [university,setUniversity]=React.useState([]);
  const [keyword, setKeyword] = React.useState("")
  
  //univercity
  React.useEffect(() => {
    async function getUserData() {
      const db = getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "university"));
      const universitys = [];
      querySnapshot.forEach((doc) => {
        universitys.push(doc.data());
      });
      if (universitys.length > 0) {
        setUniversity(universitys);
      } else {
        console.log("Invalid User !!!");
        alert("Invalid User !!!");
      }
    }
    getUserData();
  }, []);
  
  return (
    <View style={styles.studentSearch}>
      <TextInput 
        placeholder='search for university' 
        style={styles.serachinput}
        onChangeText={(text) => setKeyword(text)}
      />
      <ScrollView style={styles.scroll}>
        {
          university.filter(
            (user) => {
              if(keyword == ""){
                return user
              }
              else if (user.username.toLowerCase().includes(keyword.toLowerCase())){
                return user
              }
            }
          ).map((item) => {
            return (
              <ExploreCard
                universityImage={item.photo}
                universityName={item.username}
                universityLocation={item.address}
                id={id}
                universityID={item.email}
              />
            );
          })
        }
      </ScrollView>
      <BottomBarStudent page={'StudentSearch'} id={id}/>
    </View>
  );
};

const styles = StyleSheet.create({
  
  studentSearch: {
    flex: 1,
    height: '100%',
    width: "100%",
    backgroundColor: Color.ivory,
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
    marginTop: 40,
    marginBottom: 20
  },
  scroll: {
    marginTop: 5,
    marginBottom: 85
  },
});

export default StudentSearch;
