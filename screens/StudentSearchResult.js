import * as React from "react";
import { Pressable, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import SearchResultContainer from "../components/SearchResultContainer";
import { Color, Border, Padding, FontFamily, FontSize } from "../GlobalStyles";

const StudentSearchResult = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.studentSearchResult}>
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
      <SearchResultContainer />
      <TextInput
        style={styles.searchBar}
        placeholder="What University are you looking?"
        keyboardType="default"
        placeholderTextColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  studentLayout: {
    height: 40,
    width: 59,
    backgroundColor: Color.gainsboro,
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
  searchBar: {
    top: 28,
    left: 11,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.blanchedalmond_100,
    width: 331,
    height: 55,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_2xs,
    paddingBottom: Padding.p_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  studentSearchResult: {
    backgroundColor: Color.ivory,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default StudentSearchResult;
