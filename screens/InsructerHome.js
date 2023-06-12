import * as React from "react";
import { Text, StyleSheet, View, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const InsructerHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.insructerHome}>
      <Text style={styles.welcomeUser}>Welcome user</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.studentListView} />
      <View style={styles.insructerHomeChild} />
      <ScrollView
        style={styles.listOfStudents}
        contentContainerStyle={styles.listOfStudentsContent}
      >
        <View style={[styles.student1, styles.studentLayout]}>
          <Image
            style={[styles.student1Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.student11, styles.studentTypo]}>Student 1</Text>
          <Image
            style={[styles.stroke2checkGoodYesIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/stroke-2checkgoodyes.png")}
          />
          <Image
            style={[styles.image1Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
        </View>
        <View style={[styles.student2, styles.studentLayout]}>
          <Image
            style={[styles.student2Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.student21, styles.studentTypo]}>Student 2</Text>
          <Image
            style={[styles.stroke2checkGoodYesIcon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/stroke-2checkgoodyes.png")}
          />
          <Image
            style={[styles.image1Icon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
        </View>
        <View style={[styles.student2, styles.studentLayout]}>
          <Image
            style={[styles.student2Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.student21, styles.studentTypo]}>Student 3</Text>
          <Image
            style={[styles.stroke2checkGoodYesIcon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/stroke-2checkgoodyes.png")}
          />
          <Image
            style={[styles.image1Icon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
        </View>
        <View style={[styles.student2, styles.studentLayout]}>
          <Image
            style={[styles.student2Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.student21, styles.studentTypo]}>Student 4</Text>
          <Image
            style={[styles.stroke2checkGoodYesIcon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/stroke-2checkgoodyes.png")}
          />
          <Image
            style={[styles.image1Icon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
        </View>
        <View style={[styles.student2, styles.studentLayout]}>
          <Image
            style={[styles.student2Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.student21, styles.studentTypo]}>Student 5</Text>
          <Image
            style={[styles.stroke2checkGoodYesIcon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/stroke-2checkgoodyes.png")}
          />
          <Image
            style={[styles.image1Icon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
        </View>
      </ScrollView>
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
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chat.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listOfStudentsContent: {
    flexDirection: "column",
  },
  studentLayout: {
    borderRadius: Border.br_3xs,
    height: 50,
    backgroundColor: Color.beige,
    width: 255,
  },
  childLayout: {
    height: 25,
    width: 25,
    left: 15,
    position: "absolute",
  },
  vectorIconLayout: {
    left: "7.84%",
    right: "85.88%",
    width: "6.27%",
    height: "32%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  studentTypo: {
    lineHeight: 34,
    fontSize: FontSize.size_lg,
    left: 51,
    height: 35,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    top: 19,
    position: "absolute",
  },
  iconPosition: {
    top: 17,
    height: 24,
    width: 24,
    position: "absolute",
  },
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
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
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
  vectorIcon: {
    height: "3.13%",
    width: "5.56%",
    top: "10.38%",
    right: "8.06%",
    bottom: "86.5%",
    left: "86.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  studentListView: {
    top: 148,
    left: 30,
    borderRadius: Border.br_xl,
    backgroundColor: Color.blanchedalmond_100,
    width: 291,
    height: 458,
    position: "absolute",
  },
  insructerHomeChild: {
    top: 198,
    left: 62,
    backgroundColor: Color.silver,
    width: 140,
    display: "none",
    height: 35,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  student1Child: {
    top: 18,
  },
  vectorIcon1: {
    top: "42%",
    bottom: "26%",
  },
  student11: {
    top: 13,
    width: 82,
  },
  stroke2checkGoodYesIcon: {
    left: 179,
    overflow: "hidden",
  },
  image1Icon: {
    left: 219,
  },
  student1: {
    height: 50,
    backgroundColor: Color.beige,
    width: 255,
  },
  student2Child: {
    top: 16,
  },
  vectorIcon2: {
    bottom: "30%",
    top: "38%",
  },
  student21: {
    top: 11,
    width: 93,
  },
  stroke2checkGoodYesIcon1: {
    left: 179,
    overflow: "hidden",
  },
  image1Icon1: {
    left: 219,
  },
  student2: {
    marginTop: 25,
    height: 50,
    backgroundColor: Color.beige,
    width: 255,
  },
  listOfStudents: {
    top: 185,
    left: 55,
    maxWidth: 255,
    width: 255,
    position: "absolute",
    flex: 1,
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
    left: "12.92%",
    bottom: "30%",
  },
  chat: {
    left: "43.69%",
    right: "50.15%",
    bottom: "22%",
    top: "38%",
  },
  instructerBtn: {
    top: 730,
    left: 25,
    width: 325,
    height: 50,
    position: "absolute",
  },
  insructerHome: {
    backgroundColor: Color.ivory,
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default InsructerHome;
