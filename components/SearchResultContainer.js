import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const SearchResultContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchResult}>
      <Pressable
        style={styles.ganpatUniversity}
        onPress={() => navigation.navigate("StGanpatUniversity")}
      >
        <Pressable
          style={styles.ganpatUniversityChild}
          onPress={() => navigation.navigate("StGanpatUniversity")}
        />
        <Text style={[styles.ganpatUniversity1, styles.universityTypo]}>
          Ganpat University
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <View style={[styles.nirmauniversity, styles.ldCollegeSpaceBlock]}>
        <Text style={styles.universityTypo}>Nirma University</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
      <Pressable
        style={styles.ldCollegeSpaceBlock}
        onPress={() => navigation.navigate("StLdCollege")}
      >
        <Text style={styles.universityTypo}>L. D. College</Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <View style={[styles.nirmauniversity, styles.ldCollegeSpaceBlock]}>
        <Text style={styles.universityTypo}>Gujarat University</Text>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  universityTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 34,
    fontSize: FontSize.size_mid,
  },
  ldCollegeSpaceBlock: {
    marginTop: 12,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    backgroundColor: Color.blanchedalmond_200,
    borderRadius: Border.br_3xs,
    height: 50,
    alignItems: "center",
    width: 300,
  },
  vectorIconLayout: {
    height: 18,
    width: 10,
  },
  ganpatUniversityChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.blanchedalmond_100,
    opacity: 0.5,
    borderRadius: Border.br_3xs,
    height: 50,
    width: 300,
    position: "absolute",
  },
  ganpatUniversity1: {
    top: 8,
    left: 21,
    position: "absolute",
  },
  vectorIcon: {
    height: "36%",
    width: "3.33%",
    top: "32%",
    right: "4.67%",
    bottom: "32%",
    left: "92%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  ganpatUniversity: {
    height: 50,
    width: 300,
  },
  vectorIcon1: {
    marginLeft: 124,
  },
  nirmauniversity: {
    justifyContent: "flex-end",
  },
  vectorIcon2: {
    marginLeft: 156,
  },
  vectorIcon3: {
    marginLeft: 114,
  },
  searchResult: {
    top: 108,
    left: 24,
    height: 236,
    alignItems: "center",
    width: 300,
    position: "absolute",
  },
});

export default SearchResultContainer;
