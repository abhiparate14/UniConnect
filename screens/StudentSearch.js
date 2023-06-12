import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const StudentSearch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.studentSearch}>
      <Text style={[styles.universities, styles.searchPosition]}>
        <Text style={styles.instructorsTypo}>Universities</Text>
        <Text style={[styles.text, styles.textTypo]}>:</Text>
      </Text>
      <Text style={[styles.instructors, styles.instructorsTypo]}>
        Instructors:
      </Text>
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
      <Pressable
        style={styles.searchBar}
        onPress={() => navigation.navigate("StudentSearchResult")}
      >
        <Image
          style={styles.stroke2searchIcon}
          contentFit="cover"
          source={require("../assets/stroke-2search.png")}
        />
        <Text style={[styles.whatUniversityAre, styles.universityFlexBox]}>
          What University are you looking?
        </Text>
      </Pressable>
      <Text style={[styles.search, styles.searchPosition]}>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  studentLayout1: {
    width: 339,
    left: 21,
    height: 160,
    position: "absolute",
  },
  card1ParentPosition: {
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    height: 160,
    position: "absolute",
  },
  universityFlexBox: {
    textAlign: "left",
    lineHeight: 34,
    color: Color.black,
  },
  zhouGuanyuTypo: {
    top: 104,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 34,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  searchPosition: {
    left: 43,
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  instructorsTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  studentLayout: {
    height: 40,
    width: 59,
    backgroundColor: Color.beige,
    top: 5,
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
  text: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
  },
  universities: {
    top: 217,
  },
  instructors: {
    top: 445,
    left: 43,
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
    position: "absolute",
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
    left: "0%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    height: "100%",
    backgroundColor: Color.beige,
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
  icon1: {
    height: "100%",
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
  stroke2searchIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  whatUniversityAre: {
    fontSize: FontSize.size_mid,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    opacity: 0.7,
    marginLeft: 14,
  },
  searchBar: {
    top: 133,
    left: 14,
    width: 331,
    height: 55,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_2xs,
    paddingBottom: Padding.p_3xs,
    backgroundColor: Color.blanchedalmond_100,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  search: {
    top: 69,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  studentSearch: {
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.ivory,
  },
});

export default StudentSearch;
