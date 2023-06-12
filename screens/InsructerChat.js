import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const InsructerChat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.insructerChat}>
      <Text style={styles.welcomeUser}>Welcome user</Text>
      <View style={styles.insructerChatChild} />
      <View style={styles.instructerBtn}>
        <View
          style={[styles.instructerBtnChild, styles.instructerBtnChildPosition]}
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
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/profile1.png")}
          />
        </Pressable>
        <View style={[styles.icons, styles.chatLayout]}>
          <Pressable
            style={styles.instructerBtnChildPosition}
            onPress={() => navigation.navigate("InsructerHome")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/teenyiconshomesolid3.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={[styles.chat, styles.chatLayout]}
          onPress={() => navigation.navigate("InsructerChat")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/chat1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  instructerBtnChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  welcomeUser: {
    top: 44,
    left: 12,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: "left",
    width: 157,
    height: 39,
    position: "absolute",
  },
  insructerChatChild: {
    top: 198,
    left: 62,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.silver,
    width: 140,
    height: 35,
    display: "none",
    position: "absolute",
  },
  instructerBtnChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.beige,
  },
  instructerBtnItem: {
    right: "70.31%",
    left: "29.38%",
  },
  instructerBtnInner: {
    right: "35.85%",
    left: "63.85%",
  },
  icon: {
    opacity: 0.6,
  },
  profile: {
    left: "77.23%",
    top: "34%",
    right: "16.62%",
    bottom: "26%",
  },
  icons: {
    top: "30%",
    right: "80.92%",
    bottom: "30%",
    left: "12.92%",
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
  insructerChat: {
    backgroundColor: Color.ivory,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default InsructerChat;
