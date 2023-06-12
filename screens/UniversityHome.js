import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const UniversityHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.universityHome}>
      <Image
        style={styles.universityHomeChild}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text style={styles.welcomeUser}>Welcome user</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.studentListView} />
      <View style={styles.universityHomeItem} />
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
      </View>
      <View style={[styles.student3, styles.studentLayout]}>
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
      </View>
      <View style={[styles.student4, styles.studentLayout]}>
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
      </View>
      <View style={[styles.student5, styles.studentLayout]}>
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
      </View>
      <View style={[styles.universityBtn, styles.studentLayout]}>
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
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/teenyiconshomesolid.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.universityBtnChild1, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Pressable
          style={[styles.iconamoonprofileFill, styles.iconsPosition]}
          onPress={() => navigation.navigate("UniversityEdit")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/iconamoonprofilefill.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.view, styles.viewTypo]}>
        Vie
        <Text style={styles.w}>w</Text>
      </Text>
      <Text style={[styles.view1, styles.viewTypo]}>
        Vie
        <Text style={styles.w}>w</Text>
      </Text>
      <Text style={[styles.view2, styles.viewTypo]}>
        Vie
        <Text style={styles.w}>w</Text>
      </Text>
      <Text style={[styles.view3, styles.viewTypo]}>
        Vie
        <Text style={styles.w}>w</Text>
      </Text>
      <Text style={[styles.view4, styles.viewTypo]}>
        Vie
        <Text style={styles.w}>w</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  studentLayout: {
    height: 50,
    position: "absolute",
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
  viewTypo: {
    height: 41,
    width: 60,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    textDecoration: "underline",
    left: 243,
    lineHeight: 34,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  universityHomeChild: {
    top: 147,
    left: 149,
    width: 62,
    height: 59,
    position: "absolute",
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
    top: "20.5%",
    right: "47.22%",
    bottom: "76.38%",
    left: "47.22%",
  },
  studentListView: {
    top: 190,
    left: 30,
    borderRadius: Border.br_xl,
    backgroundColor: Color.blanchedalmond_100,
    width: 291,
    height: 458,
    position: "absolute",
  },
  universityHomeItem: {
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
  student1: {
    top: 227,
    width: 255,
    left: 55,
    height: 50,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
  },
  student2Child: {
    top: 16,
  },
  vectorIcon2: {
    top: "38%",
    bottom: "30%",
  },
  student21: {
    top: 11,
    width: 93,
  },
  student2: {
    top: 304,
    width: 255,
    left: 55,
    height: 50,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
  },
  student3: {
    top: 379,
    width: 255,
    left: 55,
    height: 50,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
  },
  student4: {
    top: 454,
    width: 255,
    left: 55,
    height: 50,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
  },
  student5: {
    top: 529,
    width: 255,
    left: 55,
    height: 50,
    backgroundColor: Color.beige,
    borderRadius: Border.br_3xs,
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
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  icons: {
    right: "70.49%",
    left: "22.91%",
  },
  universityBtnChild1: {
    height: "95%",
    width: "0.31%",
    top: "4%",
    right: "51.86%",
    bottom: "1%",
    left: "47.83%",
    opacity: 0.35,
  },
  iconamoonprofileFill: {
    left: "70.59%",
    right: "22.81%",
  },
  universityBtn: {
    top: 730,
    left: 24,
    width: 323,
    opacity: 0.6,
  },
  w: {
    letterSpacing: 1,
  },
  view: {
    top: 240,
  },
  view1: {
    top: 315,
  },
  view2: {
    top: 390,
  },
  view3: {
    top: 465,
  },
  view4: {
    top: 540,
  },
  universityHome: {
    backgroundColor: Color.ivory,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default UniversityHome;
