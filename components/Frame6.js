import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import FrameComponent1 from "Frame6";

const FrameComponent1 = ({ style }) => {
  const [frameCarouselItems, setFrameCarouselItems] = useState([
    <FrameComponent1 />,
  ]);

  return (
    <View style={[styles.parent, style]}>
      <Carousel
        style={styles.carousel}
        width={339}
        mode="normal"
        data={frameCarouselItems}
        renderItem={({ item }) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    width: 339,
    height: 160,
  },
  parent: {
    width: 339,
    height: 160,
  },
});

export default FrameComponent1;
