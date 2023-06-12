import * as React from "react";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const UniversityEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.universityEdit}>
      <View style={styles.background} />
      <Text style={[styles.universityDetails, styles.city1Typo]}>
        University Details
      </Text>
      <ScrollView
        style={styles.nameParent}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.name}>
          <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
        </View>
        <View style={[styles.email, styles.emailSpaceBlock]}>
          <Text style={[styles.name1, styles.name1Typo]}>Email</Text>
        </View>
        <View style={[styles.email, styles.emailSpaceBlock]}>
          <Text style={[styles.name1, styles.name1Typo]}>Address</Text>
        </View>
        <View style={[styles.email, styles.emailSpaceBlock]}>
          <Text style={[styles.contactNo1, styles.name1Typo]}>Contact No</Text>
        </View>
        <View style={[styles.email, styles.emailSpaceBlock]}>
          <Text style={[styles.contactNo1, styles.name1Typo]}>Password</Text>
        </View>
        <View style={[styles.description, styles.citySpaceBlock]}>
          <Text style={[styles.description1, styles.city1Typo]}>
            Description
          </Text>
        </View>
        <View style={[styles.city, styles.citySpaceBlock]}>
          <Text style={[styles.city1, styles.city1Typo]}>City</Text>
        </View>
        <Pressable
          style={[styles.logout, styles.emailSpaceBlock]}
          onPress={() => navigation.navigate("LANDINGPAGE")}
        >
          <Text style={[styles.logOut, styles.name1Typo]}>Log Out</Text>
        </Pressable>
      </ScrollView>
      <View style={styles.universityEditChild} />
      <Text style={styles.welcomeUser}>Welcome user</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("UniversityHome")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <View style={styles.universityBtn}>
        <Pressable
          style={[styles.universityBtnChild, styles.universityPosition]}
          onPress={() => navigation.navigate("UniversityDetails")}
        />
        <Pressable
          style={[styles.universityBtnItem, styles.universityPosition]}
          onPress={() => navigation.navigate("UniversityEdit")}
        />
        <View
          style={[styles.universityBtnInner, styles.universityBtnInnerPosition]}
        />
        <View style={[styles.icons, styles.iconsPosition]}>
          <Pressable
            style={styles.universityBtnInnerPosition}
            onPress={() => navigation.navigate("UniversityDetails")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/teenyiconshomesolid1.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Pressable
          style={[styles.iconamoonprofileFill, styles.iconsPosition]}
          onPress={() => navigation.navigate("UniversityEdit")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/iconamoonprofilefill1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
  },
  city1Typo: {
    height: 34,
    lineHeight: 34,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  name1Typo: {
    height: 31,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    lineHeight: 34,
    fontSize: FontSize.size_lg,
  },
  emailSpaceBlock: {
    marginTop: 33,
    paddingVertical: Padding.p_4xs,
    height: 50,
    width: 255,
  },
  citySpaceBlock: {
    justifyContent: "center",
    paddingVertical: 0,
    marginTop: 33,
    paddingHorizontal: Padding.p_20xl,
    width: 255,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
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
  background: {
    left: 19,
    backgroundColor: Color.blanchedalmond_100,
    width: 312,
    height: 790,
    borderRadius: Border.br_3xs,
    top: 126,
    position: "absolute",
  },
  universityDetails: {
    left: 97,
    width: 160,
    top: 126,
    lineHeight: 34,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  name1: {
    opacity: 0.6,
    width: 89,
    height: 31,
  },
  name: {
    paddingVertical: Padding.p_4xs,
    width: 255,
    paddingHorizontal: Padding.p_20xl,
    height: 50,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
  },
  email: {
    paddingHorizontal: Padding.p_20xl,
    marginTop: 33,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
  },
  contactNo1: {
    width: 124,
    opacity: 0.6,
  },
  description1: {
    width: 134,
    opacity: 0.6,
  },
  description: {
    height: 116,
  },
  city1: {
    width: 80,
    opacity: 0.6,
  },
  city: {
    height: 50,
  },
  logOut: {
    width: 89,
    height: 31,
  },
  logout: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.silver,
    paddingHorizontal: 67,
    alignItems: "flex-end",
  },
  nameParent: {
    top: 176,
    left: 52,
    position: "absolute",
    flex: 1,
  },
  universityEditChild: {
    top: 0,
    left: 0,
    width: 360,
    height: 122,
    position: "absolute",
    backgroundColor: Color.ivory,
  },
  welcomeUser: {
    top: 83,
    left: 42,
    fontSize: FontSize.size_xl,
    width: 157,
    height: 39,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    opacity: 0.6,
  },
  vector: {
    left: "86.39%",
    top: "10.38%",
    right: "8.06%",
    bottom: "86.5%",
    width: "5.56%",
    height: "3.13%",
    position: "absolute",
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
  },
  icon1: {
    opacity: 0.5,
    height: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
  icons: {
    right: "70.49%",
    left: "22.91%",
    opacity: 0.6,
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
  icon2: {
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
    top: 730,
    left: 28,
    width: 323,
    height: 50,
    position: "absolute",
  },
  universityEdit: {
    height: 800,
    width: "100%",
    flex: 1,
    backgroundColor: Color.ivory,
  },
});

export default UniversityEdit;
