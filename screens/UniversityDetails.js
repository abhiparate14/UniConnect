import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import BottomBarUniversity from "../components/BottomBarUniversity";
import app from '../components/firebase_config';
import {doc, getDoc, getFirestore} from 'firebase/firestore';

const UniversityDetails = (p) => {
  const navigation = useNavigation();
  const id=p.route.params.id;
  const db=getFirestore(app);
  const [data,setData]=React.useState([]);
  React.useEffect(()=>{
    async function getUserData(){
      const docRef = doc(db, "university", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData(docSnap.data());
      } 
      else {
        console.log("Invalid User !!!");
        alert("Invalid User !!!");
      }
    }
    getUserData();
  },[]);
  console.log('universityData:',data);
  
  
  return (
    <View style={styles.universityDetails}>
      <ImageBackground
        style={[styles.universityDetailsChild, styles.backgroundPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle58.png")}
      />
      <ScrollView style={styles.detailsOfUni}>
        <View style={[styles.background, styles.backgroundPosition]} />
        <Text style={[styles.about, styles.aboutFlexBox]}>About</Text>
        <Text style={[styles.ganpatUniversity, styles.universityLayout]}>
          Ganpat University
        </Text>
        <Text style={[styles.kheravagujarat, styles.aboutFlexBox]}>
          Kherava,Gujarat
        </Text>
        <Text style={[styles.availableCourses, styles.ganpatUniversityTypo]}>
          Available Courses
        </Text>
        <View style={styles.textDetails}>
          <Text style={[styles.btechBcomMtech, styles.blaTypo]}>{`B.Tech
B.Com
M.Tech
M.Com 
MBA
BBA
L.L.B`}</Text>
          <Text style={[styles.text, styles.blaTypo]}>{`10000/-
20000/-
60000/-
50000/-
40000/-
12000/-
15000/-`}</Text>
        </View>
        <Text
          style={[styles.blaBalBla, styles.blaTypo]}
        >{`bla bal bla bla bla bla bla
bla bla bla bla bla bla bla`}</Text>
      </ScrollView>
      <BottomBarUniversity page={'UniversityDetails'} id={id}/>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  aboutFlexBox: {
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
    position: "absolute",
  },
  universityLayout: {
    height: 50,
    position: "absolute",
  },
  ganpatUniversityTypo: {
    left: 32,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_lg,
  },
  blaTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
    fontSize: FontSize.size_lg,
  },
  universityPosition: {
    backgroundColor: Color.lightpink,
    bottom: "12%",
    top: "10%",
    width: "42.9%",
    height: "78%",
    position: "absolute",
  },
  universityBtnInnerPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconsPosition: {
    bottom: "28%",
    top: "32%",
    width: "6.6%",
    height: "40%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  universityDetailsChild: {
    width: 360,
    height: 200,
  },
  background: {
    backgroundColor: Color.blanchedalmond_100,
    width: 312,
    height: 557,
  },
  about: {
    top: 83,
    left: 36,
    width: 135,
    height: 28,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
  },
  ganpatUniversity: {
    width: 157,
    left: 32,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    lineHeight: 34,
    fontSize: FontSize.size_lg,
    top: 0,
    height: 50,
  },
  kheravagujarat: {
    top: 34,
    left: 189,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 136,
    height: 56,
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
  },
  availableCourses: {
    top: 208,
    width: 190,
    height: 38,
    position: "absolute",
  },
  btechBcomMtech: {
    width: 87,
    height: 236,
  },
  text: {
    width: 76,
    height: 230,
    marginLeft: 96,
  },
  textDetails: {
    top: 246,
    left: 34,
    width: 259,
    flexDirection: "row",
    height: 236,
    position: "absolute",
  },
  blaBalBla: {
    top: 119,
    left: 64,
    width: 231,
    height: 71,
    position: "absolute",
  },
  detailsOfUni: {
    top: 227,
    left: 24,
    width: 325,
    maxWidth: 325,
    position: "absolute",
    flex: 1,
  },
  universityBtnChild: {
    right: "52.15%",
    left: "4.95%",
  },
  universityBtnItem: {
    right: "4.62%",
    left: "52.48%",
  },
  universityBtnInner: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.beige,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
  icons: {
    right: "70.49%",
    left: "22.91%",
  },
  vectorIcon: {
    height: "95%",
    width: "0.31%",
    top: "4%",
    right: "51.86%",
    bottom: "1%",
    left: "47.83%",
    opacity: 0.35,
    position: "absolute",
  },
  icon1: {
    opacity: 0.6,
    height: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
  iconamoonprofileFill: {
    left: "70.59%",
    right: "22.81%",
  },
  universityBtn: {
    top: 734,
    left: 26,
    width: 323,
  },
  universityDetails: {
    backgroundColor: Color.ivory,
    height: 800,
    width: "100%",
    flex: 1,
  },
});

export default UniversityDetails;
