import * as React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import ExploreContainer from "../components/ExploreContainer";
import ExploreCard from "../components/ExploreCard";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const StudentHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.studentHome}>
      <ScrollView
        style={styles.card1Parent}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <ExploreContainer />
        <ExploreCard
          universityName={require("../assets/rectangle-585.png")}
          universityLocation="Nirma University"
          collegeName="Ahmedabad,Gujarat"
        />
        <ExploreCard
          universityName={require("../assets/rectangle-586.png")}
          universityLocation="L. D. College"
          collegeName="Ahmedabad, Gujarat"
          propWidth={144}
        />
        <ExploreCard
          universityName={require("../assets/rectangle-587.png")}
          universityLocation="Gujarat University"
          collegeName="Ahmedabad, Gujarat"
          propWidth={172}
        />
        <Text style={[styles.loadMore, styles.welcomeTypo]}>Load More</Text>
      </ScrollView>
      <View style={styles.welcomeText}>
        <Text style={[styles.welcome, styles.userFlexBox]}>WELCOME !</Text>
        <Text style={[styles.user, styles.userFlexBox]}>{`{user}`}</Text>
      </View>
      <Image
        style={[styles.icons, styles.iconsLayout]}
        contentFit="cover"
        source={require("../assets/icons.png")}
      />
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
          style={[styles.seperationIcon, styles.iconsLayout]}
          contentFit="cover"
          source={require("../assets/seperation.png")}
        />
        <View style={styles.icons1}>
          <Pressable
            style={[styles.teenyiconshomeSolid, styles.bxschatPosition]}
            onPress={() => navigation.navigate("StudentHome")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/teenyiconshomesolid2.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.zondiconssearch, styles.bxschatPosition]}
            onPress={() => navigation.navigate("StudentSearch")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/zondiconssearch1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.bxschat, styles.bxschatPosition]}
            onPress={() => navigation.navigate("StudentChat")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bxschat.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.iconamoonprofileFill, styles.bxschatPosition]}
            onPress={() => navigation.navigate("StudentProfile")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconamoonprofilefill2.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
  },
  welcomeTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  userFlexBox: {
    textAlign: "left",
    color: Color.black,
    lineHeight: 34,
  },
  iconsLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  studentLayout: {
    height: 40,
    width: 59,
    backgroundColor: Color.beige,
    top: 5,
    position: "absolute",
  },
  bxschatPosition: {
    width: "7.6%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
  loadMore: {
    fontSize: FontSize.size_sm,
    textDecoration: "underline",
    color: Color.red,
    textAlign: "center",
    marginTop: 14,
    width: 325,
    lineHeight: 34,
    fontWeight: "500",
  },
  card1Parent: {
    top: 166,
    left: 17,
    position: "absolute",
    flex: 1,
  },
  welcome: {
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  user: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.interRegular,
    marginTop: 17,
  },
  welcomeText: {
    top: 0,
    left: 0,
    width: 360,
    height: 166,
    paddingHorizontal: 27,
    paddingTop: 69,
    paddingBottom: 12,
    justifyContent: "flex-end",
    position: "absolute",
    backgroundColor: Color.ivory,
  },
  icons: {
    height: "3.13%",
    width: "19.46%",
    top: "9.13%",
    right: "6.38%",
    bottom: "87.75%",
    left: "74.17%",
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
  },
  teenyiconshomeSolid: {
    right: "92.4%",
    left: "0%",
  },
  icon1: {
    opacity: 0.5,
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
  icons1: {
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
    height: 50,
    width: 325,
    left: 17,
    position: "absolute",
  },
  studentHome: {
    height: 800,
    width: "100%",
    flex: 1,
    backgroundColor: Color.ivory,
  },
});

export default StudentHome;
