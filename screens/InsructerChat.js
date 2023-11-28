import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import InstructorBottomBar from "../components/InstructorBottomBar";

const InsructerChat = (p) => {
  const navigation = useNavigation();
  const id = p.route.params.id;

  return (
    <View style={styles.insructerChat}>
      <InstructorBottomBar page={'InsructerChat'} id={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  insructerChat: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: '100%',
  },
});

export default InsructerChat;
