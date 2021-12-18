import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../constants";

const About = ({ coin }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.base,
        backgroundColor: COLORS.white,
        padding: SIZES.radius,
        borderRadius: SIZES.radius,
        ...styles.shadow,
      }}
    >
      <Text style={{ ...FONTS.h3, color: COLORS.black }}>About {coin.currency}</Text>
      <Text
        style={{
          ...FONTS.body4,
          color: COLORS.black,
          lineHeight: 18,
          marginTop: SIZES.base,
        }}
      >
        {coin.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 3,
  },
});

export default About;
