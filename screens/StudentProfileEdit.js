import * as React from "react";
import {  Pressable,  StyleSheet,  View,  ImageBackground,  TextInput,  Text,  TouchableOpacity,} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import {app} from '../components/firebase_config';
import { getFirestore, getDoc, doc,updateDoc ,collection} from 'firebase/firestore';

const StudentProfileEdit = (p) => {
  const navigation = useNavigation();
  const id=p.route.params.id;
  const [ username, setUsername ] = React.useState('Email');
  const [ age, setAge ] = React.useState('Age');
  const [ dob, setDob ] = React.useState('Date of Birth');
  const db = getFirestore(app);

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

  const dobHandler = (date) => {
    setDob(age);
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
            // alert(`Your name is ${docSnap.data().email}`);
          } else {
            // doc.data() will be undefined in this case
            console.log("Invalid User !!!");
            alert("Invalid User !!!");
          }
        }
        getUserData();
      },[])
  // firebase code ends
  
  // getUserData();
  //firebase code to retrive information ends

  //send data to firebase starts

  async function updateData(){
    const docRef = doc(db, "student", id);
    console.log("id:",id);
  await updateDoc(docRef, {
    "age": age,
    "username": username,
    "dob": dob,
  });
  }


  //send data to firabase ends

  const beforeNavigation = () => {
    updateData();
    console.log("hi");
    navigation.navigate("StudentProfile",{id: id});
  }

  return (
    <View style={styles.studentProfileEdit}>
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
      <ImageBackground
        style={styles.photoIcon}
        resizeMode="cover"
        source={require("../assets/stock_image.png")}
      />
      <View style={[styles.email, styles.dobFlexBox]}>
        <Image
          style={styles.icoutlineEmailIcon}
          contentFit="cover"
          source={require("../assets/icoutlineemail.png")}
        />
        <TextInput
          style={[styles.email1, styles.email1Typo]}
          placeholder="email"
          value={id}
          autoCapitalize="none"
          placeholderTextColor="#454545"
        />
      </View>
      <View style={[styles.dob, styles.dobFlexBox]}>
        <Image
          style={styles.icoutlineEmailIcon}
          contentFit="cover"
          source={require("../assets/fluentcalendardate28filled1.png")}
        />
        <TextInput
          style={[styles.dateOfBirth, styles.email1Typo]}
          placeholder="Date of Birth"
          value={dob}
          onChangeText={dobHandler}
          keyboardType="default"
          autoCapitalize="none"
          placeholderTextColor="#454545"
        />
      </View>
      <View style={[styles.age, styles.dobFlexBox]}>
        <Image
          style={styles.icoutlineEmailIcon}
          contentFit="cover"
          source={require("../assets/gameiconsages.png")}
        />
        <TextInput
          style={[styles.email1, styles.email1Typo]}
          placeholder="Age"
          value={age}
          onChangeText={ageTextHandler}
          autoCapitalize="none"
          placeholderTextColor="#454545"
        />
      </View>
      {/* <Text style={[styles.sevenKay, styles.saveTypo]}>{username}</Text> */}
      <TextInput
        style={[styles.sevenKay, styles.saveTypo]}
        placeholder="Username"
        value={username}
        onChangeText={usernameTextHandler}
        autoCapitalize="none"
        placeholderTextColor="#454545"
      />
      <TouchableOpacity
        style={styles.edit}
        activeOpacity={0.2}
        onPress={() => beforeNavigation()}
      >
        <Image
          style={styles.mingcutesaveFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutesavefill.png")}
        />
        <Text style={[styles.save, styles.saveTypo]}>save</Text>
      </TouchableOpacity>
      <Image
        style={styles.mingcutesaveFillIcon1}
        contentFit="cover"
        source={require("../assets/mingcutesavefill1.png")}
      />
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
    flexDirection: "row",
    height: 40,
    position: "absolute",
  },
  email1Typo: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
  },
  saveTypo: {
    textAlign: "left",
    textTransform: "capitalize",
    fontWeight: "700",
  },
  studentNavigationBarChild: {
    height: 40,
    left: 17,
    backgroundColor: Color.gainsboro,
    top: 5,
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
    overflow: "hidden",
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
    marginLeft: 45,
  },
  email: {
    top: 248,
    left: 24,
    width: 250,
  },
  dateOfBirth: {
    marginLeft: 41,
  },
  dob: {
    top: 408,
    left: 28,
  },
  age: {
    top: 328,
    left: 24,
    width: 250,
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
  mingcutesaveFillIcon: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  save: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkslategray,
    width: 94,
    height: 32,
    marginLeft: 26,
  },
  edit: {
    top: 587,
    left: 88,
    borderRadius: Border.br_mini,
    overflow: "hidden",
    backgroundColor: Color.silver,
    width: 191,
    paddingHorizontal: 6,
    paddingVertical: Padding.p_4xs,
    flexDirection: "row",
    height: 50,
    position: "absolute",
  },
  mingcutesaveFillIcon1: {
    top: 488,
    left: 199,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  studentProfileEdit: {
    backgroundColor: Color.ivory,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default StudentProfileEdit;
