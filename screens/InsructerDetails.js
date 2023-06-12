import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const InsructerDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.insructerDetails}>
      <View style={styles.studentListView} />
      <View style={[styles.insructerDetailsChild, styles.picIconLayout]} />
      <View style={styles.instructerBtn}>
        <View
          style={[styles.instructerBtnChild, styles.instructerBtnChildBg]}
        />
        <Image
          style={[styles.instructerBtnItem, styles.instructerLayout]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Image
          style={[styles.instructerBtnInner, styles.instructerLayout]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Pressable
          style={[styles.profile, styles.chatLayout]}
          onPress={() => navigation.navigate("InsructerDetails")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
        </Pressable>
        <View style={[styles.icons, styles.chatLayout]}>
          <Pressable
            style={[
              styles.teenyiconshomeSolid,
              styles.instructerBtnChildPosition,
            ]}
            onPress={() => navigation.navigate("InsructerHome")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/teenyiconshomesolid2.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={[styles.chat, styles.chatLayout]}
          onPress={() => navigation.navigate("InsructerChat")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chat.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.welcomeUser, styles.name1Typo]}>Welcome user</Text>
      <Image
        style={[styles.picIcon, styles.picIconLayout]}
        contentFit="cover"
        source={require("../assets/pic.png")}
      />
      <View style={[styles.name, styles.nameLayout]}>
        <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
      </View>
      <View style={[styles.email, styles.nameLayout]}>
        <Text style={[styles.name1, styles.name1Typo]}>Email</Text>
      </View>
      <View style={[styles.contactNo, styles.nameLayout]}>
        <Text style={[styles.name1, styles.name1Typo]}>Contact No</Text>
      </View>
      <View style={[styles.password, styles.nameLayout]}>
        <Text style={[styles.name1, styles.name1Typo]}>Password</Text>
      </View>
      <Pressable
        style={[styles.insructerDetailsItem, styles.instructerBtnChildBg]}
        onPress={() => navigation.navigate("InsructerEdit")}
      />
      <Pressable
        style={styles.iconamoonprofileFill}
        onPress={() => navigation.navigate("InsructerEdit")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/iconamoonprofilefill1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  picIconLayout: {
    width: 140,
    position: "absolute",
  },
  instructerBtnChildBg: {
    backgroundColor: Color.beige,
    position: "absolute",
  },
  instructerLayout: {
    opacity: 0.35,
    bottom: "1%",
    top: "4%",
    width: "0.31%",
    height: "95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chatLayout: {
    height: "40%",
    width: "6.15%",
    position: "absolute",
  },
  instructerBtnChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  name1Typo: {
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xl,
  },
  nameLayout: {
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_27xl,
    height: 60,
    width: 242,
    left: 57,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  studentListView: {
    top: 260,
    left: 41,
    borderRadius: Border.br_xl,
    backgroundColor: Color.blanchedalmond_100,
    width: 294,
    height: 438,
    position: "absolute",
  },
  insructerDetailsChild: {
    top: 198,
    left: 62,
    backgroundColor: Color.silver,
    display: "none",
    height: 35,
    borderRadius: Border.br_3xs,
    width: 140,
  },
  instructerBtnChild: {
    borderRadius: Border.br_6xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  instructerBtnItem: {
    right: "70.31%",
    left: "29.38%",
  },
  instructerBtnInner: {
    right: "35.85%",
    left: "63.85%",
  },
  profile: {
    left: "77.23%",
    top: "34%",
    right: "16.62%",
    bottom: "26%",
  },
  teenyiconshomeSolid: {
    position: "absolute",
  },
  icons: {
    top: "30%",
    right: "80.92%",
    bottom: "30%",
    left: "12.92%",
    opacity: 0.6,
  },
  icon2: {
    opacity: 0.6,
  },
  chat: {
    left: "43.69%",
    top: "38%",
    right: "50.15%",
    bottom: "22%",
  },
  instructerBtn: {
    top: 730,
    left: 25,
    width: 325,
    height: 50,
    position: "absolute",
  },
  welcomeUser: {
    top: 25,
    left: 103,
    fontFamily: FontFamily.interRegular,
    width: 157,
    height: 39,
    position: "absolute",
  },
  picIcon: {
    top: 89,
    left: 102,
    height: 140,
  },
  name1: {
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 134,
    height: 28,
    opacity: 0.6,
  },
  name: {
    top: 343,
  },
  email: {
    top: 428,
  },
  contactNo: {
    top: 513,
  },
  password: {
    top: 598,
  },
  insructerDetailsItem: {
    top: 287,
    left: 252,
    width: 47,
    height: 35,
  },
  iconamoonprofileFill: {
    left: "73.61%",
    top: "36.88%",
    right: "20.47%",
    bottom: "60.63%",
    width: "5.92%",
    height: "2.5%",
    position: "absolute",
  },
  insructerDetails: {
    backgroundColor: Color.ivory,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default InsructerDetails;
