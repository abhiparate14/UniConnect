import * as React from "react";
import {  Pressable,  StyleSheet,  View,  ImageBackground,  Text,  TouchableOpacity,} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import {app} from '../components/firebase_config';
import { getFirestore ,getDoc ,doc} from 'firebase/firestore';
import { ref ,getStorage,getDownloadURL} from "firebase/storage";


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
  console.log("Profilepic:" + url);
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
          console.log("Document data:", docSnap.data());
          setUsername(docSnap.data().username);
          setAge(docSnap.data().age);
          setDob(docSnap.data().dob);
          setProfilepic(docSnap.data().profilepic);
          // alert(`Your name is ${docSnap.data().email}`);
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
      <View style={styles.studentNavigationBar}>
        <Pressable
          style={[styles.studentNavigationBarChild, styles.studentLayout]}
          onPress={() => navigation.navigate("StudentHome")}
        />
        <Pressable
          style={[styles.studentNavigationBarItem, styles.studentLayout]}
          onPress={() => navigation.navigate("StudentSearch")}
        />
        <Pressable
          style={[styles.studentNavigationBarInner, styles.studentLayout]}
          onPress={() => navigation.navigate("StudentChat")}
        />
        <Pressable
          style={[styles.rectanglePressable, styles.studentLayout]}
          onPress={() => navigation.navigate("StudentProfile")}
        />
        <View style={styles.rectangleView} />
        <Image
          style={[styles.seperationIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/seperation.png")}
        />
        <View style={styles.icons}>
          <Pressable
            style={[styles.teenyiconshomeSolid, styles.bxschatPosition]}
            onPress={() => navigation.navigate("StudentHome")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/teenyiconshomesolid.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.zondiconssearch, styles.bxschatPosition]}
            onPress={() => navigation.navigate("StudentSearch")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/zondiconssearch1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.bxschat, styles.bxschatPosition]}
            onPress={() => navigation.navigate("StudentChat")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bxschat.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.iconamoonprofileFill, styles.bxschatPosition]}
            onPress={() => navigation.navigate("StudentProfile")}
          >
            <Image
              style={[styles.icon3, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconamoonprofilefill1.png")}
            />
          </Pressable>
        </View>
      </View>
      { profilepic&&<Image
          source={{uri: profilepic}}
          style={styles.photoIcon}
          />}
      <View style={[styles.email, styles.dobFlexBox]}>
        <Image
          style={styles.icoutlineEmailIcon}
          contentFit="cover"
          source={require("../assets/icoutlineemail.png")}
        />
        <Text style={[styles.email1, styles.age1Typo]}>{id}</Text>
      </View>
      <View style={[styles.dob, styles.dobFlexBox]}>
        <Image
          style={styles.icoutlineEmailIcon}
          contentFit="cover"
          source={require("../assets/fluentcalendardate28filled.png")}
        />
        <Text style={[styles.dateOfBirth, styles.sevenKayTypo]}>
          {dob}
        </Text>
      </View>
      <View style={[styles.age, styles.dobFlexBox]}>
        <Image
          style={styles.icoutlineEmailIcon}
          contentFit="cover"
          source={require("../assets/gameiconsages.png")}
        />
        <Text style={[styles.age1, styles.age1Typo]}>{age}</Text>
      </View>
      <Text style={[styles.sevenKay, styles.sevenKayTypo]}>{username}</Text>
      <TouchableOpacity
        style={[styles.logout, styles.editBg]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("StudentLogin")}
      >
        <Image
          style={[styles.majesticonslogoutHalfCircle, styles.uileditIconLayout]}
          contentFit="cover"
          source={require("../assets/majesticonslogouthalfcircleline.png")}
        />
        <Text style={[styles.logOut, styles.edit1Typo]}>log out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.edit, styles.editBg]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("StudentProfileEdit", {id: id})}
      >
        <Image
          style={[styles.uileditIcon, styles.uileditIconLayout]}
          contentFit="cover"
          source={require("../assets/uiledit.png")}
        />
        <Text style={[styles.edit1, styles.edit1Typo]}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  studentLayout: {
    width: 59,
    backgroundColor: Color.gainsboro,
    top: 5,
    height: 40,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bxschatPosition: {
    width: "7.6%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  dobFlexBox: {
    alignItems: "center",
    width: 250,
  },
  age1Typo: {
    marginLeft: 45,
    width: 165,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: 18,
  },
  sevenKayTypo: {
    textAlign: "left",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  editBg: {
    backgroundColor: Color.silver,
    borderRadius: Border.br_mini,
    flexDirection: "row",
    position: "absolute",
  },
  uileditIconLayout: {
    height: 32,
    overflow: "hidden",
  },
  edit1Typo: {
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  studentNavigationBarChild: {
    height: 40,
    left: 17,
  },
  studentNavigationBarItem: {
    left: 91,
    height: 40,
  },
  studentNavigationBarInner: {
    left: 174,
    height: 40,
  },
  rectanglePressable: {
    left: 248,
    height: 40,
  },
  rectangleView: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.beige,
    left: "0%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  seperationIcon: {
    height: "80%",
    width: "50.15%",
    top: "10%",
    right: "25.23%",
    bottom: "10%",
    left: "24.62%",
    position: "absolute",
  },
  icon: {
    opacity: 0.5,
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  teenyiconshomeSolid: {
    right: "92.4%",
    left: "0%",
  },
  zondiconssearch: {
    left: "30.8%",
    right: "61.6%",
  },
  bxschat: {
    left: "61.6%",
    right: "30.8%",
  },
  icon3: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  iconamoonprofileFill: {
    left: "92.4%",
    right: "0%",
    width: "7.6%",
  },
  icons: {
    height: "40%",
    width: "80.92%",
    top: "30%",
    right: "10.15%",
    bottom: "30%",
    left: "8.92%",
    position: "absolute",
  },
  studentNavigationBar: {
    top: 718,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 325,
    height: 50,
    left: 17,
    position: "absolute",
  },
  photoIcon: {
    height: 145,
    width: 140,
    borderRadius: 200/2,
    overflow: "hidden",
    marginTop: 70,
    top: 10,
    left: 20,
  },
  icoutlineEmailIcon: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  email1: {
    height: 27,
  },
  email: {
    top: 248,
    flexDirection: "row",
    alignItems: "center",
    width: 250,
    height: 40,
    position: "absolute",
    left: 24,
  },
  dateOfBirth: {
    width: 169,
    height: 29,
    marginLeft: 41,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  dob: {
    top: 408,
    left: 28,
    flexDirection: "row",
    alignItems: "center",
    width: 250,
    height: 40,
    position: "absolute",
  },
  age1: {
    height: 28,
  },
  age: {
    top: 328,
    flexDirection: "row",
    alignItems: "center",
    width: 250,
    height: 40,
    position: "absolute",
    left: 24,
  },
  sevenKay: {
    top: 135,
    left: 180,
    fontSize: 25,
    color: Color.black,
    width: 168,
    height: 39,
    textAlign: "left",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textTransform: "capitalize",
    position: "absolute",
  },
  majesticonslogoutHalfCircle: {
    width: 40,
  },
  logOut: {
    width: 105,
    height: 35,
    marginLeft: 22,
  },
  logout: {
    top: 597,
    left: 49,
    height: 60,
    paddingHorizontal: 38,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    width: 250,
    borderRadius: Border.br_mini,
  },
  uileditIcon: {
    width: 32,
  },
  edit1: {
    width: 95,
    height: 35,
    marginLeft: 26,
  },
  edit: {
    top: 498,
    left: 79,
    width: 191,
    paddingHorizontal: 6,
    paddingVertical: Padding.p_4xs,
    height: 50,
  },
  studentProfile: {
    backgroundColor: Color.ivory,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default StudentProfile;
