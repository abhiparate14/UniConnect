import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const StLdCollege = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.stLdCollege}>
      <ScrollView style={[styles.seprationParent, styles.seprationLayout]}>
        <Image
          style={[styles.seprationIcon, styles.seprationLayout]}
          contentFit="cover"
          source={require("../assets/sepration.png")}
        />
        <View style={[styles.availableCourses, styles.aboutPosition]}>
          <View style={styles.textDetails}>
            <Text style={[styles.btechBcomMtech, styles.textFlexBox]}>{`B.Tech
B.Com
M.Tech
M.Com 
MBA
BBA
L.L.B`}</Text>
            <Text style={[styles.text, styles.textFlexBox]}>{`10000/-
20000/-
60000/-
50000/-
40000/-
12000/-
15000/-`}</Text>
          </View>
          <Text style={styles.availableCourses1}>Available Courses</Text>
        </View>
        <View style={[styles.location, styles.aboutPosition]}>
          <Text style={[styles.ahmedabadGujarat, styles.blaTypo]}>
            Ahmedabad, Gujarat
          </Text>
          <Text style={styles.availableCourses1}>Location</Text>
        </View>
        <View style={[styles.about, styles.aboutPosition]}>
          <Text
            style={[styles.blaBlaBla, styles.blaTypo]}
          >{`bla bla bla bla bla bla bla bla 
bla bla bla bla bla bla bla bla`}</Text>
          <Text style={styles.availableCourses1}>About</Text>
        </View>
      </ScrollView>
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
              source={require("../assets/teenyiconshomesolid4.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.zondiconssearch, styles.bxschatPosition]}
            onPress={() => navigation.navigate("StudentSearch")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/zondiconssearch.png")}
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
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconamoonprofilefill2.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.ganpatUniversity, styles.photoIconPosition]}>
        <Text style={[styles.lDCollege, styles.textFlexBox]}>
          L. D. College
        </Text>
      </View>
      <Image
        style={[styles.photoIcon, styles.photoIconPosition]}
        contentFit="cover"
        source={require("../assets/photo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  seprationLayout: {
    width: 363,
    position: "absolute",
  },
  aboutPosition: {
    left: 26,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
  },
  blaTypo: {
    top: 34,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    lineHeight: 34,
    position: "absolute",
  },
  studentLayout: {
    height: 40,
    width: 59,
    backgroundColor: Color.gainsboro,
    top: 5,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  bxschatPosition: {
    width: "7.6%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  photoIconPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  seprationIcon: {
    top: 110,
    left: 2,
    height: 82,
  },
  btechBcomMtech: {
    width: 87,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    color: Color.black,
    lineHeight: 34,
    height: 236,
  },
  text: {
    width: 76,
    height: 230,
    marginLeft: 96,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    color: Color.black,
    lineHeight: 34,
  },
  textDetails: {
    top: 49,
    width: 259,
    flexDirection: "row",
    height: 236,
    left: 18,
    position: "absolute",
  },
  availableCourses1: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    fontSize: FontSize.size_xl,
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
    position: "absolute",
  },
  availableCourses: {
    top: 200,
    width: 277,
    height: 285,
  },
  ahmedabadGujarat: {
    left: 17,
  },
  location: {
    top: 117,
    width: 211,
    height: 68,
  },
  blaBlaBla: {
    left: 18,
  },
  about: {
    width: 291,
    height: 102,
    top: 0,
  },
  seprationParent: {
    top: 278,
    left: -2,
    maxWidth: 363,
    flex: 1,
    width: 363,
  },
  studentNavigationBarChild: {
    left: 17,
  },
  studentNavigationBarItem: {
    left: 91,
  },
  studentNavigationBarInner: {
    left: 174,
  },
  rectanglePressable: {
    left: 248,
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
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
  teenyiconshomeSolid: {
    right: "92.4%",
    left: "0%",
  },
  icon1: {
    height: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
  zondiconssearch: {
    left: "30.8%",
    right: "61.6%",
  },
  bxschat: {
    left: "61.6%",
    right: "30.8%",
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
    top: 726,
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
  lDCollege: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
    lineHeight: 34,
  },
  ganpatUniversity: {
    top: 214,
    height: 46,
    paddingHorizontal: 101,
    paddingVertical: 0,
    justifyContent: "flex-end",
    backgroundColor: Color.ivory,
    width: 360,
  },
  photoIcon: {
    height: 222,
    top: 0,
  },
  stLdCollege: {
    height: 800,
    width: "100%",
    flex: 1,
    backgroundColor: Color.ivory,
  },
});

export default StLdCollege;
